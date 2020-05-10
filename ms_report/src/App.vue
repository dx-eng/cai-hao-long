<template>
  <div id="app">
    <div id="logo">
      <el-image :src="require('@/assets/logo.png')"></el-image>
      <span>河南能源内部交互平台</span>
    </div>
    <router-view />
    <div id="foot">
      <p>版权所有：河南能源化工集团有限公司</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: '',
        // routerUrl: [{
        //     path: '/index',
        //     pageName: '内部交互平台首页'
        //   },
        //   {
        //     path: '/notice',
        //     pageName: '公告发布（内部交互平台）'
        //   },
        //   {
        //     path: '/policy',
        //     pageName: '政策发布（内部交互平台）'
        //   },
        //   {
        //     path: '/noticeGl',
        //     pageName: '公告管理'
        //   },
        //   {
        //     path: '/policyGl',
        //     pageName: '政策管理'
        //   },
        //   {
        //     path: '/plan',
        //     pageName: '进度反馈'
        //   },
        //   {
        //     path: '/plan_none',
        //     pageName: '进度反馈（无附件）'
        //   },
        //   {
        //     path: '/work',
        //     pageName: '反馈进度统计'
        //   },
        //   {
        //     path: '/password',
        //     pageName: '修改密码'
        //   },
        // ]
      }
    },
    methods: {

    }
  }

</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // background: #000;
    width: 100%;
    height: 100%;

    #logo {
      position: absolute;
      left: 20px;
      top: 15px;

      >.el-image {
        float: left;
      }

      >span {
        float: left;
        margin: 11px 0 0 13px;
        width: 256px;
        height: 25px;
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
    }

    #foot {
      position: absolute;
      bottom: 60px;
      left: 50%;
      transform: translateX(-50%);

      p {
        width: 243px;
        height: 14px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
  }

</style>
