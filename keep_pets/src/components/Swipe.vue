<template>
  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
   <div class="ui">
     <!--轮播图-->
    <el-carousel height="700px">
      <el-carousel-item v-for="(image,index) in Imglist" track-ty='index' :key="index">
        <div style="position: relative ;    height: 500px;">
          <div style="position: absolute;z-index: 2"  >
            <img :src=image.url height="700x" width="100%"></div>
          <div class="image_text" v-text=image.text></div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div style="background: white;padding: 5%">
      <el-card class="box-card" :body-style="{ padding: '0px' }">
        <div >
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">

            <!--<router-link to="/search">-->
              <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
            <!--</router-link>-->
            <el-button slot="append" icon="el-icon-search" @click="toSearch"></el-button>
          </el-input>
        </div>
      </el-card>
    </div>

    <div style="background: white;padding: 5%">
      <el-row>
        <el-col :span="8" style="width: 100%;margin: 0;height: 250px">
          <el-card :body-style="{ padding: '0px' }">
            <div style="position: relative;height:250px">
              <div style="z-index: 1;position: absolute">
               <img src="../../static/images/dog4.jpg" class="image">
              </div>
              <div style="z-index: 2;position: absolute;width: 100%;height: 100%;line-height: 200px;color: white;font-size: 5em;">
                热门宠物
              </div>

            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="block" style="background: white">
      <el-cascader
        :options="options"
        v-model="selectedOptions"
        @change="handleChange">
      </el-cascader>
    </div>


     <!--显示热门宠物-->
    <el-row class="show_pets">
      <el-col :span="8" v-for="(pet,index) in petsMessage" :offset="index > 0 ? 2 : 0" :key="index" track-ty='index'>
        <router-link v-bind="{to:'/detail/'+pet.anno}"  style="text-decoration: none">
          <el-card :body-style="{ padding: '0px' }" shadow="hover" >
            <img src="../../static/images/cat3.jpg" class="image">
            <div style="padding: 14px;">
              <span>{{pet.anname}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button" >操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>

    <div class="title">关于我们</div>

    <div id="box1" class="team_message" >

      <div style="position: absolute;z-index: 1"  >
          <transition
            name="bounce"
            enter-active-class="bounceInLeft"
            leave-active-class="bounceOutLeft"
          >
          <el-row v-if="showOne">
            <el-col :span="8"  :offset=" 2 " style="margin-top:20%;margin-left:15%;width: 30%">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../../static/images/cat3.jpg" class="image">
                <div style="padding: 14px;">
                  <span>姓名</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          </transition>
        </div>
      <div style="position: absolute;z-index: 2">
        <transition
          name="bounce"
          enter-active-class="bounceInLeft"
          leave-active-class="bounceOutLeft"
        >
          <el-row v-if="showTwo">
          <el-col :span="8"  :offset=" 2 " style="margin-top:55%;margin-left:15%;width: 30%">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../static/images/cat3.jpg" class="image">
              <div style="padding: 14px;">
                <span>姓名</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        </transition>
      </div>
      <div style="position: absolute;z-index: 3">
        <transition
          name="bounce"
          enter-active-class="bounceInRight"
          leave-active-class="bounceOutRight"
        >
          <el-row v-if="showThree">
          <el-col :span="8"  :offset=" 2 " style="margin-top:10%;margin-left:55%;width: 30%">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../static/images/cat3.jpg" class="image">
              <div style="padding: 14px;">
                <span>姓名</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        </transition>
      </div>
      <div style="position: absolute;z-index: 4">
        <transition
          name="bounce"
          enter-active-class="bounceInRight"
          leave-active-class="bounceOutRight"
        >
        <el-row v-if="showFour">
          <el-col :span="8"  :offset=" 2 " style="margin-top:40%;margin-left:55%;width: 30%">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../static/images/cat3.jpg" class="image">
              <div style="padding: 14px;">
                <span>姓名</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        </transition>
      </div>
      <div style="position: absolute;z-index: 5">
        <transition
          name="bounce"
          enter-active-class="bounceInRight"
          leave-active-class="bounceOutRight"
        >
        <el-row v-if="showFive">
          <el-col :span="8"  :offset=" 2 " style="margin-top:70%;margin-left:55%;width: 30%">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../static/images/cat3.jpg" class="image">
              <div style="padding: 14px;">
                <span>姓名</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        </transition>
      </div>


    </div>
     <div class="bottom_menu">

     </div>

   </div>
  </transition>
</template>

<script>

  import image1 from '../../static/images/cat3.jpg'
  import image4 from '../../static/images/dog3.jpg'
  import image5 from '../../static/images/dog5.jpg'
  import image6 from '../../static/images/dog6.jpg'

  import common from '../com/common'

  export default {
    data(){

      return{
        showOne:false,
        showTwo:false,
        showThree:false,
        showFour:false,
        showFive:false,
        initSuccess: false,

        petsMessage:[],
        Imglist:[
          {url:image5,text:"为动物找寻一个温暖的家"},
          {url:image1,text:"拯救街头流浪的小可爱"},
          {url:image6,text:"请献出你的一份力量！"},
          {url:image4,text:"为人类和动物同时带去温暖"}
        ],
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
        input:'',
        currentDate: new Date(),
        options: [{
          value: 'Chian',
          label: '中国',
          children: [{
            value: '',
            label: '北京',
            children: [{
              value: 'yizhi',
              label: '朝阳区'
            }, {
              value: 'fankui',
              label: '海淀区'
            }, {
              value: 'xiaolv',
              label: '东城区'
            }, {
              value: 'kekong',
              label: '宣武区'
            }]
          }, {
            value: 'American',
            label: '上海',
            children: [{
              value: 'cexiangdaohang',
              label: '静安区'
            }, {
              value: 'dingbudaohang',
              label: '闸北区'
            }, {
              value: 'dingbudaohang',
              label: '虹口区'
            }, {
              value: 'dingbudaohang',
              label: '杨浦区'
            }]
          }]
        }, {
          value: 'Italy',
          label: '意大利',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout xx'
            }, {
              value: 'color',
              label: 'Color xx'
            }, {
              value: 'typography',
              label: 'Typography xx'
            }, {
              value: 'icon',
              label: 'Icon xx'
            }, {
              value: 'button',
              label: 'Button xx'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }],
        selectedOptions: [],

      }
    },
    created() {
      this.gethot(),
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
      handleChange(value) {
        console.log(value);
      },
      gethot(){
        var url = common.apiurlb+'helpanimal/showHot';
        this.$http.get(url).then(function (response) {
          console.log(response)
          var msg = response.body;
          this.petsMessage=msg.data;
          console.log(this.petsMessage)
        });


      },
      toSearch:function() {
        this.$router.push('/search');
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //console.log(scrollTop)
       var s=document.body.scrollHeight;
        //console.log(s)
        var a=s-scrollTop




        if (a<2000&&a>1200) {
          this.showOne = true
        } else {
          this.showOne = false
        }
        if (a<1500&&a>700) {
          this.showTwo = true
        } else {
          this.showTwo = false
        }
        if (a<2300&&a>1400) {
          this.showThree = true
        } else {
          this.showThree = false
        }
        if (a<1800&&a>1000) {
          this.showFour = true
        } else {
          this.showFour = false
        }
        if (a<1400&&a>600) {
          this.showFive = true
        } else {
          this.showFive = false
        }
      },

    }


  }
</script>

<style scoped>
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

  .title,.demonstration{
    font-size: 5em;
    color: white;
    width: 100%;
    height: 300px;
    line-height: 300px;
    background-color:rgba(0,0,0,0.5);
  }

  .show_pets{
    background: white;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
  }

  .ui{
    background-image: url("../../static/images/cat2.jpg");
    background-position: center bottom;
    background-size: contain;
    background-attachment: fixed;
  }

  /*.item {*/
    /*padding: 0;*/
  /*}*/

  .box-card {
    padding: 0px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .team_message{
    background: white;
    position: relative;
    height: 1300px;
  }
  .bottom_menu{
    float: bottom;
    height: 300px;
    background-color:rgba(0,0,0,0.8);
  }
</style>
