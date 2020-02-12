//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navlist:['首页','年月日','日子','静思','关于'],
    birthday: 0,
    year: 0,
    month: 0,
    distance: 0,
    end: '',
    percent: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  onShow() {
    // 统一在这里发起网络请求和一些初始化的工作
    let now = new Date();
    this.setData({
      end: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
    })
  },
  changeBirthday(e) {
    console.log('e...', e);
    let value = e.detail.value.split('-');
    let distance = this.getDistanceMonth(e.detail.value, this.data.end);

    this.setData({
      birthday: e.detail.value,
      year: value[0],
      month: value[1],
      distance,
      percent: (distance / 9).toFixed(0)
    })
  },
  getDistanceMonth(pre, now) {
    let preArr = pre.split('-'),
      nowArr = now.split('-');
    return Number((nowArr[0] - preArr[0]) * 12) + Number(nowArr[1] - preArr[1])
  },
  clear() {
    let now = new Date();
    this.setData({
      birthday: 0,
      month: String(now.getMonth() + 1).padStart(2, '0'),
      year: now.getFullYear(),
      distance: 0
    })
  }
})
