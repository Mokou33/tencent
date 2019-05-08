// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    // 标记点
    markers: [{
      iconPath: '/img/icon/my1.png',
      id: 0,
      longitude: 121.318717,
      latitude: 31.092632,
      width: 40,
      height: 40
    }],
    // 路线
    polyline: [{
      // 经纬度
      points: [{
        longitude: 121.318717,
        latitude: 31.092632
      }, {
        longitude: 120.324520,
        latitude: 30.092632
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/img/icon/vip1.png',
      position: {
        left: 0,
        top: 10,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  // 视野变化执行 视野变化开始为begin，结束为end
  regionchange(e) {
    console.log(e.type)
  },

  // 点击控件时触发，会返回control的id
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})