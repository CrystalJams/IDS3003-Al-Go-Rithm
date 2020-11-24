<template>
  <div>
    <form @submit.prevent="addPost">
      <input type="text" v-model="title" name="title" placeholder="Title...">
      <input type="text" v-model="author" name="author" placeholder="Author...">
      <input type="text" v-model="content" name="content" placeholder="Content...">
      <input type="text" v-model="tag" name="tag" placeholder="Tag(limited to one)">
      <input type="number" v-model="comments" name="comments" placeholder="comments">
      <input type="number" v-model="likes" name="likes" placeholder="likes">
      <input type="number" v-model="dislikes" name="dislikes" placeholder="dislikes">
      <input type="number" v-model="postedAt" name="postedAt" placeholder="time posted">
      <input type="submit" value="Post!" class="btn">
    </form>
  </div>
</template>
<script>
// import uuid from 'uuid';
export default{
  methods: {
    addPost(e) {
        e.preventDefault();
      const newPost = {
        key: 999,  
        title: this.title,
        content: this.content,
        tag: this.tag,
        comment: this.comment,
        author: this.author,
        completed: false,        
        postedAt: this.postedAt,
        likes: this.likes,
        dislikes: this.likes,
        type: 'text',
      }
      console.log("post made");
      // Send up to parent
      this.$emit('add-post', newPost);
      this.title = '';
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>