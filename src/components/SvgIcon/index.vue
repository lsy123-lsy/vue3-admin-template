<script setup>

  defineProps({
    // xlink:href属性值前缀
    prefix: {
      type: String,
      default: '#icon-'
    },
    // 提供使用图标的名字
    name: String,
    // 设置图标的颜色
    color: {
      type: String,
      default: ''
    },
    // 父组件传递的图标的宽度
    width: {
      type: String,
      default: '16px'
    },
    // 父组件传递的图标的高度
    height: {
      type: String,
      default: '16px'
    }
  })
</script>
<template>
  <svg :style="{'width': width,'height':height}">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<style scoped lang='less'>
</style>
