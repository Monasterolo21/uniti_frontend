
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
    home_content : null,
    home_content_ID : 1,
    BASE_URL : 'http://localhost:8080/api/',
    Path : {
        users : 'users/',
        contents : 'contents/',
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
      if(!state.home_content)
        return [];
      else
        return state.home_content.sort((a,b) => b.id - a.id);
    },
    //employees.sort((a, b) => b.age - a.age);

    isLogged: state => {
      return state.isLogged
    }
  },

  mutations:{ // Syncronus
    setUser(state, payload) {
      state.user = payload;
    },

    setHomeContent(state, payload) {
      state.home_content = payload;
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

    async getHomeContent({commit}) {
      try {
        const url = this.state.BASE_URL + this.state.Path.contents;
        const response = await axios.get(url + 'getAllByBoard', {
          params : { board_id : this.state.home_content_ID}
        }); 
        const contents = response.data;
        console.log(contents)
        commit('setHomeContent',contents);
        return contents;
      } catch(errors) {
          console.log(errors);
          return null;
      }
    }
  }
});