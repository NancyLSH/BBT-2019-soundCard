<template>
  <div class="smoke">
    <div class="topSmoke item">
      <img :src="smoke" />
      <div class="block"></div>
    </div>
    <div class="censer item">
      <img :src="censer" />
    </div>
  </div>
</template>

<script>
import smoke from "../assets/images/index_censer_smoke.png";
import censer from "../assets/images/index_censer.png";
export default {
  name: "indexSomke",
  data() {
    return {
      smoke: smoke,
      censer: censer
    };
  }
};
</script>

<style>
.smoke {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.smoke .item {
  float: right;
  width: 20%;
}
.smoke .item img {
  width: 100%;
}
.smoke .topSmoke {
  margin-bottom: 1%;
  position: relative;
  height: 8.3vw;
}
.smoke .topSmoke img {
  position: absolute;
  top: 2.5%;
}
.smoke .topSmoke .block {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: #e5e5e3;
  animation: smokeUp 2s cubic-bezier(0, 0.32, 1, 0.93);
  animation-fill-mode: forwards;
}
@keyframes smokeUp {
  from {
    height: 106%;
  }
  to {
    height: 0;
  }
}
</style>