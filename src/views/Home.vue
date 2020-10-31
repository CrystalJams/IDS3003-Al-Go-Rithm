<template>
  <div class="home">
    <img alt="Placeholder logo" src="../assets/RFR.png">
    <HelloWorld msg="This is the Dummy Intro Page, That Links to The Posts Viewer"/>
  </div>
</template>

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
