<template>
  <div class="posterMain">
    <div class="poster">
      <div class="container">
        <div class="bg">
          <img :src="posterBg" />
        </div>
        <audio
          :src="info.url"
          volume="1"
          ref="audio"
          @ended="playRadio"
        ></audio>
        <div class="info">
          <div class="name">{{ info.name }}</div>
          <div class="tip">专属声音气质报告</div>
          <div class="lists">
            <div class="title">
              音质特色：
              <div class="infoBox">{{ info.property }}</div>
            </div>
            <div class="title">
              心动指数：
              <div class="infoBox">
                <div class="affection" v-for="index of info.score" :key="index">
                  <img :src="affection" />
                </div>
              </div>
            </div>
            <div class="title">
              分析报告：
              <div class="infoBox">{{ info.description }}</div>
            </div>
          </div>
          <div class="radio">
            <div class="btn"></div>
            <div class="text">
              这是为你匹配的声音，快来听听吧~
              <div class="content">
                <div class="str" v-html="firststr"></div>
                <div class="str">{{ laststr }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="poster">
          <img
            :src="poster"
            style="width:100%;height: 100%;opacity: 0; z-index: 999;"
          />
        </div>
        <img :src="playerBtn" @click="playRadio" id="control_music" />
      </div>
    </div>
  </div>
</template>

<script>
import posterBg from "../assets/images/poster_box.png";
import start from "../assets/images/poster_play_btn.png";
import affection from "../assets/images/poster_affection.png";
import pause from "../assets/images/poster_pause_btn.png";
import { report, getPic } from "../API/apis";
export default {
  name: "posterMain",
  data() {
    return {
      poster: "",
      posterBg: posterBg,
      playerBtn: start,
      affection: affection,
      recordtext: "",
      play: false,
      info: {},
      firststr: "",
      laststr: "",
      status: "paused"
    };
  },
  methods: {
    playRadio() {
      this.status = this.nextStatus;
      let audio = this.$refs.audio;
      if (this.status === "running") {
        this.playerBtn = pause;
        audio.play();
      } else {
        this.playerBtn = start;
        audio.pause();
      }
    }
  },
  computed: {
    nextStatus() {
      return this.status == "paused" ? "running" : "paused";
    }
  },
  mounted() {
    report()
      .then(res => {
        if (res.status === 401) {
          this.$router.push("index");
        } else {
          this.info = res.data;
          let i = this.info.content.indexOf("—");
          this.firststr = this.info.content.slice(0, i);
          this.laststr = this.info.content.slice(i, this.info.content.length);
        }
      })
      .catch(err => {
        console.log(err);
      });
    getPic()
      .then(res => {
        if (res.status === 401) {
          this.$router.push("index");
        } else {
          this.poster = res.data.image;
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.posterMain {
  height: 81vw;
  margin: auto;
  width: 85%;
}
.posterMain,
.posterMain .poster .container {
  position: relative;
}
.posterMain img {
  width: 100%;
  /* pointer-events: none; */
}
.posterMain .posterbg,
.posterMain .poster,
.posterMain .poster .container .bg,
.posterMain .poster .container .info {
  position: absolute;
  width: 100%;
}
.posterMain .poster {
  height: 100%;
  top: 0;
}
.posterMain .poster .container .info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #7d9998;
  font-size: 4vw;
  width: 90%;
  margin: auto;
}
.posterMain .affection {
  width: 10%;
  margin-right: 2%;
}
.posterMain .tip {
  margin-bottom: 8%;
}
.posterMain .name {
  line-height: 10vw;
}
.posterMain .infoBox {
  display: flex;
  width: 65%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 2%;
}
.posterMain .info .lists {
  width: 90%;
}
.posterMain .container {
  height: 81vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.posterMain .radio {
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}
.posterMain .radio .btn {
  width: 12%;
}
.posterMain .radio .text {
  font-size: 3vw;
  width: 83%;
  text-align: right;
}
.posterMain .info .title {
  display: flex;
  line-height: 10vw;
}
.content {
  width: 100%;
}
.content .str {
  text-align: right;
}
audio {
  position: absolute;
  z-index: -99;
  opacity: 0;
}
#control_music {
  position: absolute;
  bottom: 10%;
  left: 10%;
  width: 12%;
  pointer-events: none;
}
</style>