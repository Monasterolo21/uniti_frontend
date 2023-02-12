import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'
import axios from "axios";

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
  state:{
    user : null,
    BASE_URL : 'http://localhost:8080/api/',
    Path : {
        users : 'users/'
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


    isLogged: state => {
      return state.isLogged
    }
  },

  mutations:{ // Syncronus
    setUser(state, payload) {
      state.user = payload;
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
        console.log(user);  
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
            const response = await axios.post(url + 'editUserInfo/', userEdited); 
            const user = response.data;
            console.log(user);  
            commit("setUser", user);
            return user;
        } catch(errors) {
            console.error(errors);
            return null;
        }
    }
  }
});