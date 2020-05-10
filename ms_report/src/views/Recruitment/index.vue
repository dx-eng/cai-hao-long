<template>
  <div class="index">
    <el-row type="flex" class="row-bg indexTitle" justify="center">
      <el-col :span="12">
        <el-row type="flex" class="row-bg indexTitle">
          <el-col :span="8" style="text-align: left; line-height: 35px; font-size: 18px;">
            河南能源内部交互平台
          </el-col>
          <el-col :span="2">
            <a href="/#/home/index">
              <!-- <img src="../../assets/u29.png" class="topIcon"> -->
            </a>
          </el-col>
          <el-col :span="6" class="showContent">
            <el-popover placement="bottom" width="150" trigger="click" a>
              <ul class="listSelect">
                <li>
                  <a href="/#/home/notice">
                    <i class="el-icon-document"></i>
                    公告发布
                  </a>

                </li>
                <li>
                  <a href="/#/home/policy">
                    <i class="el-icon-edit"></i>
                    政策发布
                  </a>
                </li>
                <li>
                  <a href="/#/home/noticeGl">
                    <i class="el-icon-edit"></i>
                    公告管理
                  </a>
                </li>
                <li>
                  <a href="/#/home/policyGl">
                    <i class="el-icon-edit"></i>
                    政策管理
                  </a>
                </li>
                <li>
                  <a href="/#/home/plan">
                    <i class="el-icon-edit"></i>
                    附件管理
                  </a>
                </li>
                <li>
                  <a href="/#/home/plan_none">
                    <i class="el-icon-edit"></i>
                    任务反馈
                  </a>
                </li>
              </ul>
              <el-button slot="reference">
                <!-- <img src="../../assets/u27.png" class="topIcon"> -->
                <div> 我的管理</div>
              </el-button>
            </el-popover>
          </el-col>
        </el-row>

      </el-col>
      <el-col :span="12">
        <div class="operation">
          <div class="head">
            <!-- <img src="../../assets/u29.png"> -->
          </div>
          <p>刘德华</p>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <a href="/#/home/password">
                  修改密码

                </a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </el-col>

    </el-row>
    











 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
      }
    },
    mounted() {},
    methods: {
      handleClick() {

      }
    }
  }

</script>
<style lang="scss">
  $bg-color:rgba(51, 153, 204, 1); //蓝色背景

  .el-popover {
    width: 272px !important;
    padding: 0 !important;
    height: 150px !important;

    .listSelect {
      padding: 0;
      margin: 0;
      overflow: hidden;

      li {
        list-style: none;
        float: left;
        width: 90px;
        height: 75px;
        padding: 5px 15px 0;
        box-sizing: border-box;

        i::before {
          width: 43px;
          height: 32px;
          display: inline-block;
          font-size: 40px;
        }
      }
    }
  }


  .index {
    .indexTitle {
      color: white;
      background: rgba(0, 102, 255, 1) !important;
      height: 35px;
    }

    // .operation {
    //   float: right;
    //   overflow: hidden;
    //   padding: 10px 50px 0 0;

    //   div,
    //   p {
    //     float: left;
    //     padding: 0;
    //     margin: 0;
    //     margin-right: 10px;
    //   }

    //   .head {
    //     width: 35px;
    //     height: 28px;
    //     border-radius: 50%;
    //     overflow: hidden;
    //     margin-top: -5px;

    //     img {
    //       width: 100%;
    //     }
    //   }
    // }

    // .topIcon {
    //   margin-top: 4px;
    //   width: 34px;
    // }

    // .showContent {
    //   .el-button {
    //     span {
    //       font-size: 18px;
    //       line-height: 35px;
    //       display: inline-block;
    //       height: 35px;
    //     }
    //   }

    //   .el-popover__reference {
    //     width: 150px;
    //     background: transparent;
    //     border: none;
    //     color: white;
    //     padding: 0;

    //     span {
    //       width: 150px;

    //       div {
    //         float: right;
    //       }
    //     }
    //   }
    // }


    // .el-link--inner {
    //   color: $bg-color !important;
    // }



    // .el-main,
    // .el-header {
    //   padding: 0;
    // }

    // .row-bg {
    //   background: $bg-color;

    //   .el-col {
    //     font-size: 13px;
    //   }
    // }

    // .more {
    //   border-width: 1px;
    //   border-style: solid;
    //   border-color: rgba(100, 100, 100, 1) !important;
    //   border-radius: 5px !important;
    // }


    // .el-tab-pane p,
    // .list p {
    //   // padding-left: 10px;
    //   text-align: left;
    //   color: #169BD5;
    //   font-size: 13px;

    //   span {
    //     color: #000;
    //   }
    // }

    // .login .el-col>div {
    //   font-size: 13px;
    //   width: 75px;
    //   margin: auto;
    //   text-align: center;

    //   div {
    //     line-height: 20px;
    //     color: black;
    //     border-width: 1px;
    //     border-style: solid;
    //     border-color: rgba(121, 121, 121, 1);
    //   }
    // }

    // .help {
    //   .el-tabs__header {
    //     margin: 0;
    //     height: 30px;
    //     box-sizing: border-box;

    //     .el-tabs__nav-wrap {
    //       border: 1px solid #666;
    //     }

    //     .el-tabs__item.is-active {
    //       background: #ccc;
    //     }

    //     .el-tabs__item {
    //       height: 30px;
    //       line-height: 30px;
    //       padding: 0px !important;
    //       border: 1px solid #666;
    //       border-radius: 6px;
    //       margin: 0 5px;
    //       box-sizing: border-box;
    //     }

    //     .el-tabs__active-bar {
    //       display: none;
    //     }
    //   }

    //   .el-tabs__content {
    //     height: 200px;
    //     padding: 5px;
    //     box-sizing: border-box;
    //   }
    // }
  }

</style>
