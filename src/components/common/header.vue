<template>
    <div id="memberHead">
          <a class="back fl" @click="$router.go(-1)"><i class="icon-angle-left"></i></a>
          <div class="cen">新盤追蹤</div>                                 
    </div>  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #memberHead {
        height: 44px;
        line-height: 44px;
        background-color:#FF6600;
        color:#fff;
        font-size: 16px;
        text-align:center;
        position: relative;
    }
    #memberHead .fl,#memberHead .fr {
        width: 44px;
        height: 44px;
        position:relative;
        z-index: 99;
    }
    #memberHead .back {
        color:#fff;
    }
    #memberHead .cen {
        position: absolute;
        width: 100%;
    }
    #memberHead a {
        color: #fff;
        font-size: 14px;
        position: relative;
        z-index: 99;
    }
    #memberHead .fr-a {
        float: right;
        padding-right:5px; 
    }

    #memberHead .fl {
        font-size: 24px;
    }
    #memberHead .fr {
        font-size:20px;

    }
</style>
