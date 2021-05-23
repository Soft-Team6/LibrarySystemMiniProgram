// pages/login/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userId: null,
        password: null
    },
    getId: function (e) {
        // 获取输入框内容
        this.setData({ userId: parseInt(e.detail.value) })
    },
    getPassword: function (e) {
        // 获取输入框内容
        this.setData({ password: parseInt(e.detail.value) })
    },
    onTap: function () {
        const db = wx.cloud.database();
        const _ = db.command;
        var userId = this.data.userId;
        var password = this.data.password;
        var app = getApp();
        app.globalData.userId = userId;
        if (this.data.userId == null || this.data.password == null) {
            wx.showModal({
                title: '温馨提示：',
                content: '用户名或密码不能为空！',
                showCancel: false
            })
        } else {
            db.collection('userInfo').where(({
                userId: _.eq(userId)
            })).get({
                success: function (res) {
                    // console.log(res);
                    // console.log(res.data[0].passWord);
                    if (res.data.length == 0) {
                        wx.showModal({
                            title: '温馨提示：',
                            content: '学号/工号错误'
                        })
                    }
                    else {
                        if (password == res.data[0].passWord) {
                            wx.switchTab({
                                url: '../index/index'
                            })
                        }
                        else {
                            wx.showModal({
                                title: '温馨提示：',
                                content: '密码错误'//session中用户名和密码不为空触发
                            })
                        }
                    }
                },
                fail: function (err) {
                    console.log(err);
                }
            })
        }
    },
    guestTap: function () {
        var app = getApp();
        app.globalData.userId = 'guest';
        // console.log(app.globalData.userId);
        wx.switchTab({
            url: '../index/index'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var app = getApp();
        app.globalData.userId = null;
        this.setData({ password: null })
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