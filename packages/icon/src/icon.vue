<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script>
  import PopperOptions from 'element-ui/src/mixins/popper-options';
  export default {
    name: 'ElIcon',

    mixins: [PopperOptions],

    props: {
      name: String
    }
  };
</script>
