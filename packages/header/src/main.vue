<template>
  <header class="el-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  import PopperOptions from 'element-ui/src/mixins/popper-options';
  export default {
    name: 'ElHeader',

    mixins: [PopperOptions],
    
    componentName: 'ElHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
