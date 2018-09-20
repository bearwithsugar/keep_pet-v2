<template>
  <div style="margin-top: 60px">



      <el-row >
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <router-link to="/main/v_apply_detail">
            <el-card :body-style="{ padding: '0px' }" >
              <div style="padding: 14px;">
                <span>申请表编号：xxxxxx</span>
                <div class="bottom clearfix">
                  <div class="text item">
                   领养者姓名
                  </div>
                  <div class="text item">
                    领养宠物编号
                  </div>
                  <div class="text item">
                    更多信息。。，。
                  </div>
                </div>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
    </div>



</template>

<script>
  export default {

    data(){
      return{

        form:{
          id:'0001',
          name:'张三',
          sex:'男',
          idcard:'220402xxxxxxxxxxxx',
          phone:'13100008888',
          account:'账户为空',
        },
      }
    },
    methods:{

    }

  }
</script>

<style scoped>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
</style>
