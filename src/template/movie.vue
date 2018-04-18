<template>
  <div class="main">
    <div class="warrper">
      <div class="navbar">
        <div class="navtype">
          <span style="color: red">正在热映<i class="el-icon-caret-top"></i></span>
          <span style="color: #ffffff;">即将上映</span>
          <span style="color: #ffffff;">经典影片</span>
        </div>
      </div>
      <div class="movietype">
        <div class="movietype-list">
          <div class="mainmenu">
            <span>类型：</span>
          </div>
          <div class="mainmenuu-list">
            <span class="alltotal">全部</span>
            <span>爱情</span>
            <span>喜剧</span>
            <span>动画</span>
            <span>科幻</span>
            <span>惊悚</span>
            <span>恐惧</span>
            <span>剧情</span>
            <span>犯罪</span>
            <span>悬疑</span>
            <span>动作</span>
            <span>冒险</span>
            <span>战争</span>
            <span>奇幻</span>
            <span>运动</span>
            <span>家庭</span>
            <span>古装</span>
          </div>
          <div class="list-second">
            <span>武侠</span>
            <span>西部</span>
            <span>历史</span>
            <span>传记</span>
            <span>记录</span>
          </div>
        </div>
        <div class="movietype-list">
          <div class="mainmenu">
            <span>区域：</span>
          </div>
          <div class="mainmenuu-list">
            <span class="alltotal">全部</span>
            <span>大陆</span>
            <span>美国</span>
            <span>韩国</span>
            <span>日本</span>
            <span>中国香港</span>
            <span>中国台湾</span>
            <span>泰国</span>
            <span>法国</span>
            <span>英国</span>
            <span>俄罗斯</span>
            <span>意大利</span>
            <span>西班牙</span>
            <span>德国</span>
            <span>波兰</span>
          </div>
          <div class="list-second">
            <span>澳大利亚</span>
            <span>伊朗</span>
            <span>土耳其</span>
            <span>其他</span>
          </div>
        </div>
        <div style="border: 0;" class="movietype-list">
          <div class="mainmenu">
            <span>年代：</span>
          </div>
          <div class="mainmenuu-list">
            <span class="alltotal">全部</span>
            <span>2018以后</span>
            <span>2018</span>
            <span>2017</span>
            <span>2016</span>
            <span>2015</span>
            <span>2014</span>
            <span>2013</span>
            <span>2012</span>
            <span>2011</span>
            <span>2000-2010</span>
            <span>90年代</span>
            <span>80年代</span>
            <span>70年代</span>
          </div>
          <div class="list-second">
            <span>60年代</span>
            <span>50年代</span>
            <span>更早</span>
          </div>
        </div>
      </div>
      <div class="btnradio">
        <el-radio v-model="radio" label="1">按热门排序</el-radio>
        <el-radio v-model="radio" label="2">按时间排序</el-radio>
        <el-radio v-model="radio" label="3">按评价排序</el-radio>
      </div>
      <div class="movielist">
        <div class="filebox-text">
          <img src="../../static/img/1.jpg" alt="">
          <p>狂暴巨兽</p>
          <i>9.0</i>
        </div>
        <div class="filebox-text">
          <img src="../../static/img/2.jpg" alt="">
          <p>西北风云</p>
          <i>9.1</i>
        </div>
        <div class="filebox-text">
            <img src="../../static/img/3.jpg" alt="">
            <p>头号玩家</p>
          <i>8.9</i>
          </div>
        <div class="filebox-text">
            <img src="../../static/img/4.jpg" alt="">
            <p>寻找罗麦</p>
          <i>9.1</i>
          </div>
        <div class="filebox-text">
            <img src="../../static/img/5.jpg" alt="">
            <p>起跑线</p>
          <i>8.8</i>
          </div>
        <div class="filebox-text">
          <img src="../../static/img/6.jpg" alt="">
          <p>湮灭</p>
          <i>9.0</i>
        </div>
      </div>
      <div class="movielist">
        <div class="filebox-text">
          <img src="../../static/img/7.jpg" alt="">
          <p>后来的我们</p>
          <i>9.0</i>
        </div>
        <div class="filebox-text">
          <img src="../../static/img/8.png" alt="">
          <p>暴烈无声</p>
          <i>9.1</i>
        </div>
        <div class="filebox-text">
            <img src="../../static/img/1.jpg" alt="">
            <p>狂暴巨兽</p>
          <i>9.0</i>
          </div>
        <div class="filebox-text">
            <img src="../../static/img/2.jpg" alt="">
            <p>西北风云</p>
          <i>9.1</i>
          </div>
        <div class="filebox-text">
            <img src="../../static/img/3.jpg" alt="">
            <p>头号玩家</p>
          <i>8.9</i>
          </div>
        <div class="filebox-text">
          <img src="../../static/img/4.jpg" alt="">
          <p>寻找罗麦</p>
          <i>9.1</i>
        </div>
      </div>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<style>
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
    margin-left: 40%;
  }
</style>
<script>

  export default{
    data(){
      return{
        radio: '1'
      }
    },
    mounted(){
      let self=this;
      $(".filebox-text").click(function(){
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

