
/**
 * Quasar QPageScroller component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/page-scroller|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPageScroller',
  props: {
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    position: {
      type: String,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="topRight"': {
      type: String,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="topLeft"': {
      type: String,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="bottomRight"': {
      type: String,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="bottomLeft"': {
      type: String,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="top"': {
      type: String,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="right"': {
      type: String,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="bottom"': {
      type: String,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="left"': {
      type: String,
    },
    /**
     * An array of two numbers to offset the component horizontally and vertically in pixels
     * @type {Array}
     */
    offset: {
      type: Array,
    },
    /**
     * By default the component shrinks to content's size; By using this prop you make the component fully expand horizontally or vertically, based on 'position' prop
     * @type {Boolean}
     */
    expand: {
      type: Boolean,
    },
    /**
     * Scroll offset (in pixels) from which point the component is shown on page
     * @type {Number}
     */
    scrollOffset: {
      type: Number,
    },
    /**
     * Duration (in milliseconds) of the scrolling until it reaches its target
     * @type {Number}
     */
    duration: {
      type: Number,
    }
  }
}
