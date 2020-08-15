// pages/demo03/demo03.js
Page({
  data: {
    gender: '',
    list: [
      {
        name: '🥑',
        value: '木瓜'
      },
      {
        name: '🍒',
        value: '樱桃'
      },
      {
        name: '🍍',
        value: '菠萝'
      }
    ],
    checklist: []
  },
  handleChange(e) {
    this.setData({
      gender: e.detail.value
    })
  },
  handleChangeCheckbox(e) {
    this.setData({
      checklist: e.detail.value
    })
  }
})