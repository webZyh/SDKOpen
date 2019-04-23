import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const message = {
  zh: require('./zh.js'),
  en: require('./en.js')
}

const i18n = new VueI18n({
  local: 'zh',
  message: message
})


export default i18n
