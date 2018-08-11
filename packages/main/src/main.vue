<template>
  <main class="el-main">
    <slot></slot>
  </main>
</template>

<script>
  import PopperOptions from 'element-ui/src/mixins/popper-options';
  export default {
    name: 'ElMain',
    mixins: [PopperOptions],
    componentName: 'ElMain'
  };
</script>
