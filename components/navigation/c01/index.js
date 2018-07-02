// components/navigation/c01/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nav:{
      type:Array,
      value: [{
        name: '医院陪护',
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        link: '../order/index?id=1'
      },
      {
        name: '挂号陪诊',
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        link: '../order/index?id=2'
      },
      {
        name: '居家陪护',
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        link: '../order/index?id=3'
      },
      {
        name: '孕幼陪护',
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        link: '../order/index?id=4'
      }]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {}
})
