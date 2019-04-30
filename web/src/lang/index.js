import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage;

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase();
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}


const messages = {
  zh: require('./zh.js'),
  en: require('./en.js')
}

const i18n = new VueI18n({
  // locale: getLanguage(),       //可以将从cookie中取得language封装成一个方法，
  locale: Cookies.get('language')||'zh',
  messages
})

export default i18n

