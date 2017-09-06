const routers = [{
	path: '/',
	meta: {
		title: '红狸网'
	},
	component: (resolve) => require(['./views/index.vue'], resolve)
}, {
	path: '/member_center',
	meta: {
		title: '会员中心'
	},
	component: (resolve) => require(['./views/user/member_center'], resolve)
}, {
	path: '/member_search',
	meta: {
		title: '查找会员'
	},
	component: (resolve) => require(['./views/user/member_search'], resolve)
}, {
	path: '/member_statistics',
	meta: {
		title: '会员统计'
	},
	component: (resolve) => require(['./views/user/member_statistics'], resolve)
}, {
	path: '/member_add',
	meta: {
		title: '添加会员'
	},
	component: (resolve) => require(['./views/user/member_add'], resolve)
}, {
	path: '/member_set',
	meta: {
		title: '会员配置'
	},
	component: (resolve) => require(['./views/user/member_set'], resolve)
}, {
	path: '/manual_refer',
	meta: {
		title: '手动充值查询'
	},
	component: (resolve) => require(['./views/user/manual_refer'], resolve)
}, {
	path: '/manual_recharge',
	meta: {
		title: '手动充值列表'
	},
	component: (resolve) => require(['./views/user/manual_recharge'], resolve)
}, {
	path: '/recharge_record',
	meta: {
		title: '充值记录'
	},
	component: (resolve) => require(['./views/user/recharge_record'], resolve)
}, {
	path: '/recharge_money',
	meta: {
		title: '充值送金额'
	},
	component: (resolve) => require(['./views/user/recharge_money'], resolve)
}, {
	path: '/recharge_fortune',
	meta: {
		title: '充值送福分'
	},
	component: (resolve) => require(['./views/user/recharge_fortune'], resolve)
}, {
	path: '/consume_record',
	meta: {
		title: '消费记录'
	},
	component: (resolve) => require(['./views/user/consume_record'], resolve)
}, {
	path: '/fortune_record',
	meta: {
		title: '福分记录'
	},
	component: (resolve) => require(['./views/user/fortune_record'], resolve)
}, {
	path: '/exchange_record',
	meta: {
		title: '兑换记录'
	},
	component: (resolve) => require(['./views/user/exchange_record'], resolve)
}, {
	path: '/member_group',
	meta: {
		title: '会员组'
	},
	component: (resolve) => require(['./views/user/member_group'], resolve)
},
//{
//	path: '/member_statistics',
//	meta: {
//		title: '佣金管理'
//	},
//	component: (resolve) => require(['./views/user/member_statistics'], resolve)
//}, {
//	path: '/member_search',
//	meta: {
//		title: '晒单查看'
//	},
//	component: (resolve) => require(['./views/user/member_search'], resolve)
//},
];
export default routers;