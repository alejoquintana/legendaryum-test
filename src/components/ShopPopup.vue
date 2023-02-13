<template>
<div class="container bg-blue">
    <div class="nav">
        <div class="brand-logo">LOGO</div>
        <div class="close-popup"><svg style="font-size:10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320
        "><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></div>
    </div>
    <div class="info">
        <h1>{{product.name}}</h1>
        <div class="d-flex">
            <div class="sizes w-50 d-flex">
                <div class="size-icon" :class="{'size-icon-selected':selectedSize == size}" v-for="size in product.sizes" :key="size" @click="selectSize(size)">
                    {{size}}
                </div>
            </div>
            <div class="price w-50">$ {{product.price}}</div>
        </div>
        <div class="h-divider"></div>
        <p>{{product.description}}</p>
    </div>
    <div class="shop-button">
        <button class="btn bg-green white-text">
            COMPRAR
        </button>
    </div>
</div>
</template>

<script>
export default {
    props:{
        product:Object
    },
    data(){return{
        selectedSize:"S"
    }},
    computed: {
        
    },
    methods: {
        selectSize(size){
            this.selectedSize = size
        }
    },
    mounted(){
        
    }
}
</script>

<style lang='scss' scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.nav{
    box-shadow: 0px 0px 20px 0px #000000cc;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .brand-logo{
        padding: 0 20px;
        font-weight: bold;
        font-size: 32px;
    }
    .close-popup{
        width: 60px;
    }
}
.shop-button{
    box-shadow: 0px 0px 20px 0px #000000cc;
    padding: 0px 50px;
    //width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: end;
}
.info{
    padding: 20px 50px;
    .price{
        font-size: 32px;
        text-align: end;
    }
    .size-icon{
        width: 30px;
        height: 30px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        font-weight: bold;
        color: #fff;
        border: 1px solid #fff;
        transition: all 250ms;
        cursor: pointer;
    }
    .size-icon-selected{
        color: #00337C;
        border: 1px solid #fff;
        background: #fff;
    }
}
</style>