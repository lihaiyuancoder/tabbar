<!--
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-12 23:04:45
 -->
<template>
  <div id="app">
    <tab-bar>
        <!-- 这里只要增加tabbar就行，组件内部不需要修改 -->
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/main.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/selectedmain.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/message" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/message.png" alt="" />
         <img slot="item-icon-active" src="./assets/img/tabbar/selectedmessage.png" alt="">
        <div slot="item-text">消息</div>
      </tab-bar-item>
      <tab-bar-item path="/mine" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/mine.png" alt="" />
         <img slot="item-icon-active" src="./assets/img/tabbar/selectedmine.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
/* 引入组件 */
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
/* 在style中引入样式方法 */
@import "./assets/css/base.css";
</style>
