<template>
  <div class="joinbox">
    <div class="cont1">
      <div class="inputbox">
        <span><img src="../../../static/image/join/name.png" alt=""></span>
        <input type="text" placeholder="请输入姓名" v-model="name">
      </div>
      <div class="inputbox">
        <span><img src="../../../static/image/join/idcard.png" alt=""></span>
        <input type="tel" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="inputbox">
        <span><img src="../../../static/image/join/idcard.png" alt=""></span>
        <input type="text" placeholder="请选择购买价格" v-model="buyPrice" readonly="readonly" @focus="hideBoxFun('show',1)">
      </div>
      <div class="inputbox">
        <span><img src="../../../static/image/join/phone.png" alt=""></span>
        <input type="text" placeholder="请输入手机型号" v-model="phoneType">
      </div>
      <div class="inputbox">
        <span><img src="../../../static/image/join/phone.png" alt=""></span>
        <input type="text" placeholder="请输入IMEI设备号" v-model="eqNum">
        <div class="tip">·可在拨号界面输入*#06#查看手机IMEI设备号 <br> ·查看盒装盒及保修卡上设备号</div>
      </div>

      <div class="txtbox">
        <p>需要是半年内购买的手机，否则屏碎将无法获得互助金</p>
      </div>
    </div>
    <!-- <div class="cont2">
            <div class="bt">
                <img src="../../../static/image/join/chong.png" alt=""><span>充&nbsp;值</span><i>建议充值5元以上，以免余额不足失去受助资格</i>
            </div>
            <div class="cont2box">
                <div class="smallbox" :class='choose1' @click='chooseFun(1)'>
                    <span v-if='choose1=="active"'></span>
                    <h1><i>1</i>元</h1>
                    <p>可用1个月</p>
                </div>
                <div class="smallbox" :class='choose2' @click='chooseFun(2)'>
                    <span v-if='choose2=="active"'></span>
                    <h1><i>6</i>元</h1>
                    <p>可用6个月</p>
                </div>
                <div class="smallbox" :class='choose3' @click='chooseFun(3)'>
                    <span v-if='choose3=="active"'></span>
                    <h1><i>12</i>元</h1>
                    <p>可用12个月</p>
                </div>
            </div>
        </div> -->
    <div class="cont3">
      <div class="cont3_btn" @click='checkInfoFun'>
        <p>确认加入互助</p>
      </div>
      <div class="footer">
        <div class="ft_box">
          <span class="hadsel"></span>
        </div>
        <div class="ft_txt">
          我已阅读<i @click='hideBoxFun("show",3)'>《手机设备要求》</i><i @click='hideBoxFun("show",2)'>《会员公约》</i>及<i  @click='hideBoxFun("show",4)'>《计划条款》</i>，并承诺加入时手机无任何故障。
        </div>
      </div>
    </div>
    <div class="hideBox" :class='hideboxStyle1'>
      <div class="buyPriceBox contBox">
        <div class="tit"><span @click='hideBoxFun("hide",1)'>关闭</span>手机价格</div>
        <ul>
          <li v-for='(price,index) in buypriceData' @click='getBuyPrice(price,index)' v-on:click="addClass(index)"
            v-bind:class="{ blue:index==current}" :key='index'> {{price}}</li>
        </ul>
      </div>
    </div>
    <!-- 碎屏互助计划会员公约 -->
    <div class="hideBox" :class='hideboxStyle2'>
      <div class="gongyue contBox">
        <div class="tit"><span @click='hideBoxFun("hide",2)'>关闭</span>碎屏互助计划会员公约</div>
        <div class="txtBox">
          1. （平台名称）互助平台简介 <br>
          平台名称（以下简称“平台”）是由（公司名称）组织和运营的互助组织。平台上的所有互助计划本着“我为人人，人人为我”的精神，强调互助权利和义务的对等，以公正透明为基本准则。<br><br>

          2. 计划类型<br>
          平台上的各项计划根据互助金缴纳方式，分为两种类型：预缴型及非预缴型。<br><br>

          3. 互助金预缴型计划<br>
          3.1. 预缴型计划加入之前需缴纳少量的互助金，以保证互助效果的稳定。<br>
          3.2. 对某项预缴型计划，当会员的申领请求被核准后，其他会员有义务进行分摊式互助。单次互助事件每名会员分摊的互助金额设置上限。<br>
          3.3. 平台根据相关计划章程计算每名会员的分摊金额，在扣款前进行公示，扣款后发送通知。最终扣款金额会根据会员人数变化的实际情况进行必要的调整。<br>
          3.4. 会员有义务保证个人账户余额充足，以便履行互助义务。<br>
          3.5. 互助分摊计算精确至分位，如产生超出当次互助总额的部分，计为互助结余，用于抵扣下次互助金。<br>
          3.6.<br>
          账户余额低于1元将被冻结，不参与互助分摊计算，30天（含）复效期内可通过充值激活，否则自动退出。激活续费需补缴所有冻结期间未参与分摊的互助金总额，补缴金额计入本条款3.5所述互助结余中，激活续费后余额需大于1元。30天复效期内如果发生互助事件，仍可申请互助，但如果复效期未续费激活，复效期后发生的互助事件不予互助。<br>
          3.7.   会员申请退出预缴型计划，或发生其它退出计划条件发生时，不返还以往已分摊的互助资金，仅自缴费部分账户余额可以申请返还，相关手续费由会员自行承担。<br>
          4. 非预缴型计划<br>
          4.1.   非预缴型计划加入之前无需预先缴纳互助金。<br>
          4.2.   对某项非预缴型计划，当会员的申领请求被核准后，其他会员根据个人意愿进行自愿式互助。<br>
          5. 会员的权利与义务<br>
          5.1.   会员可自愿加入、自愿退出相应的互助计划。<br>
          5.2.   会员应依据相关互助计划章程履行施助义务，同时享有对等的受助权利。<br>
          5.3.   会员有权参与平台组织的各项选举、投票、意见征集等其他相关活动。<br>
          5.4.   会员对互助事件必要信息享有知情权，同时有义务保护其他会员的隐私信息，不得外传。<br>
          5.5.   会员有义务保证注册时所提供信息的真实性与有效性，相关信息发生变化时应及时与平台工作人员联系进行变更。<br>
          5.6.   会员在申领互助金时，应根据相关互助计划章程提供相应的信息和资料，并保证真实有效，以供审核。<br>
          5.7.  如会员提供错误或虚假信息，将导致会员资格失效或无法获得互助。<br>
          5.8.   如会员恶意骗取互助金，平台有权代全体会员追偿，并保留进一步追究其法律责任的权利。<br>
          5.9.
          会员不得利用平台提供的途径（包含但不限于论坛、聊天群等）发布包含诈骗、色情、暴力等违反国家法律法规及政策规定的内容，不得发表含有攻击性、侮辱性的言论，不得捏造事实、造谣传谣，对于情节严重的，平台有权解除其会员资格。<br>
          5.10.
          平台将根据实际运营需要调整或修改相关规则（包含但不限于公约、章程等），平台认为必要时将征求会员意见，包括但不限于调研、投票等，规则修改进行公示后即视为生效。会员有义务及时接收并了解相关规则变动的信息，如有疑问可以联系平台咨询。<br>
          6. 信息披露机制<br>
          6.1.   本着公正、透明的原则，所有计划的必要信息将通过壁虎互助平台进行及时披露。<br>
          6.2.   信息披露内容包括但不限于：有效会员数量、互助事件审定信息、互助金使用明细、年度计划报告等。<br>
          7.  会员隐私保护策略<br>
          7.1.   平台尽合理义务保护会员隐私资料。<br>
          7.2.   会员提出申领请求后，平台可向本计划其他会员公示申请人的必要信息、事件发生的过程和详细情况，以及披露申领所提交的相关材料，同时合理保护申请人的隐私信息。<br>
          8. 争议处理<br>

          对于是否符合互助条件或是否给付互助金产生争议时，由裁决委员会表决。若产生争议时未成立委员会，将由成立的临时委员会（包括但不限于评审团）表决，或交全体会员公决。参与表决的成员应遵守回避原则。<br>

          8.1.  <br>
          原则上每个计划产生一个委员会，委员会委员由该计划会员民主选举产生，每一名会员都享有选举权和被选举权。委员会委员应遵守国家有关法律、法规，并具有完全民事行为能力。委员会委员实行任期制，每届任期不超过1年，可连选连任，委员会委员具有同等表决权。委员会委员退出计划时自动失去委员资格。<br>
          8.2.   临时委员会从该计划自愿报名的会员中，随机选取符合条件的会员组成。选取名单对计划全体会员进行公示，公示期为7个自然日。临时委员会在该争议事项处理结束后解散。<br>
          8.3.   对于是否给予互助的争议事件，委员会或临时委员会在表决中如经多轮僵持未能达成有效结论，经绝对多数同意可以发起按比例通融给付表决。<br>
          8.4.   委员会或临时委员会运作规则将另设相关章程进行规定。<br>


          本公约的最终解释权归（公司名称）旗下（平台名称）所有。
        </div>
      </div>
    </div>

    <!-- 手机设备要求 -->
    <div class="hideBox" :class='hideboxStyle3'>
      <div class="gongyue contBox">
        <div class="tit"><span @click='hideBoxFun("hide",3)'>关闭</span>手机设备要求</div>
        <div class="txtBox">
          1、需要是180天内购买的手机，超过期限碎屏将无法申请互助金；<br>
          2、加入互助时要求手机屏幕完好无损，无维修记录；<br>
          3、要求有购买的纸质发票或电子发票，同时发票上有开具发票或购买的日期、手机金额等作为申请碎屏互助金凭证，否则将无法申请成功。<br>
          4、机型购买金额大于1万元，最高可申请1000元碎屏互助金。<br>
          5、如机型购买金额特别小，如小于500元的功能机，将无法成功申请互助金。建议此类手机用户不要参与互助计划，否则理赔时将无法通过审核。<br>
          6、用户参与计划时填写的手机型号将作为凭证，申请碎屏互助金时，机型对不上将无法通过审核，需要用户真实填写。
        </div>
      </div>
    </div>

    <!-- 计划条款 -->
    <div class="hideBox" :class='hideboxStyle4'>
      <div class="gongyue contBox">
        <div class="tit"><span @click='hideBoxFun("hide",4)'>关闭</span>计划条款</div>
        <div class="txtBox">
          <h1>一、加入条件</h1>
          1.1、需要是180天内购买的手机，超过期限将无法加入互助。加入互助时要求手机屏幕完好无损，无维修记录。
          1.2、购买金额要求大于500元，
          <h1>二、计划内容</h1>
          2.1、加入须经过60天等待期，防止有用户带坏手机加入。
          2.2、不同价位机型将获得不同的互助金，具体如下：
          <ol>
            <li>
              <span>手机价格</span>
              <span>碎屏帮助金</span>
            </li>
            <li>
              <span>>500元，≦1000元</span>
              <span>100元</span>
            </li>
            <li>
              <span>>1000元，≦2000元</span>
              <span>200元</span>
            </li>
            <li>
              <span>>2000元，≦3000元</span>
              <span>300元</span>
            </li>
            <li>
              <span>>3000元，≦4000元</span>
              <span>400元</span>
            </li>
            <li>
              <span>>10000元</span>
              <span>1000元</span>
            </li>
          </ol>
          <h1>三、不予互助情形</h1>
              3.1、未达到60天等待期申请互助；
              3.2、账户余额不足，丧失会员资格期间屏幕损坏同时未在30天内补足余额的；
              3.3、恶意损害手机屏幕骗取互助金；
              3.4、购买机型和申请材料不能匹配的情况；
              3.5、无法提供购买发票等相关凭证；
              3.6、已成功申请两次碎屏互助，第三次将不予互助；

          <h1>四、如何保持会员有效</h1>
              4.1、会员应充持续值保持会员身份，如账户余额小于1元奖暂时失去资格，同时不参与互助分摊；
              4.2、失去资格30天内充值，余额补足后恢复会员身份；
              4.3、账户余额不足，丧失会员资格期间屏幕损坏同时未在30天内补足余额的；
              4.4、恶意损害手机屏幕骗取互助金；
              4.5、购买机型和申请材料不能匹配的情况；
              4.6、无法提供购买发票等相关凭证；
          <h1>五、申请互助流程</h1>
              5.1、用户准备材料在线提交；
              5.2、平台审核通过；
              5.3、在线公示7天；
              5.4、公示期间如无异议，三个工作日内划拨互助金；


        </div>
      </div>
    </div>


  </div>
</template>
<script>
  require('./join.less');
  import {
    Toast
  } from "mint-ui";
  import {
    joinAjax
  } from '@/api/order';
  import {
    getBalance
  } from '@/api/user';
  export default {
    name: 'join',
    data() {
      return {
        choose1: '',
        choose2: '',
        choose3: '',
        needPay: 0,
        name: '',
        phone: '',
        eqNum: '',
        buyPrice: '500-1000 元',
        phoneType: '',
        balance: 0,
        buypriceData: ['500-1000 元', '1001-2000元', '2001-3000元', '3001-4000元', '4001-5000元', '5001-6000元', '7001-8000元',
          '8001-9000元', '9001-10000元', '大于10000'
        ],
        current: 0,
        hideboxStyle: 'hide',
        hideboxStyle1: 'hide',
        hideboxStyle2: 'hide',
        hideboxStyle3: 'hide',
        hideboxStyle4: 'hide'
      }
    },
    created() {
      this.defaultFun();
      this.getBalanceFun();
    },
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'background:#fff')
    },
    beforeDestroy() {
      document.querySelector('body').setAttribute('style', '')
    },
    methods: {
      defaultFun() {
        this.choose2 = 'active';
        this.needPay = 6;
      },
      addClass: function (index) {
        this.current = index;
      },
      hideBoxFun(styleType,type) {
        console.log(styleType+'_'+type);
        if (styleType == 'show') {
          if(type==1){
            this.hideboxStyle1 = 'show';
          }else if(type==2){
            this.hideboxStyle2 = 'show';
          }else if(type==3){
            this.hideboxStyle3 = 'show';
          }else if(type==4){
            this.hideboxStyle4 = 'show';
          }
          
        } else {
          if(type==1){
            this.hideboxStyle1 = 'hide';
          }else if(type==2){
            this.hideboxStyle2 = 'hide';
          }else if(type==3){
            this.hideboxStyle3 = 'hide';
          }else if(type==4){
            this.hideboxStyle4 = 'hide';
          }
        }
        console.log(this.hideboxStyle1);
      },
      getBuyPrice(price) {
        this.buyPrice = price;
        this.hideboxStyle1 = 'hide';
      },
      getBalanceFun() {
        getBalance().then(res => {
          let result = res.data;
          if (result.status == 0) {
            this.balance = result.data.balance;
          } else {
            Toast(result.msg);
          }


        }).catch(err => {
          Toast('网络错误，请刷新重试');
        })
      },
      chooseFun(type) {
        if (type == 1) {
          this.choose1 = 'active';
          this.choose2 = '';
          this.choose3 = '';
          this.needPay = 1;
        } else if (type == 2) {
          this.choose1 = '';
          this.choose2 = 'active';
          this.choose3 = '';
          this.needPay = 6;
        } else {
          this.choose1 = '';
          this.choose2 = '';
          this.choose3 = 'active';
          this.needPay = 12;
        }

      },
      checkInfoFun() {
        let reg = /^1[3-9][0-9]\d{8}$/;
        if (this.name == '') {
          Toast('请输入姓名');
          return false;
        } else if (this.phone == '') {
          Toast('请输入手机号');
          return false;
        } else if (!reg.test(this.phone)) {
          Toast('手机号码格式不正确');
          return false;
        } else if (this.phoneType == '') {
          Toast('请输入手机型号');
          return false;
        } else if (this.eqNum == "") {
          Toast('请输入IMEI设备号');
          return false;
        } else {
          this.joinAjax();
        }
      },
      joinAjaxFun() {
        let data = {
          username: this.name,
          tele: this.phone,
          phonetype: this.phoneType
        }
        joinAjax(data).then(res => {
          let result = res.data;
          if (result.status == 0) {

          } else {
            Toast(result.message);
          }


        }).catch(err => {
          Toast('网络错误，请刷新重试');
        })
      }
    }
  }

</script>
