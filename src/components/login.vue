<template>
  <div class="login">
    <el-input type="text" v-model="username" placeholder="请输入用户名"></el-input>
    <el-input type="password" v-model="userpsd" placeholder="请输入密码"></el-input>
    <el-button type="primary" @click="toLogin">主要按钮</el-button>
    <popup></popup>
  </div>
</template>

<script>
  //   import {
  //     login
  //   } from '../service/api'
  import {
    mapActions,
    mapState,
    mapMutations
  } from 'vuex'
  import popup from './popup'
  export default {
    name: 'login',
    props: [''],
    data() {
      return {
        username: "",
        userpsd: "",
      };
    },

    components: {
      popup
    },

    computed: {
      ...mapState(["userinfo", "isLogin"])
    },

    beforeMount() {},

    mounted() {
      console.log(this.$route.params.path);
    },

    methods: {
      ...mapActions(["getUserInfo"]),
      ...mapMutations([
        'SHOW_POPUP'
      ]),
      toLogin() {
        if (this.username == "") {
          return;
        } else if (this.userpsd == "") {
          return;
        } else {
          let data = {};
          data.username = this.username;
          data.password = window.encrypt(this.userpsd);
          data.client = 1;
          data.device = "";
          // login(data).then(res => {
          // console.log(res.data.data[0]);
          // if (res.data.result.code = 10000) {

          // }

          // }).catch(err => {})
          this.getUserInfo(data).then(() => {
              if (this.isLogin) {
                sessionStorage.setItem("userinfo", JSON.stringify(this.userinfo));
                sessionStorage.setItem("isLogin", true);
                this.$router.push({
                  path: this.$route.params.path
                });
              } else {
                sessionStorage.setItem("userinfo", '');
                sessionStorage.setItem("isLogin", '');
                this.SHOW_POPUP(this.userinfo.result.msg);
              }
            })
            .catch(err => {
              console.log(err);
            });

        }
      },
    },

    watch: {}

  }

</script>
<style lang='' scoped>
  .login .el-input {
    margin: .5rem 0;
  }

  .login .el-button--primary {
    width: 100%;
    margin: .5rem 0;
  }

</style>
