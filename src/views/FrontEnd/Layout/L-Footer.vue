<template>
  <section class="flex bg-primary-black primary-white py-10 px-28">
    <div class="flex-1 font-bold pr-12">
      <h3 class="text-lg">
        <font-awesome-icon class="primary-red" :icon="['fas', 'phone-alt']" />
        免費專線 0800-123456
      </h3>
      <p class="otherFont mt-5 mb-3">
        加入會員，來獲得日旅購最新資訊、更新及優惠通知。
      </p>
      <input
        class="otherFont outline-none primary-black modalInput w-full"
        type="email"
        title="請在此處填寫 Email"
        placeholder="Email"
      />
      <button
        class="otherFont w-full text-center commonBtn font-bold"
        type="button"
      >
        送出
      </button>
      <ul class="flex otherFont text-justify mt-10">
        <li class="pr-5">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </li>
        <li class="pr-5"><font-awesome-icon :icon="['fab', 'twitter']" /></li>
        <li class="pr-5"><font-awesome-icon :icon="['fab', 'instagram']" /></li>
        <li class="pr-5"><font-awesome-icon :icon="['fab', 'github']" /></li>
      </ul>
      <p class="otherFont mt-5 text-gray-600">&copy;2022 Lin Pei Wen</p>
    </div>
    <div class="flex-1 font-bold">
      <h3 class="primary-red">探索</h3>
      <ul class="mt-3 otherFont leading-loose">
        <li>冬季</li>
        <li>夏季</li>
        <li>特殊節慶</li>
        <li>家庭旅遊</li>
        <li>住宿資訊</li>
        <li>關於我們</li>
      </ul>
    </div>
    <div class="flex-1 font-bold">
      <h3 class="primary-red">豐富你的計劃</h3>
      <ul class="mt-3 otherFont leading-loose">
        <li>海外網路(Wifi、網路卡)</li>
        <li>天氣</li>
        <li>地圖</li>
        <li>官方旅遊資訊</li>
        <li>團體出遊</li>
        <li>聯繫我們</li>
      </ul>
    </div>
    <div class="flex-1 font-bold">
      <h3 class="primary-red">超棒的連結</h3>
      <ul class="mt-3 otherFont leading-loose">
        <li>Designspiration</li>
        <li>日本旅遊攻略|樂吃購！日本</li>
        <li>FIND/47</li>
        <li>Pexels</li>
        <li>Unsplash</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "L-Footer",
};
</script>
