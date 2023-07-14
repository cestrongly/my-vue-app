/*
 * @Author: cest cestrmail@163.com
 * @Date: 2023-07-14 11:02:38
 * @LastEditors: cest cestrmail@163.com
 * @LastEditTime: 2023-07-14 15:03:06
 * @FilePath: /my-vue-app/vite.config.ts
 * @Description: Vite 配置文件。
 */
import path  from 'path';
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    // 配置 UnoCSS 原子化 CSS
    UnoCSS()
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
