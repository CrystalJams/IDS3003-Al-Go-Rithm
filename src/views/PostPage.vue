<template>
  <div class="posts">
    <h1>This is an Posts page Posts will be displayed here \/</h1>
    <post v-for="post in localPosts" :key="post.key" :postMeat="post"/>
  </div>
</template>

<script>
import Post from "@/components/Post"
export default {
    components: {
        'post': Post
    },
    data() {
        return {
            localPosts: []
        }
    },
    created() {
        this.localPosts = [ ...this.$store.state.posts]
    }
}
</script>