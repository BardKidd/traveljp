<template>
  <div class="container aboutUsBG mb-32"></div>
  <div class="container w-4/5 mx-auto mb-16">
    <div class="flex items-center mb-32">
      <div class="lrLine flex-1"></div>
      <h1 class="text-center flex-1 font-bold text-6xl otherFont">關於我們</h1>
      <div class="lrLine flex-1"></div>
    </div>
    <div>
      <img class="mx-auto" src="~@/assets/Image/logo.png" alt="" />
    </div>
    <!-- 品牌簡介 開始 -->
    <div class="primary-black text-justify">
      <h2 class="text-3xl leading-loose">品牌簡介</h2>
      <span class="block mt-8 leading-loose">
        於 1895
        年成立，超過百年琢磨的國際知名旅行社。雖然只專注於日本的旅遊，但此一業務精緻深度以使本社立於全球不敗之地。在互聯網發展的現代，保持與時俱進的我們將會締造下個百年，藉此將與您一同享受扶桑國之美。
      </span>
      <span class="block mt-8 leading-loose">
        除了旅遊外，本社也致力於日本留學。前往海外深造乃人之常情。將眼界放眼於異鄉，見識上也會有不同的維度。
      </span>
      <span class="block leading-loose">
        因此本社除了有協助您留學程序的處理外，還成立了
        <span class="primary-red">Study in Japan(SJP)</span
        >的基金會，在成功錄取當地學校後將能獲得本社的贊助，此外在出國的費用上也能在先前與我們聯絡獲得有利得支持。
      </span>
    </div>
    <!-- 品牌簡介 結束 -->
    <!-- 日旅購！優勢 開始 -->
    <div class="mt-44">
      <h2 class="text-3xl leading-loose">日旅購！優勢</h2>
      <div class="flex flex-wrap">
        <div class="flex-1">
          <img src="~@/assets/Image/4393.jpg" alt="" />
          <p class="font-bold primary-red text-lg mt-8">深入式的景點規劃</p>
          <span class="mt-2 leading-loose">
            出國總不會想一直去同樣的景點吧?!日旅購導遊皆具有豐富的旅遊知識，深入各處後花園，洞悉在地美饌，讓您享受與其他旅行團不同的感受!
          </span>
        </div>
        <div class="flex-1">
          <img src="~@/assets/Image/6685.jpg" alt="" />
          <p class="font-bold primary-red text-lg mt-8">CP 值最高的旅行體驗</p>
          <span class="mt-2 leading-loose">
            旅行要花大錢才能享受?!此乃謊言。我們超高校級的團隊保證能為您帶來前所未有的超
            CP 值體驗，盡請懷抱希望的聯絡我們吧!
          </span>
        </div>
        <div class="flex-1">
          <img src="~@/assets/Image/5031659.jpg" alt="" />
          <p class="font-bold primary-red text-lg mt-3">最可靠的旅行幫手</p>
          <span class="mt-2 leading-loose">
            沒看到想要的旅行計畫?!沒關係，聯絡我們將打造專屬於您的旅行計畫。
          </span>
        </div>
      </div>
    </div>
    <!-- 日旅購！優勢 結束 -->
    <!-- 對於疫情的應對 開始 -->
    <div class="mt-44">
      <h2 class="text-3xl leading-loose">對於疫情的應對</h2>
      <p class="leading-loose">
        2020
        年由於疫情的關係導致無法出國，但隨著疫苗的開發以及一般大眾普遍的施打率，降低了新冠肺炎帶來的危害。因此在
        2022
        年的現在，只要出示紙本疫苗接種卡(小黃卡)並在上面有打了三劑新冠疫苗的證明，就能在日本國內入境且不需隔離。雖說有了較強的抵抗力，但難保疫情的擴散力，因此對於出國旅遊的我們仍需要注意染疫的風險。
      </p>
      <div class="leading-loose mt-3">
        日本政府於 2022 年 3 月 1 日起：
        <ul>
          <li>1.開放除觀光目的以外之短期停留、長期居留簽證申請。</li>
          <li>
            2.所有自外國入境日本者原則配合隔離檢疫 7
            天，自台灣（因非屬於措施（17）所指定國・地區）入境
            日本者，得於入境後第 3
            天自主性採檢，回報結果為陰性並獲復確認者得解除隔離檢疫。
          </li>
        </ul>

        <span class="block"
          >已接種第 3
          劑疫苗並滿足疫苗種類等相關條件者，入境後無須隔離檢疫。</span
        >
        <span class="block">
          如 簽證資訊請洽日本台灣交流協會台北事務所：
          https://www.koryu.or.jp/tw/news/?itemid=2762&dispmid=4266
        </span>
        <span class="block">
          最新入境隔離檢疫資訊請參考厚生勞動省：
          https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000121431_00342.html
        </span>
      </div>
    </div>
    <!-- 對於疫情的應對 結束 -->
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
