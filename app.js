App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 登录发送给后端session
    // wx.login({
    //   success: res => {
    //     if (res.code) {
    //       wx.request({
    //         url: 'https://weixin.cxdgtm.com/api/login/weixin',
    //         data: {
    //           code: res.code
    //         },
    //         success: function (res) {
    //           console.log(res.data)
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })

    // wx.getUserInfo({
    //   success: res => {
    //     // 可以将 res 发送给后台解码出 unionId
    //     //this.globalData.userInfo = res.userInfo
    //   }
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }//,

  /**
   * 全局变量
   */
  // globalData: {
  //   userInfo: null
  // }
})