<template>
	<div class="member-statistics">
		<list :navTitle='navTitle' :headerList='headerList'></list>
		<div class="shortcut_statis">
			<Row class='date-search'>
				<Col span="12">
				<DatePicker type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
				至
				<DatePicker type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
				</Col>
			</Row>
		</div>
		<Table height="200" :columns="columns1" :data="data1"></Table>
	</div>
</template>

<script>
	import List from '../../components/header_list';
	export default {
		data() {
			return {
				navTitle: '会员统计',
				headerList: [{
					txt: '查找会员',
					Link: '/member_search'
				}, {
					txt: '会员统计',
					Link: '/member_statistics'
				}],
				 columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
			}
		},
		components: {
			List,
		}
	}
</script>

<style>
	.shortcut_statis {
		border: 1px solid #FFBE7A;
		background: #FFFCED;
		border-radius: 3px;
		margin-bottom: 15px;
		padding: 10px;
	}
	.date-search{
	}
</style>