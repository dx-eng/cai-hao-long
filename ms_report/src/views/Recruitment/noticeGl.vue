<template>
  <div class="policyGl">
    <govern listTitle="公告信息列表" :list="list" :tableData="tableData" :UrlSkaip="'/home/notice'">
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
        list: [{
            prop: "date",
            label: "公告标题",
            width: "220"
          },
          {
            prop: "name",
            label: "发布人",
            width: "130"
          },
          {
            prop: "name",
            label: "发布时间",
            width: "130"
          },
          {
            prop: "name",
            label: "反馈截止时间",
            width: "130"
          },
        ],
         tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市'
        }],
      }
    },
    methods: {

    }
  }

</script>
<style lang="scss">
  // .policyGl{

  // }

</style>
