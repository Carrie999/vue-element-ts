<template>
  <div class="login-wrap">
    <img class="logo" :src="logo">
    <img class="login-bg" :src="loginBg">
    <div class="login-content">
			<p class="login-text">登录</p>
			<el-input class="my-input" v-model="input" placeholder="请输入用户名"></el-input>
			<el-input placeholder="请输入密码" v-model="input2" show-password></el-input>
			<el-button class="my-button" type="primary" @click="login">登录</el-button>
    </div>
    <div class="login-footer">
    	copyright2019@pangyajing.com
    </div>
  </div>
</template>

<script lang="ts">
import logo from '@/assets/imgs/logo.png'
import loginBg from '@/assets/imgs/login-bg.png'
import { Component, Prop, Vue } from 'vue-property-decorator';
import logo from '@/assets/imgs/logo.png'
import API from '@/api/api_user'

@Component
export default class Login extends Vue {
	public loginBg:any = loginBg
	public logo:any = logo
	public input:any = ''
	public input2:any = ''
	public login():void {
		API.login({
		 	 username:this.input,
       password:this.input2})
		.then((res)=>{
			if(res.code === 200) {
			 	this.$message({
				 	showClose: true,
				  message: '登录成功',
				  center: true,
				  type: 'success'
				});
				this.$router.push('/')
			 }else {
				 	this.$message({
					 	showClose: true,
					  message: res.message,
					  center: true,
					  type: 'error' 
				  });
			 }
		})
	}
}


</script>
</script>

<style lang="scss">
.login-wrap{
  background: #f5f6fa;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  .login-bg{
	  position: absolute;
	  right: 0;
	  height: 100%;
	}
	.logo{
	  position: absolute;	
	  top: 40px;
	  left: 35px;
	  width: 120px;
	}
	.login-content{
		width: 400px;
		height: 350px;
		position: relative;	
		left: 200px;
		top: 200px;
		.login-text{
			font-weight: bold;
			color: #344b69;
			margin-bottom: 49px;
			font-size: 18px;
		}
		.my-button{
			margin-top: 20px;
			float: right;
			width: 200px;
			 // width: 100%;
			&:hover{
				background-color: #2e87fa;
        box-shadow: 0px 11px 16.64px 0.36px rgba(74, 147, 241, 0.3);
			}
		}
	}
	.login-footer{
		font-weight: bold;
		color: #c5c8d1;
  	position: absolute;	
  	bottom:20px;
  	left:300px;
  	font-size: 12px;
 	}

}

.my-input {
	margin-bottom: 20px;
}
.el-input__inner{
  border-radius: 10px;
  border: 0;
  color: #364b65;
  font-weight: bold;
}
.el-input__inner:focus{
  box-shadow: 0px 5px 8.3px 1.7px rgba(45, 54, 90, 0.08);
}

.el-button{
	 border-radius: 10px;
}


	
</style>
