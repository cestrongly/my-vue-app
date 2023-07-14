/*
 * @Author: cest cestrmail@163.com
 * @Date: 2023-07-14 11:20:35
 * @LastEditors: cest cestrmail@163.com
 * @LastEditTime: 2023-07-14 11:20:57
 * @FilePath: /my-vue-app/uno.config.ts
 * @Description: UnoCSS 配置文件。
 */
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
})