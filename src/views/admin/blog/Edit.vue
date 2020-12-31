<template>

  <div class="m-container-small m-padded-tb-big">
    <div class="ui container">
      <div class="ui form">
        <div class="field">
          <div class="ui left labeled input">
            <label class="ui teal basic label">首图</label>
            <input v-model="blog.img" type="text" name="img" placeholder="首图引用地址">
          </div>
        </div>

        <div class="required field">
          <div class="ui left labeled input">
            <label class="ui teal basic label">标题</label>
            <input v-model="blog.title" class="ui input fluid" type="text" name="title" placeholder="标题">
          </div>
        </div>

        <div class="field">
          <div id="vditor" style="z-index: 9 !important;">
          </div>
        </div>

        <div class="two fields">
          <div class="field">
            <div class="ui left labeled action input">
              <label class="ui compact teal basic label">分类</label>
              <select v-model="blog.category.id" name="category" class="ui dropdown fluid ">
                <option v-for="item in categories" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>

          <div class="field">
            <div class="ui left labeled action input">
            <label class="ui compact teal basic label">标签</label>
            <div class="ui dropdown fluid selection multiple search">
              <input ref="tags" type="hidden" name="tag" v-model="tags">
              <div class="default text">标签</div>
            </div>
          </div>
          </div>

        </div>

        <div class="inline fields">
          <div class="field">
            <div class="ui checkbox">
              <input v-model="blog.allowShare" type="checkbox" id="share" name="share" class="hidden">
              <label for="share">转载声明</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input v-model="blog.allowFeed" type="checkbox" id="feed" name="feed" class="hidden">
              <label for="feed">赞赏</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input v-model="blog.allowComment" type="checkbox" id="comment" name="comment" class="hidden">
              <label for="comment">评论</label>
            </div>
          </div>
        </div>

        <div class="ui error message"></div>

        <div class="ui right aligned container">
          <button type="button" class="ui button" onclick="window.history.go(-1)">返回</button>
          <button @click="postBlog('draft')"class="ui secondary button" > 保存</button>
          <button @click="postBlog('published')" class="ui teal button">发布</button>
        </div>

      </div>
    </div>
  </div>


</template>

<script>

  import {updBlog,getList} from "@/api/blog";
  import {getMetaList} from "@/api/meta";
  import Vditor from 'vditor'
  export default {
    name: "Edit",
    data(){
      return{
        vditorContent: '',
        categories:[],
        tags: null,
        blog: {
          category: {},
        },
        query:{
          current: 1,
          size: 1,
          id: this.$route.params.id
        },
        query2:{
          type: 'category'
        }
      }
    },
    created() {
      this.getBlogData(this.query)
      this.$forceUpdate()
      this.getMetasData(this.query2)
    },
    mounted() {
      $('.ui.dropdown')
          .dropdown({
            allowAdditions: true,
            maxSelections: 3
          })
      ;
    },
    methods:{
      getBlogData(query){
       getList(query).then(res =>{
          this.blog = res.data.records[0]
          this.tags = this.blog.tags.map(i=>{return i.name}).join(',')
          this.vditorContent = new Vditor('vditor',{
            height: 360,
            toolbarConfig: {
              pin: true,
            },
            counter: {
              enable: true,
            },
            cache: {
              enable: false,
            },
            after: () => {
              this.vditorContent.setValue(this.blog.text)
            },
          })
        })
      },
      getMetasData(query){
        getMetaList(query).then(res=>{
          this.categories = res.data
        })
      },
      postBlog(status){
        this.blog.text = this.vditorContent.getValue()
        if(this.blog.text.replace(/(^\s*)|(\s*$)/g, '')===""){
          console.log("文章内容不能为空")
          return
        }
        this.blog.status = status
        this.$refs.tags.value.split(',').forEach(e=>{
          this.blog.tags.push({'name':e,'type':'tag'})
        })
        updBlog(this.blog).then(res=>{
          this.$router.push("/admin/blog")
        })
      },
    },
  }

</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/vditor/dist/index.css";
</style>
