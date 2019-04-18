<template>
  <div class="register-wrap">
    <h3 class="title">注册</h3>
    <el-form status-icon :model="registerForm" ref="registerForm" :rules="rules" label-width="80px" class="content">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPsd">
        <el-input type="password" v-model="registerForm.checkPsd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-checkbox v-model="isChecked">我已阅读</el-checkbox>
          <a @click.prevent="">《服务协议》</a>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" class="login-btn" @click="register('registerForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.checkPsd !== '') {
            this.$refs.registerForm.validateField('checkPsd');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        isChecked: true,
        timer: '',
        registerForm: {
          username: '',
          password: '',
          checkPsd: '',
        },
        rules: {
          username: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            }
          ],
          password: [
            {
              validator: validatePass,
              required: true,
              trigger: 'blur'
            }
          ],
          checkPsd: [
            {
              validator: validatePass2,
              required: true,
              trigger: 'blur'
            }
          ],
        }
      }
    },
    methods: {
      register(registerForm) {
        let {username, password, checkPsd} = this.registerForm;
        let params = this.$qs.stringify({   //转化成form传参
          username,
          password
        })
        //判断是否输入
        this.$refs[registerForm].validate((valid) => {
          console.log(valid);
          if (valid) {  //输入不为空
            if (!this.isChecked) {
              this.$alert('请阅读服务协议并同意', '', {
                confirmButtonText: '确定',
                showClose: false
              });
            } else {
              this.$axios.post('/api/register', params).then((res) => {
                console.log(res);
                if (res.data.code == 1) {
                  this.$message({
                    showClose: true,
                    message: '该用户已注册',
                    type: 'error'
                  });
                  //清空输入框
                  this.registerForm.username = '';
                  this.registerForm.password = '';
                  this.registerForm.checkPsd = '';

                } else if (res.data.code == 0) {
                  this.$message({
                    message: '注册成功，请登录',
                    type: 'success'
                  });
                  //清空输入框
                  this.registerForm.username = '';
                  this.registerForm.password = '';
                  this.registerForm.checkPsd = '';
                  this.timer = setTimeout(() => {
                    this.$router.push({
                      'path': '/login'
                    })
                  }, 500)
                }
              }).catch((err) => {
                console.log(err);
              })
            }
          }
        });
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer);
    },
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
