<template>
  <div  class="m-container-small m-padded-tb-big">
    <div class="ui container">

      <div class="ui stackable grid">
        <div class="eleven wide column">
          <div class="ui segment">
            <img :src="options.about_img" alt="" class="ui rounded image">
          </div>
        </div>
        <div class="five wide column">
          <div class="ui top attached segment">
            <div class="ui header center aligned">关于我</div>
          </div>
          <div class="ui attached segment">
            <p class="m-text">{{options.about_text}}</p>
          </div>
          <div class="ui attached segment">
            <div class="ui orange basic left pointing label"
                 v-for="(item,index) in (options.about_hobbies).split(',')" :key="index">
              {{item}}
            </div>
          </div>
          <div class="ui attached segment">
            <div class="ui teal basic left pointing label m-margin-tb-tiny"
                 v-for="(item,index) in (options.about_skill).split(',')" :key="index">
              {{item}}
            </div>
          </div>

          <div class="ui bottom attached segment center aligned">
            <a :href="item.link" class="ui circular icon button" v-for="(item,index) in JSON.parse(options.about_contact)" :key="index">
              <i :class="item.class"></i>
            </a>
          </div>

          <div class="ui wechat-qr flowing popup transition hidden">
            <img src="~assets/logo.png" alt="" class="ui rounded image" style="width: 110px">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import {getOptionsList} from "@/api/option";
  export default {
    name: "About",
    data() {
      return {
        options: {},
        query: {
          type: 'about'
        }
      }
    },
    created() {
      this.getOptionData(this.query)
    },
    methods:{
      getOptionData(query){
        getOptionsList(query).then(res=>{
          this.options = res.data
        })
      }
    }
  }

</script>

<style scoped>

</style>
