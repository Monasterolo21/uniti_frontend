
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from "axios";


export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    })
  ],
  state:{
    user : null,

    home_contents : null,
    telegram_contents : null,
    home_board_ID : 1,

    unito_boards : null,
    current_unito_board : null,
    current_unito_board_contents : null,
    
    balon_categories : null,
    balon_saleAds : null,
    selected_balon_ads : null,

    BASE_URL : 'http://localhost:8080/api/',
    //BASE_URL : 'http://192.168.1.186:8080/api/',
    Path : {
        oAuth : 'auth/',
        users : 'users/',
        contents : 'contents/',
        boards : 'boards/',
        balon : 'saleads/'
    },




    categories: [],
    subcategories: [],
    firstCategory: '',
    places: [],
    userEmail: '',
    isLogged:false,
    currentPosition: {},
  },

  getters:{
    getUser : state => state.user,

    getHomeContent : state => {
        if(!state.home_contents)
            return [];
        else
            return state.home_contents.sort((a,b) => b.id - a.id);
    },

    getTelegramContents : state => {
        if(!state.telegram_contents)
            return [];
        else
            return state.telegram_contents.sort((a,b) => b.msgId - a.msgId);
    },

    getUnitoBoards : state => {
        if(!state.unito_boards)
            return [];
        return state.unito_boards.filter((b) => b.id > 1);
    },

    getCurrentBoard : state => state.current_unito_board,
    
    getUnitoBoardContents : state => {
        if(!state.current_unito_board_contents)
            return [];
        else
            return state.current_unito_board_contents.sort((a,b) => b.id - a.id);
    },
    getBalonCategories : state => {
        if(!state.balon_categories)
            return [];
        return state.balon_categories.sort((a,b) => b.id - a.id);
    },
    getBalonSaleAds : state => {
        if(!state.balon_saleAds)
            return [];
        else
            return state.balon_saleAds.sort((a,b) => b.id - a.id);
    },
    getSelectedBalonAds : state => state.selected_balon_ads,
    
  },



  mutations:{ // Syncronus

    setUser(state, payload) {
      state.user = payload;
    },

    setHomeContent(state, payload) {
      state.home_contents = payload;
      console.log('Added to Home')
    },

    setTelegramContents(state, payload) {
        state.telegram_contents = payload;
    },

    setUnitoBoards(state, payload) {
        state.unito_boards = payload;
        //console.log(state.unito_boards)
    },

    setCurrentUnitoBoard(state, payload) {
        state.current_unito_board = payload;
        //console.log(state.current_unito_board);
    },

    setUnitoBoardsContents(state, payload) {
        state.current_unito_board_contents = payload;
        console.log('Added to unitoBoardsContent')
    },

    addNewContentPusblished(state, {newContent, board_id} ) {
        if(board_id === state.home_board_ID)
            state.home_contents.push(newContent);
        else
            state.current_unito_board_contents.push(newContent);
    },

    setBalonCategories(state,payload) {
        state.balon_categories = payload;
        console.log(state.balon_categories);
    },

    setBalonSaleAds(state, payload) {
        state.balon_saleAds = payload;
        console.log(state.balon_saleAds);
    },

    pushNewAds(state, payload) {
        state.balon_saleAds.push(payload);
    },

    setSelectedBalonAds(state, payload) {
        state.selected_balon_ads = payload;
    },

    changeActiveToSelectedAds(state, payload) {
        state.balon_saleAds.find(e => e.id === payload.id);
    },

  },




  actions: { // Async

    async authenticationOAuth({commit}, user) {
      try {
        const url = this.state.BASE_URL + this.state.Path.oAuth;
        const response = await axios.post(url , user);    
        const user_res = response.data;    
        
        commit("setUser", user_res);
        return user_res;

      } catch (errors) {
        console.error(errors);
        return null;
      }
    },

    async editUser({commit}, userEdited) {
        try {
            const url = this.state.BASE_URL + this.state.Path.users;
            const response = await axios.post(url + 'updateUser', userEdited); 
            const user = response.data;
             
            commit("setUser", user);
            return user;
        } catch(errors) {
            console.error(errors);
            return null;
        }
    },
    
    /**
     * 
     * @param {*} param0 {commit} to commit the mutation
     * @param {*} id of the board. The default id is 1 (the Home Board ID)
     * @returns the contents of the board with id = id
     */
    async getContentsByBoard({commit}, id = this.state.home_board_ID) {
      try {
        const url = this.state.BASE_URL + this.state.Path.contents;
        const response = await axios.get(url + 'getAllByBoard/' + id); 
        const contents = response.data;
        console.log(contents)
        if(id === this.state.home_board_ID)
            commit('setHomeContent',contents);
        else
            commit('setUnitoBoardsContents',contents);
        return contents;
      } catch(errors) {
          console.log(errors);
          return null;
      }
    },

    async getTGContents({commit}) {
        try {
            const url = this.state.BASE_URL + this.state.Path.contents;
            const response = await axios.get(url + 'getTelegramContent');
            const tg = response.data;
            commit('setTelegramContents',tg);
            return tg;
        } catch(errors) {
            console.log(errors);
        }
    },

    async getAllUnitoBoards({commit}) {
        try {
            const url = this.state.BASE_URL + this.state.Path.boards;
            const response = await axios.get(url + 'getAll');
            const boards = response.data;
            console.log(boards);
            commit('setUnitoBoards',boards);
        } catch(errors) {
            console.log(errors)
        }
    },

    async postNewContent({commit}, { content, board_id} ) {
        try {
            const url = this.state.BASE_URL + this.state.Path.contents;
            const response = await axios.post(url + 'createContent',content, {
                params : {
                    board_id : board_id
                }
            })

            const newContent = response.data;            
            
            return newContent;
            
        } catch(errors) {
            console.log(commit);
        }
    },

    async getBalonCategories({commit}) {
        try {
            const url = this.state.BASE_URL + this.state.Path.balon;
            const response = await axios.get(url + 'getAllCategories');
            const categories = response.data;
            commit('setBalonCategories',categories);
        } catch(errors) {
            console.log(errors);
        }
    },

    async getBalonSaleAds({commit}) {
        try {
            const url = this.state.BASE_URL + this.state.Path.balon;
            const response = await axios.get(url + 'getAll');
            const ads = response.data;
            commit('setBalonSaleAds',ads);
        } catch(errors) {
            console.log(errors);
        }
    },

    async createNewAds({commit}, {ads,category}) {
        try {
            const url = this.state.BASE_URL + this.state.Path.balon;
            const response = await axios.post(url + 'createAds', ads, {
                params : {
                    category : category
                }
            });    
            const new_ads = response.data;
            commit('pushNewAds', new_ads);
            return new_ads;
        } catch(errors) {            
            return null;
        }
    },

    async changeActiveAds({commit}, {id,active}) {
        try {
            const url = this.state.BASE_URL + this.state.Path.balon;
            const response = await axios.post(url + 'changeActiveStatus/' + id, null ,{
                params : {
                    active : active
                }
            });    
            const new_ads = response.data;
            commit('changeActiveToSelectedAds', new_ads);
            return new_ads;
        } catch(errors) {            
            return null;
        }
    },


  }
});