<template>
  <div class="register-wrap">
    <h3 class="title">注册</h3>
    <el-form status-icon :model="registerFrom" ref="registerFrom" :rules="rules" label-width="80px" class="content">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerFrom.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="registerFrom.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="registerFrom.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-checkbox v-model="isChecked">我已阅读</el-checkbox>
          <a @click.prevent="">《服务协议》</a>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" class="login-btn" @click="">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default{
    data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerFrom.checkPass !== '') {
            this.$refs.registerFrom.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerFrom.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return{
        isChecked:true,
        registerFrom:{
          email:'',
          pass:'',
          checkPass:'',
        },
        rules:{
          email:[
            {
              required: true,
              message:'请输入邮箱',
              trigger:'blur'
            }
          ],
          pass: [
            {
              validator: validatePass,
              required:'true',
              trigger: 'blur'
            }
          ],
          checkPass: [
            {
              validator: validatePass2,
              required: true,
              trigger: 'blur'
            }
          ],
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .register-wrap
    background #f0f2f5
    height 640px
    text-align center
    padding-top 50px
    .title
      padding: 0 10px;
      font-size: 20px;
      font-weight: 400;
      margin-bottom 20px
    .content
      width 500px
      margin 0 auto
  button
    width 100%
    margin-top 20px
</style>
