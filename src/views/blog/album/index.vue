<template>

  <div class="m-container m-padded-tb-large">

    <div class="ui container">
      <div class="ui teal segment ">
        <div class="ui dividing header">相册</div>
        <div class="ui four stackable cards">
          <div class="red card" v-if="albums" v-for="(album,index) in albums" :key="index">
            <div class="ui slide masked reveal image" @click="albumDetail(album.text)">
              <img src="https://pic.ilvyu.cn/2019/11/13/dc11411ea5c8a.jpg" class="visible content">
              <img :src="album.img" class="hidden content">
            </div>
            <div class="content">
              <span>{{album.title}}</span>
              <span class="ui aligned right">{{album.createTime}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>

    <div class="ui basic modal">

      <div class="actions">
        <div class="ui primary basic inverted button" :class="curIndex<=0?'disabled':''" @click="lm">
          <i class="chevron left icon "></i>
        </div>
        <div class="ui primary basic inverted button" :class="curIndex>=pics.length-1?'disabled':''" @click="rm">
          <i class="chevron right icon"></i>
        </div>
        <div class="ui red basic cancel inverted button">
          <i class="remove icon"></i>
          关闭
        </div>
      </div>
      <div id="slide">
        <img class="ui centered massive image" v-if="pics" v-for="(pic,index) in pics" :class="curIndex !=index?'hidden':''"
             :src="pic.src"
             :title="pic.title">
      </div>
    </div>
  </div>
</template>

<script>
  import {getList} from "@/api/blog";
  export default {
    name: "index",
    data() {
      return {
        albums: [],
        pics:[{}],
        total: 0,
        pages: 0,
        curIndex: 0,
        query:{
          current: 1,
          size: 8,
          deleted: false,
          categoryId: 2
        }
      };
    },
    created() {
      this.getBlogsData(this.query)
    },
    methods: {
      getBlogsData(query) {
        getList(query).then(res => {
          console.log(res)
          this.albums = res.data.records
          this.total = res.data.total
          this.pages = res.data.pages
        })
      },
      albumDetail(text){
        this.pics = []
        let reg1 = /\((.+?)\)/g
        let reg2 = /\[(.+?)\]/g
        let srcs = text.match(reg1)
        let titles = text.match(reg2)
        for(let x in titles){
          this.pics.push({'title':titles[x].substr(1,titles[x].length - 2),'src':srcs[x].substr(1,srcs[x].length - 2)})
        }
        $('.ui.basic.modal')
            .modal('show')
        ;
      },
      lm(){
        this.curIndex = this.curIndex-1
      },
      rm(){
        this.curIndex = this.curIndex+1
      }
    }
  }
</script>

<style scoped>
  #slide img{
    position: absolute;
  }
</style>
