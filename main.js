Vue.component('coupon', {
	template: '<input placeholder="Enter your coupon number" @blur="onCouponApplied">',
	methods: {
		onCouponApplied(){
			this.$emit('applied');
		}
	}
});

new Vue({
	el: '#root',
	data: {
		couponApplied: false
	},
	methods: {
		onCouponApplied(){
			this.couponApplied = true;


		}
	}
});

