import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
  state:{
    categories: [],
    subcategories: [],
    firstCategory: '',
    places: [],
    userEmail: '',
    isLogged:false,
    currentPosition: {},
    backEndLink: "http://localhost:8080/",
  },

  getters:{
    isLogged: state => {
      return state.isLogged
    }
  },

  mutations:{ // Syncronus
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
  }
});