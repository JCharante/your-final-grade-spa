
/**
 * Quasar QColor component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/color|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QColor',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {*} value New model value 
     */      
    '@input': function (value) {},

    /**
     * Emitted on lazy model value change (after user finishes selecting a color)
     * @param {*} value New model value 
     */      
    '@change': function (value) {},
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {String}
     */
    value: {
      type: String,
    },
    /**
     * The default value to show when the model doesn't have one
     * @type {String}
     */
    defaultValue: {
      type: String,
    },
    /**
     * The default view of the picker
     * @type {'spectrum'|'tune'|'palette'}
     */
    defaultView: {
      type: String,
    },
    /**
     * The default view of the picker
     * @type {'spectrum'|'tune'|'palette'}
     */
    'defaultView="spectrum"': {
      type: String,
    },
    /**
     * The default view of the picker
     * @type {'spectrum'|'tune'|'palette'}
     */
    'defaultView="tune"': {
      type: String,
    },
    /**
     * The default view of the picker
     * @type {'spectrum'|'tune'|'palette'}
     */
    'defaultView="palette"': {
      type: String,
    },
    /**
     * Forces a certain model format upon the model
     * @type {'auto'|'hex'|'rgb'|'hexa'|'rgba'}
     */
    formatModel: {
      type: String,
    },
    /**
     * Forces a certain model format upon the model
     * @type {'auto'|'hex'|'rgb'|'hexa'|'rgba'}
     */
    'formatModel="auto"': {
      type: String,
    },
    /**
     * Forces a certain model format upon the model
     * @type {'auto'|'hex'|'rgb'|'hexa'|'rgba'}
     */
    'formatModel="hex"': {
      type: String,
    },
    /**
     * Forces a certain model format upon the model
     * @type {'auto'|'hex'|'rgb'|'hexa'|'rgba'}
     */
    'formatModel="rgb"': {
      type: String,
    },
    /**
     * Forces a certain model format upon the model
     * @type {'auto'|'hex'|'rgb'|'hexa'|'rgba'}
     */
    'formatModel="hexa"': {
      type: String,
    },
    /**
     * Forces a certain model format upon the model
     * @type {'auto'|'hex'|'rgb'|'hexa'|'rgba'}
     */
    'formatModel="rgba"': {
      type: String,
    },
    /**
     * Use a custom palette of colors for the palette tab
     * @type {Array}
     */
    palette: {
      type: Array,
    },
    /**
     * Do not render header
     * @type {Boolean}
     */
    noHeader: {
      type: Boolean,
    },
    /**
     * Do not render footer; Useful when you want a specific view ('default-view' prop) and don't want the user to be able to switch it
     * @type {Boolean}
     */
    noFooter: {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    }
  }
}
