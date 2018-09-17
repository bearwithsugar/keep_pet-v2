<template>

  <el-row>
    <el-col :span="8" v-for="(o, index) in 20" :key="o" :offset=" 2 ">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div style="float: left;font-size: 1.5em">
            姓名
          </div>
          <router-link to="/main/detail_manager">
            <el-button style="float: right; padding: 3px 0" type="text" >查看详细信息</el-button>
          </router-link>
        </div>
        <div class="text item">
          性别
        </div>
        <div class="text item">
          年龄
        </div>
        <div class="text item">
          所在地：xxx
        </div>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    methods:{
      showdetails(){

      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }


  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .el-row[data-v-54d3a52e]{
    width: 80%;
    position: absolute;
  }

  .el-col-8{
    width: 30%;
    margin-top: 5%;
  }

</style>
