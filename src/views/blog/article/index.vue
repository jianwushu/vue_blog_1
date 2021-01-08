<template>
  <div id="waypoint" class="m-container-small m-padded-tb-big">
    <div class="ui container">
      <!--文章信息-->
      <div class="ui top attached segment">
        <div class="ui mini horizontal link list middle aligned">
          <div class="item">
            <img src="https://ilvyu.cn/images/head.jpg" alt="" class="ui avatar image">
            <div class="content">
              <router-link to="/about" class="header">
                {{blog.user.nickName}}
              </router-link>
            </div>
          </div>
          <div class="item">
            <i class="calendar icon"></i>&nbsp;<span>{{blog.updateTime}}</span>
          </div>
          <div class="item">
            <i class="eye icon"></i>&nbsp;<span>{{blog.views}}</span>
          </div>
        </div>
      </div>
      <!--图片-->
      <div class="ui attached segment">
        <img class="ui rounded image" :src="blog.img" alt="">
      </div>
      <div class="ui teal segment m-padded-tb-massive">

        <!--内容-->
<!--        <div class="ui basic segment">-->
<!--          <div class="ui orange basic label">{{blog.category.caName}}</div>-->
<!--          <div v-show="blog.tags!=null" v-for="tag in blog.tags" class="ui teal basic label">{{tag!=null?tag.tName:''}}</div>-->
<!--        </div>-->

        <h1 class="ui center aligned header">{{blog.title}}</h1>
        <hr class="ui line">
        <div id="md_haohao" class="entry-content l-h-2x vditor-reset  toc-content m-padded-tiny" >
        </div>
        <!--赞赏-->
        <div v-show="blog.allowFeed" class="ui center aligned basic segment">
          <button id="payButton" class="ui orange basic circular button">赞赏</button>
        </div>
        <div class="ui payQR flowing popup transition hidden">
          <div class="ui orange basic label">
            <div class="ui images" style="font-size: inherit !important;">
              <div class="image">
                <img src="https://ilvyu.cn/images/head.jpg" alt="" class="ui rounded bordered image" style="width: 120px">
                <div>支付宝</div>
              </div>
              <div class="image">
                <img src="https://ilvyu.cn/images/head.jpg" alt="" class="ui rounded bordered image" style="width: 120px">
                <div>微信</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--博客信息-->
      <div class="ui positive segment" v-show="blog.allowShare">
        <div class="ui middle aligned grid">
          <div class="eleven wide column">
            <ul class="ui list">
              <li>作者：{{blog.user.nickName}}</li>
              <li>发表时间：{{blog.createTime}}</li>
              <li>版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</li>
            </ul>
          </div>
          <div class="five wide column">
            <img src="https://ilvyu.cn/images/head.jpg" alt="" class="ui right floated rounded bordered image"
                 style="width: 10em">
          </div>
        </div>
      </div>
      <!-- 评论-->
      <div id="comment" class="ui teal segment" v-if="blog.allowComment">
        <comment :blogId="blog.id"/>
      </div>
    </div>

    <tool-bar/>
  </div>
</template>

<script>


  import Comment from "components/common/comment/Comment";
  import ToolBar from "components/common/toolBar";
  import VditorPreview from 'vditor/dist/method.min'
  import {getList} from "@/api/blog";
  export default {
    name: "Article",
    components: {ToolBar, Comment},
    data() {
      return {
        blog: {
          //数据渲染问题
          user: {nickName:""}
        },
        query: {
          id: 0,
        }
      }
    },
    created() {
      this.query.id = this.$route.params.id
      this.getBlogData(this.query)
    },
    mounted() {
      $('#payButton')
          .popup({
            popup: $('.ui.payQR'),
            on: "click",
            position: 'bottom center',
            delay: {
              show: 300,
              hide: 800
            }
          });
    },
    methods:{
      getBlogData(query){
        getList(query).then(res=>{
          this.blog = res.data.records[0]
          this.showData()
        })

      }, async showData() {
        const previewElement = document.getElementById('md_haohao')
        await VditorPreview.preview(
            previewElement,
            this.blog.text,
            {
              after() {
                tocbot.init({
                  tocSelector: '.js-toc',
                  contentSelector: '#md_haohao',
                  headingSelector: 'h1, h2, h3',
                  scrollSmooth: true,
                });
              }
            }
        )
      }
    }
  }

</script>

<style scoped>

</style>
