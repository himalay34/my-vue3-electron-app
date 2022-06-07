/* eslint-disable */
import { createPinia } from "pinia";
import createPersistedState from "pinia-persistedstate";
import SecureLS from "secure-ls";

let ls = new SecureLS({ isCompression: false });

const piniajs = createPinia();

piniajs.use(
  createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })
);

export default piniajs;
