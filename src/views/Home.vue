<template>
  <div class="home">
    <img alt="Placeholder logo" src="../assets/RFR.png">
    <HelloWorld msg="Hello! My name is Al Go Rithm!"/>
    <p class="intro">Welcome to Postr a totally fictional social media website with virtually no social elements!</p>
    <p class="intro">Technically I dont really exist but my coder would like you to think that I run the site your on right now</p>
    <p class="intro">Postr offers the unique experience of transparency!</p>
    <p class="intro">When you see a post on here and click a button attatched to it and a different program(also called Al Go Rithm for continuities sake) will tell you all about it!</p> 
    <p class="intro">Since you dont have to worry about upseting other users you also have full controll over each post!</p>
    <p class="intro">Click up top to head to one(1) of the three(3) different sorting modes we have implemented and try it out!</p>
    <p class="comment"> Developter Note: there is currently no functionality to edit the posts, they are generated from a random set of potential posts. Additionally there will be 2 more sorting modes in the final product </p>


  </div>
</template>
<style scoped>
  .intro{
    font-weight: bold;
    padding: 0;
    margin: 0;
    font-size: 150%;
  }
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
