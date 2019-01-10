<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
    <el-menu-item index="1"><a href="/" >HOME</a></el-menu-item>
    <el-menu-item index="2"><a href="/other" >Other</a></el-menu-item>
  </el-menu>
</template>

<script>
/* eslint-disable */
  export default {
    props: {
      activeIndex: {
        type: String,
        default: '1'
      },
    },
    methods: {

    }
  }
</script>
<style lang="stylus" scoped>
@import '../assets/css/xhbase'
  .head-wrap
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;


</style>
