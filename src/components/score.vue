<template>
  <div>
    <h3>一共答了{{answerIDValues.length}}题</h3>
    <h3>一共答对了{{score}}题</h3>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  export default {
    name: '',
    props: [''],
    data() {
      return {
        score: 0,
        rightAnswer: [3, '1,3,4', 3, 3, '1,2,4', 3], //正确答案
      };
    },

    components: {},

    computed: {
      ...mapGetters(['answerIDValues'])
    },
    created() {
      this.computedScore();
    },
    beforeMount() {},

    mounted() {},

    methods: {
      //计算分数
      computedScore() {
        this.answerIDValues.forEach((item, index) => {
          if (item == this.rightAnswer[index]) {
            this.score += 1;
          }
        })
      },

    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
  @import '../style/base/mixins';
  h3 {
    margin: 1rem 0;
    @include wh(100%, pxToRem(100px));
    @include gradient-border(255, 0, 0, 1px, bottom);
  }

</style>
