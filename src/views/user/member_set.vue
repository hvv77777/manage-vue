<template>
	<div class="member-set">
		<list navTitle='查找会员' :headerList='headerList'></list>
	</div>
	
</template>

<script>
	import List from '../../components/header_list';
	export default {
		props: {},
		data() {
			return {
				headerList: [{
					txt: '会员中心',
					Link: '/member_center'
				}, {
					txt: '会员统计',
					Link: '/member_statistics'
				}],
				
			}
		},
		components: {
			List,
		}
	}
</script>

<style>
</style>