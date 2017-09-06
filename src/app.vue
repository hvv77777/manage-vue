<style scoped>
	@import 'scss/common.scss'
	
	.layout {
		background: #f5f7f9;
		position: relative;
	}
	
	.layout-logo {
		width: 100px;
		height: 60px;
		line-height: 60px;
		color: #fff;
		font-size: 16px;
		margin-left: 30px;
	}
	
	.layout-nav {
		width: 420px;
		margin: 0 auto;
	}
	
	.layout-breadcrumb {
		padding: 10px 15px 0;
	}
	
	.layout-content {
		min-height: 200px;
		overflow: hidden;
		background: #fff;
	}
	
	.layout-content-main {
		padding: 10px;
	}
	
	.layout-menu-left {
		background: #464c5b;
	}
	
	.layout-logo-left {
		width: 90%;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		margin: 15px auto;
	}
	
	.layout,
	.layout-content,
	.sidbar-content {
		/*height: 100%*/
	}
	
	.layout-menu-left{
	}
	.navBar {
		background: #333;
	}
	.view-content{
		margin: 10px;
	}
</style>
<template>
	<div style="height: 100%;">
		<div class="layout">
			<Menu mode="horizontal" theme="dark" active-name="1" class="navBar">
				<div class="layout-logo">后台管理系统</div>
			</Menu>
			<div class="layout-content">
				<Row type="flex" class='sidbar-content'>
					<Col span="5" class="layout-menu-left">
					<Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
						<div class="layout-logo-left"></div>
						<Submenu name="1">
							<template slot="title">
								<Icon type="ios-navigate"></Icon>
								导航一
							</template>
							<MenuItem name="1-1">选项 1</MenuItem>
							<MenuItem name="1-2">选项 2</MenuItem>
							<MenuItem name="1-3">选项 3</MenuItem>
						</Submenu>
						<Submenu name="2">
							<template slot="title">
								<Icon type="ios-keypad"></Icon>
								导航二
							</template>
							<MenuItem name="2-1">选项 1</MenuItem>
							<MenuItem name="2-2">选项 2</MenuItem>
						</Submenu>
						<Submenu name="3">
							<template slot="title">
								<Icon type="ios-analytics"></Icon>
								用户管理
							</template>
								<MenuItem :name="3-i"  @click.native='userItem(user.uLink)' v-for='(user,i) in userList'>{{user.txt}}</MenuItem>
						</Submenu>
					</Menu>
					</Col>
					<Col span="19">
					<router-view class='view-content'>
					</router-view>
					</Col>
				</Row>
			</div>
		</div>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				userList: [{
					uLink: '/member_center',
					txt: '会员中心'
				}, {
					uLink: '/member_search',
					txt: '查找会员'
				}, {
					uLink: '/member_statistics',
					txt: '会员统计'
				}, {
					uLink: '/member_add',
					txt: '添加会员'
				}, {
					uLink: '/member_set',
					txt: '会员配置'
				}, {
					uLink: '/manual_refer',
					txt: '手动充值查询'
				}, {
					uLink: '/manual_recharge',
					txt: '手动充值列表'
				}, {
					uLink: '/recharge_record',
					txt: '充值记录'
				}, {
					uLink: '/recharge_money',
					txt: '充值送金额'
				}, {
					uLink: '/recharge_fortune',
					txt: '充值送福分'
				}, {
					uLink: '/consume_record',
					txt: '消费记录'
				}, {
					uLink: '/fortune_record',
					txt: '福分记录'
				}, {
					uLink: '/exchange_record',
					txt: '兑换记录'
				}, {
					uLink: '/member_group',
					txt: '会员组'
				}]
			};
		},
		mounted() {

		},
		beforeDestroy() {

		},
		methods: {
			handleStart() {
				this.$Modal.info({
					title: 'Bravo',
					content: 'Now, enjoy the convenience of iView.'
				});
			},
			userItem(link) {
				this.$router.push({
					path: link
				})
			}
		}
	};
</script>