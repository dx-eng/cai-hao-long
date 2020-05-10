<template>
  <div class="policyGl">
    <govern listTitle="政策信息列表" :list="list" :tableData="tableData" :UrlSkaip="'/home/policy'">
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
            width: "250"
          },

          {
            prop: "name",
            label: "发布人",
            width: "180"
          },
          {
            prop: "name",
            label: "发布时间",
            width: "180"
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
