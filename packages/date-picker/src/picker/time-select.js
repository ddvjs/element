import Picker from '../picker';
import Panel from '../panel/time-select';
import PopperOptions from 'element-ui/src/mixins/popper-options';

export default {
  mixins: [PopperOptions, Picker],

  name: 'ElTimeSelect',

  componentName: 'ElTimeSelect',

  props: {
    type: {
      type: String,
      default: 'time-select'
    }
  },

  beforeCreate() {
    this.panel = Panel;
  }
};
