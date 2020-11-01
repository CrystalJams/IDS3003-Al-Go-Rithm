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
        postedAt: 2,
        likes: 100,
        dislikes: 100,
        type: 'picture',
        comments: Math.random(),
        reasons: []
      },
      {
        key: 2,
        title: 'Gayyy',
        author: 'Gay Dewey',
        postedAt: 1222217110,
        likes: 1000,
        dislikes: 1400,
        type: 'picture',
        comments: 16,
        reasons: []
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
        reasons: []
      },
      {
        key: 4,
        title: 'man i hate monday',
        author: 'garman',
        postedAt: 10,
        likes: 1000000000000000,
        dislikes: 0,
        type: 'text',
        comments: 234,
        reasons: []
      },
      {
        key: 5,
        title: 'Peek and push the board game',
        author: 'Dude Guy',
        postedAt: 85,
        likes: 304,
        dislikes: 59,
        type: 'picture',
        comments: Math.random(),
        reasons: []
      },
      {
        key: 6,
        title: 'Logitech mouse',
        author: 'HP Monitor',
        postedAt: 23409,
        likes: 1030,
        dislikes: 1200,
        type: 'picture',
        comments: 6500,
        reasons: []
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
        reasons: []
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
        reasons: []
      },
      {
        key: 9,
        title: 'the one shitpost in general',
        author: 'Go Dan',
        postedAt: Math.random(),
        likes: 2340,
        dislikes: 10333,
        type: 'picture',
        comments: 2342,
        reasons: []
      },
      {
        key: 10,
        title: 'James Risolio',
        author: 'ThatsInteresting',
        postedAt: 122221234,
        likes: 10023,
        dislikes: 14002,
        type: 'picture',
        comments: 161,
        reasons: []
      },
      {
        key: 11,
        title: 'my Feet are cold',
        author: 'Feetman1337',
        postedAt: Math.random(),
        likes: 3333,
        dislikes: 152,
        type: 'text',
        comments: 2334,
        reasons: []
      },
      {
        key: 12,
        title: 'man i hate monday 2',
        author: 'Comments being called a dumbass',
        postedAt: 101231231123,
        likes: 2,
        dislikes: 0,
        type: 'text',
        comments: 50000000000,
        reasons: []
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
        reasons: []
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
