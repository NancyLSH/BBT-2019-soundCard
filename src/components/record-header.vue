<template>
  <div class="recordhead">
    <div class="recordbg">
      <img :src="recordbg" />
    </div>
    <div class="text">
      <div class="tip">随便说两句吧~或者试试推荐文案：</div>
      <div class="recommendation">{{text}}</div>
    </div>
  </div>
</template>

<script>
import recordbg from "../assets/images/record_textarea.png";
import { getText } from "../API/apis";
export default {
  name: "recordHeader",
  data() {
    return {
      text: "",
      recordbg: recordbg
    };
  },
  mounted() {
    getText()
      .then(res => {
        if (res.status === 401) {
          this.$router.push("index");
        }
        console.log(res);
        this.text = res.data.text;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.recordhead {
  position: relative;
  margin-top: 17%;
}
.recordhead .recordbg {
  position: absolute;
  top: 0;
}
.recordhead .recordbg img {
  width: 100%;
  pointer-events: none;
}
.recordhead .text .tip {
  margin: auto;
  line-height: 10vw;
  width: 74%;
  font-size: 3.5vw;
  color: #4e4d4d;
  letter-spacing: 0.4vw;
}
.recommendation {
  color: #4e4d4d;
  font-size: 4vw;
  font-weight: 550;
  text-align: center;
  margin-top: 3%;
  letter-spacing: 0.3vw;
}
</style>