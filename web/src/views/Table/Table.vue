<template>
    <div class="table-wrapper">
      <div class="top-area" >
        <span style="margin-right: 10px;">选择日期:</span>
        <el-date-picker
          v-model="dateValue"
          type="daterange"
          align="center"
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
      <div class="content">
        <el-table
          :data="tableData"
          border
          style="width: 100%;margin-bottom: 20px;"
          class="table">
          <el-table-column
            fixed
            prop="date"
            label="日期"
            align="center"
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            align="center">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            align="center">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300"
            align="center">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            align="center">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            align="center">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            align="center">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            align="center">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            align="center">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            align="center">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            align="center">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            align="center">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            align="center"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          background
          layout="prev, pager, next"
          :total="100"
          class="pagination">
        </el-pagination>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      dateValue:'',
      selectValue:'',
      options: [
        {
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
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.table-wrapper
  padding 20px 40px 80px 40px
  .top-area
    text-align center
    min-width 1000px
    margin-bottom 30px
  .content
    text-align center
    .pagination
      width 100%
</style>
