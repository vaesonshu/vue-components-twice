<template>
  <el-menu
    default-active="2"
    :collapse="collapse"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="3">
      <el-icon-location></el-icon-location>
      <span>导航</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-location></el-icon-location>
      <span>导航</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-location></el-icon-location>
      <span>导航</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean;
}>();
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
