<template>
  <div class="main">
    <div class="warrper">
      <div class="mainbgimg"></div>
      <div class="file-box">
        <div class="filebox-left">
          <h3>正在热映（52部）</h3>
          <div class="filebox-left-top">
            <div class="filebox-text">
              <img src="../../static/img/1.jpg" alt="">
              <p>购票</p>
            </div>
            <div class="filebox-text">
                <img src="../../static/img/2.jpg" alt="">
                <p>购票</p>
              </div>
            <div class="filebox-text">
                <img src="../../static/img/3.jpg" alt="">
                <p>购票</p>
              </div>
            <div class="filebox-text">
              <img src="../../static/img/4.jpg" alt="">
              <p>购票</p>
            </div>
          </div>
          <div class="filebox-left-bottom">
            <div class="filebox-text">
              <img src="../../static/img/5.jpg" alt="">
              <p>购票</p>
            </div>
            <div class="filebox-text">
                <img src="../../static/img/6.jpg" alt="">
                <p>购票</p>
              </div>
            <div class="filebox-text">
                <img src="../../static/img/7.jpg" alt="">
                <p>购票</p>
              </div>
            <div class="filebox-text">
              <img src="../../static/img/8.png" alt="">
              <p>购票</p>
            </div>
          </div>
        </div>
        <div class="filebox-right">
          <h3>今日票房</h3>
          <div class="filebox-right-top">
            <div class="filebox-right-bgimg">
              <div class="right-top-one">
                <h4>狂暴巨兽</h4>
                <p style="color: red;">629.40万</p>
              </div>
            </div>
          </div>
          <div class="right-list">
              <i style="color: red;">2</i><p>头号玩家</p><h6>220.12万</h6>
          </div>
        <div class="right-list">
              <i style="color: red;">3</i><p>湮灭</p><h6>96.70万</h6>
          </div>
        <div class="right-list">
              <i>4</i><p>起跑线</p><h6>69.88万</h6>
          </div>
        <div class="right-list">
              <i>5</i><p>厉害了我的国</p><h6>65.12万</h6>
          </div>
        <div class="right-list">
              <i>6</i><p>爆裂无声</p><h6>49.95万</h6>
          </div>
        <div class="right-list">
              <i>8</i><p>寻找罗麦</p><h6>28.69万</h6>
          </div>
        <div class="right-list">
              <i>9</i><p>红海行动</p><h6>28.33万</h6>
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

