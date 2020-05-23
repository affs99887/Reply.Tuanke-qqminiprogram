const app = getApp();
// const db = wx.cloud.database({});
// const cont = db.collection('tuanke');
wx.cloud.init({})
Page({
  onLoad: function(options) {
    
    var myThis = this;

    wx.request({
      url: 'https://www.scape0goat.xyz:8443/dd/JavaApi?rnum=1',
      dataType: 'json',
      method:'post',
      timeout: 10000,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        console.log(res.data);
        myThis.setData({
          bannerData: res.data.reverse(),
        })
      },
      fail:function(res){
        console.log(".....fail.....");
      }
    })

    wx.hideToast()
  },


  onShareAppMessage: function() {
    return {
      title: '请回答.团课',
      imageUrl: 'http://47.93.27.92/pics/20200218162823.png'
    }
  },


  /**
   * 页面的初始数据
   */
  data: {
    logo: '../../assets/icon-logo.png',
    iconFlag: '../../assets/icon-flag.png',
    copyrightText: 'nunu & dudu',
    statusBarHeight: app.globalData.statusBarHeight,
    bannerCurrent: 0, // 当前显示的banner
    mydata: app.globalData.mydata,
    bannerData: [
      // {
      //   'id': 1, 'focus': 'http://47.93.27.92/pics/mmexport1582005965630.jpg', 'img': 'http://47.93.27.92/pics/mmexport1582005942640.jpg', 'title': '2019 . 2', 'week': '第一周', 'weekeng': 'Week 1', 'isOpenFilp': false, 'lines1': '1-5\n\n B -AD- C D B', 'lines2': '6-10\n\n A -ABC- C B A','score': '7.6', 'releaseDate': '2020/02/17', 'otherInfo': '泰戈尔 《生如夏花》', 'sentences': '生如夏花之绚烂，死如秋叶之静美。' },
      // {
      //   'id': 2, 'focus': 'https://www.duoguyu.com/dist/flip/flipImg-2.jpg', 'img': 'https://www.duoguyu.com/dist/flip/flipImg-s2.jpg', 'title': '我不是药神', 'isOpenFilp': false, 'lines': '你是不是看不起我？ \n\n是…以前是…', 'score': '9.0', 'releaseDate': '2018/07/05', 'otherInfo': 'Dying to Survive'  },
      // { 'id': 3, 'focus': 'https://www.duoguyu.com/dist/flip/flipImg-3.jpg', 'img': 'https://www.duoguyu.com/dist/flip/flipImg-s3.jpg', 'title': '风语咒', 'isOpenFilp': false, 'lines': '人法地法天法道法自然，传说中的神功根本就不是练出来的，人与自然本就是一体的。\n\n我即是自然，自然即是我。\n我在驭风，风在驭我。', 'score': '6.9', 'releaseDate': '2018/08/03', 'otherInfo': 'The Wind Guardians' },
      // { 'id': 4, 'focus': 'https://www.duoguyu.com/dist/flip/flipImg-4.jpg', 'img': 'https://www.duoguyu.com/dist/flip/flipImg-s4.jpg', 'title': '飞驰人生', 'isOpenFilp': false, 'lines': '巴音布鲁克，1462道弯，109公里。耍小聪明，赢得了一百米，赢不了一百公里。\n\n你问我绝招？\n绝招只有两个字：奉献。\n就是把你的全部奉献给你所热爱的一切。\n你并不是征服了这片土地，你只是战胜了你的对手。', 'score': '7.2', 'releaseDate': '2019/02/05', 'otherInfo': 'Pegasus'  },
      // {
      //   'id': 5, 'focus': 'https://www.duoguyu.com/dist/flip/flipImg-5.jpg', 'img': 'https://www.duoguyu.com/dist/flip/flipImg-s5.jpg', 'title': '大黄蜂', 'isOpenFilp': false, 'lines': '"You kissed me!" \n"On the cheek."\n"Still counts, still counts."', 'score': '7.0', 'releaseDate': '2019/01/04', 'otherInfo': 'Bumblebee'  },
    ],
  },


  // bannerSwiper
  bannerSwiper(e) {
    const that = this,
      bannerCurrent = e.detail.current;
    that.setData({
      bannerCurrent
    })
  },

  // 卡牌切换
  switchFlip: function(e) {
    const that = this;
    const index = e.currentTarget.dataset.index;
    const bannerData = that.data.bannerData;
    const isOpenFilp = that.data.bannerData[index].isOpenFilp ? false : true;
    bannerData[index].isOpenFilp = isOpenFilp;
    that.setData({
      bannerData
    });

    // wx.cloud.init({
    //   env: 'scape0goat-8c1ce6',
    //   traceUser: true
    // });

    // const db = wx.cloud.database();

    // db.collection('signup').get({
    //   success: function (res) {
    //     // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
    //     console.log(res.data)
    //   }
    // })

  }
})