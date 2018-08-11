<template>
  <footer class="el-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  import PopperOptions from 'element-ui/src/mixins/popper-options';
  export default {
    name: 'ElFooter',

    mixins: [PopperOptions],

    componentName: 'ElFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
