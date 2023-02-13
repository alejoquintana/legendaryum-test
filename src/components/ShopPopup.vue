<template>
<div class="container bg-main">
    <div class="nav">
        <div class="brand-logo">LOGO</div>
        <div class="close-popup">
            <i class="pi pi-times icon"></i>
        </div>
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
        <div class="recomendados">
            <h3 class="m-0">Recomendados</h3>
            <div class="color-line"></div>
            <div class="images">
                <div class="img-box" v-for="recomendado,i in recomendados" :key="i">
                    <img :src="recomendado" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="shop-button">
        <button class="buy-button btn */bg-green-white-text/*">
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
        recomendados(){
            return this.$store.state.recomendados
        }
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
    overflow: hidden;
    box-shadow: 0 0 50px 10px #000;
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
        padding: 0 12px 0 0;
        aspect-ratio: 1;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon{
            font-size: 22px !important;
            background: #444;
            color: #ff56e8;
            padding: 10px;
            border-radius: 12px;
            transition:all 500ms;
        }
        .icon:hover{
            box-shadow: 0 0px 20px 0 #ff56e8;
        }
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
        font-size: 42px;
        text-align: end;
    }
    .size-icon{
        width: 50px;
        height: 50px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        font-weight: bold;
        color: #fff;
        //border: 1px solid #fff;
        transition: all 250ms;
        cursor: pointer;
        border-radius: 6px;
        background: #444;
    }
    .size-icon-selected{
        color: #000;
        //border: 1px solid #fff;
        background: #fff;
    }
}
.buy-button{
    background: none;
    color: #ff56e8;
    transition:all 500ms;
    border: 1px solid #ff56e888;
}
.buy-button:hover{
    box-shadow: 0 0px 20px 0 #ff56e8;
}
.recomendados{
.images{
    display: flex;
    justify-content: space-between;
    .img-box:hover{
        background: #ff56e888;
        cursor: pointer;
    }
    .img-box{
        transition: all 500ms;
        aspect-ratio: 1;
        width: 24%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #444;
        border-radius: 12px;
        img{
            width:60%;
        }
    }
}
}
</style>