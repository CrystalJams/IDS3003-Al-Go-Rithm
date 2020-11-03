<template>
  <div class="posts">
    <h1>Welcome to the Postr Hot Sorter!</h1>
    <h2>This page mimicks the system of reddits hot sorting system(circa 2015)</h2>
    <p class="exp">this button sends all these posts through the sorting algorithm</p>
    <button @click="scoreNsort()" class="scoreBtn">Score n' Sort</button>
        <div class="report" v-if ="typeof selectedPost !== 'undefined' && typeof localPosts[selectedPost].desc !== 'undefined'" >
      
       <p v-for="description in localPosts[selectedPost].desc" :key="description">{{description}}</p>

    </div>
    
    <post v-for="(post , index) in localPosts" :key="post.key" @selected="onSelected(index)" :postMeat="post"/>

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
            `Hey There is me Al! This is placeholder description of ${post.title}`,
            `This post has ${post.likes} like and ${post.dislikes} dislikes giving it a popularity score of ${popularity}`,
            `I've been told to use this score to measure its overall value by first getting its sign (${sign}) 1 for positive -1 for negative and 0 if theyre even`,
            `Going by Reddits -hot- sort Im told to use these with a scaling math equation alongside the time it was posted to generate a score`,
            `The time is the number of microseconds after reddits creation date 7:46:43AM 12/8/05 (1134028003 in ms)`,
            `to find out how recently it was posted you subreact the posts timestamp from this number`,
            `The equation itself looks like this: log(10)populariy + (sign * time)/4500`,
            `in this case that looks like log(10)${popularity} + (${sign} * ${recency})/4500 rounded to the nearest whole number`, 
            `that gives this post a total score of ${score}`,
            `I use this score to rank all the posts from highest score to lowest`,
            `because the timer is always ticking upwards newer posts will consistently have higher scores even with less likes`,
            `In fact the logrithm atatched to the equation means the first 10 upvotes count as much at the next 100, 100 as the next 1000, and so on`,
            `This means that no post can ever recieve enough likes to outweigh the passage of time :O!`,


            `IN THE FUTURE THIS WILL COMPARE THE POST DIRECTLY TO THE POSTS ABOVE AND BELOW. it will also look alot nicer :)`
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