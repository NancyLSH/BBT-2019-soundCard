<template>
  <div class="poster">
    <posterMain></posterMain>
    <div class="savetip">长按保存图片</div>
    <div class="btns">
      <div class="btn" style="margin-bottom:10%" @click="textAgain">
        <img :src="again" />
      </div>
      <div class="btn" @click="signup">
        <img :src="toSignup" />
      </div>
    </div>
    <div class="bbt">
      <img :src="bbtLogo" style="width:25%;pointer-events: none;" />
    </div>
    <div class="smoke">
      <img :src="smoke" />
    </div>
  </div>
</template>

<script>
import posterMain from "../components/poster_main";
import toSignup from "../assets/images/poster_signup_btn.png";
import again from "../assets/images/poster_again_btn.png";
import bbtLogo from "../assets/images/bbt_logo.png";
import smoke from "../assets/images/poster_somke.png";
export default {
  name: "poster",
  components: {
    posterMain: posterMain
  },
  data() {
    return {
      toSignup: toSignup,
      again: again,
      bbtLogo: bbtLogo,
      smoke: smoke
    };
  },
  methods: {
    textAgain() {
      this.$router.push("record");
    },
    signup() {
      window.location.href = "https://hemc.100steps.net/2019/anchor/recruit";
    }
  }
};
</script>

<style>
#app {
  height: 100%;
  background-color: #e5e5e3;
}
.poster {
  height: 100%;
  padding-top: 10%;
  box-sizing: border-box;
}
.poster .savetip {
  color: #7e9998;
  text-align: center;
  font-size: 4vw;
  margin: 10vw 0 9% 0;
}
.poster .btns {
  width: 70%;
  margin: auto;
}
.poster .btns .btn img {
  width: 100%;
  pointer-events: none;
}
.poster .bbt {
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 3%;
}
.poster .smoke {
  /* float: right; */
  position: absolute;
  bottom: 0;
  right: 0;
  width: 18%;
}
.poster .smoke img {
  width: 100%;
  pointer-events: none;
}
</style>