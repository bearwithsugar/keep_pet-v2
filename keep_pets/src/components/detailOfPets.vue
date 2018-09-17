<template>

    <div >
    <div class="background"></div>
    <div style="padding-right: 15%;padding-left: 15%;padding-top: 5%">
      <el-row>
        <el-col :span="8" >
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../static/images/cat.jpg" class="image">
            <!--<div style="padding: 14px;">-->
              <!--<span>好吃的汉堡</span>-->
              <!--<div class="bottom clearfix">-->
                <!--<time class="time">{{ currentDate }}</time>-->
                <!--<el-button type="text" class="button">操作按钮</el-button>-->
              <!--</div>-->
            <!--</div>-->
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div style="position: relative;text-align: left;padding-left: 15%;padding-right: 15%">

        <!--<div v-for="item in msg" :key="msg" class="text item" style="color: white;">-->
          <!--{{item.label}}-->
        <!--</div>-->
      <div class="text item" style="color: white">
        英国短毛猫
      </div>

      <div class="text item" style="color: white">
        2岁
      </div>

      <div class="text item" style="color: white">
        英国短毛猫，体形圆胖，四肢粗短发达，毛短而密，头大脸圆，温柔平静，对人友善，极易饲养。大而圆的眼睛根据被毛不同而呈现各种颜色。作为一个古老的猫品种，其历史可追溯至古罗马时期的家猫，由于拥有悠久的育种历史，可以称得上是猫家族中的典范。英国短毛猫除了拥有固定而聚，代表性的遗传特征之外，又具有丰富的变异性，如背毛色眼睛颜色等。更重要的是，有了广泛的配种历史后，这种猫拥有了更健康的身体和更温驯的性格。
      </div>

      <div class="text item" style="color: white">
        毛质
        英短乳白色
        英短乳白色
        短而密的绒毛， 富有弹性，可将全身紧密地包住。抗寒性好。
      </div>

      <div style="padding-bottom: 10%" size="medium">
        <el-button type="success">立刻领养</el-button>
      </div>



    </div>

  </div>
</template>

<script>
  export default {

    data(){


      return{
        id:0,
        initSuccess:false,
        currentDate: new Date(),
        msg:[]
      }

    },
    created(){
      this.id=this.$route.params.id;
      this.initSlot();
      this.getmeg()
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
      getmeg(){
        var url='../../static/address.json'
        this.$http.get(url).then(function (response) {
          var  data=response.body;

          this.msg=data;
          console.log("获取服务器参数");
          console.log(data)

        }).catch(function (response) {
          alert(response);
        });
      }
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
    background-image: url(../../static/images/cat.jpg);
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
