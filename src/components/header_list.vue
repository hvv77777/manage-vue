<template>
		<div class="header">
			<Icon type="ios-cloud" class='cloudIcon' size='22' color='#ff9900'></Icon>
			<b class="black-15">{{navTitle}}</b>
			<router-link tag='span' :to='hList.Link' class='black-13' v-for='(hList,i) in headerList' >{{hList.txt}}<em class="line"></em></router-link>
			
		</div>
</template>

<script>
	export default{
		props:{
			navTitle:{
				style:String
			},
			navTitle:{
				style:String
			},
			headerList:{
				style:Array
			}
			
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>

  .header{
  	background: #dddee1;
  	margin-bottom: 10px;
  	height:40px;
  	line-height: 40px;
  	border: 1px solid #bbbec4;
  	border-radius: 2px;
  	padding-left: 20px;
  	
  }
  .line{
  	border-left: 1px solid #a3a3a3;
  	margin:0 8px;
  }
  
  .cloudIcon{
  	margin-right: 7px;
  	vertical-align: sub;
  }
  b{
  	margin-right: 10px;
  }
</style>