<template>
  <div class="m-container-small m-padded-tb-large">
<!--    <div style="height: 50px">-->
<!--    </div>-->
    <div class="ui container">
      <div class="ui stackable grid">
        <!--左边-->
        <div class="eleven wide column">
          <div class="ui segment">
            <div class="ui middle aligned two column grid">
              <div class="column">
                <h3 class="ui teal header">博客</h3>
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
                            <i class="calendar icon"></i>&nbsp;<span>{{item.updateTime.split(" ")[0]}}</span>
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
                <button @click="previewPage" :disabled="query.current===1" class="ui mini teal basic button">上一页</button>
              </div>
              <div class="column center aligned">
                <label class="ui teal label">{{query.current}}/{{pages}}</label>
              </div>
              <div class="right aligned column m-padded-tiny">
                <button @click="nextPage" :disabled="query.current===pages" class="ui mini teal basic button">下一页</button>
              </div>
            </div>
          </div>
        </div>
        <!--右边-->
        <div class="five wide column">
          <!--分类-->
          <div class="ui segments">
            <div class="ui secondary segment">
              <div class="ui two column grid">
                <div class="column">
                  <i class="idea icon"></i>分类
                </div>
                <div class="right aligned column">
                  <a href="#">more <i class="angle double right icon"></i></a>
                </div>
              </div>
            </div>
            <div class="ui teal segment">
              <div class="ui fluid vertical menu">
                <a href="#" class="item">
                  学习日志
                  <div class="ui teal basic left pointing label">13</div>
                </a>
                <a href="#" class="item">
                  思考与感悟
                  <div class="ui teal basic left pointing label">13</div>
                </a>
                <a href="#" class="item">
                  学习日志
                  <div class="ui teal basic left pointing label">13</div>
                </a>
                <a href="#" class="item">
                  学习日志
                  <div class="ui teal basic left pointing label">13</div>
                </a>
                <a href="#" class="item">
                  学习日志
                  <div class="ui teal basic left pointing label">13</div>
                </a>
                <a href="#" class="item">
                  学习日志
                  <div class="ui teal basic left pointing label">13</div>
                </a>
              </div>
            </div>
          </div>
          <!--标签-->
          <div class="ui segments m-margin-top-large">
            <div class="ui secondary segment">
              <div class="ui two column grid">
                <div class="column">
                  <i class="tags icon"></i>标签
                </div>
                <div class="right aligned column">
                  <a href="#" target="_blank">more <i class="angle double right icon"></i></a>
                </div>
              </div>
            </div>
            <div class="ui teal segment">
              <a href="#" class="ui teal basic label m-margin-tb-tiny">
                方法论
                <div class="detail">23</div>
              </a>
              <a href="#" class="ui teal basic label m-margin-tb-tiny">
                方法123121231论
                <div class="detail">23</div>
              </a>
              <a href="#" class="ui teal basic label m-margin-tb-tiny">
                论
                <div class="detail">23</div>
              </a>
              <a href="#" class="ui teal basic label m-margin-tb-tiny">
                论
                <div class="detail">23</div>
              </a>
            </div>
          </div>

          <!--最新推荐-->
          <div class="ui segments m-margin-top-large">
            <div class="ui secondary segment ">
              <i class="bookmark icon"></i>最新推荐
            </div>
            <div class="ui segment">
              <a href="#" target="_blank" class="m-black m-text-thin">用户故事（User Story）</a>
            </div>
            <div class="ui segment" >
              <a href="#" target="_blank" class="m-black m-text-thin">用户故事（User Story）</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {getList} from "@/api/blog";
  export default {
    name: "Home",
    components:{
    },
    data() {
      return {
        blogs: [],
        total: 0,
        pages: 0,
        query:{
          current: 1,
          size: 7,
          deleted: false
        }
      };
    },
    created() {
      this.getBlogsData(this.query)
    },
    methods:{
      getBlogsData(query){
        getList(query).then(res=>{
          this.blogs = res.data.records
          this.total = res.data.total
          this.pages = res.data.pages
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
