<template>
  <div class="container shopListBG mb-32"></div>
  <div class="container w-4/5 mx-auto mb-16">
    <div class="flex items-center mb-32">
      <div class="lrLine flex-1"></div>
      <h1 class="text-center flex-1 font-bold text-6xl otherFont">精選計畫</h1>
      <div class="lrLine flex-1"></div>
    </div>

    <p class="text-right font-bold mb-5">顯示 10 筆篩選結果，全部共 100 筆</p>
    <section class="flex flex-wrap">
      <aside class="w-1/5 shadow-[0_0_20px_rgba(0,0,0,0.2)] p-5">
        <p class="font-bold text-lg otherFont">篩選器</p>
        <div class="flex justify-between mb-3 border-b-2">
          <h3 class="leading-loose font-bold otherFont">地區</h3>
          <span class="cursor-pointer"
            ><font-awesome-icon :icon="['fas', 'minus']"
          /></span>
        </div>
        <div class="mb-3">
          <ul>
            <li v-for="place of allPlace" :key="place">
              <input type="checkbox" class="mr-2" name="selectPlace" />{{
                place
              }}
            </li>
          </ul>
        </div>
        <div class="flex justify-between mb-3 border-b-2">
          <h3 class="leading-loose font-bold otherFont">旅程(天數)</h3>
          <span class="cursor-pointer"
            ><font-awesome-icon :icon="['fas', 'minus']"
          /></span>
        </div>
        <div class="mb-3">
          <ul>
            <li v-for="unit of allUnit" :key="unit">
              <input type="checkbox" class="mr-2" name="selectUnit" />{{ unit }}
            </li>
          </ul>
        </div>
      </aside>
      <div class="flex-1 ml-10 flex flex-wrap">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "@/components/CommonCard.vue";
export default {
  name: "ShopList",
  setup() {
    const allPlace = [
      "北海道",
      "東北",
      "東京",
      "北陸",
      "中部",
      "關西",
      "山陽山陰",
      "四國",
      "九州",
      "沖繩",
    ];
    const allUnit = [
      "當天來回",
      "2天1夜",
      "3天2夜",
      "4天3夜",
      "5天4夜",
      "6天5夜",
      "7天6夜",
      "8天7夜",
      "9天8夜",
      "10天9夜",
    ];

    return {
      allPlace,
      allUnit,
    };
  },
  components: {
    Card,
  },
};
</script>
