<template>

  <div class="show" >
    <div style="height: 300px;float: left">
      <el-steps direction="vertical" :active="2">
        <el-step title="步骤 1" description="提交成功"></el-step>
        <el-step title="步骤 2" description="管理员正在审核"></el-step>
        <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>

  </div>
</template>

<script>
  export default {

    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 1em;
    text-align: left;
  }

  .item {
    margin-bottom: 18px;
  }
  .show{
    margin-top: 60px;
    padding: 10%;
  }
</style>
