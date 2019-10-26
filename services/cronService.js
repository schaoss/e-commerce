const express = require('express')
const CronJob = require('cron').CronJob
const moment = require('moment')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const db = require('../models')
const { User, Coupon, CouponDistribution } = db

const cronService = {

  sendBirthdayCoupon: function () {
    // 每天 0 時執行
    try {
      new CronJob('* * 0 * * *', async function () {
        // 取得現在時間
        let now = moment()
        let nowYear = moment(now).year()
        let nowMonth = moment(now).month()
        let nowDate = moment(now).date()

        // 取得所有使用者資料
        let users = await User.findAll().then(users => {
          return users
        })

        for (let i = 0; i < users.length; i++) {
          // 取得使用者生日的月份與日期
          let userBirthdayMonth = moment(users[i].birthday).month()
          let userBirthdayDate = moment(users[i].birthday).date()

          // 計算使用者生日與今天的距離
          let nowTime = moment([nowYear, nowMonth, nowDate])
          let userBirthday = moment([nowYear, userBirthdayMonth, userBirthdayDate])
          let diff = userBirthday.diff(nowTime, 'days')

          // 若使用者的生日距今天一週（7 days），則建立並發送 Birthday Coupon
          if (users[i].role) {
            if ((diff > 0 && diff <= 7) || (diff <= -358)) {
              cronService.createAndSendCoupon(users[i].id)
            }
          }

        }
      }, null, true, 'Asia/Taipei')
    }
    catch (err) {
      console.log(`sendBirthdayCoupon 執行失敗。Err: ${err}`)
    }
  },

  createAndSendCoupon: async function (userId) {
    try {
      // 檢查今年是否已經發過 Birthday Coupon 給該使用者
      let checkResult = await CouponDistribution.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Coupon,
            where: { name: 'Birthday Coupon' }
          }],
        order: [['createdAt', 'DESC']]
      }).then(distributions => {
        let nowYear = moment().year()
        if (nowYear === moment(distributions[0].createdAt).year()) {
          return true
        } else {
          return false
        }
      }).catch(err => {
        return false
      })

      // 建立新的 Birthday Coupon
      if (!checkResult) {

        // 建立 coupon 序號
        let sn = Date.now()
        sn = 'HBD' + Math.random().toString(36).slice(-4) + sn
        sn = sn.toUpperCase()

        // 建立新的 Birthday Coupon
        await Coupon.create({
          name: 'Birthday Coupon',
          sn: sn,
          discount: 25,
          numberOfLimitation: 1,
          expireDate: moment().add(1, 'M'),
          amount: 0,
          dataStatus: 1
        }).then(coupon => {

          // 發送新的 Birthday Coupon
          return CouponDistribution.create({
            CouponId: coupon.id,
            UserId: userId,
            usageStatus: 1
          }).then(() => {
            console.log(`成功建立並發送 Birthday Coupon 給使用者 ${userId} `)
          }).catch(err => {
            console.log(`發送 Birthday Coupon 給使用者  ${userId} 失敗。Err: `, err)
          })
        }).catch(err => {
          console.log(`建立 Birthday Coupon 給使用者 ${userId} 失敗。Err: `, err)
        })
      } else {
        console.log(`今年已發送 Birthday Coupon 給使用者 ${userId}`)
      }
    }
    catch (err) {
      console.log(`建立並發送 Birthday Coupon 給使用者  ${userId} 失敗。Err: `, err)
    }
  },

  deleteInvalidUser: function () {
    // 每天 0 時執行
    try {
      new CronJob('* * 0 * * *', async function () {

        // 找出帳號建立時間為一天前、尚未通過驗證的使用者
        let users = await User.findAll({
          where: {
            isValid: false,
            createdAt: {
              [Op.lt]: moment().subtract(1, 'days')
            }
          }
        })

        // 從資料庫中刪除使用者
        for (let i = 0; i < users.length; i++) {
          User.findByPk(users[i].id).then(user => {
            user.destroy().then(() => {
              console.log(`刪除使用者 ${users[i].id} ${users[i].email} 成功`)
            }).catch(err => {
              console.log(`刪除使用者 ${users[i].id} 失敗。Err: ${err}`)
            })
          })
        }
      }, null, true, 'Asia/Taipei')
    }
    catch (err) {
      console.log(`deleteInvalidUser 執行失敗。Err: ${err}`)
    }
  },

  deleteExpiredCoupon: function () {
    try {
      // 每天 0 時執行
      new CronJob('* * 0 * * *', async function () {

        // 尋找過期 coupons
        let coupons = await Coupon.findAll({
          where: {
            dataStatus: 1,
            expireDate: {
              [Op.lt]: moment()
            }
          }
        })

        // 刪除過期 coupons
        for (let i = 0; i < coupons.length; i++) {
          await Coupon.findByPk(coupons[i].id).then(coupon => {
            coupon.update({
              dataStatus: 0
            }).then(coupon => {
              console.log(`刪除過期 coupon (id: ${coupons[i].id}) 成功`)
            }).catch(err => {
              console.log(`刪除過期 coupon (id: ${coupons[i].id}) 失敗。Err: ${err}`)
            })
          })
        }
      }, null, true, 'Asia/Taipei')
    }
    catch (err) {
      console.log(`deleteExpiredCoupon 執行失敗。Err: ${err}`)
    }
  }
}

module.exports = cronService