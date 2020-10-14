import { createStore } from 'vuex'

export default createStore({
  
  state: {
    title: [],
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ],
    seen:false,
    movies:[],
    ind:0,
    loading: true,
    m:[],
    identity:'',
    d:[]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    mov:(state,mn)=>{
      console.log(mn)
      const MOVIE_API_URL = `https://www.omdbapi.com/?s=${mn}&apikey=a5549d08`;
      console.log(MOVIE_API_URL)
      fetch(MOVIE_API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
          state.movies.push(jsonResponse.Search);
          state.m=jsonResponse.Search
          console.log(jsonResponse.Search)
          console.log(state.m[0])
          console.log(state.m[state.ind])
          state.title=state.m[state.ind-1]
          console.log(state.m.length)
          state.identity=state.m[state.ind-1].imdbID
        });
    },
    sam:(state,i)=>{
      console.log("hello")
      const MO = `https://www.omdbapi.com/?i=${i}&apikey=a5549d08`;
      console.log(MO)
      fetch(MO)
        .then(response => response.json())
        .then(jsonResponse => {
          state.d=jsonResponse
          return;
        });
    },
    spin:(state,id)=>{
      state.seen=true;
      console.log(id)
      if(id==(state.m.length)){
        state.ind=0;
      }
      state.ind=state.ind+1
    },
  },

  actions: {
    
  },
  modules: {
  }
})
