// pages/search/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        input_text_value: null,
        input_text_lenth: 0
    },

    /**
     * 获取输入框里的内容
     */
    input_text: function (e) {
        console.log(e);
        /**
         * 获取输入的值
         */
        this.setData({ input_text_value: e.detail.value });
        console.log(this.data.input_text_value);

        /**
         * 获取输入的值的长度
         */
        this.setData({ input_text_lenth: e.detail.cursor });
        console.log(this.data.input_text_lenth);

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