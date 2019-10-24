<template>
  <div class="form">
    <div class="formitem" style="width: 84%;">
      <div class="title">昵称：</div>
      <div class="inputBox">
        <input v-model="nickname" type="text" />
      </div>
    </div>
    <div class="formitem" style="width: 93%;">
      <div class="title" style="padding-left: 4.5vw;">属性：</div>
      <div class="chooseBox">
        <div class="box">
          <img :src="sexBox" />
          <div class="text">
            <img :src="male" />我是汉纸
          </div>
        </div>
        <div class="box" style="text-align:right;">
          <img :src="nonsex" />
          <div class="text">
            <img :src="female" />我是妹纸
          </div>
        </div>
      </div>
    </div>
    <div class="btn"></div>
  </div>
</template>

<script>
import sexBox from "../assets/images/index_selectSex.png";
import selectedSexBox from "../assets/images/index_selectedSex.png";
import male from "../assets/images/index_icon_male.png";
import female from "../assets/images/index_icon_female.png";

export default {
  name: "indexForm",
  data() {
    return {
      nickname: "",
      sexBox: selectedSexBox,
      nonsex: sexBox,
      male: male,
      female: female
    };
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
  margin:auto;
  margin-top: 15%;
}
.entry .main .form .formitem .inputBox {
  width: 100%;
  height: 8.6vw;
  border: #164e4d solid 1px;
  border-radius: 1.2vw;
  margin-top: 2vw;
  text-align: center;
  background-image: linear-gradient(to right, #c2dff55b, #a1baba00);
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
}
</style>