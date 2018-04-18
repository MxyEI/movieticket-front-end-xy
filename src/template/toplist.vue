<template>
  <div class="main">
    <div class="warrper">
      <div class="navbar">
        <div class="toplistnav">
          <span style="color: red">热映口碑榜<i class="el-icon-caret-top"></i></span>
          <span style="color: #ffffff;">最受期待榜</span>
          <span style="color: #ffffff;">国内票房榜</span>
          <span style="color: #ffffff;">北美票房榜</span>
          <span style="color: #ffffff;">TOP100榜</span>
        </div>
      </div>
      <div class="content-box">
        <div class="notice">
          <p class="notice-date">2018-04-17<span>已更新</span></p>
          <p>榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。</p>
        </div>
        <div class="content-box-item">
          <div class="box-item-list">
            <div class="icon-box"></div>
            <img src="../../static/img/1.jpg" alt="">
            <div class="imgdetail">
              <h1>狂暴巨兽</h1>
              <span class="topdate">上映时间：2018-03-02</span>
            </div>
            <i class="score">9.6</i>
            <hr>
          </div>
        <div class="box-item-list">
            <div class="icon-box2"><i>2</i></div>
            <img src="../../static/img/2.jpg" alt="">
            <div class="imgdetail">
              <h1>西北风云</h1>
              <span class="topdate">上映时间：2018-03-30</span>
            </div>
            <i class="score">9.1</i>
            <hr>
          </div>
        <div class="box-item-list">
            <div class="icon-box2"><i>3</i></div>
            <img src="../../static/img/3.jpg" alt="">
            <div class="imgdetail">
              <h1>头号玩家</h1>
              <span class="topdate">上映时间：2018-03-02</span>
            </div>
            <i class="score">9.0</i>
            <hr>
          </div>
         <div class="box-item-list">
            <div class="icon-box3"><i>4</i></div>
            <img src="../../static/img/4.jpg" alt="">
            <div class="imgdetail">
              <h1>寻找罗麦</h1>
              <span class="topdate">上映时间：2018-03-02</span>
            </div>
            <i class="score">8.9</i>
            <hr>
          </div>
         <div class="box-item-list">
            <div class="icon-box3"><i>5</i></div>
            <img src="../../static/img/5.jpg" alt="">
            <div class="imgdetail">
              <h1>起跑线</h1>
              <span class="topdate">上映时间：2018-03-02</span>
            </div>
            <i class="score">8.5</i>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default{
    data(){
      return{

      }
    },
    mounted(){
      let self=this;
      $(".box-item-list img").click(function(){
        self.router()
      })
    },
    methods:{
      router(){
        this.$router.push("/detail")
      }
    }
  }
</script>
