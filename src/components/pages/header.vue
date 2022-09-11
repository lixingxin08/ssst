<template>
  <div class="haeds">
    <div class="content flex_a">
      <a-dropdown placement="bottomCenter">
        <a
          class="ant-dropdown-link ismenuchild"
          @click="(e) => e.preventDefault()"
        >
          Hover me
        </a>
        <a-menu slot="overlay" class="ismenucontent">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>

      <a-dropdown placement="bottomCenter">
        <a
          class="ant-dropdown-link ismenuchild"
          @click="(e) => e.preventDefault()"
        >
          Hover me
        </a>
        <a-menu slot="overlay" class="ismenucontent">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.haeds {
  height: 80px;
  line-height: 80px;
  font-size: 18px;
  font-weight: normal;
}
.ismenuchild {
  height: 76px;
  display: block;
  color: #000;
}
.ismenucontent {
  border-top: 5px solid red;
}
</style>
