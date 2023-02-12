<template>
  <div id="home" >
    holle
  </div>
</template>
<script>
export default {
  name: "home",
  computed:{

  },
  data() {
    return {
    
    };
  },
  methods: {
  },
  components: {
      msg(){
        return 1111
      }
},
  created() {},
};
</script>
<style>
#home {
  height: 100%;
}
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
