// pages/login/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    isTrue: function () {
        let key = this.data.inputText;
        const db = wx.cloud.database();
        const _ = db.command;
        //查询
        db.collection('集合名').where(_.or([
            {
                属性名: _.eq(搜索框输入的值)  //eq为等于
            },
            {
                属性名: _.eq(搜索框输入的值)
            },
            {
                属性名: _.eq(搜索框输入的值)
            },
            //根据属性数量继续增加条件，将一个集合中的全部属性与搜索框输入的值比较
        ]))
            .get({
                success: function (res) {
                    console.log(res.data)
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