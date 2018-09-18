<template>
  <div style="background: white;padding: 5%">
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div >
        <el-input placeholder="请输入内容" v-model="searchMessage" class="input-with-select">

          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-card>
    <div>

      <el-row class="show_pets">
        <el-col :span="8" v-for="(pet,index) in Pets" :offset="2" :key="Pets">
          <router-link v-bind="{to:'/detail/'+pet.id}"  style="text-decoration: none">
            <el-card :body-style="{ padding: '0px' }" shadow="hover" >
              <img :src=pet.url class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
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
</template>

<script>
  import image1 from '../../../static/images/cat3.jpg'
  import common from '../../com/common'

  export default
  {
    data(){
      return{
        searchMessage:'',
        Pets:[
          {id:1,url:image1},
          {id:2,url:image1},
          {id:3,url:image1},
          {id:4,url:image1},
          {id:5,url:image1},
          {id:6,url:image1},
          {id:7,url:image1},
          {id:8,url:image1},
          {id:9,url:image1},
        ],
      }

    },
    created(){
      this.postPetid()
    },
    methods:{
      postPetid(){
        var url= common.apiurl+"helpanimal/showSearch"
        var a = JSON.stringify({description:"温顺",isSaveRecord:1});
        console.log(a)
        this.$http.post(url,a,{emulateJSON:true}).then(function (response) {
          console.log(response)
          // alert(res)
        })
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
