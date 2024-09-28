<template>
    <div class="navBar">
        <div v-for="item in navBarArr" :key="item.id"  @click="setActive(item.id),setNamePath(item.name)" :class="{ item,active: isActive(item.id)}" > {{item.text}} </div>
    </div>

</template>

<script setup>
    import router from '@/router';
    import { ref } from 'vue';
    
    const navBarArr = ref([
        {id:0,name:"main",text:"首页"},
        {id:1,name:"shopCar",text:"购物车"},
    ])

    const activeId = ref(0);

    const namePath = ref("main")


    // 这里直接采用的是 setActive 用于设置激活ID
    function setActive(id){
        activeId.value = id ; 
    }

    function isActive(id){
        return id === activeId.value ;
    }

    function setNamePath(name){
        namePath.value = name ;
        router.push(namePath.value);
    }

    router.push(namePath.value);
    console.log("完美结束");
</script>

<style>

/* 去除初始padding和margin */
* {
    padding: 0 ;
    margin: 0 ;
}


/* 对navBar布局 */
.navBar {
    /* 位置属性 */
    position: fixed ;
    left: 0;
    right: 0; 
    bottom: 0 ;
    /* 大小属性 */
    height: 40px ;
    /* 位子属性 */
    line-height: 40px ;
    text-align: center;
    /* 背景属性 */
    background-color: #e1e6ed;
}
.item{
    /* 位置属性  */
    float: left;
    /* 大小属性 */
    height: 100%;
    width: 50%;
}

.active {
    /* 字体*/
    color: black;
    /* 背景 */
    background-color: pink;

}

</style>