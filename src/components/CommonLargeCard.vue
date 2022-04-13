<template>
  <div class="lg:flex mb-4 lg:mb-2">
    <div class="flex-1">
      <img class="pr-3" :src="cardData.image" alt="圖片" />
    </div>
    <div class="flex-1 primary-black font-bold">
      <h3 class="text-xl sm:text-2xl md:text-3xl leading-loose">
        {{ cardData.title }}
      </h3>
      <p class="text-md sm:text-xl otherFont leading-loose">
        {{ cardData.description }}
      </p>
      <div class="primary-red text-sm leading-loose">
        <font-awesome-icon :icon="['fas', 'tag']" />
        <span v-for="tag of cardData.tag" :key="tag" class="pl-2"
          >#{{ tag }}</span
        >
      </div>
      <button type="button" class="commonBtn mt-2" @click="$emit('readMore')">
        閱讀更多
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonLargeCard",
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  emits: ["readMore"],
  setup(props) {
    return {
      props,
    };
  },
};
</script>
