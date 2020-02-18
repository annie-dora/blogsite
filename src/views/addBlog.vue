<template>
    <div id="blog" class="container">
        <h2>Add a blog post</h2>
        <form class="shadow">
        <label for="">Blog title:</label>
        <input type="text" v-model.lazy="blog.title" required >
        <label for="">Blogger:</label>
        <input type="text" v-model.lazy="blog.author" required >
        <label for="">Content:</label>
        <textarea placeholder="content" v-model.lazy="blog.content" cols="30" rows="10" ></textarea><br>
        <button type="submit" class="btn btn-primary" @click.prevent="onSubmit"> ADD POST</button>
        </form>
        <div id="preview">
        <h1>blog review</h1>
        <p>Blog title: {{blog.title}} </p>
        <p>Blogger: {{blog.author}} </p>
        <p>Blog Content: </p>
        <p>  {{blog.content}} </p>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"addBlog",
    data(){
        return{
            blog: {
                title: "",
                author: "",
                content: "",
            }
        } 
    },
    methods:{
      onSubmit(){
            axios.post('https://blogging-4c3f2.firebaseio.com/users.json', this.blog)
            .then(function(res){
            console.log(res)
            }).catch(function(error){
            console.log(error)
            })
        }
    }
}
</script>


<style scoped>
#blog*{
    box-sizing: border-box;
}
#blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[text],textarea{
    display: block;
    width: 100px;
}
#preview{
    margin: 30px 0;
    border: 1px solid black;
    padding: 10px 20px;
}
.shadow{
    padding: 10px 20px;
}
</style>



