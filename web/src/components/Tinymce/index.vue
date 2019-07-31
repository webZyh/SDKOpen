<template>
  <div :class="{fullscreen:fullscreen}" class="tinymce-container">
    <textarea :id="tinymceId" class="tinymce-textarea"></textarea>
    <div class="editor-upload-btn-container">
      <EditorImage color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK" />
    </div>
  </div>
</template>

<script>
import EditorImage from './components/EditorImage'
import plugins from './plugins'
import toolbar from './toolbar'
import './langs/zh_CN'

export default {
  name: 'Tinymce',
  components: {
    EditorImage
  },
  data() {
    return {
      tinymceId: this.id,
      fullscreen: false,
      Editor: null,
      DefaultConfig: {}
    }
  },
  props: {
    id: {
      type: String,
      default: () => {
        return `vue-tinymce-${((Math.random() * 1000).toFixed(0))}`
      }
    },
    value: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => {
        return {
          theme: 'modern',
          height: 300
        }
      }
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    menubar: {
      type: String,
      default: 'file edit insert view format table'
    },
  },
  mounted() {
    this.initTinymce()
    console.log(this.id)
  },
  methods: {
    initTinymce() {
      const self = this;
      this.Editor = window.tinymce.init({
        selector: `#${this.tinymceId}`,
        // prop内传入的的config
        ...this.config, 
        plugins,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        menubar: this.menubar,
        init_instance_callback: (editor) => {
          if (self.value) {
            editor.setContent(self.value)
          }
          self.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            this.hasChange = true
            this.$emit('input', editor.getContent())
          })
        },
        setup: (editor) => {
          editor.on('FullscreenStateChanged', (e) => {
            console.log(e);
            self.fullscreen = e.state
          })
        }
      })
    },
    imageSuccessCBK(arr) {
      const _this = this;
      arr.forEach((v) => {
        window.tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v.url}" >`)
      })
    },
    destroyTinymce() {
      const tinymce = window.tinymce.get(this.tinymceId);
      if (this.fullscreen) {
        tinymce.execCommand('mceFullScreen')
      }
      if (tinymce) {
        tinymce.destroy()
      }
    },
  },
  destroyed() {
    this.destroyTinymce()
  },
}
</script>

<style lang="stylus" scoped>
.tinymce-container
  position relative
  line-height normal
  .editor-upload-btn-container
    position absolute
    right 22px
    top 4px
    .editor-upload-btn 
      display inline-block
.fullscreen 
  .editor-upload-btn-container
    z-index 10000
    position fixed
.mce-container
  a 
    vertical-align bottom!important
</style>
