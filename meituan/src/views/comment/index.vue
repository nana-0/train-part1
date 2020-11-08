<template>
    <div>
        <comment-header :list="list"></comment-header>
        <comment-list :list="list" @update="fn"></comment-list>
    </div>
</template>

<script>
import axios from "axios";
import CommentHeader from "./CommentHeader";
import CommentList from "./CommentList";
    export default {
        data(){
            return{
                id:this.$route.query.id,
                list:{}
            }
        },
        components:{
            CommentHeader,
            CommentList
        },
        created(){
            this.getData(1)
        },
        methods:{
            fn(id){
                this.getData(id);
            },
            getData(typeId){
            axios
                .get(`http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${typeId}`)
                .then(res=>{
                    console.log(res.data.data)
                    this.list=res.data.data
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>