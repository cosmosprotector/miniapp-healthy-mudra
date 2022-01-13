// pages/mudra/mudra.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src:'../../images/overview.jpeg',
        text:'手印是修炼瑜伽时手的姿势，是用手指（或脚趾）的各种变化，配合瑜伽的体位、呼吸、冥想练习，能起到刺激手（脚）部的反射区作用。手印在瑜伽冥想和调息中具有重要的意义，不同的手印对身心影响不同，但都有助于净化心灵。手的各个部位表现身体大脑和心灵的状态。\n拇指：代表无处不在的宇宙和至高神意（自我意识）\n 食指：代表个体的心灵 （智慧智能）\n 中指：代表纯洁，智慧和平等 （挑战压力）\n 无名指：代表活力，运动，激情等（生命力）\n 小指：代表惰性，懒散，黑暗等 （交流联系和沟通）',
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
            src:'../../images/overview.jpeg',
            text:'手印是修炼瑜伽时手的姿势，是用手指（或脚趾）的各种变化，配合瑜伽的体位、呼吸、冥想练习，能起到刺激手（脚）部的反射区作用。手印在瑜伽冥想和调息中具有重要的意义，不同的手印对身心影响不同，但都有助于净化心灵。手的各个部位表现身体大脑和心灵的状态。\n拇指：代表无处不在的宇宙和至高神意（高我）\n 食指：代表个体的心灵 （智慧智能）\n 中指：代表纯洁，智慧和平等 （挑战压力）\n 无名指：代表活力，运动，激情等（生命力）\n 小指：代表惰性，懒散，黑暗等 （交流联系和沟通）',
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
            src:'../../images/wisdom.jpeg',
            text:'选择一种舒适的瑜伽坐姿坐好，双手大拇指食指轻轻相扣，另外三指自然放松伸展，掌心向上，自然垂放于双膝之上。\n\n功效：这一手印代表将自身的能量和宇宙的能量融合在一起，也意味人和自然合一。可以使人很快平静下来。提高静坐和冥想的质量。长期练习，还有恢复记忆力，治疗失眠、抑郁、昏睡等神经官能症的作用。',
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
            src:'../../images/energy.jpeg',
            text:'选择一种舒适的瑜伽坐姿坐好，将无名指，中指和大拇指自然相加，其他手指自然伸展。\n\n 功效：此手印可以排出体内的毒素，消除泌尿系统的疾病，帮助肝脏完好；调节大脑平衡；让人更有耐心，充满自信。',
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
            src:'../../images/vigor.jpeg',
            text:'选择一种舒适的瑜伽坐姿坐好，将小指和无名指同时碰触大拇指，其他手指向上竖直自然平伸。\n\n功效：提高生命力，有利于加强大脑，增强身体，提高情绪，提高反应力，减轻疲劳感，增强视力，提高免疫力和动力。增加活力，消减疲惫和紧张，并能改进视力。',
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
            src:'../../images/fluid.jpeg',
            text:'大拇指和小拇指相加，其他三指自然伸展。\n\n功效：它可以帮助我们平衡流体，改善视力以及嘴巴过干的现象。',
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
            src:'../../images/stable.jpeg',
            text:'引导词：选择一种舒适的瑜伽坐姿坐好，将大拇指和无名指交接。其余手指自然平伸。\n\n功效：如果你对你的现状不确定，这个手印帮助你找到平静和信心。\n大地手印能有效刺激体能，对皮肤和发质都有很好的调整和改善作用。改善身体状况，缓解精神衰弱，有利于排毒，提高身体机能。',
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
            src:'../../images/chan.jpeg',
            text:'选择一种舒适的瑜伽坐姿坐好，双手掌心向上，两手重叠成碗状，将大拇指尖相连，将完成姿势的手放在踝骨上。女性右脚和右手在上，男性左脚和左手在上。\n\n功效：给你专注，感受神灵。让我们更加平和和稳定，赶走消极能量，引导新鲜和积极的能量，达到阴阳平衡，可以平和内心、稳定精神。是希望灵性力量升华时经常采用的手印。他们有助于记忆力和注意力的提高，让身体更和谐。',
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
    love:function() {
        this.setData({
            src:'../../images/pray.jpeg',
            text:'选择一种舒适的瑜伽坐姿坐好，双手合十，掌心相对，大拇指相抵，指尖向上，放在胸前做成冥想的姿势，手掌之间要留下一些空间，意味着身体和心灵的合一、大自然和人类的合一。\n\n功效：人的身体是左阴右阳，双手合十，掌心相对，可使阴阳结合，有助于集中精神，活跃和协调左右脑，获得平和的心态。也表示尊敬和虔诚。',
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