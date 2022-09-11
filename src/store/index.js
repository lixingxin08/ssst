
import Vue from 'vue';
import Vuex from 'vuex';
import item2 from './item2';//引进模块
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
    },
    getters:{

    },
    mutations:{

    },
    actions:{
        
    },
  modules: {  
    dataStatus:item2,
  },
});
