<template>
  <v-choose-area @change="changeArea"></v-choose-area>
</template>

<script setup lang="ts">
import vChooseArea from '../../components/chooseArea/src/index.vue'
let changeArea = (val: any) => {}
</script>

<style scoped></style>
