<template>

  <div id="home-wrap">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Header from '@/components/Head'
export default {
  name: 'ibuleng',
  components: {
    'sheader': Header
  }
}
</script>

<style lang="stylus">
 #home-wrap
  width 100%
  height 100%
</style>
