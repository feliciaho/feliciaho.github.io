// 側選單
const App = {
  data() {
    return {
      expriences:[
        {
          type: "Frontend designer",
          name: "Happytuk",
          skills: ["Pug", "SASS", "jQuery", "Gulp", "CICD", "Vue"], 
        }
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
    // navToogle(){
    // document.querySelectorAll(".navbar-toggler").addEventListener("click", () => {
    //   // 切換 active 類
    //   menu.classList.toggle("collapsed");
    // });
    // document.querySelectorAll(".collapse navbar-collapse").addEventListener("click", () => {
    //   // 切換 active 類
    //   menu.classList.toggle("show");
    // });
    // },
  },
};
Vue.createApp(App).mount("#app");
