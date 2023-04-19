<template>
  <div>
      <button @click="showModal = true">添加人员信息</button>
      <AddInfo1 v-if="showModal" @close="showModal = false" />
    </div>
    <div id="app">
    <router-view></router-view>
  </div>
  </template>
  
  <script>
  import AddInfo1 from './components/AddInfo1.vue'; // 引入弹窗组件
  export default {
    components: {
      AddInfo1,
    },
    name:'APP',
    data() {
      return {
        showModal: false,
      };
    },
  };
  </script>
