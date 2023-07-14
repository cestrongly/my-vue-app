<!--
 * @Author: cest cestrmail@163.com
 * @Date: 2023-07-14 11:35:44
 * @LastEditors: cest cestrmail@163.com
 * @LastEditTime: 2023-07-14 15:22:22
 * @FilePath: /my-vue-app/src/pages/home.vue
 * @Description: 介绍文件的作用、文件的入参、出参。
-->
<script lang="ts" setup>
import TextBlock from "@/components/TextBlock.vue";
</script>
<template>
   <main>
    <div>Scroll the box, go to another page and go back.</div>

    <TextBlock
      class="scrollable"
      p5 rounded mt-5 w-150 h-80 border="~ block" of-auto
    />
  </main>
</template>
