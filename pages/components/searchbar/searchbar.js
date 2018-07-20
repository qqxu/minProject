Component({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  methods: {
    showInput: function () {
      this.setData({
          inputShowed: true
      });
    },
    hideInput: function () {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
      this.triggerEvent('clearResults', { inputVal: "" })
    },
    clearInput: function () {
      this.setData({
          inputVal: ""
      });
      this.triggerEvent('clearResults', { inputVal: "" })
    },
    inputTyping: function (e) {
      this.setData({
        inputVal: e.detail.value
      });
      this.triggerEvent('clearResults', { inputVal: e.detail.value })
    },
    bindconfirm: function (e) {
      this.triggerEvent('onSearch', { inputVal: e.detail.value })
    }
  }
});