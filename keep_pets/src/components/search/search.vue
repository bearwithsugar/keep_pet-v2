<template>
  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
    <div v-show="initSuccess" style="background: white;padding: 5%">
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div >
        <el-input placeholder="请输入内容" v-model="searchKey.description" class="input-with-select">

          <el-button slot="append" icon="el-icon-search" @click="postSearch"></el-button>
        </el-input>
      </div>
    </el-card>
    <div>

      <el-row class="show_pets">
        <el-col :span="8" v-for="(pet,index) in petsMessage" :offset="2" :key="index">
          <router-link v-bind="{to:'/detail/'+pet.id}"  style="text-decoration: none">
            <el-card :body-style="{ padding: '0px' }" shadow="hover" >
              <img src="../../../static/images/cat3.jpg" class="image">
              <div style="padding: 14px;">
                <span>{{pet.anname}}</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button" >操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
  </transition>
</template>

<script>
  import image1 from '../../../static/images/cat3.jpg'
  import common from '../../com/common'

  export default
  {
    data(){
      return{
        initSuccess: false,
        petsMessage:[
        ],
        searchKey:{
          description: '',
          isSaveRecord:1
        }
      }

    },
    created(){
      this.initSlot()
      this.getAll()


    },
    methods:{
      initSlot() {
        let vm = this;
        setTimeout(function () {
          vm.initSuccess = true;
        }, (Number(vm.time || 500)));
      },
      postSearch(){
        var url= common.apiurlb+"helpanimal/showSearch"
        var a = JSON.stringify(this.searchKey);
        console.log(a)
        this.$http.post(url,a,{emulateJSON:true}).then(function (response) {
          console.log(response)
          console.log(response.data.data)
          this.petsMessage=response.data.data
          // alert(res)
        })
      },
      getAll(){
        var url = common.apiurlb+'helpanimal/showAll';
        this.$http.get(url).then(function (response) {
          console.log(response)
          var msg = response.body;
          this.petsMessage=msg.data;
          console.log("展示全部"+this.petsMessage)
        });


      },
    }

  }
</script>

<style scoped>
  .box-card {
    padding: 0px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .show_pets{
    background: white;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
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

  .el-col-8{
    margin-left: 9%;
    margin-top: 5%;
    width: 20%;
  }
</style>
