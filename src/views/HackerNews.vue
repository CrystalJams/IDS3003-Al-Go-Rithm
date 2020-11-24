<template>
  <div class="posts">
    <h1>Welcome to the Postr Hot Sorter!</h1>
    <h2>This page mimicks the sorting system of Hacker News(circa 2015)</h2>
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
          const recency = post.postedAt;
          const popularity =  post.likes - 1;
          let gravity = 1.8;
          let score = Math.round((popularity) / (recency + 7200)^gravity);
          let desc = [ 
            `Hey There is me Al! Do you wanna know why "${post.title}" is number ${post.key} on the front page?`,
            `This post has ${post.likes} giving it that many points minus 1 for the initial posters like`,
            `Going by Hacker news sort sort Im told to divide this score by its posting time +2 hours and squared by its gravity`,
            `The posting time is converted into microseconds for a value of ${post.postedAt}`,
            `Then 7200 is added to that number (2 hours in human time)`,
            `Since were in the news section all posts have a 1.8 gravity`,
            `The equation itself looks like this: (popularity - 1) / (posted time + 2 hours)^gravity`,
            `in this case that looks like (${popularity} - 1) / (${recency} + 7200)^${gravity}`, 
            `that gives this post a total score of ${score}`,
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