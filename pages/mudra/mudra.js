// pages/mudra/mudra.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src:'.../images/handenergy.jpeg',
        overview:'active',
        wisdom:'inactive',
        energy:'inactive',
        vigor:'inactive',
        fluid:'inactive',
        stable:'inactive',
        chan:'inactive',
        lovegrateful:'inactive'
        
    },

    // 单击概述按钮的效果
    overview:function(){
        this.setData({
            src:'.../images/handenergy.jpeg',
            overview:'active',
            wisdom:'inactive',
            energy:'inactive',
            vigor:'inactive',
            fluid:'inactive',
            stable:'inactive',
            chan:'inactive',
            lovegrateful:'inactive'
        })
        
    },

    wisdom: function(){
        this.setData({
            src:'.../images/wisdom.jpeg',
            overview:'inactive',
            wisdom:'active',
            energy:'inactive',
            vigor:'inactive',
            fluid:'inactive',
            stable:'inactive',
            chan:'inactive',
            lovegrateful:'inactive'
        })
        
        
    },

    energy:function() {
        this.setData({
            src:'.../images/energy.jpeg',
            overview:'inactive',
            wisdom:'inactive',
            energy:'active',
            vigor:'inactive',
            fluid:'inactive',
            stable:'inactive',
            chan:'inactive',
            lovegrateful:'inactive'
        })
        
        
    },

    vigor:function() {
        this.setData({
            src:'.../images/vigor.jpeg',
            overview:'inactive',
            wisdom:'inactive',
            energy:'inactive',
            vigor:'active',
            fluid:'inactive',
            stable:'inactive',
            chan:'inactive',
            lovegrateful:'inactive'
        })
        
    },
    fluid:function() {
        this.setData({
            src:'.../images/fluid.jpeg',
            overview:'inactive',
            wisdom:'inactive',
            energy:'inactive',
            vigor:'inactive',
            fluid:'active',
            stable:'inactive',
            chan:'inactive',
            lovegrateful:'inactive'
        })
        
        
    },
    stable:function() {
        this.setData({
            src:'.../images/stable.jpeg',
            overview:'inactive',
            wisdom:'inactive',
            energy:'inactive',
            vigor:'inactive',
            fluid:'inactive',
            stable:'active',
            chan:'inactive',
            lovegrateful:'inactive'
        })
        
        
    },
    chan:function() {
        this.setData({
            src:'.../images/chan.jpeg',
            overview:'inactive',
            wisdom:'inactive',
            energy:'inactive',
            vigor:'inactive',
            fluid:'inactive',
            stable:'inactive',
            chan:'active',
            lovegrateful:'inactive'
        })
        
        
    },
    lovegrateful:function() {
        this.setData({
            src:'.../images/pray.jpeg',
            overview:'inactive',
            wisdom:'inactive',
            energy:'inactive',
            vigor:'inactive',
            fluid:'inactive',
            stable:'inactive',
            chan:'inactive',
            lovegrateful:'active'
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