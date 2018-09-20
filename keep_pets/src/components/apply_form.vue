<template>
  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
    <div class="saveform" style="margin-top: 10%;margin-bottom: 5%">
      <el-row>
      <el-col class="show_form" :span="8" :offset=" 1">
        <el-card :body-style="{ padding: '20px' }">
          <span style="font-size: 3em">领养申请表</span>
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="动物名字">
              <el-input v-model="form.anname"></el-input>
            </el-form-item>
            <el-form-item label="您的姓名">
              <el-input v-model="form.anname"></el-input>
            </el-form-item>
            <el-form-item label="您的性别">
              <RadioGroup v-model="form.gender">
                <Radio label="男">
                  <span>男</span>
                </Radio>
                <Radio label="女">
                  <span>女</span>
                </Radio>
              </RadioGroup>
            </el-form-item>
            <el-form-item label="您的身份证号">
              <el-input v-model="form.anname"></el-input>
            </el-form-item>
            <el-form-item label="您的手机号">
              <el-input v-model="form.anname"></el-input>
            </el-form-item>
            <el-form-item label="您的地址">
              <el-input type="textarea" v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="居住环境的简单描述">
              <el-input type="textarea" v-model="form.address"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    </div>
  </transition>
</template>

<script>
  import common from "../com/common"
  export default {
    data(){
      return{
        form: {
          anname: '',
          variety:'',
          gender:'',
          age:1,
          hair:'',
          scale:'',
          character:'',
          description: '',
          address: '',
        },
        form2: {
          anno:'01',
          anname: '动物姓名',
          adno:'领养人姓名',
          gender:'男',
          idcard:'身份证',
          job:'产品经理',
          phone:'电话',
          address:'地址',
          lcdTion:'环境',
          isenable: '',

        },
      }
    },
    methods:{
      gethot(){
        var url = common.apiurl+'helpanimal/showAll';
        this.$http.get(url).then(function (response) {
          console.log(response)
          var msg = response.body;
          this.petsMessage=msg.data;
          console.log(this.petsMessage)
        });
      },
      postMessage(){
        var url=common.apiurl+"AForm/submit"
        var a = JSON.stringify(this.form2);

        console.log(a)
        this.$http.post(url,a,{emulateJSON:true}).then(function (res) {
          console.log(res)
          // alert(res)
        })

      },
    }

  }
</script>



<style scoped>
  .saveform{
    margin-bottom: 30px;
    margin-top: 30px;
    margin-left: 20%;
    margin-right: 20%;
  }
  .show_form{
    width: 100%;
  }
  .el-card__body{
    padding: 20px;
  }

  .el-steps--horizontal {
    white-space: nowrap;
    padding: 5% 0;}
  .el-col-offset-1{
    margin-left: 0;
  }
</style>
