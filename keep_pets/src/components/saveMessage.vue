<template>
    <div class="saveform" style="margin-top: 10%;margin-bottom: 5%">

      <transition
        name="bounce"
        enter-active-class="bounceInLeft"
        leave-active-class="bounceOutRight"
      >
        <div style="padding: 20% 10%" v-if="initSuccess">
          <span style="font-size: 3em">请您填写救助申请表，我们将根据您填写的信息对你的领养条件进行审核。</span>
          <br/>
          <Button type="warning" ghost size="large" style="margin-top: 5%" @click="toStep2">好的，请开始</Button>
        </div>
      </transition>
      <transition
        name="bounce"
        enter-active-class="bounceInLeft"
        leave-active-class="bounceOutRight"
      >
        <el-row v-if="step2">
        <el-col class="show_form" :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '20px' }">
            <span style="font-size: 3em">救助申请表</span>
            <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="志愿者姓名">
                <el-input v-model="form.anname"></el-input>
              </el-form-item>
              <el-form-item label="动物种类">
                <RadioGroup v-model="form.variety">
                  <Radio label="猫类">
                    <span>猫类</span>
                  </Radio>
                  <Radio label="狗类">
                    <span>狗类</span>
                  </Radio>
                  <Radio label="其他">
                    <span>其他</span>
                  </Radio>
                </RadioGroup>
              </el-form-item>
              <el-form-item label="动物年龄">
                <el-input-number v-model="form.age" :min="1" :max="10"></el-input-number>
              </el-form-item>
              <el-form-item label="性别">
                <RadioGroup v-model="form.gender">
                  <Radio label="雄性">
                    <span>雄性</span>
                  </Radio>
                  <Radio label="雌性">
                    <span>雌性</span>
                  </Radio>
                </RadioGroup>
              </el-form-item>
              <el-form-item label="性格">
                <RadioGroup v-model="form.character" vertical="">
                  <Radio label="温顺、粘人">
                    <span>温顺、粘人</span>
                  </Radio>
                  <Radio label="胆怯">
                    <span>胆怯</span>
                  </Radio>
                  <Radio label="有防备心、攻击性强">
                    <span>有防备心、攻击性强</span>
                  </Radio>
                  <Radio label="懒惰">
                    <span>懒惰</span>
                  </Radio>
                  <Radio label="活泼">
                    <span>活泼</span>
                  </Radio>
                </RadioGroup>
              </el-form-item>
              <el-form-item label="动物毛发">
                <RadioGroup v-model="form.hair">
                  <Radio label="短毛">
                    <span>短毛</span>
                  </Radio>
                  <Radio label="中毛">
                    <span>中毛</span>
                  </Radio>
                  <Radio label="长毛">
                    <span>长毛</span>
                  </Radio>
                </RadioGroup>
              </el-form-item>
              <el-form-item label="体型大小">
                <RadioGroup v-model="form.scale">
                  <Radio label="大型">
                    <span>大型</span>
                  </Radio>
                  <Radio label="中型">
                    <span>中型</span>
                  </Radio>
                  <Radio label="小型">
                    <span>小型</span>
                  </Radio>
                </RadioGroup>
              </el-form-item>
              <el-form-item label="动物情况">
                <el-input type="textarea" v-model="form.description"></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input type="textarea" v-model="form.address"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="postMessage">继续添加图片</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
      </transition>
      <transition
        name="bounce"
        enter-active-class="bounceInLeft"
        leave-active-class="bounceOutRight"
      >

        <div style="padding: 20% 10%" v-if="step3">
          <span style="font-size: 3em" >我们将审核您的信息并致电联系您！感谢您的耐心等待</span>
          <br/>
          <Button type="warning" ghost size="large" style="margin-top: 5%" >查看我的领养申请进程</Button>
        </div>

      </transition>
      <transition name="el-zoom-in-top">
        <el-card v-show="show2" class="box-card transition-box">
          <el-form ref="form"  label-width="80px">
            <el-upload
              :action="pictureurl"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            :data="test">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>

          </el-form>
          <el-button style="float: right; padding: 3px 0;color: coral;margin: 10px" type="text" @click="show2 = false">取消</el-button>
          <el-button style="float: right; padding: 3px 0;color: coral;margin: 10px" type="text" @click="toStep3">确认</el-button>

        </el-card>
      </transition>

    </div>

</template>

<script>
  import common from '../com/common'
  export default {
    data() {
      return {
        step1:true,
        step2:false,
        step3:false,
        pictureurl:common.apiurlb+"helpanimal/registPicture",
        show2: false,
        dialogImageUrl: '',
        dialogVisible: false,

        test:{anno:''},
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
        initSuccess: false,
      }
    },
    created() {
      this.initSlot();
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
      initSlot() {
        let vm = this;
        setTimeout(function () {
          vm.initSuccess = true
        }, (Number(vm.time || 500)));
      },
      postMessage(){
         var url=common.apiurl+"/SalForm/submit"
        //var url=common.apiurlb+"helpanimal/registAnimal"
        var a = JSON.stringify(this.form);

         console.log(a)
        this.$http.post(url,a,{emulateJSON:true}).then(function (res) {
          console.log(res)
          this.test.anno=res.bodyText
          console.log(res.bodyText)
        })
        this.show2=true
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      toStep2(){
        let vm = this;
        vm.initSuccess = false,
        setTimeout(function () {
          vm.step2=true
        }, (Number(vm.time || 800)));
      },
      toStep3(){
        let vm = this;
        vm.step2 = false,
          vm.show2=false
          setTimeout(function () {
            vm.step3=true
          }, (Number(vm.time || 800)));
      }
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


</style>
