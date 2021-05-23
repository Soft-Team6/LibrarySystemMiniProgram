// pages/book/bookinfo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        book: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var bookInfo = JSON.parse(options.bookInfo);
        // console.log(bookInfo);
        var book_input = {
            findNum: bookInfo.findNum,
            bookNum: bookInfo.bookNum,
            title: bookInfo.title,
            writer: bookInfo.writer,
            public: bookInfo.public,
            publicTime: bookInfo.publicTime,
            price: bookInfo.price,
            status: bookInfo.status
        }
        this.setData({ book: book_input });
        // console.log(this.data.book);
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