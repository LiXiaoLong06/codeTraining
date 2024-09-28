<template>
    <!-- <div>这是main</div>  -->
    <!-- <img src="@/assets/picture2.jpg" alt=""> -->
    <div class="all">
        <div class="item2" v-for="item,index in flowerData" @click="selectItem(item)" >
            <img :src="item.path" alt=""> 
            <div class="title">{{ item.name }}</div>
            <div class="info">
                <div class="price">价格 {{ item.price }}</div>
                <div class="saleNum">价格:￥ {{ item.saleNum }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
     import { ref } from 'vue';
     import { useStore } from 'vuex'
    //  const picture1 =ref(require('@/assets/picture1.jpg'))  ;

     const store = useStore() ;
  
     const flowerData = ref([
        {id:1,path:require("@/assets/picture1.jpg"),name:"花1",price:12,saleNum:23  },
        {id:2,path:require("@/assets/picture2.jpg"),name:"花2",price:11,saleNum:25 },
        {id:3,path:require("@/assets/picture3.jpg"),name:"花3",price:13,saleNum:26  },
        {id:4,path:require("@/assets/picture4.jpg"),name:"花4",price:15,saleNum:27 },
        {id:5,path:require("@/assets/picture5.jpg"),name:"花5",price:16,saleNum:22  },
        {id:6,path:require("@/assets/picture6.jpg"),name:"花6",price:16,saleNum:21 },
     ]);

     // 选择花卉并提交到 Vuex Store
        const selectItem = (item) => {
             console.log("加入")
             console.log(item)
             store.commit('addItem', item);  // 提交选中的 item
             console.log("退出")
        };


</script>

<style scoped>

* {
    margin: 0;
    padding: 0 ;
}

.all {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #fff;
    height: calc(100vh - 40px);
    overflow: scroll;
}

.item2 {
    width:49% ;
    margin-bottom: 10px;
}


img {
    width: 100% ;
    height: auto;
}

.title{
    margin-left: 15px ;
    margin-top: 10px;
}

.info {
    display: flex ;
    justify-content: space-between;
}

.price {
    margin-left: 15px ;
}


.saleNum {
    margin-right: 15px ;
}

</style>