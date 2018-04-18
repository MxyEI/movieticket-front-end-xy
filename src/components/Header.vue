<template>
  <div>
      <div class="main_header">
        <img class="logobg" src="../../static/img/homelogo.png" alt="">
        <div class="navlist">
          <ul>
            <li class="active" @click="home">首页</li>
            <li @click="movie">电影</li>
            <li @click="toplist">榜单</li>
          </ul>
        </div>
        <div class="search">
          <el-input placeholder="找影视剧、影人"></el-input><i class="el-icon-search"></i>
        </div>
        <div class="header-icon"></div>
      </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    mounted(){
      $("li").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
      });
    },
    name: 'header',
    methods: {
      home(){
        this.$router.push('/')
      },
      movie(){
        this.$router.push('/movie')
      },
      toplist(){
        this.$router.push('/toplist')
      }
    }
  }
</script>
