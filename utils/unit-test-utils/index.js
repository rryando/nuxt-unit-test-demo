import { shallowMount, mount, RouterLinkStub  } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import axios from 'axios'
// store module
import storeIndex from '~/store'

Vue.use(Vuex);
Vue.use(Vuetify);

export const store = storeIndex()

export const $axios = {
  get: async (url, options) => {
    const response = await axios.get(url, options);
    return { ...response, ...response.data };
  },
  post: async (url, options) => {
    const response = await axios.post(url, options);
    return { ...response, ...response.data };
  },
};

store.$axios = $axios;


export const $route = {
  path: '/',
  params: {
    id: '',
  },
  query: {},
  hash: '',
};

export const $router = {
  push: jest.fn(),
  replace: jest.fn(),
  go: jest.fn(),
};

export const mountMocks = {
  $router,
  $route,
  $axios,
};

export const commonOpts = {
  mocks: mountMocks,
  stubs: {
    routerLink: RouterLinkStub,
  },
  $router,
  $route,
  store,
  attachToDocument: true,
  created() {
    this.$vuetify.lang = {
      t: () => {},
    }
  }
};

export const m = (componentName, additionalOpt = {}) => mount(componentName, {...commonOpts, ...additionalOpt});
export const sM = (componentName, additionalOpt = {}) => shallowMount(componentName, {...commonOpts, ...additionalOpt});
