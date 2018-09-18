<template>
  <div id="app">
      <div class="topmenu">
        <el-menu  class="el-menu-demo" mode="horizontal" style="background-color:rgba(255,255,255,0.3);">
          <el-menu-item index="1" @click="toMain">主页</el-menu-item>
          <el-menu-item index="2" @click="toSave">救助</el-menu-item>
          <el-submenu index="5">
            <template slot="title">消息中心</template>
            <el-menu-item index="5-1">系统消息</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
            <el-submenu index="5-4">
              <template slot="title">选项4</template>
              <el-menu-item index="5-4-1">选项1</el-menu-item>
              <el-menu-item index="5-4-2">选项2</el-menu-item>
              <el-menu-item index="5-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-button type="warning" @click="registerFormVisible = true" v-if="notlogin" >注册</el-button>
          <el-button type="warning" @click="loginFormVisible = true" v-if="notlogin">登录</el-button>
        </el-menu>
      </div>
      <div>
        <router-view></router-view>
      </div>
      <div>
        <el-dialog title="登录" :visible.sync="loginFormVisible">
          <el-form :model="userloginform">
            <el-form-item label="用户名"  >
              <el-input v-model="userloginform.name" class="input_box" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密  码">
              <el-input  type="password" class="input_box" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="loginFormVisible = false">取 消</el-button>
            <router-link :to="{
                      name: 'main',
                      params: {
                          user: 'superManger'
                      }
                  }">
              <el-button type="primary" @click="loginFormVisible = false;notlogin=false" >超级管理员登录</el-button>
            </router-link>
            <router-link :to="{
                      name: 'main',
                      params: {
                          user: 'user'
                      }
                  }">
              <el-button type="primary" @click="loginFormVisible = false;notlogin=false" >普通用户登录登录</el-button>
            </router-link>
          </div>
        </el-dialog>

        <el-dialog title="注册" :visible.sync="registerFormVisible">
         <el-form :model="userregisterform" status-icon :rules="rules2" ref="userregisterform" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="adName" >
              <el-input v-model="userregisterform.adName" class="input_box" auto-complete="off"></el-input>
            </el-form-item>
           <el-form-item label="性别" prop="gender" >
             <RadioGroup v-model="userregisterform.gender">
               <Radio label="1">
                 <span>男</span>
               </Radio>
               <Radio label="2">
                 <span>女</span>
               </Radio>
             </RadioGroup>
           </el-form-item>
           <el-form-item label="身份证号" prop="idCard" >
             <el-input v-model="userregisterform.idCard" class="input_box" auto-complete="off"></el-input>
           </el-form-item>
           <el-form-item label="账号" prop="account">
             <el-input v-model.number="userregisterform.account " class="input_box"></el-input>
           </el-form-item>
          <!--通过 rules 属性传入约定的验证规则,使用status-icon属性为输入框添加了表示校验结果的反馈图标,prop 属性设置为需校验的字段名-->
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="userregisterform.password" class="input_box" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="userregisterform.checkPass" class="input_box" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="registertoUser">注册成为领养人</el-button>
              <el-button type="primary" @click="submitForm('userregisterform')">注册成为志愿者</el-button>
              <el-button @click="resetForm('userregisterform')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
    </div>
</template>

<script>

  import swipe from './components/Swipe'
  import common from './com/common'

export default {
  name: 'App',
  data() {
    //注册验证
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('         昵称不能为空'));
      }
      else {
        setTimeout(() => {
          callback();
        }, 1000);
      }
    };
    var checkIdcard = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('         身份证不能为空'));
      }
      else {
        setTimeout(() => {
          callback();
        }, 1000);
      }
    };
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('         账号不能为空'));
      }
      else {
        setTimeout(() => {
          callback();
        }, 1000);
      }
    };
    var checkPhone= (rule, value, callback) => {
      if (!value) {
        return callback(new Error('         电话号不能为空'));
      }
      else {
        setTimeout(() => {
          callback();
        }, 1000);
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('         请输入密码'));
      } else {
        if (this.checkPass !== '') {
          console.log("二次密码不为空")
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('         请再次输入密码'));
      } else if (value !== this.userregisterform.password) {
        callback(new Error('         两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      checkPass: '',
      isUser:true,
      isVolunteer:true,
      isManiger:true,
      isSuperManiger:true,
      notlogin:true,
      userregisterform: {
        adName:'',
        gender:1,
        idCard:'',
        accound:'',
        password: '',
        phone: '',
        checkpass:''
      },
      rules2: {
        adName: [
          { validator: checkUsername, trigger: 'blur' }
        ],
        idCard: [
          { validator: checkIdcard, trigger: 'blur' }
        ],
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ],
        account: [
          { validator: checkAccount, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      loginFormVisible: false,
      registerFormVisible:false,
      userloginform: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
    };
  },
  methods: {

    //注册页面提交表单和重置表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toSave:function() {
      this.$router.push('/main/save');
    },
    toMain:function() {
      this.$router.push('/');
    },
    registertoUser(){
      delete this.userregisterform.checkpass
      var url=common.apiurl+"/aregister"
      var a = JSON.stringify(this.userregisterform);

      console.log(a)
      this.$http.post(url,a,{emulateJSON:true}).then(function (res) {
        console.log(res)
      })
    }

  },
  components:{
    swipe,
  }
}
</script>

<style>
  body {
    margin: 0px;
  }
  .menu_height{
    height: 500px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  ul.el-menu-vertical-demo.el-menu{
    height: 1000px;
     border-right: solid 0px
}

.el-carousel__item h3 {
color: #475669;
font-size: 14px;
opacity: 0.75;
line-height: 150px;
margin: 0;
}

.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}
.swipe_image{
width: 100%;
}
.el-button--warning{
margin: 10px;
float: right;
  background-color: #f90;
  border-color: #f90;
}
.input_box{
width: 80%;
}
  .el-form-item__error{
    position: relative;
  }
.image_text{
  color: white;
  width: 100%;
  height: 500px;
  position: absolute;z-index: 3; display: table-cell;
  text-align: left;
  left: 20%;
  top: 60%;
  font-size: 6em;
  font-family: "Hiragino Sans GB";
}
  .topmenu{
    position: fixed;
    top: 0px;
    text-align: right;
    width: 100%;
    z-index: 3;
  }
  .el-menu--horizontal{
    border-bottom:0px;
    color: black;
  }
  .el-menu--horizontal>.el-menu-item{
    color: black;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title{
    color: black;
  }
</style>
