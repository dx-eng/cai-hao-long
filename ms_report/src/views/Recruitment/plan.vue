a<template>
  <div class="plan">
    <cart title="工作进度反馈">
      <div slot="content">
        <el-form ref="form" :model="form" label-position="left" label-width="140px">

          <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
            <el-col :span="12">
              <el-form-item label="反 馈 事 项：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label=" 当 前 进 度：">
                <el-select v-model="form.region" placeholder="10%">
                  <el-option label="10%" value="shanghai"></el-option>
                  <el-option label="20%" value="beijing"></el-option>
                  <el-option label="30%" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
            <el-col :span="12">
              <el-form-item label="反馈截至时间">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                </el-date-picker>
                <img src="../../assets/u66.png">

              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="计划反馈截止时间">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                </el-date-picker>
                <img src="../../assets/u66.png">
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="备注：" prop="desc" class="backups">
            <el-input type="textarea" v-model="form.desc" prop="" style="margin:0"></el-input>
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
  .plan {
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

    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 85% !important;
      float: left;
    }

    .backups {
      .el-form-item__content {
        margin-left: 0 !important;
      }
    }

  }

</style>
