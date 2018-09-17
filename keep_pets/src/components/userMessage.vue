<template>
  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
    <div class="show" v-if="initSuccess" style="margin-top: 10%">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 2em">您的信息</span>
          <el-button style="float: right; padding: 10px;color: coral" type="text">修改</el-button>
        </div>
        <div class="text item">
          {{'您的账号为  ' +user.id }}
        </div>
        <div class="text item">
          {{'您的姓名是 ' + user.name }}
        </div>
        <div class="text item">
          {{'您是个 ' + user.sex+'生' }}
        </div>
        <div class="text item">
          {{'您的身份证号  ' + user.idcard }}
        </div>
        <div class="text item">
          {{'您的电话号码是 ' + user.phone }}
        </div>
      </el-card>

      <el-card class="box-card" style="margin-top: 5%">
          <span style="font-size: 1em">您想要修改密码？</span>
          <el-button  style="float: right; padding: 3px 0;color: coral" type="text" @click="show2 = true">是的</el-button>
      </el-card>

      <div style="display: flex; margin-top: 20px;">

        <transition name="el-zoom-in-top">
          <el-card v-show="show2" class="box-card transition-box">
            <el-form ref="form"  label-width="80px">
              <el-form-item label="旧密码">
                <el-input type="password"></el-input>
              </el-form-item>
              <el-form-item label="新密码">
                <el-input type="password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-input type="password" ></el-input>
              </el-form-item>

            </el-form>
            <el-button style="float: right; padding: 3px 0;color: coral;margin: 10px" type="text" @click="show2 = false">取消</el-button>
            <el-button style="float: right; padding: 3px 0;color: coral;margin: 10px" type="text" @click="show2 = false">确认</el-button>

          </el-card>
        </transition>

      </div>
    </div>

  </transition>
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
    created() {
      this.initSlot();
    },

    methods: {
      initSlot() {
        let vm = this;
        setTimeout(function () {
          vm.initSuccess = true;
        }, (Number(vm.time || 500)));
      }
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
  .show{
    margin: 5%;
  }
  .transition-box {
    margin-bottom: 10px;
    width: 100%;
    border-radius: 4px;
    background-color: white;
    text-align: center;
    color: #000;
    box-sizing: border-box;
  }
</style>
