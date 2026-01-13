// 側選單
const App = {
  data() {
    return {
      services: [
        {
          type: "網頁開發",
          name: "Website development",
          price: "$5,000~$15,000TWD 細節請詳談",
          skills: ["Landing Page 一頁式網頁", "網站設計", "官網建置", "WordPress", "Webflow", "Vue.js", "Api串接", "Figma UIUX設計"],
          list: [
            "Landing Page 一頁式網頁： 專為行銷轉換設計，結合動態效果與高質感視覺，精準抓住客戶目光。",
            "企業官網建置： 從資訊架構規劃、Figma UI 介面設計到前端程式實作，提供完整解決方案。",
            "WordPress / Webflow 多樣化平台架站解決方案： 能根據維護能力與預算，為您在系統生態與高度設計感之間，量身打造美感與效能兼具的網站。",
            "前端框架與API 串接： 依專案需求彈性切換技術方案，不論是使用 Vue.js 現代化框架、或是以 JavaScript/jQuery 進行 RESTful API 串接實現動態資料展示，皆能精準完成。"
          ],
        },
        {
          type: "視覺設計",
          name: "Graphic Design",
          price: "$2,000~$10,000TWD 細節請詳談",
          skills: [
            "Banner設計",
            "插畫設計",
            "logo設計",
            "遊戲UIUX設計",
          ],
          list: [
            "高點擊率 Banner 設計： 擅長運用精緻合成與強烈視覺張力，打造吸睛且具高轉化率的活動廣告素材。",
            "品牌視覺與 Logo 設計： 為品牌量身打造具辨識度且符合核心精神的視覺標誌與識別系統。",
            "手繪與插畫設計： 具備靈活的插畫風格，能針對專案需求提供客製化手繪素材，提升品牌視覺的獨特性與溫度。",
            "遊戲 UI/UX 視覺設計： 提供充滿沉浸感的遊戲介面規劃，包含元件庫建立（Buttons, Icons）、階層資訊排版及風格提案。",
          ],
        },
      ],
      officialProjects: [
        {
          chName: "民宿訂房網站",
          name: "Homestay website",
          skills: [
            "Figma",
            "Figma MCP to Crusor",
            "HTML",
            "SASS",
            "javascript",
            "RESTful API",
            "Vue",
            "Vite",
          ],
          webUrl: "https://feliciaho.github.io/bookingWeb/#/homeView",
          githubUrl: "https://github.com/feliciaho/bookingWeb",
          figma: true,
          figmaUrl: "https://www.figma.com/design/IWVbELJiG1oS9CLWX8PUBx/Hotel-Booking-Web?node-id=0-1&p=f",
          img: "images/bookingBanner.jpg",
        },
        {
          chName: "異象回聲官網",
          name: "EOV official website",
          skills: ["Pug", "SASS", "jQuery", "Gulp", "CICD"],
          webUrl: "https://eov.mangot5.com/eov/index",
          githubUrl: "https://github.com/feliciaho/eov",
          img: "images/eovBanner.png",
        },
        {
          chName: "食譜網站",
          name: "Recipe website",
          skills: ["HTML", "SASS", "javascript", "RESTful API", "Vue", "Vite"],
          webUrl: "https://feliciaho.github.io/recipeWeb_new/#/homeView",
          githubUrl: "https://github.com/feliciaho/recipeWeb_new",
          figma: false,
          img: "images/recipeBanner.jpg",
        },
      ],
      LpProjects: [
        {
          chName: "彩虹島活動頁",
          name: "Latale landing page",
          skills: ["Pug", "SASS", "jQuery", "Gulp", "CICD"],
          webUrl:
            "https://landing.mangot5.com/template/la/event/240711_invernell/index.html",
          githubUrl: "https://github.com/feliciaho/240711_invernell",
          img: "images/lataleBanner.jpg",
        },
        {
          chName: "巨商活動頁",
          name: "Gersang landing page",
          skills: ["Pug", "SASS", "jQuery", "Gulp", "CICD"],
          webUrl:
            "https://landing.mangot5.com/template/gs/event/240712_thunderroar/index.html",
          githubUrl: "https://github.com/feliciaho/240712_thunderroar",
          img: "images/gersangBanner.jpg",
        },
        {
          chName: "夏普左右開冰箱活動頁",
          name: "Sharpe landing page",
          skills: ["HTML", "CSS", "jQuery"],
          webUrl: "https://tw.sharp/refrigerator/2511event_dualdoor/index.html",
          githubUrl: "https://github.com/feliciaho/202511_refrigerator_SP",
          img: "images/sharpBanner.jpg",
        },
        {
          chName: "笑傲江湖一周年活動頁",
          name: "EOV official website",
          skills: ["Pug", "SASS", "jQuery", "Gulp", "CICD"],
          webUrl: "https://landing.mangot5.com/template/xa/event/250113_anniversary/index.html",
          githubUrl: "https://github.com/feliciaho/250113_anniversary",
          img: "images/xaBanner.jpg",
        },
        {
          chName: "失落的方舟活動頁",
          name: "LostArk landing page",
          skills: ["Pug", "SASS", "jQuery", "Vue", "Gulp", "CICD"],
          webUrl:
            "https://landing.mangot5.com/template/lostark/event/250327_pletze/index.html",
          githubUrl: "https://github.com/feliciaho/250327_pletze",
          img: "images/lostarkBanner.jpg",
        },

        // {
        //   chName: "黑色契約活動頁",
        //   name: "Cabel landing page",
        //   skills: ["HTML", "SASS", "javascript", "Vue", "RESTful API"],
        //   webUrl: "https://feliciaho.github.io/cbo_20240129",
        //   githubUrl: "https://github.com/feliciaho/cbo_20240129",
        //   img: "images/cboBanner.png",
        // },
      ],
      uiux: [
        {
          chName: "黑色契約電腦版官網",
          name: "Cabel official website",
          webUrl: "https://cbo.digeam.com/index",
          img: [
            "images/cabelOfficial/1.jpg",
            "images/cabelOfficial/2.jpg",
            "images/cabelOfficial/3.jpg",
          ],
        },
        {
          chName: "黑色契約活動頁",
          name: "Cabel landing page",
          webUrl: "https://cbo.digeam.com/OBT",
          img: ["images/cabelActivity/1.jpg"],
        },
        {
          chName: "搞鬼聖誕轉轉樂活動頁",
          name: "Ghost landing page",
          webUrl: "https://feliciaho.github.io/ghost_20231220",
          img: ["images/ghost/1.jpg", "images/ghost/2.jpg"],
        },
        {
          chName: "仙俠活動頁",
          name: "XX2 landing page",
          img: ["images/xx2/1.jpg", "images/xx2/2.jpg"],
        },
        {
          chName: "夢想飛飛兩周年慶活動頁",
          name: "flyff landing page",
          img: [
            "images/flyff/1.jpg",
            "images/flyff/2.jpg",
            "images/flyff/3.jpg",
          ],
        },
      ],
    };
  },
  methods: {
    scrollToTop(page) {
      // 滾動到指定的頁面
      const element = document.querySelector(page);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    const swiper1 = new Swiper(".mySwiper1", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    const swiper2 = new Swiper(".mySwiper2", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 0.7,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // Corrected from "click" to "clickable"
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      loop: true,
    });
  },
};
Vue.createApp(App).mount("#app");
