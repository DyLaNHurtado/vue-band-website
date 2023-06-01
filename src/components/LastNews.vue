<script>
import New from './New.vue'
export default {
    name: 'LastNews',
    data(){
      return {
        newsList:[
          {
            title:"sdfsdfgsdjkgdf",
            description:"asjfhdjasdfhkajsdhfjklahdsfjkhasdkjfahsdjkfahsjkldfhajdkshfakjsdfhajsdhfajksdlhfaskjdfhalkdfhaksdfhafdasdfasd",
            img:"/src/assets/logo.svg",
          },
          {
            title:"sdfsdfgsdjkgdf",
            description:"asjfhdjasdfhkajsdhfjklahdsfjkhasdkjfahsdjkfahsjkldfhajdkshfakjsdfhajsdhfajksdlhfaskjdfhalkdfhaksdfhafdasdfasd",
            img:"/src/assets/logo.svg",
          },
          {
            title:"sdfsdfgsdjkgdf",
            description:"asjfhdjasdfhkajsdhfjklahdsfjkhasdkjfahsdjkfahsjkldfhajdkshfakjsdfhajsdhfajksdlhfaskjdfhalkdfhaksdfhafdasdfasd",
            img:"/src/assets/logo.svg",
          },
        ]
      }
    },
    components:{
      New
    }
  }
</script>

<template>
    <span class="subtitle">Last news</span>
    <div class="news">
      <New v-for="item in newsList" :img="item.img" :title="item.title" :description="item.description" />
    </div>
</template>
<style scoped>
  #last-news{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: black;
    width: 100%;
    padding: 20px;
    
  }
  img{
    width: 200px;
    height: 200px;
  }
  .news{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 24px;
    transition: all .3s;
  }
</style>
