<template>
    <div class="card"> 
        <slot name="title">
            <p class="card-head">{{title}}</p>
        </slot>
         <div class="card-content">
            <slot name="content" >

            </slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"card",
    props: {
        title:{
            require: false,
            type:String
        },
    }
}
</script>
<style >
    .card{
        padding: 10px;
        width: 766px;
        height: 480px;
        font-size: 28px;
        text-align: center;
        border: 1px solid #333;
    }
    /* // .card-head{

    // } */
</style>