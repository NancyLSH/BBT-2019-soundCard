<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
window.onload = function() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
};
import wx from "weixin-js-sdk"
import { wxconfig } from "./API/apis";
export default {
  name: "app",
  mounted() {
    this.$router.push("index");
    wxconfig().then(res => {
      wx.config({
        debug: false,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"]
      });
      wx.ready(function() {
        wx.updateTimelineShareData({
          title: "爱上·声鉴卡",
          link: "", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: "",
          success: function() {
            console.log("success");
            // 设置成功
          }
        });
        wx.updateAppMessageShareData({
          title: "爱上·声鉴卡", // 分享标题
          desc: "", // 分享描述
          link: "", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: "", // 分享图标
          success: function() {
            console.log("success");
            // 设置成功
          }
        });
      });
    });
  },
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      // 返回主页右滑，否者左滑
      this.transitionName = !~to.path.indexOf("index")
        ? "slide-fade"
        : ~from.path.indexOf("index")
        ? "fade"
        : "fade";
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
body {
  margin: 0;
  padding: 0;
}
</style>
