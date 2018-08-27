//index.js
//获取应用实例
const app = getApp()

Page({
  gotry: function (object) {
    wx.navigateTo({
      url: '/pages/try/try',
    })
  },
  goset: function (object) {
    wx.navigateTo({
      url: '/pages/set/set',
    })
  },

  
})
