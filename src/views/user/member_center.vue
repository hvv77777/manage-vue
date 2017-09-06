<template>
	<div>
		<list :navTitle='navTitle' :headerList='headerList'></list>
		<div class="shortcut">
			<Button>今日新增</Button>
			<Button>今日消费</Button>
			<Button>未认证</Button>
			<Button>已删除</Button> 账号绑定：
			<Select v-model="model1" style="width:100px" class="select">
				<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label}}</Option>
			</Select>
			<span>共有会员：<em class="green-13">777</em>人</span>
			<span>今日注册：<em class="red-13">7</em>人</span>
			<span>删除会员：<em class="red-13">7</em>人</span>
			<span>今日消费：<em class="red-13">7</em>人</span>
			<Button type="success">导出</Button>
		</div>
		<Table  border :columns="columns8" :data="data5"></Table>
		<Page :total="100" show-total show-elevator class='page-footer'></Page>
	</div>
</template>
<style scoped>
	.shortcut {
		border: 1px solid #FFBE7A;
		background: #FFFCED;
		border-radius: 3px;
		margin-bottom: 15px;
		padding: 10px;
	}
	
	.shortcut Button,
	.select,
	span {
		margin-right: 15px;
	}
	
	.page-footer {
		text-align: right;
		margin-top: 15px;
	}
</style>

<script>
	import List from '../../components/header_list';
	export default {
		props: {

		},
		data() {
			return {
				navTitle: '会员列表',
				headerList: [{
					txt: '查找会员',
					Link: '/member_search'
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
				columns8: [{
						title: 'ID',
						key: 'id',
						sortable: true
					},
					{
						title: '手机',
						key: 'tel'
					},
					{
						title: '金额',
						key: 'money',
						sortable: true
					},
					{
						title: '福分',
						key: 'fortune',
						sortable: true
					}, {
						title: '经验值',
						key: 'suffer',
						sortable: true
					},
					{
						title: '登录时间,地址,IP',
						key: 'address_login',
						width: 250,
					},
					{
						title: '注册时间',
						key: 'register_time',
						sortable: true
					},
					{
						title: '充值次数',
						key: 'recharge_num',
						sortable: true
					}, {
						title: '操作',
						key: 'action',
						width: 130,
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.show(params.index)
										}
									}
								}, '查看'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small'
									},
									on: {
										click: () => {
											this.remove(params.index)
										}
									}
								}, '删除')
							]);
						}
					}
				],
				data5: [{
						id: '411001',
						tel: 18,
						money: '2',
						fortune: 1,
						suffer: 1,
						address_login: '未登录,浙江省嘉兴市,125.124.17.128',
						register_time: '2016-10-03',
						recharge_num: 1
					},
					{
						id: '411002',
						tel: 25,
						money: '3',
						fortune: '4',
						suffer: 1,
						address_login: '未登录,浙江省嘉兴市,125.124.17.128',
						register_time: '2016-10-03',
						recharge_num: 1
					},
					{
						id: '411003',
						tel: 30,
						money: '5',
						fortune: '4',
						suffer: 1,
						address_login: '未登录,浙江省嘉兴市,125.124.17.128',
						register_time: '2016-10-03',
						recharge_num: 1
					},
					{
						id: '411004',
						tel: 26,
						money: '6',
						fortune: '4',
						suffer: 1,
						address_login: '未登录,浙江省嘉兴市,125.124.17.128',
						register_time: '2016-10-03',
						recharge_num: 1
					}, {
						id: '411005',
						tel: 18,
						money: '2',
						fortune: '4',
						suffer: 1,
						address_login: '未登录,浙江省嘉兴市,125.124.17.128',
						register_time: '2016-10-03',
						recharge_num: 1
					},
				]
			}
		},
		components: {
			List,
		}
	}
</script>