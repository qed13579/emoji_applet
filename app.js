//app.js
var WxEmoji = require('WxEmojiView/WxEmojiView.js');
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    WxEmoji.init("(臉)_/",{
      "00": "00.gif",
      "01": "01.gif",
      "02": "02.gif",
      "03": "03.gif",
      "04": "04.gif",
      "05": "05.gif",
      "06": "06.gif",
      "07": "07.gif",
      "08": "08.gif",
      "09": "09.gif",
      "09": "09.gif",
      "10": "10.gif",
      "11": "11.gif",
      "12": "12.gif",
      "13": "13.gif",
      "14": "14.gif",
      "15": "15.gif",
      "16": "16.gif",
      "17": "17.gif",
      "18": "18.gif",
      "19": "19.gif",
      "20": "20.gif",
      "21": "21.gif",
      "22": "22.gif",
      "23": "23.gif",
      "24": "24.gif",
      "25": "25.gif",
      "26": "26.gif",
      "27": "27.gif",
      "28": "28.gif",
      "29": "29.gif",
      "31": "31.gif",
      "32": "32.gif",
      "33": "33.gif",
      "34": "34.gif",
      "35": "35.gif",
      "36": "36.gif",
      "37": "37.gif",
      "38": "38.gif",
      "39": "39.gif",
      "40": "40.gif",
      "41": "41.gif",
      "42": "42.gif",
      "43": "43.gif",
      "44": "44.gif",
      "45": "45.gif",
      "46": "46.gif",
      "47": "47.gif",
      "48": "48.gif",
      "49": "49.gif",
      "50": "50.gif",
      "51": "51.gif",
      "52": "52.gif",
      "53": "53.gif",
      "54": "54.gif"
    });
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})