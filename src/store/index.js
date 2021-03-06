import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        key: 1,
        title: '...',
        author: 'Gordon',
        postedAt: 1134071203,
        likes: 100,
        dislikes: 100,
        type: 'text',
        comments: Math.random(),
      },
      {
        key: 2,
        title: 'Anybody ever notice the ceiling before?',
        author: 'G.Dewey',
        postedAt: 12222171100000,
        likes: 1000,
        dislikes: 1400,
        type: 'picture',
        comments: 16,
      },
      {
        key: 3,
        title: 'Hi :)',
        author: 'Bryson',
        postedAt: 122,
        likes: 1000,
        dislikes: 15,
        type: 'text',
        comments: 23,

      },
      {
        key: 4,
        title: 'man i hate monday',
        author: 'garfman',
        postedAt: 10,
        likes: 1000000000000000,
        dislikes: 0,
        type: 'text',
        comments: 234,

      },
      {
        key: 5,
        title: 'Peek and push the board game',
        author: 'Dude Guy',
        postedAt: 85,
        likes: 304,
        dislikes: 59,
        type: 'link',
        comments: Math.random(),

      },
      {
        key: 6,
        title: 'Logitech mouse how to click?????????????',
        author: 'HP Monitor',
        postedAt: 23409,
        likes: 1030,
        dislikes: 1200,
        type: 'picture',
        comments: 6500,

      },
      {
        key: 7,
        title: 'He man',
        author: 'Mcondolands chicken nugget',
        postedAt: 12340923,
        likes: 1023,
        dislikes: 1234,
        type: 'text',
        comments: 54455,

      },
      {
        key: 8,
        title: 'Only running when someone is requesting',
        author: 'and the post is actually being returend',
        postedAt: 405234,
        likes: 23450234,
        dislikes: 2344,
        type: 'text',
        comments: 2344,

      },
      {
        key: 9,
        title: 'Just HAD to post my snail',
        author: 'Go Dan',
        postedAt: Math.random(),
        likes: 2340,
        dislikes: 10333,
        type: 'picture',
        comments: 2342,

      },
      {
        key: 10,
        title: 'Made a Thing',
        author: 'James R',
        postedAt: 122221234,
        likes: 10023,
        dislikes: 14002,
        type: 'picture',
        comments: 161,

      },
      {
        key: 11,
        title: 'My Feet are cold :(',
        author: 'Feetman1337',
        postedAt: Math.random(),
        likes: 3333,
        dislikes: 152,
        type: 'text',
        comments: 2334,
      },
      {
        key: 12,
        title: 'man i hate monday 2',
        author: 'secret garf fan',
        postedAt: 101231231123,
        likes: 2,
        dislikes: 50,
        type: 'text',
        comments: 50000000000,
     },
      {
        key: 13,
        title: "Jesus it's cold",
        author: 'Jeasus',
        postedAt: 981324089,
        likes: 50,
        dislikes: 0,
        type: 'picture',
        comments: 75,
      }
    ]
  },
  mutations: {
    pushPost(state, newPost){
      state.posts.push(newPost);
    },
    splicePost(state, index){
      state.posts.splice(index,1);
    },

  },
  actions: {
    pushPost(context){
      context.commit('pushPost');
    },
    splicePost(context){
      context.commit('splicePost');
    },
    //generateRandomPost(){
      //let newPost;
      //newPost.key = (post[post.length - 1] + 1);
      //newPost.title = "Title(in the future this will be randomly generated)"
      //newPost.author = "Author(in the future this will be picked from a random list of users)"
      //newPost.postedAt = Math.random()
    //}

  },
  modules: {

  },
  /*methods:{
    randomTitle(){
      return "Random Title Generator Not Set Up Yet"
    },
    randomAuthor(){
      return "Random Author Not Set Up Yet"
    },
    randomType(){
      return 'picture'
    },
    randomTime(){
      return 1134071203
    },
    randomLikes(){
      return random()
    }*/
  
})
