<template>
  <div>
    <el-select placeholder="请选择省份" v-model="province">
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      placeholder="请选择城市"
      :disabled="!province"
      style="margin: 0 10px"
      v-model="city"
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      :disabled="!province || !city"
      placeholder="请选择区域"
      v-model="area"
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { emit } from 'process'
import { ref, watch } from 'vue'
import allAreas from '../lib/pca-code.json'
export interface AreaItem {
  name: string
  code: string
  childern?: AreaItem[]
}
export interface Data {
  name: string
  code: string
}
let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
// 获取所有省市区的数据
let areas = ref(allAreas)
console.log(areas)
// 城市下拉框的所有数据
let selectCity = ref<AreaItem[]>([])
// 区域下拉框的所有数据
let selectArea = ref<AreaItem[]>([])
// 分发事件给父组件
let emits = defineEmits(['change'])
// 监听选择省份
watch(
  () => province.value,
  (val) => {
    if (val) {
      console.log('val', val)
      let cities = areas.value.find((item) => item.code === province.value)!
        .children!
      console.log(cities)
      selectCity.value = cities
    }
    city.value = ''
    area.value = ''
  }
)
// 监听选择城市
watch(
  () => city.value,
  (val) => {
    if (val) {
      console.log('val', val)
      let area = selectCity.value.find((item) => item.code === city.value)!
        .childern!
      console.log(selectCity, area)
      selectArea.value = area
    }
    area.value = ''
  }
)
// 监听选择区域
watch(
  () => area.value,
  (val) => {
    if (val) {
      let provinceData: Data = {
        code: province.value,
        name:
          province.value &&
          allAreas.find((item) => item.code === province.value)!.name
      }
      let cityData: Data = {
        code: city.value,
        name:
          city.value &&
          selectCity.value.find((item) => item.code === city.value)!.name
      }
      let areaData: Data = {
        code: val,
        name: val && selectArea.value.find((item) => item.code === val)!.name
      }
      console.log(provinceData, cityData, areaData)
      emits('change', {
        province: provinceData,
        city: cityData,
        area: areaData
      })
    }
  }
)
</script>

<style scoped></style>
