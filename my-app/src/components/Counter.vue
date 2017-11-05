<template>
  <div class="box is-info">
  	<h2>The count is: {{ count }}</h2>
  	<p>
  		<button @click="count+=10">Inc</button>
  	</p>
  </div>
</template>

<script>
export default {
	data(){
		return { count: 0 };
	}

}
</script>

<style>
	.box { background: #e3e3e3; }
</style>
