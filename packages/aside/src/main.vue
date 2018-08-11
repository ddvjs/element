<template>
  <aside class="el-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  import PopperOptions from 'element-ui/src/mixins/popper-options';
  export default {
    name: 'ElAside',
    mixins: [PopperOptions],

    componentName: 'ElAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
