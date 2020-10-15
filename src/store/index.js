import {
  createStore
} from 'vuex'

export default createStore({

  state: {
    seen: false,
    d: "null",
    chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    text: "",
    type:"",
    error:false,
    p:false,
    s:true
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    typem:(state,m)=>{
     if(state.type==m)
      state.type=""
    else
    state.type=m;
    console.log(state.type)
    },
    types:(state,t)=>{
      if(state.type==t)
        state.type=""
      else
        state.type=t
      console.log(state.type)

    },
    spin: (state, g) => {
      state.error=false
      state.s=false;
      state.seen = false;
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
      console.log(MOV)
      fetch(MOV)
        .then(response => response.json())
        .then(dataans => {
          if(dataans.Error){
            state.error=true;
            state.seen=false
          }
          else{
            state.p=true;
            setTimeout(()=>{
              state.p=false
            },1000);
            setTimeout(()=>{
              state.seen=true
            },1000);
            state.d = dataans
          }
         
        });
    },
  },
  actions: {
  },
  modules: {}
})