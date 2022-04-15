<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 font-bold">
    <div class="sm:ml-3 md:ml-5">
      <img
        v-if="props.productData?.imagesUrl"
        :src="props.productData?.imagesUrl[0]"
        alt="地點首圖"
        class="cursor-pointer w-full object-center object-cover h-52"
      />
      <img
        v-else
        src="#"
        alt="未提供圖片"
        class="cursor-pointer w-full object-center object-cover h-52"
      />
      <h2 class="font-bold text-lg mt-5 cursor-pointer">
        {{ props.productData.title }}
      </h2>
      <p class="otherFont primary-black mt-3 cursor-pointer line-clamp-3">
        {{ props.productData.description }}
      </p>
      <div class="flex flex-wrap mt-3 mb-6">
        <button
          type="button"
          class="otherFont font-bold commonBtn--reverse"
          @click.stop="iWantThis"
        >
          我要這個
        </button>
        <button
          type="button"
          class="otherFont font-bold ml-5 hover:primary-red"
        >
          詳細
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonCard",
  emits: ["joinTheShoppingCar"],
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const iWantThis = () => {
      emit("joinTheShoppingCar", "ts");
    };
    return {
      props,
      iWantThis,
    };
  },
};
</script>
