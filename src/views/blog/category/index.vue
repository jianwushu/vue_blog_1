<template>
  <div class="m-container m-padded-tb-large">
    <div class="ui container">
      <div class="ui stackable grid">
        <!--左边-->
        <div class="eleven wide column">
          <!--统计栏-->
          <div class="ui segment">
            <div class="ui middle aligned two column grid">
              <div class="column">
                <h3 class="ui teal header">分类&nbsp;&nbsp;{{category}} &nbsp;&nbsp;下的文章</h3>
              </div>
              <div class="right aligned column">
                共<h2 class="ui orange header m-inline-block m-text-thin"> {{total}} </h2>篇博客
              </div>
            </div>
          </div>
          <!--文章卡片-->
          <div class="ui segment ">
            <div class="ui segment" v-for="item in blogs">
              <router-link :to="'/article/'+item.id">
                <div class="ui mobile reversed stackable grid middle aligned">
                  <div class="eleven wide column ">
                    <h3 class="ui center aligned header">{{item.title}}</h3>
                    <p class="ui">{{item.text.slice(0,50)}}</p>
                    <div class="ui grid">
                      <!--                      <div class="twelve wide column">-->
                      <div class="wide column">
                        <div class="ui mini horizontal link list ">
                          <div class="item">
                            <img src="https://ilvyu.cn/images/head.jpg" alt="" class="ui avatar image">
                            <div class="content">
                              <router-link to="/about" class="header">{{item.user.nickName}}</router-link>
                            </div>
                          </div>
                          <div class="item middle aligned">
                            <i class="calendar icon"></i>&nbsp;<span>{{item.updateTime}}</span>
                          </div>
                          <div class="item middle aligned">
                            <i class="eye icon"></i>&nbsp;<span>{{item.views}}</span>
                          </div>
                        </div>
                      </div>
                      <!--                      <div class="right aligned four wide column ">-->
                      <!--                        <div class="ui teal basic label m-text-thin m-padded-tiny">整挺好</div>-->
                      <!--                      </div>-->
                    </div>
                  </div>
                  <div class="five wide column">
                    <img class="ui rounded image" :src="item.img" alt="">
                  </div>
                </div>
              </router-link>
            </div>
            <br>
          </div>
          <!-- 分页-->
          <div class="ui center stackable aligned segment">
            <div class="ui center middle aligned three column grid ">
              <div class="column m-padded-tiny">
                <button @click="previewPage" :disabled="query.current===1" class="ui mini teal basic button">上一页
                </button>
              </div>
              <div class="column center aligned">
                <label class="ui teal label">{{query.current}}/{{pages}}</label>
              </div>
              <div class="right aligned column m-padded-tiny">
                <button @click="nextPage" :disabled="query.current===pages||pages===0"
                        class="ui mini teal basic button">下一页
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--右边-->
        <div class="five wide column">
          <!--分类-->
          <category-bar/>
          <!--标签-->
          <tag-bar/>
          <!--最新推荐-->
          <blog-bar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getList} from "@/api/blog";
  import CategoryBar from "components/common/aside/CategoryBar";
  import TagBar from "components/common/aside/TagBar";
  import BlogBar from "components/common/aside/BlogBar";

  export default {
    name: "index",
    components:{
      CategoryBar,TagBar,BlogBar
    },
    data() {
      return {
        category:'',
        blogs: {},
        total: 0,
        pages: 0,
        query:{
          current: 1,
          size: 7,
          categoryId: null,
          deleted: false
        }
      };
    },
    created() {
      this.getBlogsData(this.query)
    },
    watch:{
      '$route' (newVal) {
        this.getBlogsData(this.query)
      }
    },
    methods:{
      getBlogsData(query){
        query.categoryId = this.$route.params.id
        getList(query).then(res=>{
          this.blogs = res.data.records
          this.total = res.data.total
          this.pages = res.data.pages
          this.category = res.data.records[0].category.name
        })
      },
      previewPage(){
        this.query.current = this.query.current-1
        this.getBlogsData(this.query)
      },
      nextPage(){
        this.query.current = this.query.current+1
        this.getBlogsData(this.query)
      }
    }
  }
</script>

<style scoped>

</style>
