// 側選單
const App = {
  data() {
    return {
      expriences:[
        {
          type: "Frontend designer",
          name: "Happytuk",
          time: "April, 2024~April, 2025",
          skills: ["Pug", "SASS", "jQuery", "Gulp", "CICD", "Vue", "Git"],
          list:[
            "負責開發並維護官網及活動頁，使用 Pug、SASS 和 JavaScript，jQuery 實現響應式設計和互動功能。",
            "使用 Vue 框架，協助公司將遊戲活動頁面從 JavaScript、jQuery 過渡到 Vue 開發模式。",
            "使用 Gulp 進行前端自動化工具，提升開發效率。",
            "使用 Git 進行版本控制，並進行 CICD 部署。",
            "視覺設計：負責製作網頁主視覺、遊戲 banner。",
          ],
        },
        {
          type: "Website Designer",
          name: "Digeam",
          time: "April, 2023~April, 2024",
          skills: ["HTML", "SCSS", "jQuery", "javascript", "RESTful API", "Vue", "Git"],
          list:[
            "負責開發並維護官網及活動頁，使用 HTML、SCSS 和 JavaScript，jQuery 實現響應式設計和互動功能。",
            "引入並整合 Vue 框架，協助公司從 JavaScript、jQuery 過渡到 Vue 開發模式。",
            "RESTful API 串接，實現與後端系統的數據交互和通知。",
            "視覺設計：負責製作網頁主視覺、遊戲 banner。",
          ],
        },
      ],
      companyProjects: [
        {
          type: "Cabel",
          name: "Activity website",
          skills: ["HTML", "SASS", "javascript", "Vue" ,"RESTful API"],
          webUrl: "https://feliciaho.github.io/cbo_20240129",
          githubUrl: "https://github.com/feliciaho/cbo_20240129",
          img : "images/cboBanner.png",
        },
        {
          type: "Ghost",
          name: "Christmas website",
          skills: ["HTML", "SCSS", "jQuery" ,"RESTful API"],
          webUrl: "https://feliciaho.github.io/ghost_20231220",
          githubUrl: "https://github.com/feliciaho/ghost_20231220",
          img : "images/ghostBanner.png",
        },
        {
          type: "EOV",
          name: "official website",
          skills: ["Pug", "SASS", "jQuery", "Gulp", "CICD"],
          webUrl: "https://eov.mangot5.com/eov/index",
          githubUrl: "https://github.com/feliciaho/eov",
          img : "images/eovBanner.png",
        },
        {
          type: "LostArk",
          name: "Info website",
          skills: ["Pug", "SASS", "jQuery","Vue", "Gulp", "CICD"],
          webUrl: "https://landing.mangot5.com/template/lostark/event/250327_pletze/index.html",
          githubUrl: "https://github.com/feliciaho/250327_pletze",
          img : "images/lostarkBanner.jpg",
        },

      ],
      sideProjects: [
        {
          type: "sideProjects",
          name: "Recipe website",
          skills: ["HTML", "SASS", "javascript" ,"RESTful API", "Vue", "Vite"],
          webUrl: "https://feliciaho.github.io/recipeWeb_new/#/homeView",
          githubUrl: "https://github.com/feliciaho/recipeWeb_new",
          img : "images/recipeBanner.jpg",
        },
      ],
      uiux: [
        {
          type: "Cabel",
          name: "Official website",
          webUrl: "https://cbo.digeam.com/index",
          img : [
            "images/cabelOfficial/1.jpg",
            "images/cabelOfficial/2.jpg",
            "images/cabelOfficial/3.jpg",
          ],
        },
        {
          type: "Cabel",
          name: "Activity website",
          webUrl: "https://cbo.digeam.com/OBT",
          img : [
            "images/cabelActivity/1.jpg",
          ],
        },
        {
          type: "Ghost",
          name: "Christmas website",
          webUrl: "https://feliciaho.github.io/ghost_20231220",
          img : [
            "images/ghost/1.jpg",
            "images/ghost/2.jpg",
          ],
        },
        {
          type: "XX2",
          name: "New Character website",
          img : [
            "images/xx2/1.jpg",
            "images/xx2/2.jpg",
          ],
        },
        {
          type: "flyff",
          name: "2nd Anniversary website",
          img : [
            "images/flyff/1.jpg",
            "images/flyff/2.jpg",
            "images/flyff/3.jpg",
          ],
        },
      ],
    };
  },
  methods:{
    scrollToTop(page) {
      // 滾動到指定的頁面
      const element = document.querySelector(page);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  mounted(){
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
