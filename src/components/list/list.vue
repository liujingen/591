<template>
    <div id="newlistContent" v-scroll="loadMore">
        <!-- 头部 -->
        <div id="menu">
            <div id="menuinfo">
                <div class="menunav" id="menunav">
                    <span id="area" class="regionSh sectionSh mrtSh" google-data-stat="觸屏版_條件篩選_區域" @click="tabs('area')">
                        <span class="parentup">區域</span><i class="icon-sort-down"></i>
                    </span>
                    <i class="line"></i>

                    <span id="price" class="rentpriceSh" google-data-stat="觸屏版_條件篩選_租金" @click="tabs('rentprice')">
                        <span class="parentup">租金</span><i class="icon-sort-down"></i>
                    </span>
                    <i class="line"></i>

                    <span id="purpose" class="purposeSh kindSh shop_kindSh parking_typeSh" google-data-stat="觸屏版_條件篩選_用途"><span class="parentup">用途</span><i class="icon-sort-down"></i></span>
                    <i class="line"></i>
                    <span id="more" google-data-stat="觸屏版_條件篩選_更多"><span class="parentup">更多</span><i class="icon-sort-down"></i></span>
                </div>
                <div id="delSelect" class="c-select issearch undis">
                    <span>您正在找</span><em></em>
                    <button class="research" id="research">刪除條件</button>
                </div>       
                <div id="dyBox" class="c-select issearch undis">
                    <span>立即訂閱該條件,第一時間獲取最新資訊</span>
                    <a href="__BASE__/user/subscribeform?t=mobile" google-data-stat="觸屏版_列表頁_立即訂閱" id="dyLink" style="text-align: center" class="research">立即訂閱</a>
                    <input type="hidden" id="hid_base" value="__BASE__/user/subscribeform?ismail=1&type={$type}&t=mobile"/>
                </div>        
            </div>
        </div>
        <!-- 筛选切换 -->
        <div class="optionlist" v-show="optionlist">
            <area-item v-show="modelName == 'area'"></area-item>
            <rentprice-item v-show="modelName == 'rentprice'" v-on:listenToChildEvent="getChildParam"></rentprice-item>
        </div> 

        <!-- 内容区域 -->
        <div class="article-list">
            <router-link :to="{ name: 'detail', params: { houseId: item.id }}" :key="item.id" class="clearfix" v-for="item in newslist">
                <div class="img-wrap">
                    <img class="thum-img lazy" :src="item.detail_img_html.cover_src" alt="测试租盘广告"/>
                    <div class="new_vip_bg" v-if="item.isvip == '1'"></div>
                    <div class="new_vip_txt" v-if="item.isvip == '1'">VIP</div>                
                </div>

                <dl>
                    <dt>{{item.title}}</dt>
                    <dd style="margin-top:15px;">
                    3房2廳&nbsp;&nbsp;111呎
                    <span>
                        <b>1,223</b><small>元/月</small>
                    </span>
                    </dd>
                    <dd style="margin-top:12px;">
                    港島-鰂魚涌&nbsp;&nbsp;123123123
                    </dd>                
                </dl>
            </router-link>            
        </div>
    </div>
</template>

<script>
    import areaItem from './section/area.vue'
    import rentpriceItem from './section/rentprice.vue'

    var api = require("../../assets/js/api");
        // $.ajax({
        //         type: "GET",
        //         url: api.api.rent+"&type=1&p=1&searchtype=1",
        //         success : function(data){
        //             console.log(data)
        //         }
        //  }) 

    export default {
        name: "list",
        data() {
            return {
                optionlist: false,
                modelName: "",
                newslist:[],
                page: 1,
                canLoadmore: true
            }
        },
        components: {
            areaItem,
            rentpriceItem
        },
        created: function(){
            this.getData();
        },
        methods: {
            tabs: function(modelName){
                if(this.modelName == modelName){
                   this.optionlist = false; 
                   this.modelName = ""; 
                }else{
                    this.optionlist = true;
                    this.modelName = modelName
                }               
            },
            loadMore: function(){
                let newAry = [];
                if (!this.canLoadmore) return;
                this.canLoadmore = false;
                this.page++;
                this.getData();
            },
            getData: function(){
                var _this = this;
                // this.$ajax.get(api.api.rent+"&type=1&p="+_this.page+"&searchtype=1").then(function(res){
                //     for(var i = 0; i < res.data.list.length; i++) {
                //       _this.newslist.push(res.data.list[i]);
                //       _this.canLoadmore = true;
                //     }
                // });
                $.ajax({
                    type: "GET",
                    url: api.api.rent+"&type=1&p="+_this.page+"&searchtype=1",
                    success : function(data){
                        for(var i = 0; i < data.items.length; i++) {
                          _this.newslist.push(data.items[i]);
                          _this.canLoadmore = true;
                        }
                    }
                })                 
            },
            getChildParam: function(data){
                console.log(data)
            }            
        },
        directives: {
          scroll: {
            bind: function (el, binding){
              window.addEventListener('scroll', ()=> {
                if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
                  let fnc = binding.value;   
                      fnc();
                }
              })
            }
          }
        }         
    }
</script>
<style>
  @import "./css/filter.css"; 
  @import "./css/lists.css";
</style>
