import {
  createStore
} from 'vuex'

export default createStore({

  state: {
    title: [],
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ],
    seen: false,
    movies: [],
    ind: 0,
    load: false,
    m: [],
    identity: '',
    d: "null",
    d1: [],
    chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    text: "",
    genres: '',
    y: 0,
    msm: [],
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    sup:(state)=>{
      state.y=state.y+1
    },
    spin: (state, g) => {
      state.seen = true;
      console.log(g)
      state.ind = 0
      state.genres = ""
      state.d=""
      while (state.ind < 500) {
        state.ind = state.ind + 1
        state.text = " "
        for (let i = 0; i < 1; i++) {
          state.text += state.chars.charAt(Math.floor(Math.random() * state.chars.length))
        }
        const MOV = `https://www.omdbapi.com/?t=${state.text}&apikey=a5549d08`;
        fetch(MOV)
          .then(response => response.json())
          .then(dataans => {
            state.msm = dataans
            if (g == "" || g == "All Genres") {
              state.ind = 1005;
            }
            if (state.msm.length > 0) {
              let array = String(state.msm.Genre).split(',');
              for (let j = 0; j < array.length; j++) {
                if (g == array[j]) {
                  state.d = state.msm
                  j = array.length + 10
                  state.ind = 1005;
                }
              }
            }
          });
      }
      state.d = state.msm
    },
  },

  actions: {

  },
  modules: {}
})