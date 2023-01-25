import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'
import axios from "axios";

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
  state:{
    user : null,

    categories: [],
    subcategories: [],
    firstCategory: '',
    places: [],
    userEmail: '',
    isLogged:false,
    currentPosition: {},
    backEndLink: "http://localhost:8094/",
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
    async login(state){
      const user = await fetch(this.getters.getBackEndLink+"/login", 
      {
        method: "GET"
      });
      const u = await user.json();
      console.log(u);
      state.commit("setUserEmail", u['email']);
      return u.length;
    },

    async setCurrentPosition(state, payload){
      state.commit("setPos", payload.pos);
    },


    async getUserByID(state, email) {
      const BASE_URL = 'http://localhost:8080/api/users/getUser/';
      try {
        const response = await axios.get(`${BASE_URL}` + email,);    
        const user = response.data;    
        console.log(user);  
        state.commit("setUser", user);
        return user;

      } catch (errors) {
        console.error(errors);
        console.log(state);
      }
    },

    async editUser(state, user) {
      const BASE_URL = 'http://localhost:8080/api/users/getAllTest';
      //const BASE_URL = 'http://localhost:8080/api/users/getAll';

      try {
        //const response = await axios.get(`${BASE_URL}`);    
        const response = await axios.post(`${BASE_URL}`, { params : {param : 'Ciao ciao ciao ciao ciao!!!!'} });    
        const userr = response.data;    
        console.log(userr);  
      } catch (errors) {
        console.error(errors);
        console.log(state);
        console.log(user);
      }
    }
  }
});