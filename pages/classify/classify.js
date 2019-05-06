// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab:[
      "分类一",
      "分类二",
      "分类三",
      "分类一",
      "分类二",
      "分类三"
    ],
    navItem:[
      "分屏一",
      "分屏二",
      "分屏三",
      "分屏一",
      "分屏二",
      "分屏三"
    ],
    currentTab: 0
  },

  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  } ,

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