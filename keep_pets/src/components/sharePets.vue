<template>
  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
  <div v-if="initSuccess" style="margin-top: 10%">

    <div style=" margin-top: 20px;">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="分享您的领养宠物"
            style="padding: 0% 10%"
            v-model="editshare.feedback"
          >
          </el-input>
          <div style="padding-top: 3%">
            <el-button type="success" icon="el-icon-check" circle @click="postRemark"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="resetedit"></el-button>
          </div>
    </div>

    <el-row>
        <el-col class="show_share" :span="8" v-for="(o, index) in 10" :key="o" >
          <el-card :body-style="{ padding: '10px' }">
            <div style="float: left;margin: 1%">
              <img src="../../static/images/cat2.jpg" class="image">
            </div >
            <div style="float: left;margin: 1%">
             <img src="../../static/images/cat.jpg" class="image">
            </div>
            <div style="padding: 14px;">
              <span>快看我刚领养不久的小猫咪，实在是太可爱了！在我的照料下会越来越健康！</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>
    </transition>
</template>

<script>
  import common from '../com/common'
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,

        editshare:{feedback:''},
        initSuccess: false,
        currentDate: new Date()
      };
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
      },
      resetedit(){
        this.editshare.feedback=''
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      postRemark(){
        var url=common.apiurl+"helpanimal/setFeedback"
        var a = JSON.stringify(this.editshare);

        console.log(a)
        this.$http.post(url,a,{emulateJSON:true}).then(function (res) {
          console.log(res)
          // alert(res)
        })
      }
    }
  }
</script>

<style scoped>
  .show_share{
    width: 80%;
    margin-top: 8%;
    margin-left: 8.5%;
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
    width: 100px;
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
  .back_image{
    background-image: url("../../static/images/dog4.jpg");
    background-position: center bottom;
    background-size: contain;
    background-attachment: fixed;
  }
  .back_color{
    background-color:rgba(0,0,0,0.5);
  }

</style>
