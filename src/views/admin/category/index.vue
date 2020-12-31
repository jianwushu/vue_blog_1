<template>
  <div class="m-container-small m-padded-tb-big">
    <div class="ui container">
      <!--消息弹窗-->
      <message :msg="msg" @closeMsg="closeMsg" v-show="!(msg==='')"/>
      <table class="ui celled center aligned table">
        <thead>
        <tr>
          <th colspan="6">
            <div class="ui center aligned fluid labeled input">
              <label class="ui teal basic label">分类名称</label>
              <input type="text" name="caName" placeholder="请输入新增分类名称" ref="newCategory">
              <button @click="newItem" class="ui teal button" ref="btn1">新增</button>
            </div>
          </th>
        </tr>
        <tr>
          <th></th>
          <th>名称</th>
          <th>文章数量</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in data.slice(0,10)" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.caName}}</td>
          <td>待完善</td>
          <td>
            <button @click="editItem(item.id,index,item.caName)" class="ui mini teal basic button">编辑</button>
            <button @click="deleteItem(item.id,index)" class="ui mini red basic button">删除</button>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
        <!--分页栏-->
          <th colspan="4" class="ui center aligned">
            <button @click="previewPage" :disabled="curPage===0" class="ui mini orange button">上一页</button>
            <label class="ui teal label">当前为第{{curPage+1}}页 &nbsp; 共有{{totalPages}}页</label>
            <button @click="nextPage" :disabled="curPage===totalPages-1"  class="ui mini orange button">下一页</button>
          </th>
        </tr>
        </tfoot>
      </table>

    </div>
  </div>
</template>

<script>

  // import * as req from "utils/api/admin/category";
  import Message from "components/common/message/index";

  export default {
    name: "Category",
    components: {Message},
    data(){
      return{
        msg: "",
        editId: -1,
        editIndex: -1,
        curPage: 0,
        size: 0,
        totalElements: 0,
        data: []
      }
    },
    // created(){
    //   req.getPageData(0).then(res =>{
    //       this.curPage = res.number
    //       this.size = res.size
    //       this.data = res.content
    //       this.totalElements = res.totalElements
    //   })
    // },
    // computed:{
    //   totalPages(){
    //     return this.totalElements === 0 ? 0 :  Math.ceil(this.totalElements/this.size)
    //   }
    // },
    // methods: {
    //   deleteItem(id,index){
    //     req.delData(id).then(res =>{
    //       this.removeItem(index)
    //       this.totalElements--
    //       this.msg = "删除成功!"
    //     })
    //   },
    //   updateItem(id,index,name){
    //     let data = {'id':id,'caName':name}
    //     req.updData(data).then(res => {
    //       this.data.splice(index, 1, data)
    //       this.editId = -1
    //       this.editIndex = -1
    //       this.$refs.btn1.innerHTML = "新增"
    //       this.msg = "更新成功!"
    //     })
    //   },
    //   newItem() {
    //     if (this.editId === -1) {
    //       req.addData(this.$refs.newCategory.value).then(res => {
    //         this.data.unshift({'id': res.id, 'caName': res.caName})
    //         this.totalElements++
    //         this.msg = "添加成功!"
    //       })
    //     }else{
    //       this.updateItem(this.editId,this.editIndex,this.$refs.newCategory.value)
    //     }
    //   },
    //   editItem(id,index,name){
    //     this.editId = id
    //     this.editIndex = index
    //     this.$refs.newCategory.value = name
    //     this.$refs.btn1.innerHTML = "更新"
    //   },
    //   removeItem(index){
    //     this.data.splice(index,1)
    //   },
    //   nextPage(){
    //     req.getPageData(this.curPage + 1).then(res => {
    //       this.curPage = this.curPage + 1
    //       this.size = res.size
    //       this.data = res.content
    //       this.totalElements = res.totalElements
    //     })
    //   },
    //   previewPage(){
    //     req.getPageData(this.curPage-1).then(res => {
    //       this.curPage = this.curPage-1
    //       this.size = res.size
    //       this.data = res.content
    //       this.totalElements = res.totalElements
    //     })
    //   },
    //
    //   //关闭弹窗
    //   closeMsg(){
    //     this.msg = ''
    //   }
    // }
  }
</script>

<style scoped>

</style>
