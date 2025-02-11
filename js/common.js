// 側選單
const App = {
  data() {
    return {
      expriences:[
        {
          type: "Frontend designer",
          name: "Happytuk",
          skills: ["Pug", "SASS", "jQuery", "Gulp", "CICD", "Vue", "Git"],
          list:[
            "負責開發並維護官網及活動頁，使用 Pug、CSS 和 JavaScript，jQuery 實現響應式設計和互動功能。",
            "引入並整合 Vue 框架，協助公司從 JavaScript、jQuery 過渡到 Vue 開發模式。",
            "使用 Gulp 進行前端自動化工具，提升開發效率。",
            "使用 Git 進行版本控制，並進行 CICD 部署。",
          ],
        },
        {
          type: "Website Designer",
          name: "Digeam",
          skills: ["HTML", "SCSS", "jQuery", "javascript", "RESTful API", "Vue", "Git"],
          list:[
            "負責開發並維護官網及活動頁，使用 HTML、CSS 和 JavaScript，jQuery 實現響應式設計和互動功能。",
            "引入並整合 Vue 框架，協助公司從 JavaScript、jQuery 過渡到 Vue 開發模式。",
            "RESTful API 串接，實現與後端系統的數據交互和通知。",
            "使用 Gulp 進行前端自動化工具，提升開發效率。",
            "使用 Git 進行版本控制，並進行 CICD 部署。",
            "平面設計：負責製作網頁主視覺、layout，推運公車廣告、遊戲 banner。",
          ],
        },
      ],
      companyProjects: [
        {
          type: "EOV",
          name: "official website",
          skills: ["Pug", "SASS", "jQuery", "Gulp", "CICD"],
          webUrl: "https://eov.mangot5.com/eov/index",
          githubUrl: "https://github.com/feliciaho/eov",
          img : "/images/eovBanner.png",
        },
        {
          type: "Ghost",
          name: "Christmas website",
          skills: ["HTML", "SCSS", "jQuery" ,"RESTful API"],
          webUrl: "https://go.digeam.com/event/20231220/",
          githubUrl: "https://github.com/feliciaho/ghost_20231220",
          img : "/images/ghostBanner.png",
        },
        {
          type: "Cabel",
          name: "Activity website",
          skills: ["HTML", "SASS", "javascript", "Vue" ,"RESTful API"],
          webUrl: "https://feliciaho.github.io/cbo_20240129",
          githubUrl: "https://github.com/feliciaho/cbo_20240129",
          img : "/images/cboBanner.png",
        },
      ],
      sideProjects: [
        {
          type: "sideProjects",
          name: "Traveling website",
          skills: ["Pug", "SASS", "jQuery"],
          webUrl: "https://eov.mangot5.com/eov/index",
          githubUrl: "https://github.com/feliciaho/eov",
          img : "/images/eovBanner.png",
        },
        {
          type: "sideProjects",
          name: "Shopping website",
          skills: ["HTML", "SCSS", "jQuery" ,"RESTful API"],
          webUrl: "https://go.digeam.com/event/20231220/",
          githubUrl: "https://github.com/feliciaho/eov",
          img : "/images/ghostBanner.png",
        },
      ],
    };
  },
  methods:{
  },
};
Vue.createApp(App).mount("#app");
