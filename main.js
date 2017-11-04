Vue.component('message', {
	props: ['title', 'body'],
	data(){
		return {
			isVisible: true
		}
	},
	template: `

		<article class="message" v-show="isVisible">
		  <div class="message-header">
		    {{ title }}
		    <button type="button" @click="hideModal">x</button>
		  </div>
		  <div class="message-body">
		  	{{ body }}
		  </div>
		</article>
	`,
	methods: {
		hideModal(){
			this.isVisible = false;
		}
	}
});

Vue.component('task-list', {
	template: ` 
				<div>
				    <task v-for="task in tasks">{{ task.task }}</task>
				</div>
			`,
	data() {
		return {
			tasks: [
				{task: 'sfsfsfssf', complete:true},
				{task: 'sfsfsfssf', complete:false},
				{task: 'sfsfsfssf', complete:true},
				{task: 'sfsfsfssf', complete:true},

			]
		}
	}
});

new Vue({
	el: '#root'
});