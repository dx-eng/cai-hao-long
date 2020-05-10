<template>
  <div class="notice">
    <cart title="公告">
      <div slot="content">
        <el-form ref="form" :model="form">

          <el-row type="flex" class="row-bg" justify="space-between">

            <el-col :span="12">
              <el-form-item label="发布范围">
                <el-select v-model="form.region" placeholder="全集团">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="9">
              <el-form-item label="反馈截至时日：">
                <el-col :span="14">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                  </el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <img src="../../assets/u66.png">
            </el-col>
          </el-row>

          <el-form-item label="公告标题：" class="myTitle" prop="desc">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="公告内容：" prop="desc">
            <el-input type="textarea" v-model="form.desc" prop=""></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">发布</el-button>
            <el-button type="primary" @click="goback">返回</el-button>
          </el-form-item>

        </el-form>
      </div>
    </cart>
  </div>
</template>
<script>
  import cart from './informTempalte'
  export default {
    components: {
      cart
    },
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
          desc: '请输入内容'
        }
      }
    },
    methods: {
      goback() {
        this.$router.go(-1)
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>
<style lang="scss">
  .notice {
    .title {
      .el-input--small .el-input__inner {
        height: 40px;
        width: 400px;
        float: left;
      }
    }

    .el-textarea__inner {
      height: 120px;
    }

    .el-button--primary {
      background-color: rgba(0, 153, 255, 1);
      color: black;
      margin: 0 100px;
      width: 90px;
    }
  }

</style>
