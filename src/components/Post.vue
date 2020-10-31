<template>
<div class= "test">
    <p>Hey this is a single post</p>
     
    <h2>{{ postMeat.title }}</h2>
    <!-- in the future make this post a ranbom picture/generate random text/a random link if you have time  -->
    <p v-if="postMeat.type === 'picture'">This is a picture post</p>
    <p v-else-if="postMeat.type === 'text'">This is a text post</p>
    <p v-else-if="postMeat.type === 'link'">This is a link post</p>
    <p v-else>This is an invalid post type</p>
    <p>posted by:{{ postMeat.author }}</p>
  </div>
</template>

<script>
export default {
  props: {
    postMeat:{
        type: Object,
        required: true
    }
  },
  methods: {
      kevinMethod() {
        for(let i = 0; i < 69; i++){
            console.log('bananas');
        }
      }
  },
  created() {
      this.kevinMethod();
  }
}
</script>

<style>

</style>