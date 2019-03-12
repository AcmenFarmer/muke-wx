// components/date/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function(newVal, oldVal, changedPath){
        let val = newVal > 10 ? newVal : '0' + newVal;
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ['一月','二月','三月',' 四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    month: '',
    year: '',
    _index: ''
  },
  /**
   * 组件生命周期
   */ 
  attached: function() {
    let date = new Date();
    let year = date.getFullYear();
    let month = this.data.months[date.getMonth()];

    this.setData({
      year,month
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
