<template>
    	<div>
            <h3>一站到底</h3>
    		<div >
    			<div class="options" v-if="itemDetail.length > 0">
    				<header v-if="itemDetail[itemNum-1].muti" class="item_title">{{itemDetail[itemNum-1].question_name}}（多选）</header>
    				<header v-else class="item_title">{{itemDetail[itemNum-1].question_name}}</header>
                    <ul v-if="itemDetail[itemNum-1].muti">
    					<li  v-for="(item, index) in itemDetail[itemNum-1].answer" @click="choosed($event)" class="item_list" :key="index">
    						 <input type="checkbox" :id="`label${index}`" :value="item.answer_id" v-model="checkedNames">
                            <label :for="`label${index}`"></label>{{item.answer_name}}
    					</li>
    				</ul>
					<ul v-else>
    					<li  v-for="(item, index) in itemDetail[itemNum-1].answer" @click="choosed($event)" class="item_list" :key="index">
    						 <input type="radio" :id="`label${index}`" :value="item.answer_id" v-model="checked">
                            <label :for="`label${index}`"></label>{{item.answer_name}}
    					</li>
    				</ul>
    			</div>
    		</div>
    		<div class="next_item button_style" @click="nextItem(itemDetail[itemNum-1].type)" v-if="itemNum < itemDetail.length">下一题({{allTime}}s)</div>
    		<div class="submit_item button_style" v-else @click="submitAnswer(itemDetail[itemNum-1].type)">提交({{allTime}}s)</div>
            <loading></loading>
            <popup></popup>
    	</div>
        
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import {questionnaireSubmit} from '../service/api'
import loading from './loading'
import popup from './popup'
export default {
	data() {
		return {
			checkedNames:[],
            checked:'',
		}
    },
    components:{
        loading,
        popup
    },
  	computed: {
		...mapState([
			'itemNum', //第几题
			'itemDetail', //题目详情
            'timer', //计时器
            'allTime',//定时时间
            'answerid',//答案
            'showPopup'//是否显示弹窗
        ]),
        ...mapGetters([
            'answerIDKeys',
            'answerIDValues'
        ]),
        time(){
            return this.allTime
        }
    },
  	methods: {
  		...mapActions([
  			// 'addNum', 'initializeData',
		  ]),
		  ...mapMutations([
              'INITIALIZE_DATA',
              'REMBER_ANSWER',
              'ADD_ITEMNUM',
              'REMBER_TIME',
              'SET_TIME',
              'SHOW_POPUP'
          ]),
        choosed(e){
        //   if(e.currentTarget.firstChild.checked){
        // 	  e.currentTarget.firstChild.checked=false;
        //   }else{
        // 	  e.currentTarget.firstChild.checked=true;
        //   }
			  
	  	},
  		//点击下一题
  		nextItem(type){
			 if(this.time<=0){
                this.SHOW_POPUP('超时');
             }else{
                if(this.itemDetail[this.itemNum-1].muti){
                    if (this.checkedNames&&this.checkedNames.length) {
                            let obj={};
                            obj[type]=this.checkedNames.join(',');
                            this.REMBER_ANSWER(obj);
                            this.checkedNames = [];
                            if(this.itemNum< this.itemDetail.length){
                                this.ADD_ITEMNUM(1);
                                this.SET_TIME(10);
                            }
                        }else{
                            this.SHOW_POPUP('多选还没选择');
                        }
                }else{
                    if (this.checked) {
                        let obj={};
                        obj[type]=this.checked;
                        this.REMBER_ANSWER(obj);
                        this.checked = '';
                        if(this.itemNum< this.itemDetail.length){
                            this.ADD_ITEMNUM(1);
                            this.SET_TIME(10);
                        }
                    }else{
                        this.SHOW_POPUP('单选还没选择');
                    } 
                }
             }
  			
  		},
	  	//到达最后一题，交卷，请空定时器，跳转分数页面
	  	submitAnswer(type){
              if(this.time<=0){
                this.SHOW_POPUP('超时');
             }else{
                    if(this.itemDetail[this.itemNum-1].muti){
                        if (this.checkedNames&&this.checkedNames.length) {
                            let obj={};
                            obj[type]=this.checkedNames.join(',');
                            this.REMBER_ANSWER(obj);
                            console.log(this.answerIDKeys,this.answerIDValues);
                            clearInterval(this.timer)
                              this.$router.push('/score')
                            // this.submitData(this.$store.state.answerid);
                        }else{
                            this.SHOW_POPUP('多选还没选择');
                        }
                    }else{
                        if (this.checked) {
                            let obj={};
                            obj[type]=this.checked;
                            this.REMBER_ANSWER(obj);
                            console.log(this.answerIDKeys,this.answerIDValues);
                            console.log(JSON.stringify(this.$store.state.answerid));
                            // this.submitData(this.$store.state.answerid);
                            clearInterval(this.timer)
                            this.$router.push('/score')
                        
                        }else{
                            this.SHOW_POPUP('单选还没选择');
                        } 
                    }
                }
			  
          },
          async submitData(data){
               try{
                    let res = await questionnaireSubmit(data);
                    console.log(res)
                }catch(error){
                    console.log(error)
                }
          }
	},
	created(){
		//初始化信息
        // this.initializeData();
        this.INITIALIZE_DATA();
        this.REMBER_TIME();
        
    },
    mounted(){
        // this.REMBER_ANSWER(this.$route.query);
    },
    beforeDestroy () {
        clearInterval(this.timer)
    },
    watch:{
        checkedNames:{
            handler:function(newValue,oldValue){
                // console.log(newValue,oldValue);
                
            },
            deep:true
        },
       time:function(newValue,oldValue){
           if(newValue<=0){
               clearInterval(this.timer)
           }
       } 
    }
}
</script>

<style lang="scss" scoped>
@import '../style/base/mixins';
@import '../style/base/function';
$height:1rem;
$color:#ffd400;
h3{
    margin: .5rem 0;
    font-size: .6rem;
    @include gradient-border(255, 0, 0,1px,bottom)
}
header{
    height: $height;
    line-height: $height;
    background-color: #e92333;
    color: #ffffff;
}

.has_choosed{
    background-color: $color;
    color: #575757;
    border-color: $color;
}
li {
    @include wh(100%,pxToRem(100px));
	margin: .5rem 0;
	position: relative;
    font-size: .32rem;
    text-align: left;
    padding-left: 1.5rem;
    @for $i from 1 to 5 {
    &:nth-child(#{$i}) {
        background-color:#{$i*#338211};
    }}
}

label {
	display: inline-block;
	 @include wh(.5rem,.5rem);
	border: 0.01rem solid orange;
	border-radius: 50%;
	position: relative;
	vertical-align: middle;
	margin-top: -.02rem;
	margin-bottom: 0.01rem;
	margin-right: .1rem;
}

input {
	visibility: hidden;
	position: absolute;
}

input:checked+label::after {
	content: "";
	position: absolute;
	left: 50%;
	top: 50%;
	width: .25rem;
	height: .12rem;
	border: .02rem solid #e92333;
	border-top-color: transparent;
	border-right-color: transparent;
	-ms-transform: rotate(-60deg);
	-moz-transform: rotate(-60deg);
	-webkit-transform: rotate(-60deg);
	transform: translate(-50%, -100%) rotate(-45deg);
}
.next_item,.submit_item{
    margin: .5rem auto;
    @include wh(6rem,.8rem);
    background-color: #575757;
    color: #ffffff;
}
</style>
