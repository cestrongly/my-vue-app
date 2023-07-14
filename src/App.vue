<!--
 * @Author: cest cestrmail@163.com
 * @Date: 2023-07-14 11:02:38
 * @LastEditors: cest cestrmail@163.com
 * @LastEditTime: 2023-07-14 14:18:05
 * @FilePath: /my-vue-app/src/App.vue
 * @Description: 介绍文件的作用、文件的入参、出参。
-->
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header sticky left-0 right-0 top-0 p-4 border="b gray/10" shadow bg-white>
    <nav flex="~ gap-8" px8>
      <button hover:text-green6 @click="$router.back()">Back</button>
      <RouterLink to="/" active-class="underline">Home</RouterLink>
      <RouterLink to="/about" active-class="underline">About</RouterLink>
    </nav>
  </header>
  <div p10>
    <RouterView></RouterView>
  </div>
</template>
