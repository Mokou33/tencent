//app.js
App({
  onLaunch: function () {
    // 系统信息
    // wx.getSystemInfo({
    //   success(res) {
    //     console.log(res.brand) //设备品牌
    //     console.log(res.model) //设备型号
    //     console.log(res.pixelRatio) //设备像素比
    //     console.log(res.windowWidth) //可使用窗口宽度，单位px
    //     console.log(res.windowHeight) //可使用窗口高度，单位px
    //     console.log(res.screenWidth) //屏幕宽度，单位px
    //     console.log(res.screenHeight) //屏幕高度，单位px
    //     console.log(res.language) //语言
    //     console.log(res.version) //微信版本
    //     console.log(res.platform) //客户端平台
    //     console.log(res.statusBarHeight) // 状态栏高度，单位px
    //   }
    // })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  
})