<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    this.$router.push("index");
  },
  data(){
    return{
      transitionName:''
    }
  },
  watch: {
    $route(to, from) {
      // 返回主页右滑，否者左滑
      this.transitionName = !~to.path.indexOf("index")
        ? "slide-fade"
        : ~from.path.indexOf("entry")
        ? "fade"
        : "slide-fade";
    }
  }
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter {
  opacity: 0;
}
body{
  margin: 0;
  padding: 0;
}
</style>
