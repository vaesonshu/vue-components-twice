<template>
  <div>
    <v-choose-icon title="选择图标" v-model:visible="visible">
      选择图标
    </v-choose-icon>
  </div>
</template>

<script lang="ts" setup>
import vChooseIcon from "../../components/chooseIcon/src/index.vue";
import { ref } from "vue";

let visible = ref<boolean>(false);
</script>

<style scoped></style>
