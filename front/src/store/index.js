import Vue from "vue";
import Vuex from "vuex";

import cookies from "vue-cookies";
import http from "@/utils/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: cookies.get("user"),
    socialData: JSON.parse(sessionStorage.getItem("socialData")),
    authorization: cookies.get("authorization"),
    plant: cookies.get("plantCharInfo"),
    posts: JSON.parse(sessionStorage.getItem("posts")),
  },
  getters: {
    config: (state) => ({ headers: { Authorization: state.authorization } }),
    user(state) {
      return state.user;
    },
    plantCharInfo(state) {
      return state.plant;
    },
    isLoggedIn(state) {
      return !!state.authorization;
    },
  },
  mutations: {
    SET_USER(state, value) {
      cookies.set("user", value, 60 * 60 * 60);
      state.user = value;
    },
    LOGOUT(state) {
      state.plant = null;
      state.user = null;
      state.posts = null;
      state.socialData = null;
      sessionStorage.removeItem("posts");
      sessionStorage.removeItem("socialData");
      cookies.remove("user");
      cookies.remove("plantCharInfo");
      cookies.remove("authorization");
    },
    SET_AUTH(state, value) {
      cookies.set("authorization", value, 60 * 60 * 60);
      state.authorization = value;
    },
    SET_SOCIAL(state, value) {
      sessionStorage.setItem("socialData", value);
      state.socialData = value;
    },
    SET_PLANTCHARINFO(state, value) {
      cookies.set("plantCharInfo", value, 60 * 60 * 60);
      state.plant = value;
    },
    SET_SPROUTTYPE(state, value) {
      var plant = state.plant;
      plant.sproutType = value;
      cookies.set("plantCharInfo", plant, 60 * 60 * 60);
      state.plant = plant;
    },
    SET_POSTS(state, value) {
      sessionStorage.setItem("posts", JSON.stringify(value));
      state.posts = value;
    },
    SET_POST(state, value) {
      var index = state.posts.findIndex((el) => el.post_id === value.post_id);
      if (index >= 0) {
        if (value.del_flag == true) {
          state.posts.splice(index, 1);
        } else {
          state.posts[index] = value;
        }
        sessionStorage.setItem("posts", JSON.stringify(state.posts));
      } else {
        state.posts = [value, ...state.posts];
        sessionStorage.setItem("posts", JSON.stringify(state.posts));
      }
    },
  },
  actions: {
    setUser({ commit }, value) {
      commit("SET_USER", value);
    },
    setAuth({ commit }, value) {
      commit("SET_AUTH", value);
    },
    setSocial({ commit }, value) {
      commit("SET_SOCIAL", value);
    },
    setPlantCharInfo({ commit, getters }, value) {
      http
        .put(
          "/api/user/pot",
          { user_pot: JSON.stringify(value) },
          getters.config
        )
        .then(() => {
          commit("SET_PLANTCHARINFO", value);
        });
    },
    setPosts({ commit, getters }) {
      http
        .get("/api/post", getters.config)
        .then((res) => {
          commit("SET_POSTS", res.data.reverse());
        })
        .catch((err) => console.log(err));
    },
  },
});
