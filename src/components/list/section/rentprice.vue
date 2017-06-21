<template>
    <div class="iteminfo rentprice" id="priceinfo">
        <ul> 
            <li><a href="javascript:;" data-bind="0">不限</a></li>
            <li><a href="javascript:;" data-bind="1" @click="getId(1)">5000元以下</a></li>
            <li><a href="javascript:;" data-bind="2" @click="getId(2)">5000-10000元</a></li>
            <li><a href="javascript:;" data-bind="3" @click="getId(3)">10000-15000元</a></li>
            <li><a href="javascript:;" data-bind="4" @click="getId(4)">15000-20000元</a></li>
            <li><a href="javascript:;" data-bind="5" @click="getId(5)">20000-40000元</a></li>
            <li><a href="javascript:;" data-bind="6" @click="getId(6)">40000元以上</a></li>
            <li>
                <div class="price-wrap">
                    <input type="number" class="form-control sh-text priceS" id="rentpriceTxtS" datalimit="num" value="">
                            ~
                    <input type="number" class="form-control sh-text priceE" id="rentpriceTxtE" datalimit="num" value="">&nbsp;元        
                    <span class="btn btn-warning btn-sm text-search-btn" google-data-stat="觸屏版_條件篩選_租金確定">確定</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        created: function () {
        },
        methods: {
            getId:function(id){
                this.$emit("listenToChildEvent",id)
            }
        }            
    }
</script>

