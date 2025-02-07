// 側選單
const App = {
  data() {
    return {
      projects: [
        {
          type: "EOV",
          name: "official website",
          skills: ["Pug", "SASS", "jQuery"],
          webUrl: "https://eov.mangot5.com/eov/index",
          githubUrl: "https://github.com/feliciaho/eov",
          img : "/images/eovBanner.png",
        },
        {
          type: "Ghost.online",
          name: "Christmas website",
          skills: ["HTML", "SCSS", "jQuery" ,"RESTful API"],
          webUrl: "https://go.digeam.com/event/20231220/",
          githubUrl: "https://github.com/feliciaho/eov",
          img : "/images/ghostBanner.png",
        },
        {
          type: "Cabel.online",
          name: "Christmas website",
          skills: ["HTML", "SCSS", "jQuery", "Vue" ,"RESTful API"],
          webUrl: "",
          githubUrl: "https://github.com/feliciaho/eov",
          img : "/images/ghostBanner.png",
        },

      ],
    };
  },
};
Vue.createApp(App).mount("#app");
