<template>
  <div class="posts">
    <h1>This is an Posts page Posts will be displayed here \/</h1>
    <!-- Use v-for to render multiple posts -->
    <post :postMeat="post"/>
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
            //Assign Posts to the posts in store
            <ul id = 
            post: {
                key: 1,
                title:  'This is the title.',
                author: 'Gordon',
                postedAt: 2,
                likes: 100,
                dislikes: 100,
                type: 'picture',
                comments: ['asdfasd', 'fdsasdf', 'fdsasdfasdf'],
                reasons: []
            }
        }
    }
}
</script>