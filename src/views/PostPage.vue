<template>
  <div class="posts">
    <h1>Welcome to the Postr Hot Sorter!</h1>
    <h2>This page mimicks the system of reddits hot sorting system(circa 2015)</h2>
        <div class="report" v-if ="typeof selectedPost !== 'undefined' && typeof localPosts[selectedPost].desc !== 'undefined'" >
      
       <p v-for="description in localPosts[selectedPost].desc" :key="description">{{description}}</p>

    </div>
    
    <post v-for="(post , index) in localPosts" :key="post.key" @selected="onSelected(index)" @edit="editPost()" :postMeat="post"/>

  </div>
</template>

<style scoped>

  .scoreBtn{
    float:left;
  }
  .clr{
    clear:both;
  }
  .report{
    float:right;
    text-align: right;
    width: 38%;
    padding:left 80%;
    margin:left 60%;
    background: #e5fcff;
    border: grey groove;
  }
  .exp{
    text-align: left;
  }


</style>

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
        this.scoreNsort();
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
            `Hey There is me Al! Do you wanna know why "${post.title}" is number ${post.key} on the front page?`,
            `Whelp, it looks like this post has ${post.likes} like and ${post.dislikes} dislikes giving it a popularity score of ${popularity}`,
            `I've been told to use this score to measure its overall value by first getting its sign (${sign}) 1 for positive -1 for negative and 0 if theyre even`,
            `Going by Reddits -hot- sort Im told to use these with a scaling math equation alongside the time it was posted to generate a score`,
            `The time is translated into microseconds (${post.postedAt})`,
            `This number is then subtracted from reddits creation date 7:46:43AM 12/8/05 (1134028003 in ms)`,
            `Javascript however translates this number to Tue Jan 13 1970 22:01:11 GMT-0500 (Eastern Standard Time)`,
            `that gives you how recent the post is (${recency}) in this case`,
            `all of these numbers are then put through a custom made scoring equation`,
            `The equation itself looks like this: log(10)populariy + (sign * time)/4500`,
            `in this case that looks like log(10)${popularity} + (${sign} * ${recency})/4500 rounded to the nearest whole number`, 
            `that gives this post a total score of ${score}`,
            `I use this score to rank all the posts from highest score to lowest using a defauct Javascript sorting tool`,
            `Fun fact! because the timer is always ticking upwards newer posts will consistently have higher scores even with less likes`,
            `The logrithm atatched to the equation means the first 10 upvotes count as much at the next 100, 100 as the next 1000, and so on`,
            `This means that no post can ever recieve enough likes to outweigh the passage of time :O!`,
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
        },
        editPost(){

        },
        createPost(){
          
        },
        //addPost(newpost){
          //this.localPosts[localPosts.length] = newpost;
        //}
    }
}


    //const sorter = document.getElementById('.scoreBtn');
    //sorter.addEventListener('click', (e) => {
     //alert('why');
     //e.preventDefault();
      //this.score(this.localPosts[0]);
    //})
</script>