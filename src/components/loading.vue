<template>

  <div class="loading" v-if="loading.status">
    <div :class="{'m-loading':1,'m-loading-dark':loading.theme=='dark','m-loading-light':loading.theme=='light'}" :style="{fontSize: loading.size}"> 
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div :class="[loading.theme=='dark'?'dark':'light']">{{loading.text}}</div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
export default {
  name: 'loading',
//   props: ['status','theme','size'],
  data () {
    return {
      
    }
  },
  components: {},

    computed: {
        ...mapState(['loading'])
    },

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.loading {
  text-align: center;
  padding: .3rem 0;
  font-size: .5rem;
   .dark{
       margin: .3rem 0 ;
       color:#000000;
    }
    .light{
        margin: .3rem 0 ;
        color:#ffffff;
    }
}
.m-loading {
    position: relative;
    display: inline-block;
    width: 2.3125em;
    height: 2.3125em;
    vertical-align: middle;
    font-size: .3rem;
    span {
      position: absolute;
      will-change: background-color;
      left: 1.10938em;
      bottom: 0;
      width: .09375em;
      height: .5em;
      border-radius: .2em;
      background-color: transparent;
      transform-origin: center -.65625em;
      -webkit-backface-visibility: hidden;
      @for $i from 1 to 13 {
        &:nth-child(#{$i}) {
          animation-delay: #{($i - 1)/10}s;
          transform: rotate(#{($i - 1)*30}deg)
        }
      }
  }
}

.m-loading-dark span {
    animation: loading-fade-dark 1.1s infinite linear
}

@keyframes loading-fade-dark {
    0% {
        background-color: rgba(0,0,0,.6)
    }

    100% {
        background-color: rgba(0,0,0,0)
    }
}

.m-loading-light span {
    animation: loading-fade-light 1.1s infinite linear
}

@keyframes loading-fade-light {
    0% {
        background-color: rgba(255,255,255,.6)
    }

    100% {
        background-color: rgba(255,255,255,0)
    }
}
</style>
