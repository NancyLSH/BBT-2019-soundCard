<template>
  <div class="form">
    <div class="formitem" style="width: 84%;">
      <div class="title">昵称：<div class="errmsg">{{nameerrmsg}}</div></div>
      <div class="inputBox">
        <input v-model="nickname" type="text" />
      </div>
    </div>
    <div class="formitem" style="width: 93%;">
      <div class="title" style="padding-left: 4.5vw;">属性：<div class="errmsg">{{errmsg}}</div></div>
      <div class="chooseBox">
        <div class="box" @click="chooseSex('male')">
          <img :src="maleBox" />
          <div class="text">
            <img :src="male" />我是汉纸
          </div>
        </div>
        <div class="box" style="text-align:right;" @click="chooseSex('female')">
          <img :src="femaleBox" />
          <div class="text">
            <img :src="female" />我是妹纸
          </div>
        </div>
      </div>
    </div>
    <div class="btn" @click="submitInfo">
      <img :src="btnImg" />
    </div>
  </div>
</template>

<script>
import sexBox from "../assets/images/index_selectSex.png";
import selectedSexBox from "../assets/images/index_selectedSex.png";
import male from "../assets/images/index_icon_male.png";
import female from "../assets/images/index_icon_female.png";
import btnImg from "../assets/images/index_submit.png";
import { submitInfo } from "../API/apis";
export default {
  name: "indexForm",
  data() {
    return {
      nickname: "",
      sexBox: selectedSexBox,
      nonsex: sexBox,
      male: male,
      female: female,
      btnImg: btnImg,
      sex: "unknown",
      maleBox: sexBox,
      femaleBox: sexBox,
      submit: true,
      res: "",
      nameerrmsg:'',
      errmsg:''
    };
  },
  methods: {
    chooseSex(sex) {
      this.sex = sex;
      if (sex === "male") {
        this.maleBox = selectedSexBox;
        this.femaleBox = sexBox;
      } else if (sex === "female") {
        this.maleBox = sexBox;
        this.femaleBox = selectedSexBox;
      } else {
        this.maleBox = sexBox;
        this.femaleBox = sexBox;
      }
    },
    submitInfo() {
      this.nameerrmsg = ''
      this.errmsg = ''
      if (!this.nickname) {
        this.nameerrmsg = "你还没填写昵称"
      } else if (this.sex === "unknown") {
        this.errmsg = "你还没选择性别"
      } else {
        let data = {
          name: this.nickname,
          gender: this.sex,
        };
        if (this.submit) {
          this.submit = false
          submitInfo(data)
            .then(res => {
              if (res.status === 200) {
                this.$router.push("record");
              }
            })
            .catch(err => {
              this.submit = true;
              console.log(err);
            });
        }
      }
    }
  }
};
</script>

<style>
.entry .main .form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.entry .main .form .formitem {
  display: flex;
  flex-direction: column;
  color: #4e4d4d;
  font-size: 4vw;
  margin: auto;
  margin-top: 15%;
}
.entry .main .form .formitem .inputBox {
  width: 100%;
  height: 8.6vw;
  border: #164e4d solid 1px;
  border-radius: 1.2vw;
  margin-top: 2vw;
  text-align: center;
  background-image: linear-gradient(
    to right,
    rgba(194, 223, 245, 0.2),
    rgba(161, 186, 186, 0)
  );
}
.entry .main .form .formitem .inputBox input {
  width: 95%;
  outline: none;
  height: 8.6vw;
  background-color: transparent;
  border: none;
  font-size: 4vw;
}
.entry .chooseBox {
  display: flex;
  margin-top: 3vw;
  position: relative;
}
.entry .chooseBox .box img {
  width: 100%;
  pointer-events: none;
}
.entry .chooseBox .box .text {
  color: #4e4d4d;
  font-size: 4vw;
  position: absolute;
  top: 0;
  margin: 0 6vw;
  line-height: 9.8vw;
}
.entry .form .formitem .box .text img {
  width: 4vw;
  height: 4vw;
  margin-right: 3vw;
  pointer-events: none;
}
.entry .form .btn {
  width: 60%;
  margin: auto;
  margin-top: 20%;
}
.entry .form .btn img {
  width: 100%;
  pointer-events: none;
}
.entry .errmsg{
  color: #ff3b30;
}
.entry .title{
  display: flex;
}
</style>