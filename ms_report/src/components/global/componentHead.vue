<template>
  <div class="head">
    <el-row type="flex" class="row-bg indexTitle" justify="center">
      <el-col :span="12">
        <el-row type="flex" class="row-bg indexTitle">
          <div style="width: 384px; margin-right: 10px; border-right:1px solid #fff">
          </div>
          <div>
            <a href="/#/home/index">
              <el-image :src="require('@/assets/ICO-home.png')" class="icon-Home"></el-image>
            </a>
          </div>
          <div class="showContent">
            <el-popover placement="bottom" width="150" trigger="click">
              <ul class="listSelect">
                <li>
                  <a href="/#/home/notice">
                    <i ></i>
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
                <el-image :src="require('@/assets/ICO-management.png')" class="topIcon"></el-image>
              <el-button slot="reference">
                <div> 我的管理</div>
              </el-button>
            </el-popover>
          </div>
        </el-row>
      </el-col>
      <el-col :span="12">
        <!-- <div class="operation">
          <div class="head">
            <img src="../../assets/u29.png">
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
        </div> -->

      </el-col>
    </el-row>
  </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods: {

        }
    }
</script>
<style scoped lang="scss">
    div[id^=el-popover]{
        
    }
    .head {
        background: #1E4B8E;
        height: 78px;
        padding: 24px 0;
    }
</style>
