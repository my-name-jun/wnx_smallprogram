//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    play:"none",
    multiArray: [['上午', '下午'], ['8:00', '9:00', '10:00', '11:00', '12:00'], ['11点', '12点']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '上午'
        },
        {
          id: 1,
          name: '下午'
        }
      ], [
        {
          id: 0,
          name: '8:00'
        },
        {
          id: 1,
          name: '9:00'
        },
        {
          id: 2,
          name: '10:00'
        },
        {
          id: 3,
          name: '11:00'
        },
        {
          id: 3,
          name: '12:00'
        }
      ], [
        {
          id: 0,
          name: '11点'
        },
        {
          id: 1,
          name: '12点'
        }
      ]
    ],
    multiIndex: [0, 2, 0],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  modalAn:function(){
    this.setData({
      play:"block"
    })
  },
  modalHidden:function(){
    this.setData({
      play: "none"
    })
  },
  submit:function()
  {
    wx.request({
      url: 'http://office.5ftech.com:30001/service/save', // 仅为示例，并非真实的接口地址
      data: {

      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  }
})
