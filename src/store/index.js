import {
  createStore
} from 'vuex'

export default createStore({

  state: {
    seen: false,
    d: "null",
    chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    text: "",
    type:'',
    error:false
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    typem:(state,m)=>{
      console.log(m)
      if(m==true)
        state.type="movies"
    },
    types:(state,t)=>{
      if(t==true)
        state.type="series"
    },
    spin: (state, g) => {
      state.seen = true;
      if(g==""){
        state.text = " "
        for (let i = 0; i < 1; i++) {
          state.text += state.chars.charAt(Math.floor(Math.random() * state.chars.length))
        }
      }
      else{
        state.text=g;
      } 
      const MOV = `https://www.omdbapi.com/?t=${state.text}&apikey=a5549d08&type=${state.type}`;
      fetch(MOV)
        .then(response => response.json())
        .then(dataans => {
          if(dataans.Error){
            state.error=true;
            state.seen=false
          }
          state.d = dataans
        });
    },
  },
  actions: {
  },
  modules: {}
})