<template>
  <div class="govern">
    <slot name="title">
      <p class="card-head">{{title}}</p>
    </slot>
    <div class="card-content">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="12">
          <el-input v-model="input" placeholder="请输入搜索内容" style="width:65%"></el-input>
          <el-button type="primary" icon="el-icon-search" style="margin:0 8px;color: white;"></el-button>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link" style="font-size:12px">
              高级搜索<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item> -->
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="12">
          <el-row type="flex" class="row-bg" justify="end">
            <el-col :span="5">
              <el-button type="primary" @click="add">新增</el-button>
            </el-col>
            <el-col :span="5">
              <el-button type="primary">删除</el-button>
            </el-col>
            <el-col :span="5">
              <el-button type="primary">导出</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div style="border:1px solid #333;margin-top:10px;">
        <slot name="listTitle">
          <p class="card-head">{{listTitle}}</p>
        </slot>

        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"
          style="width: 90%;margin: 0 auto; border-bottom:1px solid #333; border-right:1px solid #333;"
          @selection-change="handleSelectionChange">

          <el-table-column type="selection" width="55">
          </el-table-column>

          <el-table-column v-for="(item,idx) in list" :key="idx" :prop="item.prop" :label="item.label"
            :width="item.width">
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
          </el-table-column>
        </el-table>
        <div class="block" style="height:60px;padding-top: 20px;">
          <span class="demonstration">共3条</span>
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            style="float:right;width:400px;" :current-page.sync="currentPage3" :page-size="3"
            layout="prev, pager, next, jumper" :total="30" :pager-count="5">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "govern",
    data() {
      return {
       
        multipleSelection: [],
        currentPage3: 5,
      }
    },
    props: {
       tableData: {
        require: false,
        type: Array
      },
      UrlSkaip: {
        require: false,
        type: String
      },
      title: {
        require: false,
        type: String
      },
      listTitle: {
        require: false,
        type: String
      },
      list: {
        require: false,
        type: Array
      },
      input: '',
    },
    methods: {
      add() { //路径跳转

        this.$router.push({
          path: this.UrlSkaip
        })
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }

</script>
<style lang="scss">
  .govern {
    padding: 10px;
    width: 766px;
    height: 480px;
    font-size: 14px;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    text-align: left;
    border: 1px solid #333;

    .el-button--primary {
      background-color: rgba(0, 153, 255, 1);
      color: black;
    }

    td,
    th {
      border-left: 1px solid #333;
      border-top: 1px solid #333;
      font-size: 12px;
    }

    .el-pager {
      li {
        border: 1px solid #333;
        padding: 0;
        margin: 0 2px;
        min-width: 25px;
      }
    }
  }

</style>
