<template>
  <div class="posts">
    <h1>This is an Posts page Posts will be displayed here \/</h1>
    <button @click="scoreNsort()" class="scoreBtn">Score N' Sort</button>
    <post v-for="(post , index) in localPosts" :key="post.key" @selected="onSelected(index)" :postMeat="post"/>
    <div v-if ="typeof selectedPost !== 'undefined' && typeof localPosts[selectedPost].desc !== 'undefined'" >
      
       <p v-for="description in localPosts[selectedPost].desc" :key="description">{{description}}</p>

    </div>
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
            localPosts: [],
            selectedPost: undefined, 
        }

    },
    created() {
        this.localPosts = [...this.$store.state.posts];
    },
    methods: {
        hotScore(post) {
          const epoch = 1134071203;//this is the epoch time for dec 8 2005 at 7:46:43 reddits posting date it would seem
          const recency = post.postedAt - epoch;
          const popularity =  post.likes - post.dislikes;
          let sign = 0;
          if(popularity > 0) sign = 1
          else if(popularity < 0 ) sign = -1
          else sign = 0;
          let order = Math.log(Math.max(Math.abs(popularity), 1), 10);
          let score = Math.round(sign * order + recency / 45000);
          let desc = [ 
            `This is placeholder description if ${post.title}`,
            `This post has ${post.likes} like and ${post.dislikes} dislikes giving it a popularity score of ${popularity}`,
            `I've been told to use this score to measure its overall value by first getting its sign (${sign}) 1 for positive -1 for negative and 0 if theyre even`,
            `Going by Reddits -hot- sort Im told to use these with a scaling math equation alongside the time it was posted to generate a score`,
            `The equation itself looks like this:`, 
            `equation here`,
            `tell about score`,
            `explain the time factor`,
            `any additional explanation here`,
            ]
          post.desc = desc;
          post.score = score;
          console.log(`just scored ${post.title} at ${post.score} points! :(`)
        },
        scoreAll(arrayOfPost) {
          arrayOfPost.forEach(post => this.hotScore(post));
        },

        sort(arrayOfPost) {
          arrayOfPost.sort((postA, postB) => {
            if(postA.score > postB.score)return -1;
            return 1;
          })
          return arrayOfPost;
        },

        scoreNsort(){
          this.scoreAll(this.localPosts);
          this.localPosts = this.sort(this.localPosts);
        },

        onSelected(index){
          this.selectedPost = index;
        }//call AL
    }
}


    //const sorter = document.getElementById('.scoreBtn');
    //sorter.addEventListener('click', (e) => {
     //alert('why');
     //e.preventDefault();
      //this.score(this.localPosts[0]);
    //})
</script>