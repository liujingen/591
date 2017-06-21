<template>
    <div class="iteminfo areainfo" id="areainfo">
        <div class="flex-warp">
            <!-- 區域和地鐵 -->
            <div class="area-fl flex-child" id="areafllistinfo">
                <ul>
                    <li><a href="javascript:;" :class="{active:id == 1}" @click="tabFun(1)">區域</a></li>
                    <li><a href="javascript:;" :class="{active:id == 4}" @click="tabFun(4)">地鐵</a></li>
                </ul>
            </div>

            <!-- 大區域/地鐵線路 -->
            <div class="area-con flex-child">
                <!-- 大區域 -->
                <div class="regioninfo region" id="arealistinfo" v-show="showregion">
                    <ul>
                        <li v-for="item in region">
                            <a href="javascript:;" :class="{active:regionId == item.id}" @click="getMinregion(item.id)">{{item.name}}</a>
                        </li>                        
                    </ul>
                </div>
                <!-- 地鐵線 -->
                <div class="subwaylineinfo subwayline mrt" id="subwaylistinfo" v-show="showsubwayline">
                    <ul>              
                        <li v-for="(item,index) in subwayline" v-if="item">
                            <a href="javascript:;" :class="{active:regionId == index}" @click="getSubway(index)">{{item}}</a>
                        </li>             
                    </ul>            
                </div>
            </div>

            <!-- 小區域和地鐵站名 -->
            <div class="area-fr flex-child" v-show="showdistricts">
                <!-- 小區域 -->
                <div id="districtItem" v-show="showminregion">
                    <div class="section" id="{$vo}">
                        <ul>              
                            <li v-for="(item, index) in minregion" v-if="item">
                                <a href="javascript:;" :class="{active:showActiveArr[index]}" @click="selectId(index)">{{item}}</a>
                            </li>              
                        </ul>
                    </div>
                </div>
                <!-- 地鐵站名 -->
                <div id="subwayItem" v-show="showminsubway">
                    <div class="mrtcoods" id="{$vo}">
                        <ul>              
                            <li v-for="(item, index) in subwayname" v-if="item">
                                <a href="javascript:;" :class="{active:showActiveArr[index]}" @click="selectId(index)">{{item}}</a>
                            </li>              
                        </ul>
                    </div>
                </div>

            </div>
        </div>         

        <div class="prefect">
            共找到<span class="count fc-org">{$totalRows}</span>間房屋&nbsp;&nbsp;&nbsp;<span class="btn btn-warning" id="filterAreaSubmit">完成</span> <span class="btn btn-link" id="resetArea">重置</span>
        </div>     
    </div>
</template>

<script>
    var area = require("../../../assets/js/area");
    var subway = require("../../../assets/js/subway");
    export default {
      name: 'hello',
      data () {
        return {
          region: area.region, //大區域
          id: 1, //區域類型id
          regionId : "", //大區域id
          minregion: "", //小區域
          subwayline: subway.subway, //地鐵線路
          subwayname: "", //地鐵站名
          showregion: true, //是否顯示大區域
          showminregion: false, //是否顯示小區域
          showsubwayline: false,//是否顯示地鐵線路
          showminsubway: false,
          showdistricts: false,
          showActiveArr: []
        }
      },
      created: function () {
      },
      methods: {
        //區域類型切換
        tabFun: function(id){
            this.showdistricts = false;
            this.id = id;
            if(id == 1){
                this.showregion =  true;
                this.showsubwayline = false;
            }
            if(id == 4){
                this.showregion =  false;
                this.showsubwayline = true;
            }            
        },
        // 獲取小區域
        getMinregion: function(id){ 
            this.regionId = id;
            this.showActiveArr = [];         
            if(id){
               this.showdistricts = true; 
               this.showminregion = true; 
               this.minregion = area.getsection(id); 
            }else{
               this.showdistricts = false;
               this.showminregion = false;  
            }
        },
        // 獲取地鐵站名
        getSubway: function(id){
            this.showdistricts = true; 
            this.showminsubway = true;
            this.subwayname = subway.getstation(id);
            console.log(this.subwayname)
        },
        // 多選方法
        selectId: function(index){
            if(!this.showActiveArr[index]){
                this.$set(this.showActiveArr,index,true)
            } else {
                this.$set(this.showActiveArr,index,false)
            }
        }
      }            
    }
</script>

