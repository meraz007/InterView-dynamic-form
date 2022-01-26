import { createStore } from 'vuex'

export default createStore({
  state: {
    item:[],
    itemDetails:[]
  },
  getters:{
    getItem(state){
      return state.item
    },
    getItemDetails(state){
      return state.itemDetails
    }
  },
  mutations: {
    itemAdd(state,payload){
      state.item.push(payload)
    },
    itemDetailsAdd(state,payload){
      state.itemDetails.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})