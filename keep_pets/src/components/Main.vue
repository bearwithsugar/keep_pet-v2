<template>
  <div >
    <div class="left_menu">
      <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#ffffff"
          text-color="#909399"
          active-text-color="#f90">
          <el-submenu index="1" v-if="lingyangzhongxin">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>领养中心</span>
            </template>
            <el-menu-item-group>
              <template slot="title">狗类</template>
              <el-menu-item index="1-1">金毛</el-menu-item>
              <el-menu-item index="1-2">阿拉斯加</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <template slot="title">猫类</template>
              <el-menu-item index="2-1">中华田园猫</el-menu-item>
              <el-menu-item index="2-2">橘猫</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">其他</template>
              <el-menu-item index="1-4-1">。。。</el-menu-item>
            </el-submenu>
          </el-submenu>
          <router-link to="/main/share">
            <el-menu-item index="3" v-if="lingyangfankui">
              <i class="el-icon-menu"></i>
              <span slot="title">领养反馈</span>
            </el-menu-item>
          </router-link>

          <router-link to="/main/test">
          <el-menu-item index="4" v-if="xinggeceshi">
            <i class="el-icon-document"></i>
            <span slot="title">性格测试</span>
          </el-menu-item>
          </router-link>

          <router-link :to="{name: 'usermessage'}">
            <el-menu-item index="5" v-if="gerenzhongxin">
              <i class="el-icon-setting"></i>
              <span slot="title">个人中心</span>
            </el-menu-item>
          </router-link>
          <router-link to="/main/show_manager">
            <el-menu-item index="6" v-if="chakanguanliyuan">
              <i class="el-icon-menu"></i>
              <span slot="title">查看管理员</span>
            </el-menu-item>
          </router-link>
          <el-menu-item index="7" v-if="xinzengguanliyuan">
            <i class="el-icon-setting"></i>
            <span slot="title">新增管理员</span>
          </el-menu-item>
          <el-menu-item index="8" v-if="wodelingyang">
            <i class="el-icon-setting"></i>
            <span slot="title">我的领养</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      </el-row>

    </div>
    <div class="right_place">
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
  export default {
    data(){
      return{
        lingyangzhongxin:false,
        xinggeceshi:false,
        lingyangfankui:false,
        gerenzhongxin:false,
        xinzengguanliyuan:false,
        chakanguanliyuan:false,
        wodelingyang:false

      }
    },
    created(){
      var flag=this.$route.params.user;
      if(flag=="user"){
        this.lingyangfankui=this.lingyangzhongxin=this.xinggeceshi=this.gerenzhongxin=this.wodelingyang=true
      }else if(flag=="superManger"){
        this.chakanguanliyuan=this.xinzengguanliyuan=true
      }
        },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .right_place{
    float: right;
    width: 80%;
  }
  .display_inline{
    display: inline;
  }
  .el-row{
    position: absolute;
    width: 20%;
  }
  .el-col-12{
    width: 100%;
  }

  a:-webkit-any-link{

    text-decoration:none;
  }
  .el-menu-item{
    color: white;
  }
  .is-active.is-link{
    color: #CD4F39;
  }
  /*.is-link{*/
    /*color: coral;*/
  /*}*/
  .test
  {
    position: absolute;
    width: 100%;
  }
  .router-link-active{
    color: #CD4F39;
  }
  .el-row[data-v-54d3a52e]{
    position: fixed;
    top: 61px;
    width: 20%;
  }
</style>
