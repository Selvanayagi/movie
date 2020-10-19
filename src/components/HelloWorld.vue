<template>
  <div class="main">
    <div class="navbar">
      <div class="logo">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTEgMjciPjxwYXRoIGQ9Ik0zNi4yNzcgMTUuNzU1di44MTRoLTguNzcyYTMuMDcgMy4wNyAwIDAgMCAzLjAwOCAyLjI4YzEuMDcgMCAyLjI3OC0uNDQ1IDIuOTQtMS4wODJsMS44NSAyLjUxYy0xLjIwNCAxLjEwMy0zLjA3NiAxLjczNS01LjEzNSAxLjczNS0zLjk0NiAwLTYuNzAxLTIuNzA0LTYuNzAxLTYuNTc2IDAtMy43MzYgMi43OTYtNi41NTIgNi41MDQtNi41NTIgMy43MTMgMCA2LjMwNiAyLjgyNSA2LjMwNiA2Ljg3em0tNi4zMDYtMy43MDhjLTEuNDk3IDAtMi4yNjUuOTc1LTIuNTE3IDEuOTQxaDUuMDU3Yy0uMTk3LS45NjMtLjk0NC0xLjk0LTIuNTQtMS45NHptMTkuOTYgMy43MDh2LjgxNEg0MS4xNmEzLjA3IDMuMDcgMCAwIDAgMy4wMDggMi4yOGMxLjA3IDAgMi4yNzktLjQ0NSAyLjk0LTEuMDgybDEuODUgMi41MWMtMS4yMDQgMS4xMDMtMy4wNzYgMS43MzUtNS4xMzUgMS43MzUtMy45NDUgMC02LjcwMS0yLjcwNC02LjcwMS02LjU3NiAwLTMuNzM2IDIuNzk2LTYuNTUyIDYuNTA0LTYuNTUyIDMuNzEzIDAgNi4zMDYgMi44MjUgNi4zMDYgNi44N3ptLTYuMzA2LTMuNzA4Yy0xLjQ5NyAwLTIuMjY0Ljk3NS0yLjUxNyAxLjk0MWg1LjA1N2MtLjE5Ny0uOTYzLS45NDQtMS45NC0yLjU0LTEuOTR6bTcuODU2IDkuNjcxaDMuODE3VjQuNjYyaC0zLjgxN3pNNzYuOTM3IDguODg0YzMuNzc4IDAgNi41MiAyLjc1NSA2LjUyIDYuNTUyIDAgMy44MS0yLjc0MiA2LjU3Ni02LjUyIDYuNTc2LTMuNzY0IDAtNi40OTYtMi43NjYtNi40OTYtNi41NzYgMC0zLjc5NyAyLjczMi02LjU1MiA2LjQ5Ni02LjU1MnptLS4wMiA5LjY3YzEuODE0IDAgMi42NC0xLjYxNiAyLjY0LTMuMTE4IDAtMS40OS0uODI2LTMuMDk0LTIuNjQtMy4wOTQtMS44MDYgMC0yLjYxNCAxLjU1NC0yLjYxNCAzLjA5NCAwIDEuNTUyLjgwOCAzLjExOCAyLjYxNSAzLjExOHptMTMuODgtOS42N2MzLjc3OCAwIDYuNTIgMi43NTUgNi41MiA2LjU1MiAwIDMuODEtMi43NDIgNi41NzYtNi41MiA2LjU3Ni0zLjc2NSAwLTYuNDk3LTIuNzY2LTYuNDk3LTYuNTc2IDAtMy43OTcgMi43MzItNi41NTIgNi40OTctNi41NTJ6bS0uMDIgOS42N2MxLjgxMyAwIDIuNjQtMS42MTYgMi42NC0zLjExOCAwLTEuNDktLjgyNy0zLjA5NC0yLjY0LTMuMDk0LTEuODA2IDAtMi42MTUgMS41NTQtMi42MTUgMy4wOTQgMCAxLjU1Mi44MDkgMy4xMTggMi42MTUgMy4xMTh6bTE2LjI3Ny0xMy44OTJoMy44NDF2MTcuMDU2aC0zLjg0MXYtLjk4M2E0LjkzNiA0LjkzNiAwIDAgMS0zLjMyOCAxLjI3N2MtMy4zNTkgMC01LjYxNi0yLjYzMy01LjYxNi02LjU1MiAwLTMuOTMzIDIuMjU3LTYuNTc2IDUuNjE2LTYuNTc2IDEuMjYxIDAgMi40MTUuNDUgMy4zMjggMS4yODJWNC42NjJ6bTAgOC43OThjLS41MDctLjY2Mi0xLjQ2My0xLjExOC0yLjM2Ny0xLjExOC0xLjU5MiAwLTIuNjYyIDEuMjUzLTIuNjYyIDMuMTE4IDAgMS44NSAxLjA3IDMuMDk0IDIuNjYyIDMuMDk0LjkwNCAwIDEuODYtLjQ1NiAyLjM2Ny0xLjExOVYxMy40NnptLTg3LjU4MSAyLjI2OGMxLjU4Mi0uNjI3IDMuMjEtMi4yNDIgMy4yMS00Ljk5IDAtMy4zNS0yLjM2LTUuNjAyLTUuODctNS42MDJoLTEuODk1djMuODY2aDEuMjU0Yy45NCAwIDEuODkuNTggMS44OSAxLjY4OCAwIDEuMTA3LS45NSAxLjY4Ny0xLjg5IDEuNjg3aC0zLjE5N1Y5Ljk3MmwtNC41NDcgMi40NTR2OS4zODhoNC41NDd2LTUuNTQ3aDEuOTE4bDIuNzYgNS41NDdoNS4yMTFsLTMuMzkxLTYuMDg2ek02NS42NzQgOS4zOWgzLjg0MXYxMS4zODZjMCA1LjM4Mi00LjczNyA1Ljk2My02Ljc3NCA1Ljk2My0uNzcgMC0xLjQ1NC0uMDY1LTIuMDktLjJsLS4yNzEtLjA1OC0uMDIxLTMuMjcyLjQxNS4wODRjLjAxLjAwMiAxLjAyLjIwNCAxLjk2OS4yMDkuODggMCAyLjkzLS4yNTggMi45My0yLjY1MnYtLjMyOWMtLjkzOC44NjYtMi4wOTMgMS4zMzQtMy4zMjcgMS4zMzQtMy4zOTYgMC01LjU5Mi0yLjUwNC01LjU5Mi02LjM4czIuMTk2LTYuMzggNS41OTItNi4zOGMxLjI2NiAwIDIuNDAxLjQ0MiAzLjMyOCAxLjI4OFY5LjM5em0wIDQuMjc4Yy0uNDc1LS42NDItMS40Ni0xLjExNS0yLjM0Mi0xLjExNS0xLjY0MiAwLTIuNjYzIDEuMTItMi42NjMgMi45MjEgMCAxLjgwMyAxLjAyIDIuOTIzIDIuNjYzIDIuOTIzLjg2NyAwIDEuODUzLS40NzUgMi4zNDItMS4xMTh2LTMuNjExek0wIDBsMTEuOTkgNi44OTZMMCAxMy43OVYuMDAxem0xLjYzIDYuMzU1aDEuMDk3djIuNzM3bDQuODQ1LTIuODY1TDEuNjI5IDIuODF2My41NDV6IiBmaWxsPSIjMDBEQzg5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="> 
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
    <div class="navbar-mob">
      <span>
        <br>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTE0LjIxIDExLjQ3N2wyLjQ3NSA0LjQ0MWgtMy44MDNsLTIuMDE0LTQuMDQ3aC0xLjR2NC4wNDdINi4xNTF2LTYuODVsMy4zMTctMS43OTF2MS43NTVoMi4zMzNjLjY4NiAwIDEuMzgtLjQyMyAxLjM4LTEuMjMxIDAtLjgwOS0uNjk0LTEuMjMyLTEuMzgtMS4yMzJoLS45MTVWMy43NWgxLjM4MmMyLjU2MyAwIDQuMjg0IDEuNjQyIDQuMjg0IDQuMDg3IDAgMi4wMDUtMS4xODcgMy4xODMtMi4zNDIgMy42NDF6TTAgMGw4Ljc1IDUuMDMyTDAgMTAuMDY0VjB6bTEuMTg5IDQuNjM3aC44djEuOTk3bDMuNTM2LTIuMDlMMS4xODkgMi4wNXYyLjU4N3oiIGZpbGw9IiMwMERDODkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="">
        &nbsp;&nbsp;&nbsp;       
        <a class="nav-tv">TV</a>
        <a class="nav-tv">Movies</a>
        <a class="nav-tv">New</a>
        &nbsp;&nbsp;&nbsp;       
        &nbsp;&nbsp;&nbsp;       
        &nbsp;&nbsp;&nbsp;       

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTciIGhlaWdodD0iMTciPjxkZWZzPjxjaXJjbGUgaWQ9ImEiIGN4PSIxMS41IiBjeT0iMTEuNSIgcj0iMTEuNSIvPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtNSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMTEuNSIgY3k9IjEwLjUiIHI9IjQuMTExIiBzdHJva2U9IiNENUQ1RDMiIHN0cm9rZS13aWR0aD0iMiIvPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxjaXJjbGUgY3g9IjExLjUiIGN5PSIyMS43MjIiIHI9IjYuNjY3IiBzdHJva2U9IiNENUQ1RDMiIHN0cm9rZS13aWR0aD0iMiIgbWFzaz0idXJsKCNiKSIvPjwvZz48L3N2Zz4=" alt="">
        &nbsp;&nbsp;&nbsp;       
        &nbsp;&nbsp;
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTguMzMzIDguMzMzYTMuNzk4IDMuNzk4IDAgMCAxLTUuMzY1IDAgMy43OTggMy43OTggMCAwIDEgMC01LjM2NSAzLjc5OCAzLjc5OCAwIDAgMSA1LjM2NSAwIDMuNzk4IDMuNzk4IDAgMCAxIDAgNS4zNjVtMS4zMTUtNi42OGE1LjY2IDUuNjYgMCAwIDAtNy45OTUgMCA1LjY2IDUuNjYgMCAwIDAgMCA3Ljk5NWMxLjg2NCAxLjg2NCA0LjcxNCAyLjE0NSA2Ljg4My44NTZsNS4zMiA1LjMyMSAxLjk3LTEuOTY4LTUuMzIyLTUuMzIxYzEuMjg5LTIuMTcgMS4wMDgtNS4wMTktLjg1Ni02Ljg4MyIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="">
      </span>
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
              <span class="spin-head">MOVIE NAME</span>
              <span>
                <input type="text" v-model="mname" class="inp-mov">
              </span>
            </div>
            <div class="spin-row">
              <span class="spin-head">TYPE</span>
              <span class="checkbox">
                <label><input type="checkbox" value="" v-model="movies" @change="typem('movie')">
                  <span class="check-spin">
                    Movies
                  </span>
                </label>
              </span>&nbsp;&nbsp;
              <span class="checkbox">
                <label><input type="checkbox" value="" v-model="TVShows" @change="types('series')">
                  <span class="check-spin">TVShows</span>
                </label>
              </span>
            </div>
          <button class="spin" @click="spin(`${mname}`)">SPIN</button>
          </div>
          <div class="col-sm-7">
            <p class="content-spin" v-show="start">Let fate take the wheel... Have a spin.</p>
            <p class="content-spin" v-show="error">Sorry Movie not found</p>
            <div v-show="loading" style="text-align:center;margin-top: 13%;">
              <img :src="require('./loading.gif')" style="height: 50px;width: 50px;"> 
            </div>
            <div v-show="seen" v-bind:key="d" class="movie-details" >
              <span class="drop-spin-details">
                <img :src="`${d.Poster}`" alt="" class="poster">
                <div class="m-info">
                  <h1 class="movie-title">{{d.Title}}</h1>
                  <div class="m-des">
                    {{d.Year}}&nbsp;&nbsp;
                    <!-- IMDB:{{d.imdbRating}} / 10&nbsp;&nbsp; -->
                    {{d.Runtime}}&nbsp;&nbsp;
                    {{d.Genre}}
                    <br>
                    <br>
                    <span>
                      <img :src="require('./actors.png')" alt="" style="width: 8%;height: 8%;">
                      {{d.Actors}}
                    </span>
                     <br>
                    <br>
                    <span v-bind:key="i" v-for="(da,i) in d.Ratings">
                      <img :src="`${icons[i]}`" alt="" style="width: 6%;height: 6%;">
                      {{da.Value}}
                      &nbsp;&nbsp;&nbsp;
                      <!-- <img :src="require('./rotten.png')" alt="" style="width: 6%;height: 6%;"> -->
                    </span>
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
        movies:'',
        TVShows:'',
        mname:''
      }
    },
    computed: mapState([
      'd',
      'seen',
      'loading',
      'error',
      'start',
      'icons'
    ]),
    methods: { 
      ...mapMutations([
        'spin',
        'typem',
        'types'
      ]),
    }
  }
</script>

<style scoped>
 .spin-head {
    width: 109px;
    display: inline-block;
    color: aliceblue;
    margin-left: 7%;
    font-size: 14px;
  }
.spin {
    margin-top: 7%;
    background: linear-gradient(145deg, #00e18c, #00e36a);
    border: none;
    border-radius: 24px;
    line-height: 39px;
    width: 83%;
    font-weight: 600;
    margin-bottom: 8%;
    margin-left: 6%;
}
.inp-mov{
  background-color: rgba(155, 155, 155, 0.2);
    padding: 8px 10px 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid rgba(155, 155, 155, 0.2);
    width: 57%;
    line-height: 1em;
    text-align: left;
    color:aliceblue;
}
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
    margin-top: 15%;
  }

  .check-spin {
    font-size: 15px;
    color: aliceblue;
    margin-left: 5px;
  }
  

  .spin-row {
    margin-top: 4%;
    margin-bottom: 4%;
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
    /* background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTEgMjciPjxwYXRoIGQ9Ik0zNi4yNzcgMTUuNzU1di44MTRoLTguNzcyYTMuMDcgMy4wNyAwIDAgMCAzLjAwOCAyLjI4YzEuMDcgMCAyLjI3OC0uNDQ1IDIuOTQtMS4wODJsMS44NSAyLjUxYy0xLjIwNCAxLjEwMy0zLjA3NiAxLjczNS01LjEzNSAxLjczNS0zLjk0NiAwLTYuNzAxLTIuNzA0LTYuNzAxLTYuNTc2IDAtMy43MzYgMi43OTYtNi41NTIgNi41MDQtNi41NTIgMy43MTMgMCA2LjMwNiAyLjgyNSA2LjMwNiA2Ljg3em0tNi4zMDYtMy43MDhjLTEuNDk3IDAtMi4yNjUuOTc1LTIuNTE3IDEuOTQxaDUuMDU3Yy0uMTk3LS45NjMtLjk0NC0xLjk0LTIuNTQtMS45NHptMTkuOTYgMy43MDh2LjgxNEg0MS4xNmEzLjA3IDMuMDcgMCAwIDAgMy4wMDggMi4yOGMxLjA3IDAgMi4yNzktLjQ0NSAyLjk0LTEuMDgybDEuODUgMi41MWMtMS4yMDQgMS4xMDMtMy4wNzYgMS43MzUtNS4xMzUgMS43MzUtMy45NDUgMC02LjcwMS0yLjcwNC02LjcwMS02LjU3NiAwLTMuNzM2IDIuNzk2LTYuNTUyIDYuNTA0LTYuNTUyIDMuNzEzIDAgNi4zMDYgMi44MjUgNi4zMDYgNi44N3ptLTYuMzA2LTMuNzA4Yy0xLjQ5NyAwLTIuMjY0Ljk3NS0yLjUxNyAxLjk0MWg1LjA1N2MtLjE5Ny0uOTYzLS45NDQtMS45NC0yLjU0LTEuOTR6bTcuODU2IDkuNjcxaDMuODE3VjQuNjYyaC0zLjgxN3pNNzYuOTM3IDguODg0YzMuNzc4IDAgNi41MiAyLjc1NSA2LjUyIDYuNTUyIDAgMy44MS0yLjc0MiA2LjU3Ni02LjUyIDYuNTc2LTMuNzY0IDAtNi40OTYtMi43NjYtNi40OTYtNi41NzYgMC0zLjc5NyAyLjczMi02LjU1MiA2LjQ5Ni02LjU1MnptLS4wMiA5LjY3YzEuODE0IDAgMi42NC0xLjYxNiAyLjY0LTMuMTE4IDAtMS40OS0uODI2LTMuMDk0LTIuNjQtMy4wOTQtMS44MDYgMC0yLjYxNCAxLjU1NC0yLjYxNCAzLjA5NCAwIDEuNTUyLjgwOCAzLjExOCAyLjYxNSAzLjExOHptMTMuODgtOS42N2MzLjc3OCAwIDYuNTIgMi43NTUgNi41MiA2LjU1MiAwIDMuODEtMi43NDIgNi41NzYtNi41MiA2LjU3Ni0zLjc2NSAwLTYuNDk3LTIuNzY2LTYuNDk3LTYuNTc2IDAtMy43OTcgMi43MzItNi41NTIgNi40OTctNi41NTJ6bS0uMDIgOS42N2MxLjgxMyAwIDIuNjQtMS42MTYgMi42NC0zLjExOCAwLTEuNDktLjgyNy0zLjA5NC0yLjY0LTMuMDk0LTEuODA2IDAtMi42MTUgMS41NTQtMi42MTUgMy4wOTQgMCAxLjU1Mi44MDkgMy4xMTggMi42MTUgMy4xMTh6bTE2LjI3Ny0xMy44OTJoMy44NDF2MTcuMDU2aC0zLjg0MXYtLjk4M2E0LjkzNiA0LjkzNiAwIDAgMS0zLjMyOCAxLjI3N2MtMy4zNTkgMC01LjYxNi0yLjYzMy01LjYxNi02LjU1MiAwLTMuOTMzIDIuMjU3LTYuNTc2IDUuNjE2LTYuNTc2IDEuMjYxIDAgMi40MTUuNDUgMy4zMjggMS4yODJWNC42NjJ6bTAgOC43OThjLS41MDctLjY2Mi0xLjQ2My0xLjExOC0yLjM2Ny0xLjExOC0xLjU5MiAwLTIuNjYyIDEuMjUzLTIuNjYyIDMuMTE4IDAgMS44NSAxLjA3IDMuMDk0IDIuNjYyIDMuMDk0LjkwNCAwIDEuODYtLjQ1NiAyLjM2Ny0xLjExOVYxMy40NnptLTg3LjU4MSAyLjI2OGMxLjU4Mi0uNjI3IDMuMjEtMi4yNDIgMy4yMS00Ljk5IDAtMy4zNS0yLjM2LTUuNjAyLTUuODctNS42MDJoLTEuODk1djMuODY2aDEuMjU0Yy45NCAwIDEuODkuNTggMS44OSAxLjY4OCAwIDEuMTA3LS45NSAxLjY4Ny0xLjg5IDEuNjg3aC0zLjE5N1Y5Ljk3MmwtNC41NDcgMi40NTR2OS4zODhoNC41NDd2LTUuNTQ3aDEuOTE4bDIuNzYgNS41NDdoNS4yMTFsLTMuMzkxLTYuMDg2ek02NS42NzQgOS4zOWgzLjg0MXYxMS4zODZjMCA1LjM4Mi00LjczNyA1Ljk2My02Ljc3NCA1Ljk2My0uNzcgMC0xLjQ1NC0uMDY1LTIuMDktLjJsLS4yNzEtLjA1OC0uMDIxLTMuMjcyLjQxNS4wODRjLjAxLjAwMiAxLjAyLjIwNCAxLjk2OS4yMDkuODggMCAyLjkzLS4yNTggMi45My0yLjY1MnYtLjMyOWMtLjkzOC44NjYtMi4wOTMgMS4zMzQtMy4zMjcgMS4zMzQtMy4zOTYgMC01LjU5Mi0yLjUwNC01LjU5Mi02LjM4czIuMTk2LTYuMzggNS41OTItNi4zOGMxLjI2NiAwIDIuNDAxLjQ0MiAzLjMyOCAxLjI4OFY5LjM5em0wIDQuMjc4Yy0uNDc1LS42NDItMS40Ni0xLjExNS0yLjM0Mi0xLjExNS0xLjY0MiAwLTIuNjYzIDEuMTItMi42NjMgMi45MjEgMCAxLjgwMyAxLjAyIDIuOTIzIDIuNjYzIDIuOTIzLjg2NyAwIDEuODUzLS40NzUgMi4zNDItMS4xMTh2LTMuNjExek0wIDBsMTEuOTkgNi44OTZMMCAxMy43OVYuMDAxem0xLjYzIDYuMzU1aDEuMDk3djIuNzM3bDQuODQ1LTIuODY1TDEuNjI5IDIuODF2My41NDV6IiBmaWxsPSIjMDBEQzg5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="); */
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
  .navbar-mob{
    display:none;
  }
  @media only screen and (max-width: 600px){
  .navbar{
    display:none;
    
  }
  .navbar-mob{
    display:block;
    height: 64px;
    color: aliceblue;
    background-color: #081118;
  }
  .seen-it{
    width: 33%;
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
nav-tv {
    color: aliceblue;
    margin-right: 3%;
    font-size: 16px;
}
.spin-head{
  width: 78px;
}
.drop-spin-details{
  display: list-item;
}
.m-des{
  width: 100%;
}
.m-info {
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
}
.poster{
  margin-left: 35%;
}
.want-to-see, .seen-it{
  font-weight: 100;
    font-size: 12px;
}
.nav-tv {
    color: aliceblue;
    margin-right: 5%;
    font-size: 16px;
}
}
</style>