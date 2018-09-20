<template>

    <div >
    <div class="background" v-bind:style="{ backgroundImage: 'url('+'http://150.109.76.174:8081'+pet.picture+')'}"></div>
    <div style="padding-right: 15%;padding-left: 15%;padding-top: 5%">
      <el-row>
        <el-col :span="8" >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="'http://150.109.76.174:8081/'+pet.picture" class="image">
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div style="position: relative;text-align: left;padding-left: 15%;padding-right: 15%">

        <!--<div v-for="item in msg" :key="msg" class="text item" style="color: white;">-->
          <!--{{item.label}}-->
        <!--</div>-->
      <div class="text item" style="color: white">
        {{pet.anname}}
      </div>

      <div class="text item" style="color: white">
        {{pet.age}}
      </div>

      <div class="text item" style="color: white">
        {{pet.gender}}
      </div>

      <div class="text item" style="color: white">
        {{pet.hair}}
      </div>

      <div class="text item" style="color: white">
        {{pet.isenable}}
      </div>
      <div class="text item" style="color: white">
        {{pet.scale}}
      </div>
      <div class="text item" style="color: white">
        {{pet.variety}}
      </div>
      <div class="text item" style="color: white">
        {{pet.address}}
      </div>
      <div class="text item" style="color: white">
        {{pet.character}}
      </div>

      <div class="text item" style="color: white">
        {{pet.description}}
      </div>




      <router-link to="/main/apply_form">
        <div style="padding-bottom: 10%" size="medium">
          <el-button type="success">立刻领养</el-button>
        </div>
      </router-link>

    </div>

  </div>
</template>

<script>
  import common from '../com/common'
  export default {

    data(){


      return{
        url:"../../static/images/cat.jpg",
        pet:{},
        id:{anno:''},
        initSuccess:false,
        currentDate: new Date(),
      }

    },
    created(){
      this.id.anno=this.$route.params.id;
      this.initSlot();
      this.postPetid()
    },
    methods:{
      testone(){
        this.initSuccess=!this.initSuccess;
      },
      initSlot() {
        let vm = this;
        setTimeout(function () {
          vm.initSuccess = true;
        }, (Number(vm.time || 500)));
      },
      postPetid(){
        var url= common.apiurlb+"helpanimal/showSingle"
        var a = JSON.stringify(this.id);
        console.log(a)
        this.$http.post(url,a,{emulateJSON:true}).then(function (res) {
           this.pet=res.data.data

          console.log(this.pet)
          console.log(this.pet.anname)

        })
      },
    }

  }
</script>

<style scoped>
  .background {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    /*放置背景图*/
    /*background-image: url(../../static/images/cat.jpg);*/
    /*设置背景图大小*/
    background-size: 100% 100%;
    /*虚化背景图*/
    filter: blur(30px);
    color: white;
    background-color: #000000;
  }



  .image {
    width: 100%;
    display: block;
  }

  .el-card{
    border: 0px;
  }
  .el-col-8{
    width: 100%;
  }

  .text {
    font-size: 30px;
  }

  .item {
    margin-bottom: 2em;
    margin-top: 2em;
  }
</style>
