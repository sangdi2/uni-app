"use strict";
var common_vendor = require("../common/vendor.js");
common_vendor.createApp().use(common_vendor.index);
var store = new common_vendor.index.Store({
  state: {
    cart: JSON.parse(common_vendor.index$1.getStorageSync("cart") || "[]"),
    address: JSON.parse(common_vendor.index$1.getStorageSync("address") || "{}"),
    token: common_vendor.index$1.getStorageSync("token") || "",
    userinfo: JSON.parse(common_vendor.index$1.getStorageSync("userinfo") || "{}"),
    redirectinfo: null
  },
  mutations: {
    changecart(state, goods) {
      const sts = state.cart.find((x) => x.goods_id === goods.goods_id);
      console.log(sts);
      if (!sts) {
        console.log(sts);
        state.cart.push(goods);
      } else {
        sts.goods_count++;
      }
      console.log(state.cart);
      this.commit("savetolocal");
    },
    savetolocal(state) {
      common_vendor.index$1.setStorageSync("cart", JSON.stringify(state.cart));
    },
    changeRadio(state, goods) {
      const findResult = state.cart.find((x) => x.goods_id === goods.goods_id);
      if (findResult) {
        findResult.goods_state = goods.goods_state;
      }
      this.commit("savetolocal");
    },
    updateNumber(state, goods) {
      const findResult = state.cart.find((x) => x.goods_id === goods.goods_id);
      if (findResult) {
        findResult.goods_count = goods.goods_count;
      }
      this.commit("savetolocal");
    },
    deleteById(state, goods) {
      state.cart = state.cart.filter((x) => x.goods_id !== goods.goods_id);
      this.commit("savetolocal");
    },
    updateAddress(state, address) {
      state.address = address;
      this.commit("saveAddress");
    },
    saveAddress(state) {
      common_vendor.index$1.setStorageSync("address", JSON.stringify(state.address));
    },
    updateState(state, newstate) {
      state.cart.forEach((x) => x.goods_state = newstate);
      this.commit("savetolocal");
    },
    updateUserinfo(state, userinfo) {
      state.userinfo = userinfo;
      this.commit("saveUserinfo");
    },
    saveUserinfo(state) {
      common_vendor.index$1.setStorageSync("userinfo", JSON.stringify(state.userinfo));
    },
    updateToken(state, token) {
      state.token = token;
      this.commit("saveToken");
    },
    saveToken(state) {
      common_vendor.index$1.setStorageSync("token", state.token);
    },
    updateredirectinfo(state, redirectinfo) {
      state.redirectinfo = redirectinfo;
    }
  },
  getters: {
    checkedcount(state) {
      return state.cart.filter((x) => x.goods_state).reduce((total, item) => total += item.goods_count, 0);
    },
    totalcart(state) {
      return state.cart.reduce((total, item) => total += item.goods_count, 0);
    },
    checkedGoodsPrice(state) {
      return state.cart.filter((x) => x.goods_state).reduce((total, item) => total += item.goods_count * item.goods_price, 0);
    },
    addre(state) {
      if (state.address.provinceName === "")
        return "";
      return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo;
    }
  }
});
exports.store = store;
