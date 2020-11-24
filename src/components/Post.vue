<template>
<div class= "test">     
    <h2 class="title">{{ postMeat.title }}</h2>
    <!-- in the future make this post a ranbom picture/generate random text/a random link if you have time  -->
    <p class="type" v-if="postMeat.type === 'picture'">Post Type: Picture</p>
    <p class="type" v-else-if="postMeat.type === 'text'">Post Type: Text</p>
    <p class="type" v-else-if="postMeat.type === 'link'">Post Type: Link</p>
    <p class="type" v-else>This is an invalid post type</p>
    <p class="author">posted by: {{ postMeat.author }}</p>
    <p class="likes">likes {{ postMeat.likes}} | dislikes {{ postMeat.dislikes }}</p>
    <p class="date">posted on: {{ time(postMeat.postedAt) }}</p>
    <button @click="onClickDescrip()">about</button> 
    <button @click="edit()">edit</button> 
  </div>
</template>

<style scoped>
  .test{
    text-align: left;
    width:60%;
    margin:right 40%;
    margin:left 1%;    
    border: 10px #58A4B0 groove;
    background-color: #A9BCD0;
    
  }

  .title{
    text-align: center;
  }
  .likes{
    float:right;
  }


</style>

<script>
export default {
  props: {
    postMeat:{
        type: Object,
        required: true
    }
  },
  methods: {
      //kevinMethod() {
        //for(let i = 0; i < 69; i++){
            //console.log('bananas' + i);
        //}
      //},
      //jamesMethod() {
        //console.log("help");
      //}
      onClickDescrip(){ //handles the instance button clicks to  request the description
        this.$emit('selected');
      },
      edit(){//handles the instance click for post editing
        this.$emit('edit');
      },
      time(current){
        return new Date(current);

      }


  },
  created() {
      //this.kevinMethod();
      //this.jamesMethod();
  }
}
</script>

<style>

</style>