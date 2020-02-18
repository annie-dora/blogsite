<template>
    <div class="blog" >
        <div v-if="display">
            <ul id="preview" v-for='(post,index) in blogArray' :key="index">
                <li>Post Title: {{post.title}} </li>
                <li>Blogger: {{post.author}} </li>
                <li>Content:  {{post.content}} </li>
                <button class="btn btn-secondary" @click="editPost(post.id)">Edit Post</button>
                <button class="btn btn-danger" @click="remove(post.id)" >Delete Post</button>
            </ul>
        </div>
        <div v-else>
            <form>
                <label for="">Blog title:</label>
                <input type="text" v-model.lazy="blog.title" required >
                <label for="">Blogger:</label>
                <input type="text" v-model.lazy="blog.author" required >
                <label for="">Content:</label>
                <textarea  v-model.lazy="blog.content" rows="10" cols="30"></textarea><br>
                <button type="submit" class="btn btn-primary" @click="updatePost"> ADD POST</button>
            </form>
            <div id="preview">
                <h1>blog review</h1>
                <p>Blog title: {{blog.title}} </p>
                <p>Author: {{blog.author}} </p>
                <p>Blog Content: </p>
                <p>  {{blog.content}} </p>
            </div>
        </div>

        
    </div>
</template>


<script>
import axios from 'axios'
import { clearTimeout, setTimeout } from 'timers';
export default {
    name: 'blogSite',
    data(){
        return{
            blogArray: [],
            display: true,
            blog: ''
        }
    },
    methods:{
        reload(){
        //    var timeout = setTimeout('location.reload(true);',1500);
        //    function resetTimeout(){
        //        clearTimeout(timeout);
        //        timeout = setTimeout('location.reload(true',1500);
        //    }
          axios.get('https://blogging-4c3f2.firebaseio.com/users.json')
          .then(res => {
              console.log(res)
              const data = res.data;
              let users = [];
              for(let key in data){
                  const user= data[key];
                  user.id = key;
                  users.push(user)
              }
              this.blogArray = users
              console.log(this.blogArray)

          })
          .catch(error => console.log(error))
        
        },
       remove(i){
           axios.delete(`https://blogging-4c3f2.firebaseio.com/users/${i}.json`).then(function(res){
               console.log(res)
           },function(error){
               console.log(error)
           })
           this.reload()
        },
        editPost(id){
           this.display = false;
           this.blogArray = id;
           this.updatePost = this.blog.indexOf(id)
        },
        updatePost(i){
            console.log(i)
            axios.put(`https://blogging-4c3f2.firebaseio.com/users/${i}.json`).then(function(res){
               console.log(res)
           },function(error){
               console.log(error)
           })
           this.reload()
        }

    },
    created(){
        this.reload()
    // axios.get('https://blogging-4c3f2.firebaseio.com/users.json')
    // .then(res =>{
    //     const data = res.data;
    //     for(let key in data){
    //         const post = data[key]
    //         post.id = key
    //         this.blogArray.unshift(post)
    //         console.log(this.blogArray)
    //     }
    // }).catch(error =>{
    //     console.log(error);
    // })
    // .then(function(res){
    //   console.log(res)
    //   const data = res.data
    //   const users = [];
    //   for (let key in data){
    //     const user = data[key];
    //     user.id = key;
    //     this.users.push(user);
    //     console.log(this.users)
    //   }
    // }).catch(function(error){
    //   console.log(error)
    // })
  }

}
</script>


<style scoped>
#preview{
    border: 1px solid black;
    list-style-type: none;
}
button{
    margin: 10px 10px;
}
.loader,
.loader:before,
.loader:after {
  background: #ffffff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

</style>

