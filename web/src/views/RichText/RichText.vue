<template>
  <div class="container">
    <h1>TinyMce</h1>
    <el-row>
      <el-col :span="4" class="menu-container">
        menu-container
      </el-col>
      <el-col :span="20" class="tinymce-container">
        <el-row type="flex">
          <span style="line-height:40px;">文档标题：</span><el-input v-model="title"></el-input>
        </el-row>
        <el-row>
          <Tinymce v-model="content" />
        </el-row>
        <el-row>
          <el-button @click="showText">提交</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Tinymce from '../../components/Tinymce'

export default {
  name: '',
  data() { 
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    showText() {
      console.log(this.content);
    }
  },
  components: {
    Tinymce
  }
}
</script>

<style lang="stylus" scoped>
.container
  h1 
    font-size 30px
    margin 30px 0
  .el-row
    min-width 1000px
    .menu-container
      min-width 120px
    .tinymce-container
      padding 0 20px
      .el-row
        margin-bottom 20px
        .el-input
          width 200px
</style>
