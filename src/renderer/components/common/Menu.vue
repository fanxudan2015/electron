<template>
  <div>
    <el-menu
      default-active="4"
      class="el-menu-container"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="imeduplus">
        <i class="el-icon-menu"></i>
        <span slot="title">学加家</span>
      </el-menu-item>
      <el-menu-item index="ksx">
        <i class="el-icon-setting"></i>
        <span slot="title">酷思学</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">落地页</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "imeduplus":
          this.$router.push({
            name: "imeduplus",
            params: {
              src: "https://testsaas1.imeduplus.com/#/login",
            },
          });
          break;
        case "ksx":
          this.$router.push({
            name: "ksx",
            params: {
              src: "http://talls.cn/manage/",
            },
          });
          break;
        default:
          this.$router.push({
            name: "landing-page",
          });
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.el-menu-container {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>
