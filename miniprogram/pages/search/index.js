// pages/search/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        key: null,
        bookList: []
    },
    getValue: function (e) {
        // 获取输入框内容
        this.setData({ key: e.detail.value })
    },

    /**
     * 查询搜索接口，模糊查询
     */
    search: function (e) {
        console.log("查询的内容：", this.data.key);
        const db = wx.cloud.database();
        const _ = db.command;
        db.collection('bookdata').where(_.or([
            {
                // 根据标题查询
                title: db.RegExp({
                    regexp: '.*' + this.data.key + '.*',
                    options: 'i',
                })
            },
            {
                // 根据出版社查询
                public: db.RegExp({
                    regexp: '.*' + this.data.key + '.*',
                    options: 'i',
                })
            },
            {
                // 根据作者查询
                writer: db.RegExp({
                    regexp: '.*' + this.data.key + '.*',
                    options: 'i',
                })
            },
            {
                // 根据索书号查询
                bookNum: db.RegExp({
                    regexp: '.*' + this.data.key + '.*',
                    options: 'i',
                })
            }
            // 根据需求可以继续增加
        ])).get({
            success: res => {
                // console.log(res.data[0]);
                // 每次输入先将bookList初始化为空
                this.setData({ bookList: [] });
                // 搜索结果追加
                for (let index = 0; index < res.data.length; index++) {
                    this.setData({ bookList: this.data.bookList.concat(res.data[index]) });
                }
                // console.log(this.data.bookList);
                // for (let index = 0; index < this.data.bookList.length; index++) {
                //     console.log(this.data.bookList[index].title);
                // }
                var bookList = JSON.stringify(this.data.bookList);
                wx.navigateTo({
                    url: '../book/index?bookList=' + bookList
                })
            },
            fail: err => {
                console.log(err);
            }
        })
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