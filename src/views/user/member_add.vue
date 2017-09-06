<template>
	<div class="member-add">
		<list :navTitle='navTitle' :headerList='headerList'></list>
		<Form ref="formValidate" :model="formValidate" :label-width="120" class="form">
			<FormItem label="昵称" prop="name" class='formItem'>
				<Input v-model="formValidate.name" placeholder="请输入昵称"></Input>
			</FormItem>
			<FormItem label="邮箱" prop="mail" class='formItem'>
				<Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
			</FormItem>
			<FormItem label="手机" prop="tel" class='formItem'>
				<Input v-model="formValidate.tel" placeholder="请输入手机"></Input>
			</FormItem>
			<FormItem label="密码" prop="psd" class='formItem'>
				<Input v-model="formValidate.psd" placeholder="请输入密码"></Input>
			</FormItem>
			<FormItem label="经验值" prop="suffer" class='formItem'>
				<Input v-model="formValidate.suffer" placeholder="请输入经验值"></Input>
			</FormItem>
			<FormItem label="积分" prop="integral" class='formItem'>
				<Input v-model="formValidate.integral" placeholder="请输入积分"></Input>
			</FormItem>
			<FormItem label="邮箱验证" prop="verify_mail" class='formItem'>
				<RadioGroup v-model="formValidate.verify_mail" class='radio'>
					<Radio label="mail">已验证</Radio>
					<Radio label="femail">未验证</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem label="手机验证" prop="verify_tel" class='formItem'>
				<RadioGroup v-model="formValidate.verify_tel" class='radio'>
					<Radio label="tel">已验证</Radio>
					<Radio label="fetel">未验证</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem label="头像" prop="avatar" class='formItem'>
				<Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/" class='imgUpload'>
					<div>
						<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
						<p>点击或将头像拖拽上传</p>
					</div>
				</Upload>
			</FormItem>
			<FormItem label="签名" prop="desc" class='formItem'>
				<Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
			</FormItem>
			<FormItem label="用户权限组" prop="limits" class='formItem'>
				<Select v-model="model1" class="select">
					<Option v-for="item in cityList" :value="item.value" :key="item.value">{{item.label}}</Option>
				</Select>
			</FormItem>
			<FormItem label="VIP转账功能" prop="Vipaccount" class='formItem'>
				<RadioGroup v-model="formValidate.Vipaccount" class='radio'>
					<Radio label="vip">是</Radio>
					<Radio label="fevip">否</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem label="秒款功能" prop="secFeature" class='formItem'>
				<RadioGroup v-model="formValidate.secFeature" class='radio'>
					<Radio label="sec">是</Radio>
					<Radio label="fesec">否</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem label="主账号UID" prop="uid" class='formItem'>
				<Input v-model="formValidate.uid" placeholder="请输入..."></Input>
			</FormItem>
			<FormItem label="登录状态" prop="loginStatus" class='formItem'>
				<RadioGroup v-model="formValidate.loginStatus" class='radio'>
					<Radio label="felogin">禁止登录</Radio>
					<Radio label="login">正常登录</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem >
					<Button type="primary" @click="handleSubmit('formValidate')" class='complete-btn'>提交</Button>
					<Button type="ghost" @click="handleReset('formValidate')" class='complete-btn'>重置</Button>
			</FormItem>
		</Form>
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
				value: '',
				cityList: [{
						value: '1',
						label: '云购新兵'
					},
					{
						value: '2',
						label: '云购少将'
					}
				],
				model1: '1',
				formValidate: {
					name: '',
					mail: '',
					psd: '',
					tel: '',
					psd: '',
					suffer: '',
					integral: '',
					verify_mail: 'mail',
					verify_tel: 'tel',
					desc: '',
					limits: '',
					Vipaccount: 'vip',
					secFeature: 'sec',
					uid: '',
					loginStatus: 'login',
				},

			}

		},
		methods: {
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if(valid) {
						this.$Message.success('提交成功!');
					} else {
						this.$Message.error('表单验证失败!');
					}
				})
			},
			handleReset(name) {
				this.$refs[name].resetFields();
			}
		},
		components: {
			List,
		}
	}
</script>

<style>
	
	.form input,
	.form textarea,
	.form .select,
	.radio,
	.imgUpload {
		width: 30%;
		margin-left: 30px;
	}
	
	.complete-btn {
		margin-left: 30px;
	}
</style>