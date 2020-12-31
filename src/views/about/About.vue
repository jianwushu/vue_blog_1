<template>
  <div  class="m-container-small m-padded-tb-big">
    <div class="ui container">

      <div class="ui stackable grid">
        <div class="eleven wide column">
          <div class="ui segment">
            <img src="https://pic.ilvyu.cn/2019/11/13/929631bc86c3d.png" alt="" class="ui rounded image">
          </div>
        </div>
        <div class="five wide column">
          <div class="ui top attached segment">
            <div class="ui header center aligned">关于我</div>
          </div>
          <div class="ui attached segment">
            <p class="m-text">开发测试中</p>
            <p class="m-text">热爱编程，喜欢折腾，正在探索高效学习编程技术的方法...</p>
          </div>
          <div class="ui attached segment">
            <div class="ui orange basic left pointing label">编程</div>
            <div class="ui orange basic left pointing label">写作</div>
            <div class="ui orange basic left pointing label">思考</div>
            <div class="ui orange basic left pointing label">运动</div>
          </div>
          <div class="ui attached segment">
            <div class="ui teal basic left pointing label m-margin-tb-tiny">Java</div>
            <div class="ui teal basic left pointing label m-margin-tb-tiny">JavaScript</div>
            <div class="ui teal basic left pointing label m-margin-tb-tiny">Node</div>
            <div class="ui teal basic left pointing label m-margin-tb-tiny">React</div>
            <div class="ui teal basic left pointing label m-margin-tb-tiny">RN</div>
            <div class="ui teal basic left pointing label m-margin-tb-tiny">MYSQL</div>
            <div class="ui teal basic left pointing label m-margin-tb-tiny">...</div>
          </div>
          <div class="ui bottom attached segment center aligned">
            <a href="#" class="ui circular icon button"><i class="github icon"></i></a>
            <a href="#" class="ui wechat circular icon button"><i class="weixin icon"></i></a>
            <a href="#" class="ui qq circular icon button" data-content="865729312" data-position="bottom center"><i class="qq icon"></i></a>
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
  export default {
    name: "About"
  }
</script>

<style scoped>

</style>
