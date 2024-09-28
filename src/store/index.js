import { createStore } from 'vuex'

export default createStore({
  state: {

    // 记录购物车的物品列表
    itemList:[]  
  },
  getters: {
    // 返回购物车的物品
    getSelectedItem(state) {
      return state.itemList;
    }
  },
  mutations: {
    // 添加物品到购物车
    addItem(state,item){
      if (item) {  // 确保 item 存在
        state.itemList.unshift(item)
      } else {
        console.error("Item is undefined or null");
      }
      
    }, deleteItem(state,index){
      state.itemList.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
