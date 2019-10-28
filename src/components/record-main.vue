<template>
  <div class="main">
    <div class="sundial">
      <div class="outerSundial">
        <img :src="outerSundial" style="pointer-events: none;" />
      </div>
      <div class="innerSundial">
        <img :src="innerSundial" v-bind:class="{start:isRotate,pause:!isRotate,rotate:rotate}" />
      </div>
    </div>
    <v-touch v-on:press="press" v-on:pressup="pressup" v-on:panend="pressup">
      <div class="startBtn" v-if="startBtn">
        <div class="btn">
          <img :src="start" />
        </div>
        <div class="tip">不能多于一分钟哦~</div>
      </div>
      <div class="stopBtn" v-if="stopBtn">
        <div class="btn">
          <img :src="stop" />
        </div>
        <div class="tip">不能多于一分钟哦~</div>
      </div>
      <div class="submitBtn" v-if="submitBtn">
        <div class="btns">
          <div class="btn" style="margin-bottom:4%" @click="poster">
            <img :src="toPoster" />
          </div>
          <div class="btn" @click="again">
            <img :src="testAgain" />
          </div>
        </div>
      </div>
    </v-touch>
  </div>
</template>

<script>
import outerSundial from "../assets/images/record_sundial_outer.png";
import innerSundial from "../assets/images/record_sundial_inner.png";
import start from "../assets/images/record_start_btn.png";
import stop from "../assets/images/record_stop_btn.png";
import toPoster from "../assets/images/record_heartbeating_btn.png";
import testAgain from "../assets/images/record_again_btn.png";
import { submitId, wxconfig } from "../API/apis";
import wx from "weixin-js-sdk";

export default {
  name: "recordMain",
  data() {
    return {
      outerSundial: outerSundial,
      innerSundial: innerSundial,
      start: start,
      stop: stop,
      toPoster: toPoster,
      testAgain: testAgain,
      startRercord: false,
      stopRecord: false,
      startBtn: true,
      stopBtn: false,
      submitBtn: false,
      isRotate: false,
      rotate: true,
      id: "",
      name: this.nickname
    };
  },
  mounted() {
    wxconfig().then(res => {
      wx.config({
        debug: false,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: ["startRecord", "stopRecord", "onVoiceRecordEnd"]
      });
      wx.ready(function() {
        if (this.startRercord) {
          this.stopBtn = true;
          this.startBtn = false;
          this.isRotate = true;
          wx.startRecord();
        }
        if (this.stopRecord) {
          wx.stopRecord({
            success: function(res) {
              this.id = res.localId;
              submitId(this.id).then(res => {
                console.log(res);
                if (res.status === 401) {
                  this.$router.push("index");
                } else {
                  this.startBtn = false;
                  this.stopBtn = false;
                  this.submitBtn = true;
                  this.isRotate = false;
                }
              });
            }
          });
        }
        wx.onVoiceRecordEnd({
          // 录音时间超过一分钟没有停止的时候会执行 complete 回调
          complete: function(res) {
            this.id = res.localId;
            submitId(this.id)
              .then(res => {
                console.log(res);
                if (res.status === 401) {
                  this.$router.push("index");
                } else {
                  this.startBtn = false;
                  this.stopBtn = false;
                  this.submitBtn = true;
                  this.isRotate = false;
                }
              })
              .catch(err => {
                console.log(err);
              });
          }
        });
      });
    });
  },
  props: {
    nickname: String
  },
  methods: {
    press() {
      this.rotate = true;
      this.startRercord = true;
    },
    pressup() {
      this.rotate = true;
      this.stopRecord = true;
    },
    again() {
      this.rotate = false;
      this.startBtn = true;
      this.stopBtn = false;
      this.submitBtn = false;
      this.startRercord = false;
      this.stopRecord = false;
    },
    poster() {
      this.$router.push({
        name: "poster",
        params: { nickname: this.name }
      });
    }
  }
};
</script>

<style>
.main .sundial {
  position: relative;
  height: 61vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 27%;
}
.main .sundial .outerSundial {
  position: absolute;
  width: 60%;
}
.main .sundial .innerSundial {
  position: absolute;
  width: 14%;
}
.main .sundial img {
  width: 100%;
}
.rotate {
  animation-fill-mode: forwards;
  animation: rotate 5s linear;
  animation-iteration-count: infinite;
  pointer-events: none;
}
.start {
  animation-play-state: running !important;
}
.pause {
  animation-play-state: paused !important;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.main .startBtn,
.main .stopBtn {
  margin-top: 21%;
}
.main .startBtn .btn,
.main .stopBtn .btn,
.main .submitBtn .btns {
  width: 70%;
  margin: auto;
}
.main .startBtn .btn img,
.main .stopBtn .btn img,
.main .submitBtn .btn img {
  width: 100%;
  pointer-events: none;
}
.main .submitBtn {
  margin-top: 13%;
  margin-bottom: 10vw;
}
.main .startBtn .tip,
.main .stopBtn .tip {
  margin: auto;
  text-align: center;
  font-size: 3vw;
  margin-top: 1vw;
  margin-bottom: 16vw;
}
</style>