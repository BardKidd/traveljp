<template>
  <el-config-provider :locale="zhTW">
    <section class="flex flex-row container">
      <div class="w-1/6 h-full min-h-screen bg-primary-retouch2 shadow-xl">
        <SideBar></SideBar>
      </div>
      <div class="w-5/6">
        <NavBar></NavBar>

        <section class="p-14">
          <router-view></router-view>
        </section>
      </div>
    </section>
  </el-config-provider>
</template>

<script>
import SideBar from "./L-Sidebar.vue";
import NavBar from "./L-Navbar.vue";
import zhTW from "element-plus/lib/locale/lang/zh-tw";

export default {
  name: "BackendAdmin",
  setup() {
    return {
      zhTW,
    };
  },
  components: {
    SideBar,
    NavBar,
  },
};
</script>
