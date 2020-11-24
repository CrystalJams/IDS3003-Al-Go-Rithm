<template>
  <div>
    <h1>Welcome to the Postr Post Makr!</h1>
    <makr v-on:add-post="addPost" />
    <p>any posts you add here will be added to the other sorting algorithms!</p>
    <p v-if="postadded == true">Sucsesfully Posted!</p>
  </div>
</template>

<script>
//import posts from '@/store/index'
//import Post from "@/components/Post"
import Makr from '@/components/Makr'
import index from '@/store/index'

export default {
    components: {
       'makr': Makr

    },
    data() {
        return {
            localPosts: [],
            selectedPost: undefined,
            postadded: false,
        }

    },
    created() {
        this.localPosts = [...this.$store.state.posts];
        this.scoreNsort();
        this.postadded = false;
    },
    methods: {
      addPost(newPost){
        this.localPosts = [...this.localPosts, newPost];
        index.state.posts = this.localPosts;
        this.postadded = true;
      },
    }
}

</script>