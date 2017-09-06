<template>
	<div class="member_search">
		<list :navTitle='navTitle' :headerList='headerList'></list>
		<div class="shortcut_search">
			搜索条件：
			<Select v-model="model1" style="width:100px" class="select">
				<Option v-for="item in cityList" :value="item.value" :key="item.value">{{item.label}}</Option>
			</Select>
			<Button>潮州圈</Button>
			<Button>电梯广告</Button>
			<Button>移动广告</Button>
		</div>
	</div>
</template>

<script>
	import List from '../../components/header_list';
	export default {
		props: {},
		data() {
			return {
				navTitle: '查找会员',
				headerList: [{
					txt: '会员中心',
					Link: '/member_center'
				}, {
					txt: '会员统计',
					Link: '/member_statistics'
				}],
				cityList: [
                    {
                        value: 'qq',
                        label: 'QQ登录'
                    },
                    {
                        value: 'tel',
                        label: '手机登录'
                    }
                ],
                model1: 'qq',
			}
		},
		components: {
			List,
		}
	}
</script>

<style>
	.shortcut_search {
		border: 1px solid #FFBE7A;
		background: #FFFCED;
		border-radius: 3px;
		margin-bottom: 15px;
		padding: 10px;
	}
</style>