Component({
  properties: {
    label: {
      type: String,
      value: '',
    },
    type: {
      type: String,
      value: 'text'
    },
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '',
    }
  },
  methods: {
    customMethod: function () {
      console.log('customMethod')
    }
  }
})