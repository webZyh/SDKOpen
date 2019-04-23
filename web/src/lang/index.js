import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const message = {

}

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    zh: require('./zh.js'),
    en: require('./en.js')
  }
})

export default i18n
