<style lang="stylus">
::-webkit-scrollbar
  width 0
::-webkit-scrollbar:horizontal
  height 0
.home
  width 100%
  height 100%
  box-sizing border-box
  color #000
</style>

<template>
  <div class="home">
    <xh-head></xh-head>
    <el-row class="mar-bottom10">
      <el-col :span="11" class="el-item pdd-10">
        <h3>你好</h3>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="scope" header-align="center" align="center" label="日期" width="180">
            <template slot-scope="scope">
              <a href="/other?id=123" style="color:blue">{{scope.row.date}}</a>
            </template>
          </el-table-column>
          <el-table-column header-align="center" align="center" prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column header-align="center" align="center" prop="address" label="地址"></el-table-column>
        </el-table>
        <feng-pagination :total="1000" @handle="handleCurrentChange" :current-page="3"></feng-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Head from '@/components/Head'
import fengPagination from '@/components/pagination'

export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  components: {
    'xh-head': Head,
    fengPagination
  },
  created() {},
  methods: {
    routerPush(type, id) {
      if (type == 'goodsInfo') {
        this.$router.push({ name: 'goodsInfo', params: { id: id } })
      } else if (type == 'create') {
        this.$router.push({ name: 'goodsCreate' })
      } else {
        this.$router.push({ name: 'goodsEditor', params: { id: id } })
      }
      return false
    },
    getGoodsData(data) {
      if (data.pageNum === 1) {
        this.currentPage = 1
      }
      this.$api.apiComPost('/product/getList', data, res => {
        if (res.code != 2000) {
          this.tableData = {
            list: [],
            total: 0
          }
          return false
        }
        this.tableData = res.data
      })
    },
    // 分页
    handleCurrentChange(val) {
      this.currentPage = val
      if (
        this.searchBtn &&
        (this.searForm.provinceId !== '' ||
          this.searForm.cityId !== '' ||
          this.searForm.districtId !== '')
      ) {
        this.searchToolbar(val)
        return false
      }
      this.getGoodsData({ pageNum: val, franchiseeId: 0 })
    }
  }
}
</script>
