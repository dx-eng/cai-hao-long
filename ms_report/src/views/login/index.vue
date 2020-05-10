<template>
  <div id="login">
    <div class="container">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="10">
          <el-image :src="require('@/assets/chahua.png')"></el-image>
        </el-col>
        <el-col :span="10">
          <p class="title">河南能源内部交互平台</p>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item>
              <el-input v-model="form.userName" placeholder="请输入用户名">
                <i slot="suffix">
                  <el-image :src="require('@/assets/username.png')"></el-image>
                </i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" placeholder="请输入密码">
                <i slot="suffix">
                  <el-image :src="require('@/assets/password.png')"></el-image>
                </i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.name" placeholder="请输入验证码">
                <i slot="suffix" class="pactiy">
                  <el-image :src="require('@/assets/验证码.png')"></el-image>
                </i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="onSubmit">立即登录</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {

      }
    }
  }

</script>
<style second lang="scss">
  #login {
    width: 100%;
    height: 100%;
    background: url('../../assets/bg.png') no-repeat;
    background-size: cover;

    .container {
      width: 65%;
      max-width: 1370px;
      min-width: 840px;
      height: 65%;
      max-height: 730px;
      min-height: 470px;
      background: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      padding-top: 40px;

      .pactiy {
        div {
          overflow: initial;
          right: 85px !important;
        }

        img {
          height: 50px;
          width: auto;
        }
      }

      .el-input__suffix {
        position: absolute;
        width: 24px;

        div {
          position: absolute;
          top: 50%;
          width: 24px;
          right: 24px;
          transform: translateY(-50%);
        }
      }

      .title {
        height: 30px;
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 30px;
        text-align: center;
        margin-bottom: 50px;
      }

      .el-input--small .el-input__inner {
        height: 56px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(221, 221, 221, 1);
        border-radius: 4px;

      }

      .el-form-item__content {
        margin-left: 0 !important;
      }

      .el-button--success {
        width: 100%;
        background: linear-gradient(#008bd7, #0846ca) !important;
        border: none;
        background-size: cover;
        height: 56px;

        span {
          font-size: 24px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }

</style>
