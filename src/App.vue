<template>
    <div id="content">
      <div id="header">
          <cm-header></cm-header>
      </div>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
      <div id="footer">
          <cm-footer></cm-footer>
      </div>
    </div>    
</template>

<script>
    import cmHeader from './components/common/header.vue'
    import cmFooter from './components/common/footer.vue'
    export default {
      name: 'app',
      components: {
        cmHeader,
        cmFooter
      }
    }
</script> 

<style>
  /*bootstrap*/
  @import "./assets/css/bt.h5.min.css";
  /*将公用的字体样式在此导入*/
  @import "./assets/css/font-awesome.css"; 
  /*将公用的样式统一在此导入*/    
  @import "./assets/css/mobilereset.css";

</style>
