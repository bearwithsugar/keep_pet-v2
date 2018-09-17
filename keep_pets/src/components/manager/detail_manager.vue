<template>
  <el-row >
    <el-col class="show_form" :span="8" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '20px' }">
        <div slot="header" class="clearfix">
          <span style="font-size: 2em">志愿者信息</span>
          <el-button style="float: right; padding: 10px;color: coral" type="text">删除</el-button>
        </div>
        <div class="text item">
          {{'账号为  ' +user.id }}
        </div>
        <div class="text item">
          {{'姓名是 ' + user.name }}
        </div>
        <div class="text item">
          {{'是个 ' + user.sex+'生' }}
        </div>
        <div class="text item">
          {{'身份证号  ' + user.idcard }}
        </div>
        <div class="text item">
          {{'电话号码是 ' + user.phone }}
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data(){

      return{
        show2: false,
        user:{
          id:'0001',
          name:'张三',
          sex:'男',
          idcard:'220402xxxxxxxxxxxx',
          phone:'13100008888',
          account:'账户为空',
        },
        initSuccess:false
      }
    },

  }
</script>

<style scoped>
  .el-row[data-v-54d3a52e][data-v-54d3a52e]{
    width: 80%;
    padding-left: 5%;
    padding-right: 5%;

  }

  .el-col-8{
    width: 80%;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .text {
    font-size: 1em;
    text-align: left;
  }

  .item {
    margin-bottom: 18px;
  }

</style>
