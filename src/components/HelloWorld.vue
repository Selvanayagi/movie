<template>
  <div class="main">
    <div class="navbar">
      <div class="logo">
      </div>
      <div class="tvshows">
        <a href="">TV Shows</a>
        <a href="">Movies</a>
        <a href="">New,Coming,Leaving</a>
      </div>
      <div class="space"></div>
      <div class="login">
        <a href="" title="Access your Reelgood account">Login</a>
        |
        <a href="" title="Create a free Reelgood account">Signup</a>
      </div>
      <div class="form-search">
        <input type="text" class="search" placeholder="Where to Stream Anything">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTguMzMzIDguMzMzYTMuNzk4IDMuNzk4IDAgMCAxLTUuMzY1IDAgMy43OTggMy43OTggMCAwIDEgMC01LjM2NSAzLjc5OCAzLjc5OCAwIDAgMSA1LjM2NSAwIDMuNzk4IDMuNzk4IDAgMCAxIDAgNS4zNjVtMS4zMTUtNi42OGE1LjY2IDUuNjYgMCAwIDAtNy45OTUgMCA1LjY2IDUuNjYgMCAwIDAgMCA3Ljk5NWMxLjg2NCAxLjg2NCA0LjcxNCAyLjE0NSA2Ljg4My44NTZsNS4zMiA1LjMyMSAxLjk3LTEuOTY4LTUuMzIyLTUuMzIxYzEuMjg5LTIuMTcgMS4wMDgtNS4wMTktLjg1Ni02Ljg4MyIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
          alt="Search Icon" class="css-1ekd8ym e13urmph2">
      </div>
    </div>
    <div class="main-body">

      <h1 class="netflix-heading">Netflix Roulette: What Should I Watch?</h1>
      <div class="row">
        <div class="col-sm-8">
          <p class="net-content">If you're wondering what movie or TV show you should watch next, use the Netflix
            randomizer below. Use more than Netflix? Create a free Reelgood account and combine Netflix, HBO, Prime
            Video, Hulu, and 50+ others.</p>
        </div>
        <div class="col-sm-4">
          <button class="ams">
            Add More Services
          </button>
          <div class="css-1i0iosz e54d7gn0" role="button" tabindex="-1">
            <div class="css-1ginyiw e11eoopx0"><img src="https://img.reelgood.com/service-logos/netflix.svg"
                alt="netflix"></div>
            <div class="css-1ginyiw e11eoopx0"><img src="https://img.reelgood.com/service-logos/hulu.svg"
                alt="hulu_plus"></div>
            <div class="css-1ginyiw e11eoopx0"><img src="https://img.reelgood.com/service-logos/amazon_prime.svg"
                alt="amazon_prime"></div>
            <div class="css-1ginyiw e11eoopx0"><img src="https://img.reelgood.com/service-logos/disney_plus.svg"
                alt="disney_plus"></div><span class="css-3yt47t e54d7gn2">+ more</span>
          </div>
        </div>
      </div>
      <br><br>
           <div class="spin-div">
        <div class="row">
          <div class="col-sm-5">
            <div class="spin-row">
              <span class="spin-head">GENRE</span>
              <span class="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle spin-input" data-toggle="dropdown">
                  <span class="dropdown-name">{{genreselect}}</span>

                </button>
                <div class="dropdown-menu">
                  <span class="drop-spin">
                    <a class="dropdown-item" href="#" @click="sum('All')">All Genres</a>
                    <a class="dropdown-item" href="#" @click="sum('Cult')">Cult</a>
                    <a class="dropdown-item" href="#" @click="sum('Home')">Home & Garden</a>
                    <a class="dropdown-item" href="#" @click="sum('Science')">Science-Fiction</a>
                  </span>
                  <span class="drop-spin">
                    <a class="dropdown-item" href="#" @click="sum('Action')">Action & Adventure</a>
                    <a class="dropdown-item" href="#" @click="sum('Documentary')">Documentary</a>
                    <a class="dropdown-item" href="#" @click="sum('Horror')">Horror</a>
                    <a class="dropdown-item" href="#" @click="sum('Sport')">Sport</a>
                  </span>
                  <span class="drop-spin">
                    <a class="dropdown-item" href="#" @click="sum('Animation')">Animation</a>
                    <a class="dropdown-item" href="#" @click="sum('Drama')">Drama</a>
                    <a class="dropdown-item" href="#" @click="sum('Independent')">Independent</a>
                    <a class="dropdown-item" href="#" @click="sum('Standup')">Stand-up & talk</a>
                  </span>
                  <span class="drop-spin">
                    <a class="dropdown-item" href="#" @click="sum('Anime')">Anime</a>
                    <a class="dropdown-item" href="#" @click="sum('Family')">Family</a>
                    <a class="dropdown-item" href="#" @click="sum('LGBTQ')">LGBTQ</a>
                    <a class="dropdown-item" href="#" @click="sum('Thriller')">Thriller</a>
                  </span>
                  <span class="drop-spin">
                    <a class="dropdown-item" href="#" @click="sum('Biography')">Biography</a>
                    <a class="dropdown-item" href="#" @click="sum('Fantasy')">Fantasy</a>
                    <a class="dropdown-item" href="#" @click="sum('Musical')">Musical</a>
                    <a class="dropdown-item" href="#" @click="sum('Travel')">Travel</a>
                  </span>
                  <span class="drop-spin">
                    <a class="dropdown-item" href="#" @click="sum('Childern')">Childern</a>
                    <a class="dropdown-item" href="#" @click="sum('Food')">Food</a>
                    <a class="dropdown-item" href="#" @click="sum('Mystery')">Mystery</a>
                    <a href=""></a>
                  </span>
                  <span class="drop-spin">
                    <a class="dropdown-item" href="#" @click="sum('Comedy')">Comedy</a>
                    <a class="dropdown-item" href="#" @click="sum('GameShow')">Game Show</a>
                    <a class="dropdown-item" href="#" @click="sum('Reality')">Reality</a>
                    <a href=""></a>
                  </span>
                  <span class="drop-spin">
                    <a class="dropdown-item" href="#" @click="sum('Crime')">Crime</a>
                    <a class="dropdown-item" href="#" @click="sum('History')">History</a>
                    <a class="dropdown-item" href="#" @click="sum('Romance')">Romance</a>
                    <a href=""></a>
                  </span>
                </div>
              </span>
            </div>
            <div class="spin-row">
              <span class="spin-head">TYPE</span>
              <span class="checkbox">
                <label><input type="checkbox" value="">
                  <span class="check-spin">
                    Movies
                  </span>
                </label>
              </span>&nbsp;&nbsp;
              <span class="checkbox">
                <label><input type="checkbox" value="">
                  <span class="check-spin">TVShows</span>
                </label>
              </span>
            </div>
            <div class="spin-row">
              <span class="spin-head">IMDB</span>
              <span class="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle spin-input" data-toggle="dropdown">
                  <span class="dropdown-name">Any Score</span>
                </button>
                <div class="dropdown-menu">
                  <option class="dropdown-item" value="9">>9</option>
                  <option class="dropdown-item" value="8">>8</option>
                  <option class="dropdown-item" value="7">>7</option>
                  <option class="dropdown-item" value="6">>6</option>
                  <option class="dropdown-item" value="5">>5</option>
                  <option class="dropdown-item" value="any">Any Score</option>
                </div>
              </span>
            </div>
            <div class="spin-row">
              <span class="spin-head">REELGOOD</span>
              <span class="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle spin-input" data-toggle="dropdown">
                  <span class="dropdown-name">>90</span>
                </button>
                <div class="dropdown-menu">
                  <option class="dropdown-item" value="90">>90</option>
                  <option class="dropdown-item" value="80">>80</option>
                  <option class="dropdown-item" value="70">>70</option>
                  <option class="dropdown-item" value="60">>60</option>
                  <option class="dropdown-item" value="50">>50</option>
                  <option class="dropdown-item" value="any">Any Score</option>
                </div>
              </span>
            </div>
                   <button class="watch" @click="spinx()">SPIN</button>
          </div>
          <div class="col-sm-7">
            <p class="content-spin" v-show="!seen">Let fate take the wheel... Have a spin.</p>
            <div v-show="l" class="movie-details">
              <span class="drop-spin-details">
                <img :src="`${da.Poster}`" alt="" class="poster">
                <div class="m-info">
                  <h1 class="movie-title">{{da.Title}}</h1>
                  <div class="m-des">
                    {{da.Year}}&nbsp;&nbsp;
                    IMDB:{{da.imdbRating}} / 10&nbsp;&nbsp;
                    {{da.Runtime}}&nbsp;&nbsp;
                    {{da.Genre}}
                    <br>
                    <br>
                    {{d.Plot}}
                  </div>
                  <button class="want-to-see">+  Want To See</button>&nbsp;&nbsp;&nbsp;
                  <button class="seen-it"> <i class="fa fa-check" style="font-size:15px"></i>   Seen It</button>
                   <button class="watch">WATCH NOW</button>
                  </div>
                  <br>
              </span>
            </div>
            <div v-show="p" style="text-align:center">
              <img src="data:image/jpeg;base64,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" alt="">
            </div>
            <div v-show="seen1" v-bind:key="d" class="movie-details" >
              <span class="drop-spin-details">
                <img :src="`${d.Poster}`" alt="" class="poster">
                <div class="m-info">
                  <h1 class="movie-title">{{d.Title}}</h1>
                  <div class="m-des">
                    {{d.Year}}&nbsp;&nbsp;
                    IMDB:{{d.imdbRating}} / 10&nbsp;&nbsp;
                    {{d.Runtime}}&nbsp;&nbsp;
                    {{d.Genre}}
                    <br>
                    <br>
                    {{d.Plot}}
                  </div>
                  <button class="want-to-see">+  Want To See</button>&nbsp;&nbsp;&nbsp;
                  <button class="seen-it"> <i class="fa fa-check" style="font-size:15px"></i>   Seen It</button>
                   <button class="watch">WATCH NOW</button>
                  </div>
                  <br>
              
              </span>
             
            </div>
          </div>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
  } from 'vuex'

  export default {

    name: 'HelloWorld',
    data() { 
      return {
        genreselect:'All Genres',
        seen1:false,
        l:false,
        t:"",
        c:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        da:[],
        p:false
      }
    },
    computed: mapState([
      // 'movies',
      'loading',
      'title',
      'd',
      'seen',
      'ind',
      'search',
      'identity',
      'load',
      'genres',
      'y',
    ]),
    methods: { 
      ...mapMutations([
        'spin',
        'mov',
        'sam',
        'spinrand',
        'sup'
      ]),
      sum:function(k){
        console.log(k)
        this.genreselect=k;
      },
      ma:function(){
        this.t = " "
        for (let i = 0; i < 1; i++) {
          this.t += this.c.charAt(Math.floor(Math.random() * this.c.length))
        }
        const MOV = `https://www.omdbapi.com/?t=${this.t}&apikey=a5549d08`;
        fetch(MOV)
          .then(response => response.json())
          .then(dataans => {
            this.da=dataans;
          });
      },
      spinx: function () {
        console.log(this.d)
        if(this.y==0){
          this.p=true
          setTimeout(() => this.p = false,this.l=true, 100000)
          // this.l=true;
          this.sup();
          this.ma();
        }
        else{
          this.l=false;
          this.p=true
          setTimeout(() => this.p = false,this.seen1=true, 100000 )
          // this.seen1=true;
        }
        this.spin(this.genreselect);
      },
    }
  }
</script>

<style scoped>
button:focus{
  outline:none;
}
.drop-spin-details, .drop-spin{
  display: flex;
}
.poster{
  max-width: 150px;
  height: 150px;
}
.watch {
    margin-top: 7%;
    background: linear-gradient(145deg, #00e18c, #00e36a);
    border: none;
    border-radius: 24px;
    line-height: 39px;
    width: 93%;
    font-weight: 600;
    margin-bottom: 8%;
}
.seen-it{
  background-color: rgba(255, 255, 255, 0.16);
    border: none;
    border-radius: 22px;
    color: aliceblue;
    line-height: 34px;
    width: 31%;
    font-weight: 600;
}
.want-to-see{
  background-color: rgba(255, 255, 255, 0.16);
  border: none;
  border-radius: 22px;
  color: aliceblue;
  line-height: 34px;
  width: 56%;
  font-weight: 600;
}
  .m-des {
    font-size: 14px;
    margin-bottom: 11%;
    width: 89%;
  }

  .m-info {
    margin-left: 4%;
  }

  .movie-title {
    font-size: 20px;
    text-decoration: underline;
    font-weight: 700;
  }

  .movie-details {
    margin-top: 3%;
    color: aliceblue;
    margin-left: -1em;
  }
  .content-spin {
    color: aliceblue;
    text-align: center;
    font-size: 20px;
    margin-top: 19%;
  }

  .check-spin {
    font-size: 15px;
    color: aliceblue;
    margin-left: 5px;
  }
  .dropdown-item {
    color: aliceblue;
    font-size: 14px;
    width: 25%;
  }

  .dropdown-item:focus,
  .dropdown-item:hover {
    color: aliceblue;
    text-decoration: none;
    background-color: rgba(155, 155, 155, 0.4);
  }

  .dropdown-menu.show {
    position: absolute;
    margin-left: 2px;
    background-color: rgba(96, 102, 108, 0.95);
    margin-top: 3px;
    z-index: 1;
    opacity: 1;
    pointer-events: initial;
    display: flex;
    width: 610px;
    max-height: 260px;
    transition: opacity 140ms ease 0s;
    border-radius: 4px;
    flex-flow: column wrap;
  }

  .dropdown-name {
    /* max-width: 1px; */
    display: inline-block;
    width: 107px;
  }

  .dropdown-toggle::after {
    margin-left: 4.255em;
  }

  .spin-row {
    margin-top: 4%;
    margin-bottom: 4%;
  }

  .btn-primary:not(:disabled):not(.disabled):active:focus,
  .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: unset;
  }

  .btn-primary:focus {
    color: #fff;
    background-color: rgba(155, 155, 155, 0.2);
    border-color: rgba(155, 155, 155, 0.2);
    box-shadow: unset;
  }

  .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: unset;
  }

  .btn-primary:not(:disabled):not(.disabled):active,
  .show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: rgba(155, 155, 155, 0.2);
    border-color: rgba(155, 155, 155, 0.2);
  }

  .btn-primary:hover {
    color: #fff;
    background-color: rgba(155, 155, 155, 0.2);
    border-color: rgba(155, 155, 155, 0.2);
  }

  .show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: rgba(155, 155, 155, 0.2);
    border-color: rgba(155, 155, 155, 0.2);
  }

  .btn-focus {
    box-shadow: unset;
  }

  .spin-input {
    background-color: rgba(155, 155, 155, 0.2);
    padding: 8px 10px 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid rgba(155, 155, 155, 0.2);
    width: 57%;
    line-height: 1em;
    text-align: left;
  }

  .spin-div {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    text-align: left;
  }

  .spin-head {
    width: 109px;
    display: inline-block;
    color: aliceblue;
    margin-left: 7%;
    font-size: 14px;
  }

  .css-1i0iosz {
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    outline: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 10px 0 0;
  }

  .css-1ginyiw {
    width: 56px;
    height: 28px;
    display: inline-block;
    overflow: hidden;
    border-radius: 3px;
    margin: 0 4px;
  }

  .css-1ginyiw img {
    position: relative;
    width: 100%;
  }

  .css-3yt47t {
    font-size: 12px;
    text-align: center;
    color: rgb(160, 160, 160);
    vertical-align: middle;
    cursor: pointer;
    margin-left: 4px;
  }

  .ams {
    transition: background 100ms, opacity 100ms;
    border: none;
    outline: none;
    cursor: pointer;
    line-height: 1;
    color: #fff;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 24px;
    font-size: 16px;
    padding: 8px 32px;
    color: #fff;
    font-family: 'ProximaNova-Bold', Arial, sans-serif;
    font-size: 16px;
    padding: 12px 32px;
    min-width: 269px;
  }

  .net-content {
    max-width: 600px;
    color: darkgrey;
    text-align: initial;
  }

  .netflix-heading {
    margin-top: 15%;
    color: white;
    text-align: left;
    font-size: 32px;
    font-weight: 600;
  }

  .main-body {
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 6%;
  }

  .e13urmph2 {
    opacity: 0.8;
  }

  .css-1ekd8ym {
    min-width: 16px;
    height: 16px;
    cursor: pointer;
    margin-right: 16px;
  }

  .search {
    background-image: linear-gradient(107deg, #1a303c, #18372c);
    border: 1px solid #667778;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;
    width: 288px;
    transition: max-height 160ms, width 150ms ease-in-out, border-color 100ms;
    z-index: 3;
    overflow: hidden;
    will-change: height, max-height;
    top: unset;
    line-height: 36px;
    font-size: 15px;
  }

  .form-search {
    margin-left: 4%;
  }

  .space {
    width: 19%;
  }

  .login a {
    font-size: 15px;
    font-family: inherit;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    color: aliceblue;
    margin-right: 6px;
    margin-left: 6px;
  }

  .logo {
    margin-left: 4%;
    background-size: contain;
    background-repeat: no-repeat;
    outline: none;
    -webkit-user-drag: none;
    cursor: pointer;
    width: 100px;
    min-width: 100px;
    height: 24px;
    margin-right: 40px;
    margin-bottom: 3.5px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTEgMjciPjxwYXRoIGQ9Ik0zNi4yNzcgMTUuNzU1di44MTRoLTguNzcyYTMuMDcgMy4wNyAwIDAgMCAzLjAwOCAyLjI4YzEuMDcgMCAyLjI3OC0uNDQ1IDIuOTQtMS4wODJsMS44NSAyLjUxYy0xLjIwNCAxLjEwMy0zLjA3NiAxLjczNS01LjEzNSAxLjczNS0zLjk0NiAwLTYuNzAxLTIuNzA0LTYuNzAxLTYuNTc2IDAtMy43MzYgMi43OTYtNi41NTIgNi41MDQtNi41NTIgMy43MTMgMCA2LjMwNiAyLjgyNSA2LjMwNiA2Ljg3em0tNi4zMDYtMy43MDhjLTEuNDk3IDAtMi4yNjUuOTc1LTIuNTE3IDEuOTQxaDUuMDU3Yy0uMTk3LS45NjMtLjk0NC0xLjk0LTIuNTQtMS45NHptMTkuOTYgMy43MDh2LjgxNEg0MS4xNmEzLjA3IDMuMDcgMCAwIDAgMy4wMDggMi4yOGMxLjA3IDAgMi4yNzktLjQ0NSAyLjk0LTEuMDgybDEuODUgMi41MWMtMS4yMDQgMS4xMDMtMy4wNzYgMS43MzUtNS4xMzUgMS43MzUtMy45NDUgMC02LjcwMS0yLjcwNC02LjcwMS02LjU3NiAwLTMuNzM2IDIuNzk2LTYuNTUyIDYuNTA0LTYuNTUyIDMuNzEzIDAgNi4zMDYgMi44MjUgNi4zMDYgNi44N3ptLTYuMzA2LTMuNzA4Yy0xLjQ5NyAwLTIuMjY0Ljk3NS0yLjUxNyAxLjk0MWg1LjA1N2MtLjE5Ny0uOTYzLS45NDQtMS45NC0yLjU0LTEuOTR6bTcuODU2IDkuNjcxaDMuODE3VjQuNjYyaC0zLjgxN3pNNzYuOTM3IDguODg0YzMuNzc4IDAgNi41MiAyLjc1NSA2LjUyIDYuNTUyIDAgMy44MS0yLjc0MiA2LjU3Ni02LjUyIDYuNTc2LTMuNzY0IDAtNi40OTYtMi43NjYtNi40OTYtNi41NzYgMC0zLjc5NyAyLjczMi02LjU1MiA2LjQ5Ni02LjU1MnptLS4wMiA5LjY3YzEuODE0IDAgMi42NC0xLjYxNiAyLjY0LTMuMTE4IDAtMS40OS0uODI2LTMuMDk0LTIuNjQtMy4wOTQtMS44MDYgMC0yLjYxNCAxLjU1NC0yLjYxNCAzLjA5NCAwIDEuNTUyLjgwOCAzLjExOCAyLjYxNSAzLjExOHptMTMuODgtOS42N2MzLjc3OCAwIDYuNTIgMi43NTUgNi41MiA2LjU1MiAwIDMuODEtMi43NDIgNi41NzYtNi41MiA2LjU3Ni0zLjc2NSAwLTYuNDk3LTIuNzY2LTYuNDk3LTYuNTc2IDAtMy43OTcgMi43MzItNi41NTIgNi40OTctNi41NTJ6bS0uMDIgOS42N2MxLjgxMyAwIDIuNjQtMS42MTYgMi42NC0zLjExOCAwLTEuNDktLjgyNy0zLjA5NC0yLjY0LTMuMDk0LTEuODA2IDAtMi42MTUgMS41NTQtMi42MTUgMy4wOTQgMCAxLjU1Mi44MDkgMy4xMTggMi42MTUgMy4xMTh6bTE2LjI3Ny0xMy44OTJoMy44NDF2MTcuMDU2aC0zLjg0MXYtLjk4M2E0LjkzNiA0LjkzNiAwIDAgMS0zLjMyOCAxLjI3N2MtMy4zNTkgMC01LjYxNi0yLjYzMy01LjYxNi02LjU1MiAwLTMuOTMzIDIuMjU3LTYuNTc2IDUuNjE2LTYuNTc2IDEuMjYxIDAgMi40MTUuNDUgMy4zMjggMS4yODJWNC42NjJ6bTAgOC43OThjLS41MDctLjY2Mi0xLjQ2My0xLjExOC0yLjM2Ny0xLjExOC0xLjU5MiAwLTIuNjYyIDEuMjUzLTIuNjYyIDMuMTE4IDAgMS44NSAxLjA3IDMuMDk0IDIuNjYyIDMuMDk0LjkwNCAwIDEuODYtLjQ1NiAyLjM2Ny0xLjExOVYxMy40NnptLTg3LjU4MSAyLjI2OGMxLjU4Mi0uNjI3IDMuMjEtMi4yNDIgMy4yMS00Ljk5IDAtMy4zNS0yLjM2LTUuNjAyLTUuODctNS42MDJoLTEuODk1djMuODY2aDEuMjU0Yy45NCAwIDEuODkuNTggMS44OSAxLjY4OCAwIDEuMTA3LS45NSAxLjY4Ny0xLjg5IDEuNjg3aC0zLjE5N1Y5Ljk3MmwtNC41NDcgMi40NTR2OS4zODhoNC41NDd2LTUuNTQ3aDEuOTE4bDIuNzYgNS41NDdoNS4yMTFsLTMuMzkxLTYuMDg2ek02NS42NzQgOS4zOWgzLjg0MXYxMS4zODZjMCA1LjM4Mi00LjczNyA1Ljk2My02Ljc3NCA1Ljk2My0uNzcgMC0xLjQ1NC0uMDY1LTIuMDktLjJsLS4yNzEtLjA1OC0uMDIxLTMuMjcyLjQxNS4wODRjLjAxLjAwMiAxLjAyLjIwNCAxLjk2OS4yMDkuODggMCAyLjkzLS4yNTggMi45My0yLjY1MnYtLjMyOWMtLjkzOC44NjYtMi4wOTMgMS4zMzQtMy4zMjcgMS4zMzQtMy4zOTYgMC01LjU5Mi0yLjUwNC01LjU5Mi02LjM4czIuMTk2LTYuMzggNS41OTItNi4zOGMxLjI2NiAwIDIuNDAxLjQ0MiAzLjMyOCAxLjI4OFY5LjM5em0wIDQuMjc4Yy0uNDc1LS42NDItMS40Ni0xLjExNS0yLjM0Mi0xLjExNS0xLjY0MiAwLTIuNjYzIDEuMTItMi42NjMgMi45MjEgMCAxLjgwMyAxLjAyIDIuOTIzIDIuNjYzIDIuOTIzLjg2NyAwIDEuODUzLS40NzUgMi4zNDItMS4xMTh2LTMuNjExek0wIDBsMTEuOTkgNi44OTZMMCAxMy43OVYuMDAxem0xLjYzIDYuMzU1aDEuMDk3djIuNzM3bDQuODQ1LTIuODY1TDEuNjI5IDIuODF2My41NDV6IiBmaWxsPSIjMDBEQzg5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  }
  .navbar {
    height: 64px;
    background-color: #081118;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 16px;
    position: fixed;
    width: 100%;
    z-index: 45;
    top: 0px;
    bottom: 60px;
    will-change: top, border-bottom-width;
    left: 0px;
    transition: top 150ms ease 0s, border-bottom-width 150ms ease 0s;
    border-bottom: 0px solid rgba(255, 255, 255, 0.16);
  }

  .tvshows a {
    font-size: 15px;
    font-family: inherit;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    color: aliceblue;
    margin-right: 2em;
  }
  @media only screen and (max-width: 600px){
  .navbar{
    height: 189px !important;
  }
  .tvshows a{
    font-size: 14px !important;
  }
  .space{
    display: none;
  }
  .login, .logo {
    margin-left: 33%;
}
.main-body{
  margin-top: 56%;
}
.spin-head{
  width: 78px;
}
.dropdown-toggle[data-v-469af010]::after {
    margin-left: 0.255em;
}
.drop-spin-details{
  display: list-item;
}
.m-des{
  width: 100%;
}
.m-info {
    text-align: center;
}
.poster{
  margin-left: 35%;
}
.want-to-see, .seen-it{
  font-weight: 100;
    font-size: 12px;
}
}
</style>