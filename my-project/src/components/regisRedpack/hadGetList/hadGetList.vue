<template>
    <div class="hadGetList">
            <div class="titBox">已领取 {{taked}}/{{count}} 个</div>
            <muiLoadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul class="list">
                <li v-for="item in recordList" :key="item.idx">
                    <div class="imgbox">
                        <img :src="item.headimgurl || '../../../../static/img/regisRedpack/peo.png'" onerror="this.src='../../../../static/img/regisRedpack/peo.png'" alt="">
                    </div>
                    <div class="txt">
                        <h1>
                            <i>{{fool(item.amount,8)}} {{symbol}}</i>
                            <div class='name'>{{item.nickname}}
                                <!-- <span>手气最佳</span> -->
                                </div>
                        </h1>
                        <p>
                            <span>{{item.created_at}}</span><i v-if="mul(cnyRate,item.amount) >= 0.1">≈¥{{fool(mul(cnyRate,item.amount),4)}}</i>
                        </p>
                    </div>
                </li>
                <li>
                    <div class='validity'>--&nbsp;&nbsp;活动有效期14天&nbsp;&nbsp;--</div>   
                </li>
            </ul>
            </muiLoadmore>
        </div>
</template>
<script>
require('./hadGetList.less')
import { getRedPackRecord} from '@/api/redEnvelope';
import { fool ,mul} from "@/utils/operation";
// const { dateFormat } = require("happy-utils/Date");{{dateFormat(scope.row.created_at*1000,'yyyy-MM-dd hh:mm:ss')}}
import { Indicator,MessageBox,Loadmore} from "mint-ui";
export default {
    components: {
        muiLoadmore:Loadmore,
    },
    props:{
        count:0,
        taked:0,
        redId:0,
        symbol:"",
        cnyRate:0
    },
    name:'hadGetList',
    data(){
        return {
            recordList:[],
            listCount:0,
            noId:"",
            page:1  ,
            allLoaded : true
        }
    },
    created(){
    },
    computed: {
    },
    methods:{
        fool(n, s) {
            return fool(n, s);
        },
        mul(n, s) {
            return mul(n, s);
        },
        // dateFormat(value, format) {
        // return dateFormat(value, format);
        // },
        loadRecord(){
            if(this.redId-0 > 0)
            {
                Indicator.open();
                let reqData = {
                    redpack_id:this.redId,
                    page:this.page
                }
                getRedPackRecord(reqData).then(res=>{
                        if(res.status == 200 && res.data && res.data.code - 0 ==0)
                        {
                            if(this.page == 1)
                            {
                                this.recordList = res.data.data.list;
                            }
                            else
                            {
                                this.recordList = this.recordList.concat(res.data.data.list);

                            }
                            this.page++;
                            this.allLoaded = true;// if all data are loaded
                        }
                        else
                        {
                            MessageBox('提示',res.data.message);
                        }
                        Indicator.close();
                }).catch(ex=>{
                    MessageBox('提示',ex);
                    Indicator.close();
                });
            }
        },
        loadBottom() {
            this.loadRecord();
            //   ...// load more data
            this.$refs.loadmore.onBottomLoaded();
        }

    },
    watch:{
        redId:function(val,old){
            if(val-0 > 0)
            {
                this.loadRecord();
            }
        }
    }
}
</script>
