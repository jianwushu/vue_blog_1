<template>
  <div>
  <!--   三级路由解决方法 -->
    <div v-if="this.$route.path === '/admin/blog'">
      <div class="m-container m-padded-tb-big">
        <div class="ui container">

<!--          <message :msg="msg" @closeMsg="closeMsg" v-show="!(msg==='')"/>-->

          <div class="ui secondary segment form">
            <div class="inline fields">
              <div class="field">
                <input v-model="query.title"  type="text" name="title" placeholder="标题">
              </div>
              <div class="field">
                <div class="ui left labeled action input">
                  <label class="ui compact teal basic label">分类</label>
                  <select v-model="query.categoryId"  name="category" class="ui fluid dropdown">
                    <option value="">全部</option>
                    <option v-for="item in categories" :value="item.id">{{item.name}}</option>
                  </select>
                </div>
              </div>
              <div class="field">
                <button @click="searchData" class="ui mini teal basic button"><i class="search icon"></i>搜索</button>
                <router-link to="/admin/blog/write" class="ui mini teal button"><i class="edit icon"></i>新建文章</router-link>
              </div>
            </div>
          </div>

          <table class="ui compact center aligned teal table">
            <thead>
            <tr>
              <th>序号</th>
              <th>标题</th>
              <th>分类</th>
              <th>状态</th>
              <th>创建时间</th>
              <th>更新时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in blogs" :key="index">
              <td>{{index*query.current+1}}</td>
              <td>{{item.title}}</td>
              <td>{{item.category.name}}</td>
              <td>{{item.status}}</td>
              <td>{{item.createTime}}</td>
              <td>{{item.updateTime}}</td>
              <td>
                <router-link :to="{path:'/admin/blog/edit/'+item.id}" class="ui mini teal basic button">编辑</router-link>
                <button @click="delItem(item.id,index)" class="ui mini red basic button">删除</button>
              </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <th colspan="7" class="ui center aligned">
                <div class="ui center middle aligned three column grid ">
                  <div class="column m-padded-tiny">
                    <button @click="previewPage" :disabled="query.current===1" class="ui mini teal basic button">上一页</button>
                  </div>
                  <div class="column center aligned">
                    <label class="ui teal label">{{pages>0?query.current:0}}/{{pages}}</label>
                  </div>
                  <div class="column m-padded-tiny">
                    <button @click="nextPage" :disabled="query.current===pages" class="ui mini teal basic button">下一页</button>
                  </div>
                </div>
              </th>
            </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    <div v-else>
      <router-view/>
    </div>

  </div>
</template>

<script>

  import {getList,del} from "@/api/blog";
  import {getMetaList} from "@/api/meta";
  import Message from "components/common/message/index";
  export default {
    name: "index",
    components:{Message},
    data(){
      return{
        blogs: [],
        categories:[],
        total: 0,
        pages: 0,
        query:{
          current: 1,
          size: 7,
          title: null,
          deleted: false,
          categoryId: null,
        },
        query2:{
          type: 'category'
        }
      }
    },
    created(){
      this.getBlogsData(this.query)
      this.getMetasData(this.query2)
    },
    methods:{
      getBlogsData(query){
        getList(query).then(res=>{
          this.blogs = res.data.records
          this.total = res.data.total
          this.pages = res.data.pages
        })
      },
      getMetasData(query){
        getMetaList(query).then(res=>{
          this.categories = res.data
        })
      },
      delItem(id,index){
        del(id).then(res=>{
          this.removeItem(index)
          this.total--
        })
      },
      searchData(){
        getList(this.query).then(res=>{
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
      },
      removeItem(index){
        this.blogs.splice(index, 1)
      }
    }

    // methods: {
    //   searchData(){
    //     this.queryData.categoryId = this.queryData.categoryId === "全部" ? null:this.queryData.categoryId
    //     console.log(this.queryData)
    //     req.getPageDataBySearch(0,this.queryData).then(res=>{
    //       this.curPage = res.number
    //       this.size = res.size
    //       this.data = res.content
    //       this.totalElements = res.totalElements
    //     })
    //   },
    //   nextPage() {
    //     this.queryData.categoryId = this.$refs.category.value
    //     req.getPageDataBySearch(this.curPage + 1,this.queryData).then(res => {
    //       this.curPage = this.curPage + 1
    //       this.size = res.size
    //       this.data = res.content
    //       this.totalElements = res.totalElements
    //     })
    //   },
    //   previewPage() {
    //     this.queryData.categoryId = this.$refs.category.value
    //     req.getPageDataBySearch(this.curPage - 1,this.queryData).then(res => {
    //       this.curPage = this.curPage - 1
    //       this.size = res.size
    //       this.data = res.content
    //       console.log(this.data)
    //       this.totalElements = res.totalElements
    //     })
    //   },
    //   //关闭弹窗
    //   closeMsg() {
    //     this.msg = ''
    //   }
    // }
  }
</script>

<style scoped>

</style>
