<template>
  <div class="work">
    <govern title="工作进度统计" listTitle="公告信息列表" :list="list">
      <div slot="content">

      </div>
    </govern>
  </div>
</template>
<script>
  import govern from './governTempalte'
  export default {
    components: {
      govern
    },
    data() {
      return {
          list:[
              {
                  prop:"date" ,label:"公告标题" ,width:"100"
              },
              {
                 prop:"name" ,label:"反馈公司" ,width:"80"
              },
              {
                  prop:"name" ,label:"发布人" ,width:"80"
              },
              {
                  prop:"name" ,label:"提交人" ,width:"80"
              },
              {
                  prop:"name" ,label:"发布时间" ,width:"80"
              },
              {
                  prop:"name" ,label:"反馈截止时间" ,width:"80"
              },
              {
                  prop:"address" ,label:"当前进度" ,width:"auto"
              },
          ]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>
<style lang="scss" >
    // .work{

    // }
   
</style>
