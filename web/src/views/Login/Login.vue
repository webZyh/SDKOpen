<template>
    <div class="login-wrap">
      <div class="title">登录</div>
      <el-form class="input-box" ref="form" :model="form" :rules="rules" label-width="0px">
        <el-form-item prop="username">
          <el-input placeholder="用户名" prefix-icon="fa fa-user-o" size="small" v-model="form.username"></el-input>
        </el-form-item >
        <el-form-item prop="password">
          <el-input placeholder="密码" prefix-icon="fa fa-key" size="small" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="forgetPsd">
          <el-row class="remember"  type="flex" justify="end">
            <!--<el-checkbox></el-checkbox>-->
            <a @click.prevent="toForgetPsd">忘记密码</a>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="medium" class="login-btn" @click="login('form')">登录</el-button>
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
      form:{
        username:'',
        password:''
      },
      rules:{
        username:[
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
    login(form){
      let {username,password} = this.form;
      let params = this.$qs.stringify({
        username,
        password
      })
      this.$refs[form].validate((valid) => {
        if(valid){
          this.$axios.post('api/login',params).then((res)=>{
            let rs = res.data;
            if(rs.code == 2){
              this.$message({
                showClose: true,
                message: `${rs.msg}`,
                type: 'error'
              })
            }else if(rs.code == 1){
              this.$message({
                showClose: true,
                message: `${rs.msg}`,
                type: 'error'
              })
            }else if(rs.code == 0){
              //将用户信息存入vuex中,并存入localStorage中
              let userInfo = rs.data;
              this.$store.dispatch('userInfo',userInfo.username);
              localStorage.setItem('userInfo', userInfo.username);

              this.$message({
                message:`${rs.msg}`,
                type:'success',
              });
              //清空输入框
              this.form.username = '';
              this.form.password = '';

              //判断是否需要跳回到路由拦截的页面
              let oldPath = this.$route.query.redirect;
              if(oldPath){
                this.$router.push({
                  path:`${oldPath}`
                })
              }else{
                this.$router.push({
                  path:'/home'
                })
              }
            }
          }).catch((err)=>{

          })
        }
      })
      // localStorage.setItem('aid','111');
//      this.$axios({
//        url:'',
//        method:'',
//        data:{
//          //post
//        },
//        params:{
//          //get
//        }
//      }).then((res)=>{
//        console.log(res);
//      }).catch((err)=>{
//        console.log(err);
//      })
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
  height 640px
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
