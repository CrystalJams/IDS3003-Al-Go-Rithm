<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Intro Page</router-link> |
      <router-link to="/posts">Reddit Hot Sort</router-link> | 
      <router-link to="/hacker-news">Hacker News Top Sort</router-link> | 
      <router-link to="/makr">Make a Post!</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
  border: 30px black;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
