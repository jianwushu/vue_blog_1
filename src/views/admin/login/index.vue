<template>
  <div class="ui m-container-small m-padded-tb-massive" style="max-width: 30em !important;">
    <div class="ur container ">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui orange image header">
            <div class="content">
              管理后台登录
            </div>
          </h2>
          <form class="ui large form" action="#">
            <div class="ui  segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input type="text" v-model="query.userName" name="username" placeholder="用户名">
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password" v-model="query.password" name="password" placeholder="密码">
                </div>
              </div>
              <div class="ui fluid large teal button" @click="login">登   录</div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getLogin} from "@/api/user";

  export default {
    name: "Login",
    data(){
      return{
        query:{
          userName: "admin",
          password: "123"
        }
      }
    },
    methods: {
      login(){
        getLogin(this.query).then(res=>{
          sessionStorage.setItem("userInfo",res.data.nickName)
          this.$store.commit("userInfo",res.data.nickName)
          this.$router.push("/admin")
        })
      }
    }
  }
</script>

<style scoped>

</style>
