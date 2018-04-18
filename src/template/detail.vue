<template>
  <div class="detailmain">
    <div class="warrpered">
      <div class="listmainbgimg">
        <img src="../../static/img/1.jpg" alt="">
        <div class="pagedetail">
          <h1>狂暴巨兽</h1>
          <h4>Rampage</h4>
          <span>动作,冒险,科幻</span>
          <span>美国 / 108分钟</span>
          <span>2018-04-13大陆上映</span>
          <div class="menu">
            <el-button class="menubtn"><i class="el-icon-mobile-phone"></i>&nbsp;想看</el-button>
            <el-button class="menubtn"><i class="el-icon-star-on"></i>&nbsp;评分</el-button>
          </div>
          <div class="menu">
            <el-button class="pay">特惠购票</el-button>
          </div>
        </div>
        <div class="moviedata">
          <span>用户评分</span>
          <p>9.0</p>
          <span>累计票房</span>
          <p>3.69亿</p>
        </div>
      </div>
      <div class="alldet">
        <div class="actordet">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">介绍</el-menu-item>
              <el-menu-item index="2">演职人员</el-menu-item>
              <el-menu-item index="3" disabled>奖项</el-menu-item>
              <el-menu-item index="4">图集</el-menu-item>
            </el-menu>
          <p class="alldet-title">&nbsp;剧情简介</p>
          <p class="alldet-content">灵长类动物学家（道恩·强森 饰）一直与人类保持距离，却跟极为聪明的银背大猩猩乔治有着深厚的感情。但是一次基因实验出错， 让这只温驯的大猩猩变成狂怒难驯的庞然巨兽。更可怕的是, 其他动物也发生了同样基因异变。他必须阻止这场全球性的灾难，同时要拯救他的好友乔治。</p>
          <p class="alldet-title">&nbsp;演职人员</p>
          <div class="filebox-left-top">
            <div class="alldet-text">
              <img src="../../static/img/act1.jpg" alt="">
              <p>布拉德·佩顿</p>
            </div>
            <div class="alldet-text">
              <img src="../../static/img/act2.jpg" alt="">
              <p>道恩·强森</p>
            </div>
            <div class="alldet-text">
              <img src="../../static/img/act3.jpg" alt="">
              <p>娜奥米·哈里斯</p>
            </div>
            <div class="alldet-text">
              <img src="../../static/img/act4.jpg" alt="">
              <p>杰弗里·迪恩·摩根</p>
            </div>
            <div class="alldet-text">
              <img src="../../static/img/act5.jpg" alt="">
              <p>玛琳·阿克曼</p>
            </div>
          </div>
          <p class="alldet-title">&nbsp;图集</p>
          <div class="detpic">
            <div class="img1">
              <img src="../../static/img/det1.jpg" alt="">
            </div>
            <div class="img1">
              <img src="../../static/img/det2.jpg" alt="">
            </div>
          <div class="img1">
              <img src="../../static/img/det3.jpg" alt="">
            </div>
          <div class="img1">
              <img src="../../static/img/det4.jpg" alt="">
            </div>
          <div class="img1">
              <img src="../../static/img/det5.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="detail-right">
          <p class="detail-title">&nbsp;相关资讯</p>
          <div class="detail-right-bgimg">
            <div class="detail-one">
              <h4>斯皮尔伯格导演作品总票房破628亿，中国观众帮了不少忙</h4>
            </div>
          </div>
          <div class="detail-right-bgimg2">
            <div class="detail-one">
              <h4>《狂暴巨兽》首周末票房夺冠，斩获3.47亿，强森巨猩互动圈粉</h4>
            </div>
          </div>
          <div class="detail-right-bgimg3">
            <div class="detail-one">
              <h4>强森国内票房吸金80亿人民币，拿过福布斯全球男演员财富榜冠军</h4>
            </div>
          </div>
          <p class="detail-title" style="margin-top: 60px">&nbsp;相关电影</p>
          <div class="detaillist">
            <div class="filebox-text">
              <img src="../../static/img/zlj.jpg" alt="">
              <p>侏罗纪世界2</p>
              <i>9.0</i>
            </div>
            <div class="filebox-text">
              <img src="../../static/img/ydmg.jpg" alt="">
              <p>移动迷宫3</p>
              <i>9.1</i>
            </div>
            <div class="filebox-text">
              <img src="../../static/img/tkjy.jpg" alt="">
              <p>太空救援</p>
              <i>8.9</i>
            </div>
          </div>
          <div class="detaillist">
            <div class="filebox-text">
              <img src="../../static/img/gsl.jpg" alt="">
              <p>哥斯拉</p>
              <i>9.0</i>
            </div>
            <div class="filebox-text">
              <img src="../../static/img/xzj.jpg" alt="">
              <p>X战警</p>
              <i>9.1</i>
            </div>
            <div class="filebox-text">
              <img src="../../static/img/jg.jpg" alt="">
              <p>哥斯拉大战金刚</p>
              <i>8.9</i>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style>
  .menubtn{
    opacity: 0.5;
    color: #000000;
    font-size: 18px;
    width: 140px;
  }
  .pay{
    background-color: rgb(223,45,45)!important;
    border: 0;
    width: 100%;
    height: 44px;
    font-size: 18px;
    color: #ffffff;
  }
   .filebox-text{
     border:0;
   }
  .filebox-text p{
    color: #000000;
    font-size: 18px;
  }
  .filebox-text i{
    text-align: center;
    font-size: 18px;
    color: rgb(254,163,102);
    margin-left: 30%;
  }
</style>
<script>

  export default{
    data(){
      return{
        activeIndex: '1',
      }
    },
    mounted(){

    },
    methods:{
      router(){
        this.$router.push("/detail")
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

