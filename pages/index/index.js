//index.js
//获取应用实例
const app = getApp()
const { appkey, prefix } = require('../../services/index.js');
Page({
   /**
   * 页面的初始数据
   */
  data: {
    info: {},
    searchResult: [],
    noData: false,
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
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

  },
  clearResults: function () {
    this.setData({
      searchResult: [],
      noData: false
    })
  },
  onSearch: function ({ detail }) {
    let self = this;
    const { inputVal } = detail
    if (inputVal) {
      wx.request({
        url: `${prefix}chengyu/search`,
        method: 'GET',
        data: {
           keyword: inputVal ,
           appkey: appkey,
        },
        success: function({ data }) {
          let searchResult = data.result ? data.result : [];
          self.setData({
            noData: searchResult.length === 0,
            searchResult,
          })
        },
        fail: function (msg) {
          console.log(msg)
        }
      })
    }
  },
})
