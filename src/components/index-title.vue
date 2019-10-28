<template>
  <div class="title">
    <div class="con">
      <div class="titleBg">
        <img :src="center" />
      </div>
      <div class="maple">
        <div class="item">
          <img :src="left" />
        </div>
        <div class="item" style="flex-direction:row;">
          <img :src="right" />
        </div>
      </div>
      <div class="mapleForSmoke maple">
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import center from "../assets/images/index_title.png";
import left from "../assets/images/index_title_left.png";
import right from "../assets/images/index_title_right.png";
export default {
  name: "headtitle",
  data() {
    return {
      center: center,
      left: left,
      right: right
    };
  }
};
</script>

<style>
.title {
  position: relative;
}
.title .con {
  margin-top: 11%;
}

.titleBg,
.titleBg img {
  width: 100%;
}
.title .maple {
  width: 100%;
  position: absolute;
  margin-top: 11%;
  background-color: transparent;
  top: 0;
  left: 0;
  height: 23.5vw;
  display: flex;
  justify-content: space-between;
}
.title .maple .item {
  width: 60%;
  height: 99%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  animation: bg 0.9875s linear;
  animation-fill-mode: forwards;
}
.title .maple .item img {
  height: 66%;
  line-height: 100%;
  pointer-events: none;
}
@keyframes bg {
  0% {
    background: #e5e5e3;
    width: 60%;
  }
  25% {
    background: #e5e5e3;
  }
  50% {
    background: #e5e5e3;
  }
  75% {
    background: #e5e5e3;
  }
  95% {
    background: #e5e5e3;
  }
  100% {
    background: transparent;
    width: 30.5%;
  }
}
.title .mapleForSmoke {
  height: 24.5vw;
}
.title .mapleForSmoke .item {
  background-color: #e5e5e3;
  animation: SmoketoAside 3s cubic-bezier(0.03, 0.13, 0.52, 0.82);
  animation-fill-mode: forwards;
}
@keyframes SmoketoAside {
  from {
    width: 50%;
  }
  to {
    width: 0;
  }
}
</style>