<template>
   <div class="all2">
      <div class = "item2" v-if="itemList.length" v-for="item,index in itemList">
         <div><img :src="item.path" alt=""></div>
         <div class="name">{{ item.name }} 
            <el-button type="primary" @click="deleteItem">删除</el-button>
         </div>
         <div class="info">
            <div>价格: ￥ {{ item.price }}</div>
            <div>销量: {{ item.saleNum }}</div>
         </div>
     </div>
     <div v-else>
       <p>没有选择任何商品</p>
     </div>
   </div>

</template>

<script setup>
// 从 Vuex store 中获取 selectedItem
   import { useStore } from 'vuex'
   import { ref } from 'vue'

   import { fetchPhotos } from '@/axios/index.js'; // 导入封装的 fetchPhotos 函数

   const store = useStore() 
   const itemList =  store.getters.getSelectedItem

   const deleteItem = (index)=> {
      store.commit('deleteItem',index);
   }

   const photos = ref([]); // 定义响应式数据

   // 获取照片数据的函数，异步函数，里面的代码可以像同步一样写。异步代码可以跟同步一样
   const getPhotos = async () => {
      try {
         console.log("进入")
         const result = await fetchPhotos(); // 使用封装的接口获取数据
         photos.value = result;
         console.log( photos.value )
      } catch (error) {
         console.error('获取照片失败:', error);
      }
   };
   
   
   getPhotos() ;

  
</script>

<style scoped>

* {
   margin: 0 ;
   padding: 0 ;
}

.all2 {
   display: flex;
   flex-wrap: wrap ;
   justify-content: space-between;
   max-height: calc(100vh - 40px);
   background-color: #fff;
   overflow: scroll;
}

.item2 {
   width: 49% ;
   margin-bottom: 10px ;
}

img {
   width: 100%;
}

.btn1 {
   float: right ;
}

.name {
   margin-left: 15px ;
}


.info {
   margin-left: 15px ;
   display: flex; /* 使用 flexbox 使得子元素在同一行显示 */
   justify-content: space-between; /* 在行内分配空间 */
}


</style>