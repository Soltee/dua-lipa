<template>
  <div id="app">
    <div v-if="!load" class="fixed-preload bg-black z-20 flex justify-center items-center">
      <Loader></Loader>
    </div>

    <div>
      <Nav></Nav>
      <router-view/>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
  import Loader from './partials/Loader.vue';
  import Nav from './components/Nav.vue';
  import Foot from './components/Foot.vue';
  export default{
    data(){
      return {
        load: false
      }
    },
    components : {
     Loader, Nav, Foot
    },
    mounted(){
      this.hidePreload();
    },
    methods:{
      hidePreload(){

        window.addEventListener('load', ()=>{
          this.load = true;
        });

      }
    }
  }
</script>
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  /*Loading*/

  .fixed-preload{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
  }
  .outer{
    position: relative;
    overflow: hidden;
  }
  .inner, .inner2, .inner3, .inner4, .inner5, .inner6{
    position: absolute;
    bottom: 0;
    transition: translateY 1s ease-in-out ;
  }
  .inner{
    animation: fill 3s ease-in-out infinite;  
  }
  .inner2{
    animation: fill 3s 0.4s ease-in-out infinite;
  }
  .inner3{
    animation: fill 3s 0.8s ease-in-out infinite;
  }

  .inner4{
    animation: fill 3s 1.2s ease-in-out infinite;  
  }

  .inner5{
    animation: fill 3s 1.6s ease-in-out infinite;  
  }


  .inner6{
    animation: fill 3s 2.0s ease-in-out infinite;  
  }

    @keyframes fill {
    0%{
      transform: translateY(100%);
    } 50%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(100%);
    }
  }

</style>
