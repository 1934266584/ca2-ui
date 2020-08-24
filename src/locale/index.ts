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

defineReactive(proto, '$ca2Lang', 'zh-CN');
defineReactive(proto, '$ca2Messages', {
  'zh-CN': defaultMessages,
});

export default {
  messages() {
    return proto.$ca2Messages[proto.$ca2Lang];
  },

  use(lang: string, messages?: object) {
    proto.$ca2Lang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$ca2Messages, messages);
  },
};
