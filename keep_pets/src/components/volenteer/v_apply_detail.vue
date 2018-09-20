<template>

  <div class="show" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 2em">领养申请的信息</span>
        <el-button style="float: right; padding: 10px;color: coral" type="text">修改</el-button>
      </div>
      <div class="text item">
        {{'领养表单标号为  ' +form.id }}
      </div>
      <div class="text item">
        {{'领养者的姓名是 ' + form.name }}
      </div>
      <div class="text item">
        {{'领养者是个 ' + form.sex+'生' }}
      </div>
      <div class="text item">
        {{'领养者的身份证号  ' + form.idcard }}
      </div>
      <div class="text item">
        {{'领养者的电话号码是 ' + form.phone }}
      </div>
    </el-card>

    <el-card class="box-card" style="margin-top: 5%">
      <span style="font-size: 1em">请您给出审批意见</span>
      <el-button  style="float: right; padding: 3px 0;color: coral" type="text" @click="post2">同意</el-button>
      <el-button  style="float: right; padding: 3px 0;color: coral" type="text" @click="show2 = true">拒绝</el-button>
    </el-card>
  </div>
</template>

<script>
  import common from "../../com/common"
  export default {


    data(){
      return{
        test:{adano:"6"},
        form:{
          id:'0001',
          name:'张三',
          sex:'男',
          idcard:'220402xxxxxxxxxxxx',
          phone:'13100008888',
          account:'账户为空',
        },
      }
    },
    methods:{
      post(){
        var url= common.apiurl+"AForm/AuditForm"
        var a = JSON.stringify(this.test);
        console.log(a)
        this.$http.post(url,a,{emulateJSON:true}).then(function (res) {
          console.log(res)
        })
      },
      post2(){
        var url= common.apiurl+"/AForm/getAForm"
        var a = JSON.stringify(this.test);
        console.log(a)
        this.$http.post(url,a,{emulateJSON:true}).then(function (res) {
          console.log(res)
        })
      },
    }
  }
</script>

<style scoped>
  .text {
    font-size: 1em;
    text-align: left;
  }

  .item {
    margin-bottom: 18px;
  }
  .show{
    margin: 5%;
  }
</style>
