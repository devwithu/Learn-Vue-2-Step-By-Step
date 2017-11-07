Vue.component('coupon',{
  props: ['code'],
  template: `
    <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input" />

  `,
  data() {
    return {
      invalids: ['ALLFREE', 'SOMTHINGELSE']
    }
  },
  methods: {
    updateCode(code) {
      // Validation
      //if (code === 'ALLFREE') {
      if (this.invalids.includes(code)) {
        alert('This coupon is no longer valid. sorry');
        this.$refs.input.value = code = '';
        //return;
      }
      this.$emit('input', code);
    }
  }
});

new Vue({
  el: '#app',
  data: {
    coupon: 'FREEBEE'
  }
});
