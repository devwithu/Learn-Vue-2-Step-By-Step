Vue.component('task', {
	template: '<li><slot></slot></li>'
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