<template>
    <div>
       <ul class="list-box">
           <li class="list" v-for="obj in list" :key="obj.id">
               <img :src="obj.img" alt="">
               <p>{{obj.name}}</p>
           </li>
       </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                list:[]
            }
        },
        created(){
            axios.get("http://admin.gxxmglzx.com/tender/test/get_type")
            .then((res)=>{
                // console.log(res.data.data)
                if(res.data.errcode == 200){
                    this.list = res.data.data;
                }
            }).catch(()=>{

            })
        }
    }
</script>

<style lang="scss" scoped>
    .list-box{
        display: flex;
        flex-wrap: wrap;
    }
    .list{
        width:20%;
        text-align: center;
        // margin:
        margin-top:0.3rem;

    }
    .list img{
        width:60%;
    }
</style>