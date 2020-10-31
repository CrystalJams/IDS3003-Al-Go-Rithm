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
        comments: ['asdfasd', 'fdsasdf', 'fdsasdfasdf'],
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
        comments: ['Disgosting', 'KAGGERS!', 'Cone and Orb torture'],
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
        comments: ['dorme', 'normie', 'coomer'],
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
        comments: ['yes I know', 'mondays bad', 'many days are bad'],
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
