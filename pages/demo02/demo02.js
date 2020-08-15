// pages/demo02/demo02.js
Page({
  data: {
    html: '<div class="view1">123木头人</div>',
    html2: [
      {
        name: 'div',
        attrs: {
          class: 'view1'
        },
        children: [
          {
            name: 'p',
            attrs: {},
            children: [{
              type: 'text',
              text: 'hello'
            }]
          }
        ]
      }
    ]
  }
})