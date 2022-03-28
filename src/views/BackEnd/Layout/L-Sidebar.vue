<template>
  <section class="min-h-screen flex flex-col">
    <div class="shadow-md rounded">
      <img :src="Logo" alt="日旅購！的 Logo" />
    </div>
    <div
      class="flex-1 flex flex-col text-xl primary-red font-bold leading-10 p-5"
    >
      <router-link
        class="flex flex-wrap opacity-60 hover:opacity-100 items-center"
        :to="{ name: 'BStrictPlan' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ff0000"
          class="mr-3 fill-[#da3c3e]"
        >
          <rect fill="none" height="24" width="24" />
          <path
            d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"
          />
        </svg>
        嚴選計畫
      </router-link>
      <router-link
        class="flex flex-wrap opacity-60 hover:opacity-100 items-center"
        :to="{ name: 'BOrderList' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ff0000"
          class="mr-3 fill-[#da3c3e]"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"
          />
        </svg>
        訂單列表
      </router-link>
      <router-link
        class="flex flex-wrap opacity-60 hover:opacity-100 items-center"
        :to="{ name: 'BCoupon' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ff0000"
          class="mr-3 fill-[#da3c3e]"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <path
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>
        優惠券
      </router-link>
      <router-link
        class="flex flex-wrap opacity-60 hover:opacity-100 items-center"
        :to="{ name: 'BTravelNotes' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ff0000"
          class="mr-3 fill-[#da3c3e]"
        >
          <g><rect fill="none" height="24" width="24" /></g>
          <g>
            <path
              d="M22,3l-1.67,1.67L18.67,3L17,4.67L15.33,3l-1.66,1.67L12,3l-1.67,1.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3v16 c0,1.1,0.9,2,2,2l16,0c1.1,0,2-0.9,2-2V3z M11,19H4v-6h7V19z M20,19h-7v-2h7V19z M20,15h-7v-2h7V15z M20,11H4V8h16V11z"
            />
          </g>
        </svg>
        旅遊札記
      </router-link>
    </div>
    <div class="shadow-inner text-right flex justify-end">
      <span
        class="rounded bg-primary-retouch cursor-pointer p-3"
        title="縮放側邊欄按鈕"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <rect fill="none" height="24" width="24" />
          <g>
            <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12" />
          </g>
        </svg>
      </span>
    </div>
  </section>
</template>

<script>
import Logo from "@/assets/Image/logo.png";
export default {
  name: "Back_SideBar",
  setup() {
    return {
      Logo,
    };
  },
};
</script>

<style lang="scss">
.router-link-exact-active {
  opacity: 1 !important;
}
</style>
