<template>
  <div class="entry" ref="entry">
    <headtitle></headtitle>
    <div class="main">
      <div class="tip">快来测测你的声音气质吧~</div>
      <indexForm></indexForm>
    </div>
    <indexSmoke></indexSmoke>
  </div>
</template>

<script>
import headtitle from "../components/index-title";
import form from "../components/index-form";
import indexSomke from "../components/index-smoke";
export default {
  name: "index",
  components: {
    headtitle: headtitle,
    indexForm: form,
    indexSmoke: indexSomke
  },
  mounted() {
    this.$refs.entry.style.height = getComputedStyle(
      this.$refs.entry,
      null
    ).getPropertyValue("height");
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  background-color: #e5e5e3;
}
.entry {
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.entry .main {
  width: 76.5%;
  height: 90vw;
  margin: auto;
  margin-top: 10vw;
  margin-bottom: -6%;
}
.entry .main .tip {
  color: #164e4d;
  font-size: 4vw;
  text-align: center;
}
.smoke {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
</style>