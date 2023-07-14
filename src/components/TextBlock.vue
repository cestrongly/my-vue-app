<!--
 * @Author: cest cestrmail@163.com
 * @Date: 2023-07-14 11:02:38
 * @LastEditors: cest cestrmail@163.com
 * @LastEditTime: 2023-07-14 14:59:13
 * @FilePath: /my-vue-app/src/components/TextBlock.vue
 * @Description: TextBlock 内容组件。
-->
<script setup lang="ts">
import { paragraphs } from "../mock-data/ipsum";
const colors = ["#40513B", "#609966", "#9DC08B"];
const getColor = (idx: number) => colors[(idx % colors.length) as number];
</script>

<template>
  <div>
    <p
      v-for="(p, idx) in paragraphs"
      :key="idx"
      :style="{
        color: getColor(idx),
      }"
      px2
      py1
    >
      {{ p }}
    </p>
  </div>
</template>
