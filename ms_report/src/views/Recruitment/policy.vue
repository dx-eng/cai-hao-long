<template>
  <div class="policy">
    <cart title="政策发布">
      <div slot="content">
        <el-form ref="form" :model="form" >
            
              <el-form-item label="发布范围">
                <el-select v-model="form.region" placeholder="全集团">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
 

          <el-form-item label="政策标题：" class="myTitle" prop="desc">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="政策内容：" prop="desc" >
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
<style lang="scss" >
    .policy{
       .myTitle{
           .el-input--small .el-input__inner{
                height: 40px;
                width: 400px;
                float: left;
           }
       }
       .el-textarea__inner{
           height:120px;
       }
       .el-button--primary{
           background-color: rgba(0, 153, 255, 1);
           color:black;
           margin: 0 100px;
           width: 90px;
       }
       .el-select{
           float: left;
           width: 310px;
           margin-left:18px;
        }
    }
   
</style>
