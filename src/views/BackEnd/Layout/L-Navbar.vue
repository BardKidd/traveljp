<template>
  <section
    class="bg-primary-retouch2 shadow-md text-right cursor-pointer w-full p-2.5"
  >
    <div class="text-2xl primary-black">
      <router-link :to="{ name: 'L-Main' }">
        <font-awesome-icon
          title="登出"
          class="pr-2"
          :icon="['fas', 'right-to-bracket']"
        />
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Back_Navbar",
};
</script>
