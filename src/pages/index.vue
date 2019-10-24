<template>
  <div class="entry">
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
  }
};
</script>

<style>
html,
#app {
  height: 100%;
  background-color: #e5e5e3;
}
.entry {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.entry .main {
  width: 76.5%;
  height: 90vw;
  margin: auto;
  margin-top: 10%;
  margin-bottom: -6%;
}
.entry .main .tip {
  color: #164e4d;
  font-size: 4vw;
  text-align: center;
}
</style>