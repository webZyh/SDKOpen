<template>
    <div class="table-wrapper">
      <div class="top-area" >
        <span style="margin-right: 10px;">选择日期:</span>
        <el-date-picker
          v-model="dateValue"
          type="daterange"
          align="right"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions">
        </el-date-picker>
        <span style="margin-left: 50px; margin-right: 10px;">用户:</span>
        <el-select v-model="selectValue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary">查询</el-button>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      dateValue:'',
      selectValue:'',
      options: [{
        value: '选项1',
        label: '用户1'
      }, {
        value: '选项2',
        label: '用户2'
      }, {
        value: '选项3',
        label: '用户3'
      }, {
        value: '选项4',
        label: '用户4'
      }, {
        value: '选项5',
        label: '用户5'
      }],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.table-wrapper
  padding 40px
  .top-area
    text-align center
</style>
