
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
    home_board_ID : 1,

    unito_boards : null,
    current_unito_board : null,
    current_unito_board_contents : null,

    BASE_URL : 'http://localhost:8080/api/',
    Path : {
        users : 'users/',
        contents : 'contents/',
        boards : 'boards/'
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
    getUnitoBoards : state => state.unito_boards,
    getCurrentBoard : state => state.current_unito_board,
    getUnitoBoardContents : state => {
        if(!state.current_unito_board_contents)
            return [];
        else
            return state.current_unito_board_contents.sort((a,b) => b.id - a.id);
    },




    isLogged: state => {
      return state.isLogged
    }
  },



  mutations:{ // Syncronus

    setUser(state, payload) {
      state.user = payload;
    },

    setHomeContent(state, payload) {
      state.home_contents = payload;
      console.log('Added to Home')
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






    setCategories(state, payload){
      state.categories = payload;
    },
    setSubcategories(state, payload){
      state.subcategories = payload;
    },
    setFirstCategory(state, payload){
      state.firstCategory = payload;
    },
    setPlaces(state, payload){
      state.places = payload;
    },
    setUserEmail(state, payload){
      state.userEmail = payload;
      state.isLogged = true;
    },
    setPos(state, payload){
      state.currentPosition = payload;
    },
    setPlaceById(state, payload){
      state.places.filter(place => place.id == payload.id)[0] = payload;
    },
    setDistanceById(state, payload){
      console.log(payload.distanza);
      state.places.filter(place => place.id == payload.id)[0] = payload;
    }
  },

  actions: { // Async

    async getUserByEmail({commit}, email) {
      try {
        const url = this.state.BASE_URL + this.state.Path.users;
        const response = await axios.get(url + 'getUser/' + email);    
        const user = response.data;    
        commit("setUser", user);
        return user;

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
            console.log(user);  
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
    }
  }
});