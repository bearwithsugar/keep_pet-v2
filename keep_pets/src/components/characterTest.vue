<template>
  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
    <div>
    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <div v-if="initSuccess" style="padding: 20% 10%">
        <span style="font-size: 3em">我们将为您提供一套测试题，用于帮助我们更加了解您的性格，找到最适合您的宠物！</span>
        <br/>
        <Button type="warning" ghost size="large" style="margin-top: 5%" @click="toshowQues">好的，请开始</Button>
      </div>

    </transition>
    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <div v-if="showAnswer" style="padding: 15% 10%">
        <span style="font-size: 2em" v-text="'你的得分是'+account"></span>
        <br/>
        <span style="font-size: 3em" v-text="consequences[numberofConsequence].title"></span>
        <br/>
        <span style="font-size: 2em" v-text="consequences[numberofConsequence].answer"></span>
      </div>

    </transition>
    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <div v-if="showQues">
        <div style="text-align: left;padding: 5% 15%">
          <transition
            name="bounce"
            enter-active-class="bounceInLeft"
            leave-active-class="bounceOutRight"
          >
            <div>
              <div class="text" v-text="questions[number].ques"></div>
              <RadioGroup v-model="questions[number].answer" vertical>
                <Radio label="a" v-if="questions[number].answer_a" class="text">
                  <span v-text="questions[number].answer_a"></span>
                </Radio>
                <Radio label="b" v-if="questions[number].answer_b" class="text">
                  <span v-text="questions[number].answer_b"></span>
                </Radio>
                <Radio label="c" v-if="questions[number].answer_c" class="text">
                  <span v-text="questions[number].answer_c"></span>
                </Radio>
                <Radio label="d" v-if="questions[number].answer_d" class="text">
                  <span v-text="questions[number].answer_d"></span>
                </Radio>
                <Radio label="e" v-if="questions[number].answer_e" class="text">
                  <span v-text="questions[number].answer_e"></span>
                </Radio>
                <Radio label="f" v-if="questions[number].answer_f" class="text">
                  <span v-text="questions[number].answer_f"></span>
                </Radio>
                <Radio label="g" v-if="questions[number].answer_g" class="text">
                  <span v-text="questions[number].answer_g"></span>
                </Radio>
              </RadioGroup>
            </div>
          </transition>
        </div>
        <div style="height: 60%;position: fixed;right: 100px;bottom: 20%;">
          <Progress vertical :percent="processList.percent" status="active" />
        </div>
        <Button type="warning" ghost size="large" style="margin-top: 5%;position: fixed;right: 100px;bottom: 10%;" @click="next" v-text="processList.text"></Button>
      </div>
    </transition>
  </div>

  </transition>
</template>

<script>
  export default {
    data() {
      return {
        account:0,
        number:0,
        initSuccess: false,
        showQues:false,
        showAnswer:false,
        numberofConsequence:0,
        questions:[
          {ques:'你何时感觉最好？',answer_c:'早晨 ',answer_b:'下午及傍晚',answer_a:'夜里',answer:''},
          {ques:'你走路时是?',answer_b:'大步的快走 ',answer_c:'小步的快走',answer_a:'不快,仰着头面对着世界',answer_d:'不快,低着头',answer_e:'很慢',answer:''},
          {ques:'你和人说话时,你?',answer_d:'手臂交叠的站着',answer_e:'双手紧握着',answer_c:'一只手或两手放在臀部',answer_a:'碰着或推着与你说话的人',answer_b:'玩着你的耳朵、摸着你的下巴、或用手整理头发',answer:''},
          {ques:'坐着休息时,你的?',answer_b:'两膝盖并拢',answer_a:'两腿交叉',answer_c:'两腿伸直',answer_d:'一腿卷在身下',answer_e:'',answer:''},
          {ques:'碰到你感到发笑的事时,你的反应是?',answer_a:'一个欣赏的大笑',answer_c:'笑着,但不大声 ',answer_d:'轻声的咯咯笑',answer_b:'羞怯的微笑',answer:''},
          {ques:'当你去一个派对或社交场合时,你?',answer_a:'很大声的入场以引起注意',answer_b:'安静地入场,找你认识的人',answer_c:'非常安静的入场,尽量保持不被注意',answer:''},
          {ques:'当你非常专心工作时,有人打断你,你会?',answer_a:'欢迎他 ',answer_c:'感到非常恼怒',answer_b:'在以上两极端之间',answer:''},
          {ques:'下列颜色中,你最喜欢哪一颜色?',answer_b:'红或橘色 ',answer_a:'黑色',answer_c:'黄或浅蓝色 ',answer_d:'绿色 ',answer_e:'深蓝或紫色',answer_f:'白色',answer_g:'棕或灰色',answer:''},
          {ques:'临入睡的前几分钟,你在床上的姿势是?',answer_a:'仰躺,伸直 ',answer_b:'俯躺,伸直',answer_c:'侧躺,微卷 ',answer_d:'头睡在一手臂上',answer_e:'被盖过头',answer:''},
          {ques:'你经常梦到你在?',answer_c:'落下 ',answer_e:'打架或挣扎',answer_d:'找东西或人',answer_b:'飞或漂浮 ',answer_a:'你平常不做梦',answer_f:'你的梦都是愉快的',answer:''},
          {ques:'你已经完成测试啦！'}
          ],
        active: 0,
        processList:{
          percent:0,
          text:'下一题'
        },
        circle_status: '',
        consequences:[
          {title:'内向的悲观者',answer:'人们认为你是个害羞的、神经质的、优柔寡断的人,' +
            '你需要人照顾,永远要别人为你做决定,不想与任何事或任何人有关。' +
            '他们认为你是个杞人忧天者,一个永远看到不存在的问题的人。' +
            '有些人认为你令人乏味,只有那些深知你的人知道你不是这样的。很遗憾,大多数公司不喜欢这类性格。'},
          {title:'缺乏信心的挑剔者',answer:'你的朋友认为你勤勉刻苦、很挑剔。他们认为你是一个谨慎的、十分小心的人,一个缓慢而稳定辛勤工作的人。如果你做任何冲动的事或无准备的事,会令别人大吃一惊。' +
            '你会从各个角度仔细地检查一切后仍决定不做,人们认为你的这种反应是因为你小心的天性所造成的。你比较适合编辑、会计等需要数字核查的工作。'},
          {title:'以牙还牙的自我保护者',answer:'别人认为你是一个明智、谨慎、注重实效的人。也认为你是一个伶俐、有天赋有才干且谦虚的人。你不会很快、很容易和人成为朋友,但却是一个对朋友非常忠诚的人,' +
              '同时要求朋友对你也有忠诚的回报。那些真正有机会了解你的人会知道要动摇你对朋友的信任是很难的,但同样的,一旦这种信任被破坏,会使你很难熬过。你这种性格具有最广泛的适应性。'},
          {title:'平衡的中道',answer:'别人认为你是一个新鲜的、有活力的、由魅力的、好玩的、讲究实际的、而且永远有趣的人。你经常是群众注意的焦点,但是你是一个足够平衡的人,不至于因此而昏了头。' +
              '他们也认为你亲切、和蔼、体贴、能谅解人,你是一个永远会使人高兴起来并会帮助别人的人。此种性格比较适合人力资源方面的工作。'},
          {title:'吸引人的冒险家',answer:'别人认为你具有令人兴奋的、高度活泼的、相当易冲动的个性。你是一个天生的领袖、一个做决定很快的人,虽然你的决定不总是对的。别人认为你大胆、有冒险心,愿意试做任何事至少一次,' +
              '是一个愿意尝试机会且欣赏冒险的人。你浑身散发着热情,人们喜欢跟你在一起,比较适合市场开发与销售工作,独挡一面。'},
          {title:'傲慢的孤独者',answer:'别人认为对你必须“小心处理”。在别人的眼中,你是自负的、自我中心的、是个极端有支配欲、统治欲的人。别人可能钦佩你,希望能多像你一点,但不会永远相信你,对于和你更深入的来往有所踌躇及犹豫。' +
              '这种性格的人通常很有才华,但与人沟通的功夫欠佳,适合做研发指导工作。'}
            ]
      };
    },
    created() {
      this.initSlot();
    },

    computed: {
      color () {
        let color = '#ffd04b';
        if (this.processList.percent == 100) {
          color = '#5cb85c';
        }
        return color;
      }
    },
    created() {
      this.initSlot();
    },

    methods: {
      next() {
        this.number=this.number+1;
        this.processList.percent=this.processList.percent+10;
        if(this.number==11){
          this.number=0
        }
        if(this.processList.percent==100){
          this.circle_status="success"
          this.processList.text='提交'
          console.log("开始输出结果！！！！")
          for (var i=0;i<10;i++){
            // console.log(this.questions[i].answer)
            // alert(this.questions[i].answer)
            if(this.questions[i].answer=='a'){
              this.account=this.account+6
            }else if (this.questions[i].answer=='b') {
              this.account=this.account+5
            }else if (this.questions[i].answer=='c') {
              this.account=this.account+3
            }else if (this.questions[i].answer=='d') {
              this.account=this.account+2
            }else if (this.questions[i].answer=='e') {
              this.account=this.account+2
            }else if (this.questions[i].answer=='f') {
              this.account=this.account+1
            }else if (this.questions[i].answer=='g') {
              this.account=this.account+1
            }
            console.log(this.account)
          }
          if (this.account<=21) {
            this.numberofConsequence=1
          }else if (this.account<=30&&this.account>21){
            this.numberofConsequence=2
          }else if (this.account<=40&&this.account>30){
            this.numberofConsequence=3
          }else if (this.account<=50&&this.account>40){
            this.numberofConsequence=4
          }else if (this.account<=60&&this.account>50){
            this.numberofConsequence=5
          }else if (this.account>60){
            this.numberofConsequence=6
          }
        }
        if (this.processList.percent==110){
          this.showQues=false
          let vm = this;
          setTimeout(function () {
            vm.showAnswer=true
          }, (Number(vm.time || 500)));
        }

      },
      initSlot() {
        let vm = this;
        setTimeout(function () {
          vm.initSuccess = true;
        }, (Number(vm.time || 500)));
      },
      toshowQues(){
        this.initSuccess=false;
        let vm = this;
        setTimeout(function () {
          vm.showQues = true;
        }, (Number(vm.time || 800)));
      }
    }
  }
</script>

<style scoped>
  .demo-Circle-custom{
    & h1{
        color: #3f414d;
        font-size: 28px;
        font-weight: normal;
      }
    & p{
        color: #657180;
        font-size: 14px;
        margin: 10px 0 15px;
      }
    & span{
        display: block;
        padding-top: 15px;
        color: #657180;
        font-size: 14px;
        &:before{
           content: '';
           display: block;
           width: 50px;
           height: 1px;
           margin: 0 auto;
           background: #e0e3e6;
           position: relative;
           top: -15px;
         };
    }
    & span i{
        font-style: normal;
        color: #3f414d;
      }
  }
  .text{
    margin-top: 5%;
    font-size: 1.5em;
  }
  .ivu-radio-group {
    /* display: inline-block; */
    font-size: 12px;
    text-align: left;
  }
  .ivu-progress-bg {
    border-radius: 100px;
    background-color: #f90;
    transition: all .2s linear;
    position: relative;
  }
</style>
