<style lang="stylus">
@import '../../assets/css/xhbase'
</style>

<template>
  <div class="other-page">
    <xh-head activeIndex="2"></xh-head>
    <section class="author-head">
      <span>是现令啊7～</span>
    </section>
  </div>
</template>

<script>
import Head from '@/components/Head'
/* eslint-disable */
export default {
  data() {
    return {
      id:this.$route.query.id
    };
  },
  components: {
    "xh-head": Head
  },
  computed: {},
  created() {


  },
  mounted() {},
  methods: {
    openApp() {
      var isIos = navigator.userAgent.match(/iPhone|iPad|iPod/i);
      var url = isIos ? "xianghalink://" : "xiangha://welcome?";
      url += "showWeb.app?url=" + encodeURIComponent(location.href);
      var h5CallApp = new window.callApp();
      h5CallApp.init({
        appUrl: url,
        waitTime: 3000,
        downLoadUrl: ""
      });
    }
  }
};
</script>
