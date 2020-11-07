<template>
    <div class="header-box">
        <div class="header-score">
            <div class="store-score">
            <div class="num">4.8</div>
            <div>商家评分</div>
        </div>
        <div class="score">
            <div class="taste">
                口味
                <div>
                   <Star :num="5.0"></Star> 
                </div>
                5.0
            </div>
            <div class="package">
                包装
                <div>
                    <Star :num="4.5"></Star>
                </div>
                4.5
            </div>
        </div>
        <div class="delivery-score">
            <div class="num">4.8</div>
            <div>配送评分</div>
        </div>

        </div>

        <div class="body-box">
            <div class="bubble">
                <div class="list">全部  30</div>
                <div class="list">好评  28</div>
                <div class="list">差评  2</div>
                <div class="list">菜品好  10</div>
                <div class="list">分量足  3</div>
                <div class="list">包装好  3</div>
                <div class="list">味儿好  3</div>
            </div>
            <div class="evaluation">

            </div>
        </div>
    </div>
</template>

<script>
import Star from '@/components/Star'
    export default {
        components:{
            Star
        }
    }
</script>

<style lang="scss" scoped>
    .header-score{
        display: flex;
        padding: 0.3rem;
        .store-score,.delivery-score{
            width: 1.86rem;
            text-align: center;
            font-size: 0.28rem;
            .num{
                font-size: 0.54rem;
                font-weight: bold;
                line-height: 0.54rem;
            }
        }
        .store-score{
            .num{
                color: #ffb000;
            }
        }
        .delivery-score{
            border-left: 2px solid rgb(207, 207, 207);
            .num{
                color: #999;
            }
        }
        .score{
            flex: 1;
        }
        .taste,.package{
            display: flex;
        }
        
    }
    .bubble{
        display: flex; 
        flex-wrap: wrap;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
        .list{
            margin-bottom:0.1rem;
            border: 1px solid #666;
            border-radius: 3rem;
            font-size: 14px;
            color: #666;
            margin-right: 5px;
            padding: 0 0.1rem;
        }
    }
</style>