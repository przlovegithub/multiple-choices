<template>
  <div>
     <div id="loading-page" v-if="showPopup">
        <div class="loading-content">
            <div class="msg-wrap">
                <div class="msg" id="msgShow">{{popupText}}</div>
            </div>
            <div class="loading-page-close" @click="confirm">确定</div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
  export default {
    name:'',
    props:[],
    data () {
      return {

      };
    },
    computed: {
      ...mapState(['showPopup','popupText','allTime'])
    },
    methods: {
        ...mapMutations(['SHOW_POPUP']),
        confirm(){
            this.SHOW_POPUP();
            if(!this.showPopup&&this.allTime<=0){
                   this.$router.push('/score')
            }else{

            }
        }
    },


  }

</script>
<style lang='scss' scoped>
     #loading-page {
            position: fixed;
            left: 0;
            top: 0;
            z-index: 9999;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: rgba(0, 0, 0, 0.8);
        }
        
        #loading-page .loading-content {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate3d(-50%, -50%, 0);
            -moz-transform: translate3d(-50%, -50%, 0);
            -ms-transform: translate3d(-50%, -50%, 0);
            -o-transform: translate3d(-50%, -50%, 0);
            transform: translate3d(-50%, -50%, 0);
            width: 240px;
            background: #787878;
            border-radius: 4px;
        }
        
        #loading-page .msg-wrap {
            position: relative;
            margin: 10px auto;
            width: 140px;
            height: 44px;
        }
        
        #loading-page .msg {
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            -webkit-transform: translate3d(0, -50%, 0);
            -moz-transform: translate3d(0, -50%, 0);
            -ms-transform: translate3d(0, -50%, 0);
            -o-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0);
            font-size: 14px;
            line-height: 20px;
            color: white;
            text-align: center;
        }
        
        #loading-page .loading-page-close {
            margin: 10px auto;
            width: 140px;
            border-radius: 4px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            line-height: 44px;
            background: rgba(138, 21, 41, 1);
            -webkit-transition: background 0.5s;
            -moz-transition: background 0.5s;
            -ms-transition: background 0.5s;
            -o-transition: background 0.5s;
            transition: background 0.5s;
        }
        
        #loading-page .loading-page-close:active {
            background: rgba(138, 21, 41, 0.6);
        }
</style>