
var WxEmoji = require('../../WxEmojiView/WxEmojiView.js');
//index.js
//{}{}sdsdsa{[sdsAsdsadsdsdsadsadsasdsdsdsd sdfsdfsdsdsdsd]}}
var temTextArea;
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    display: "none"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
    var that = this
    WxEmoji.bindThis(this);
    
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  WxEmojiTextareaFocus:function(e) {
    // console.log(e)
    var that = this;
    WxEmoji.WxEmojiTextareaFocus(that,e);
    that.setData({
      display:"none"
    })
  },
  show:function(){
    var that = this;
    that.data.display == "inline - flex" ?
     that.setData({
      display: "none"
    }) : that.setData({
      display: "inline - flex"
    })
  },
e:function(e){
     console.log(e)
},
  WxEmojiTextareaBlur:function(e){
    
    var that = this;
    WxEmoji.WxEmojiTextareaBlur(that,e);
  },
  wxPreEmojiTap: function(e){
    var that = this;
    WxEmoji.wxPreEmojiTap(that,e);
  },
  testBlur: function(e){
    var temObjs = {};
    var that = this;
    temObjs.showWxEmojiChooseView = 1;
    temObjs.textAreaText = e.detail.value;
    
    that.setData({
      WxEmojiObjs:temObjs
    });
  }
})
