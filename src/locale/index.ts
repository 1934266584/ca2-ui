import Vue from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

declare module 'vue' {
  interface VueConstructor {
    util: {
      defineReactive(obj: object, key: string, value: any): void;
    };
  }
}

const proto = Vue.prototype;
const { defineReactive } = Vue.util;

defineReactive(proto, '$zvLang', 'zh-CN');
defineReactive(proto, '$zvMessages', {
  'zh-CN': defaultMessages,
});

export default {
  messages() {
    return proto.$zvMessages[proto.$zvLang];
  },

  use(lang: string, messages?: object) {
    proto.$zvLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$zvMessages, messages);
  },
};
