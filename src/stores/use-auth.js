import { defineStore } from "pinia";

//* using option store syntax
export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      name: "hello pinia",
      isAuthenticated: false,
      token: "",
    };
  },
  persist: true,
  getters: {
    getName: (state) => state.name,
    getToken: (state) => state.token,
    loggedIn: (state) => state.isAuthenticated,
  },
  actions: {
    setName(val) {
      this.name = val;
    },
    setToken(val) {
      this.token = val;
    },
    login(email, password) {
      let self = this;
      return new Promise((resolve, reject) => {
        self.isAuthenticated = true;
        resolve("loggedIn");
      });
    },
    signup(data) {
      return new Promise((resolve, reject) => {
        resolve("loggedIn");
      });
    },
    logout() {
      let self = this;
      return new Promise((resolve, reject) => {
        try {
          self.name = "";
          self.token = "";
          self.isAuthenticated = false;
          console.log("loggingout");
          resolve("loggedIn");
        } catch (error) {
          console.error(error);
          reject(error);
        }
      });
    },
  },
});
