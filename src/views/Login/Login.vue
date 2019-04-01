<template>
    <div class="login-wrap">
      <div class="title">登录</div>
      <el-form class="input-box" ref="form" :model="form" :rules="rules" label-width="0px">
        <el-form-item prop="name">
          <el-input placeholder="邮箱" prefix-icon="el-icon-mobile-phone" size="small" v-model="form.name"></el-input>
        </el-form-item >
        <el-form-item prop="password">
          <el-input placeholder="密码" prefix-icon="el-icon-mobile-phone" size="small" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="forgetPsd">
          <el-row class="remember"  type="flex" justify="space-between">
            <el-checkbox v-model="isChecked">记住我</el-checkbox>
            <a @click.prevent="toForgetPsd">忘记密码</a>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="medium" class="login-btn" @click="login()">登录</el-button>
        </el-form-item>
        <el-row class="register-now">
          或 <a @click.prevent="toRegister" style="cursor: pointer">现在注册</a>
        </el-row>
      </el-form>
    </div>
</template>
<script>


export default{
  data(){
    return{
      isChecked: false,
      form:{
        name:'',
        password:''
      },
      rules:{
        name:[
          {
            required: true,
            message:'请输入邮箱',
            trigger:'blur'
          }
        ],
        password:[
          {
            required:true,
            message:'请输入密码',
            trigger:'blur'
          }
        ]
      }
    }
  },
  methods:{
    login(){
      localStorage.setItem('aid','111');
    },
    toRegister(){
      this.$router.push({
        'path':'/register'
      })
    },
    toForgetPsd(){
      this.$router.push({
        'path':'/forgetPsd'
      });
    }
  },
  /*watch:{
    isChecked(newValue,oldValue){
      if(newValue){
        localStorage.userInfo = this.form.name
        localStorage.passwordInfo = this.form.password
      }else{
        localStorage.removeItem('userInfo')
        localStorage.removeItem('passwordInfo')
      }
    }
  }*/
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.login-wrap
  background #f0f2f5
  height 655px
  text-align center
  padding-top 50px
  .title
    padding: 0 10px;
    font-size: 20px;
    font-weight: 400;
    margin-bottom 20px
  .input-box
    width 500px
    margin 0 auto
    .forgetPsd
      width 100%
      margin-top 5px
      a
        cursor pointer
      span
        cursor pointer
        color blue
    .login-btn
      width 100%
    .register-now
      margin-top 20px
      span
        cursor pointer
        color blue
</style>
