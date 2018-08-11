<template>
  <div class="el-button-group">
    <slot></slot>
  </div>
</template>
<script>
  import PopperOptions from 'element-ui/src/mixins/popper-options';
  export default {
    name: 'ElButtonGroup',
    mixins: [PopperOptions]
  };
</script>
