// pages/book/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        book: [],
        bookList: []
    },
    /**
     * 点击跳转图书详情页面
     */
    onTap: function (e) {
        var index = e.currentTarget.id;
        // console.log(e);
        // console.log(index);
        var bookInfo = JSON.stringify(this.data.bookList[index]);
        // console.log(bookInfo);
        wx.navigateTo({
            url: '../book/bookinfo?bookInfo=' + bookInfo
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var bookList = JSON.parse(options.bookList);
        this.setData({ bookList: bookList });
        // console.log(bookList);
        this.setData({ book: [] });
        for (let index = 0; index < bookList.length; index++) {
            var bookNum = bookList[index].bookNum;
            var bookTitle = bookList[index].title;
            var bookWriter = bookList[index].writer;
            var bookPublic = bookList[index].public;
            var bookDict = {
                bookNum: bookNum,
                title: bookTitle,
                writer: bookWriter,
                public: bookPublic
            }
            this.setData({ book: this.data.book.concat(bookDict) });
        }
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