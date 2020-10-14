<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
     /* background-image: linear-gradient(107deg,#1a303c,#18372c); */
  }
</style>
<style>
/* .e13urmph2 {
    opacity: 0.8;
}
.css-1ekd8ym {
    min-width: 16px;
    height: 16px;
    cursor: pointer;
    margin-right: 16px;
}
.search {
    background-image: linear-gradient(107deg,#1a303c,#18372c);
    border: 1px solid #667778;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;
    width: 288px;
    transition: max-height 160ms,width 150ms ease-in-out,border-color 100ms;
    z-index: 3;
    overflow: hidden;
    will-change: height,max-height;
    top: unset;
    line-height: 36px;
    font-size: 15px;
}
.form-search {
    margin-left: 4%;
}
.space{
  width: 22%;
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
.logo{
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
body{
  background-color:;
  background-image: linear-gradient(165deg,#171e31,#18372c)
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* .navbar{
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
.tvshows a{
  font-size: 15px;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  color: aliceblue;
  margin-right: 2em;
} */
</style>
