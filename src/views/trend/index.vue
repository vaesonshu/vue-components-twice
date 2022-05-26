<template>
  <div class="flex">
    <div><v-trend text="营业额"></v-trend></div>
    <div><v-trend text="销售额" type="down"></v-trend></div>
    <div><v-trend text="营业额2" reverseColor></v-trend></div>
    <div><v-trend text="销售额2" type="down"></v-trend></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
