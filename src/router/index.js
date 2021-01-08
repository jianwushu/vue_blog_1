import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//前台展示
import Layout from "@/layout/"
//管理系统
import LayoutAdmin from "@/layout/admin"

import Home from "views/blog/home";
import Comment from "views/blog/comment";
import Album from "views/blog/album";
import Archive from "views/blog/archive"
import Category from "views/category/Category";
import Tag from "views/tag/Tag";
import About from "views/blog/about";
import Article from "views/blog/article";
//后台
import HomeAdmin from "views/admin"
import Login from "views/admin/login"
import Blogs from "views/admin/blog"
import Write from "views/admin/blog/Write";
import Edit_Blog  from "views/admin/blog/Edit";
import Tags from "views/admin/tag"
import Categories from "views/admin/category"
const routes = [
//  前台路由
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Home,
        meta:{
          title: '首页'
        }
      },{
        path: 'comment',
        component: Comment,
        meta:{
          title: '留言板'
        }
      },{
        path: 'album',
        component: Album,
        meta:{
          title: '相册'
        }
      },{
        path: 'archive',
        component: Archive,
        meta:{
          title: '归档'
        }
      },{
        path: 'category',
        component: Category,
        meta:{
          title: '分类'
        }
      },{
        path: 'tag',
        component: Tag,
        meta:{
          title: '标签'
        }
      },{
        path: 'archive',
        component: Archive,
        meta:{
          title: '归档'
        }
      },{
        path: 'about',
        component: About,
        meta:{
          title: '关于我'
        }
      },{
        path: 'article/:id',
        component: Article
      }
    ]
  },
 //后台路由
  {
    path: '/admin',
    component: LayoutAdmin,
    children:[
      {
        path: '',
        component: HomeAdmin,
        meta: {title: "控制台"}
      },
      {
        path: 'login',
        component: Login,
        meta: {title: "后台登录"}
      },
      {
      //文章管理
        path: 'blog',
        component: Blogs,
        meta: {title: "文章列表"},
        children:[
          {
            path: 'write',
            component: Write,
            meta: {title: "写文章"}
          },{
            path: 'edit/:id',
            component: Edit_Blog,
            meta: {title: "编辑文章"}
          }
        ]
      },
      {
        //标签管理
        path: "tag",
        component: Tags,
        meta: {title: "标签管理"}
      },
      {
        //分类管理
        path: "category",
        component: Categories,
        meta: {title: "分类管理"}
      }

    ]
  }
]
export default new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  //跳转页面置顶
  scrollBehavior(to,from,saveTop){
    if(saveTop){
      return saveTop;
    }else{
      return {x:0,y:0}
    }
  },
})
