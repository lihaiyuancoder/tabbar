<!--
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-13 21:43:10
 -->
<template>
  <div>
    <div class="tab-bar-item" @click="tabClick">
      <!-- 用插槽是实现tabitem -->
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "gray"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    tabClick() {
      console.log("methods");
      this.$router.replace(this.path);
    }
  }
};
</script>
<style  scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 3px;
}
</style>