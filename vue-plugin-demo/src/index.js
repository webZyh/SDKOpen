import ToastComponent from './vue-toast.vue';

const Toast = {};
Toast.install = (Vue, options) => { // 必须定义一个install方法，才可以在使用时Vue.use()
  const opt = {
    duration: 3000,
  };
  for (const key in options) {
    opt[key] = options[key];
  }
  Vue.prototype.$toast = function (message, option) {
    if (typeof option === 'object') {
      for (const key in option) {
        opt[key] = option[key];
      }
    }
    // 扩展实例构造器
    const ToastController = Vue.extend(ToastComponent);
    const instance = new ToastController().$mount(document.createElement('div'));
    instance.message = message;
    instance.visible = true;
    document.body.appendChild(instance.$el);
    setTimeout(() => {
      instance.visible = false;
      document.body.removeChild(instance.$el);
    }, opt.duration);
  };
  Vue.prototype.$toast.show = function (message, option) {
    Vue.prototype.$toast(message, option);
  };
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Toast);
}
export default Toast;
