<template>
  <div class="register-wrap">
    <div class="title">忘记密码</div>
    <div class="content">
      <div class="input-box">
        <div>
          <div class="inp-key">
            <i class="fill">*</i>
            <span>输入邮箱:</span>
          </div>
          <div class="inp-text">
            <el-input v-model="email" size="small" placeholder="请输入正确的邮箱格式"></el-input>
          </div>
        </div>
        <p class="tip" v-show="!email">请输入您的邮箱!</p>
      </div>
      <div class="input-box">
        <div>
          <div class="inp-key">
            <i class="fill">*</i>
            <span>输入密码:</span>
          </div>
          <div class="inp-text">
            <el-input v-model="psd" size="small" placeholder="请输入6-18位字母和数字组成的密码"></el-input>
          </div>
        </div>
        <p class="tip" v-show="!psd">请输入6-16位数的密码!</p>
      </div>
      <div class="input-box">
        <div>
          <div class="inp-key">
            <i class="fill">*</i>
            <span>再次输入密码:</span>
          </div>
          <div class="inp-text">
            <el-input v-model="againPsd" size="small" placeholder="请再次输入设置的密码"></el-input>
          </div>
        </div>
        <p class="tip" v-show="!againPsd">请再次输入密码!</p>
      </div>
      <el-row>
        <el-button type="primary" size="medium" class="register-btn">提交</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        email:'',
        psd:'',
        againPsd:'',
        checked:true
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .register-wrap
    background #f0f2f5
    height 655px
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
      .input-box
        width 100%
        height 70px
        .tip
          color #f5222d
          font-size 14px
          margin-bottom 20px
        &>div
          display flex
          margin-bottom 4px
          .inp-key
            width 120px
            text-align right
            margin-right 10px
            line-height 32px
            .fill
              color red
              vertical-align middle
          .inp-text
            flex 1
      .register-btn
        width 90%
        margin-top 20px
</style>

