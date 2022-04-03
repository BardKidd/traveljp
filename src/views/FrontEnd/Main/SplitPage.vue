<template>
  <div
    class="container flex flex-wrap max-h-screen h-screen w-full overflow-hidden"
  >
    <div
      @mouseover="intoTokyo = true"
      @mouseleave="intoTokyo = false"
      :class="intoTokyo ? 'flex-2' : 'flex-1'"
      class="relative h-full overflow-hidden leftPage transitionMixin"
    >
      <h3 class="splitTitle">東京</h3>
      <span class="splitContent">
        喧囂繁華的城市，複雜的鐵路系統，體驗那新奇的都市，在忙碌穿梭的人群中，以悠閒的腳步來觀察日本現代化的根源。
      </span>
      <button class="splitBtn splitBtnPrimary" type="button">閱讀更多</button>
    </div>
    <div
      @mouseover="intoHokkaido = true"
      @mouseleave="intoHokkaido = false"
      :class="intoHokkaido ? 'flex-2' : 'flex-1'"
      class="relative flex-1 h-full overflow-hidden centerPage transitionMixin"
    >
      <h3 class="splitTitle">北海道</h3>
      <span class="splitContent">
        穿過海峽長長的隧道，便是北國。夜空下一片白茫茫，電車在月台前停了下來。景色迷人、物產豐富，有著「日本三大夜景」之一，是這片土地的驕傲。
      </span>
      <button class="splitBtn splitBtnWhite" type="button">閱讀更多</button>
    </div>
    <div
      @mouseover="intoKyoto = true"
      @mouseleave="intoKyoto = false"
      :class="intoKyoto ? 'flex-2' : 'flex-1'"
      class="relative flex-1 h-full overflow-hidden rightPage transitionMixin"
    >
      <h3 class="splitTitle">京都</h3>
      <span class="splitContent">
        古都。日本文化重地，以拘謹的意識，表現出傳統的風雅、幽玄獨特美感的城市。在令人迷惘的現代，不如一起上洛，尋找那早已遺忘的溫柔吧!
      </span>
      <button class="splitBtn splitBtnBlack" type="button">閱讀更多</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SplitPage",
  setup() {
    const intoTokyo = ref(false);
    const intoHokkaido = ref(false);
    const intoKyoto = ref(false);

    return {
      intoTokyo,
      intoHokkaido,
      intoKyoto,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/Scss/_variable.scss";
.leftPage {
  background-image: url("~@/assets/Image/tokyotower.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: $primary;
    opacity: 0.3;
  }
}
.rightPage {
  background-image: url("~@/assets/Image/kyoto.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.7;
  }
}
.centerPage {
  background-image: url("~@/assets/Image/hokkaido.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.3;
  }
}
</style>
