<template>
  <div>
    <div class="video-fixed">
        <video autoplay muted loop id="myVideo">
            <source src="../assets/Fashion_shop_Legendaryum.mp4" type="video/mp4">
        </video>
    </div>
    <div class="layout-container">
    <div class="layout">
        <div id="iframe">
            <img src="../assets/shirt_2.png" alt="">
            <div class="false-input">
                <div class="bar"></div>
                <div class="dot"></div>
            </div>
        </div>
        <ShopPopup id="design" :product="product"/>
    </div>
  </div>
  </div>
</template>

<script>
import ShopPopup from "./ShopPopup";
export default {
    components:{ShopPopup},
    name: 'HomeBase',
    data(){return{
        product:{
            name:"Remera blanca manga corta",
            price:2500,
            sizes:["S","L","XL"],
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien libero, laoreet ut purus a, varius semper ligula. Duis non ligula ut arcu suscipit scelerisque non iaculis enim. Sed eget augue tincidunt, imperdiet libero sed, euismod mi. Aliquam sed nisi eget mauris pellentesque dictum. Vestibulum ante ipsum primis in faucibus.",
        }
    }}
}
</script>

<style lang="scss" scoped>
.video-fixed{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 0;
}
video{
    min-width: 2140px;
}
.layout-container{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000bb;
.layout{
    display: flex;
    align-items: center;
    //border: 1px solid #fff;
    border-radius: 24px;
    height: 80vh;
    width: 80vw;
    //overflow: hidden;
    #design{
        border-radius: 24px;
        //background: #fff;
    }
    #iframe{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        img{
            width: 80%;
        }
        .false-input{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            .bar{
                background: #fff;
                height: 2px;
                width: 20vw;
            }
            .dot{
                width: 15px;
                height: 15px;
                border-radius: 15px;
                background: #fff;
                position: absolute;
                //top: 0;
                left: 50%;
            }
        }
    }
    #iframe,#design{
        width: 50%;
        height: 80vh;
    }
}
}
</style>
