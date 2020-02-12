// pages/data/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    let now = new Date();
    now = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDay()) .padStart(2, '0')}`
    this.setData({
      endDate: now,
      start: now,
      end: now
    }, () => {
      console.log('this.endDate...1', this.data.endDate);
    })
    console.log('this.endDate...2', this.data.endDate);
  },
  changeStart(e) {
    console.log('e...', e);
    this.setData({
      start: e.detail.value
    }, () => {
      this.getDistance();
    })
  },
  changeEnd(e) {
    this.setData({
      end: e.detail.value
    }, () => {
      this.getDistance();
    })
  },
  getDistance() {
    let distance = +new Date(this.data.end) - (+new Date(this.data.start));
    console.log('distance...', distance);
    this.setData({
      distance: Math.floor(distance / 1000 / 60 / 60 / 24)
    })
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