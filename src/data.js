export const skillPercentage = () => [
  {
    name: "react",
    progress: "90%",
  },
  {
    name: "js",
    progress: "80%",
  },
  {
    name: "vue",
    progress: "10%",
  },
  {
    name: "node",
    progress: "60%",
  },
  {
    name: "html",
    progress: "90%",
  },
  {
    name: "redux",
    progress: "55%",
  },
  {
    name: "tailwind",
    progress: "85%",
  },
  {
    name: "sass",
    progress: "70%",
  },
  {
    name: "mysql",
    progress: "80%",
  },
  {
    name: "mongodb",
    progress: "45%",
  },
  {
    name: "git",
    progress: "70%",
  },
  {
    name: "php",
    progress: "30%",
  },
];

export const fetchProgress = (skills, skillName) => {
  const skill = skills.filter((skill) => skill.name === skillName);

  return skill[0].progress;
};

export const projectsData = {
  nsuaide: {
    name: "NSU Aide",
    description: "An Web-Assistant For Academic Help.",
    technologies: ["ReactJS", "Redux", "NodeJS", "Axios", "Express", "MySQL"],
    api: ["Cloudinary"],
    liveweb: "https://nsuaide.onlysiam.com/",
    git: "https://github.com/onlysiam/campus-assistant-react-redux-node",
  },
  weathercloset: {
    name: "Weather Closet",
    description: "A Weather Based Fashion Suggestion Web Application.",
    technologies: [
      "ReactJS",
      "Redux",
      "NodeJS",
      "Axios",
      "Express",
      "MySQL",
      "TailwindCSS",
    ],
    api: ["DarkSky", "Openweather", "Cloudinary", "Pixabay"],
    liveweb: "https://weathercloset.onlysiam.com/",
    git: "https://github.com/onlysiam/weather-dress-suggestion-react-tailwind",
  },
  cgpa101: {
    name: "CGPA101",
    description: "An Academic Course Tracking Web Application.",
    technologies: [
      "ReactJS",
      "Redux",
      "NodeJS",
      "Axios",
      "Express",
      "MongoDB",
      "Sass",
    ],
    liveweb: "https://cgpa101.onlysiam.com/",
    git: "https://github.com/onlysiam/react-redux-academic-grade-tracker",
  },
  surela: {
    name: "Surela",
    description: "An Online Music Player.",
    technologies: ["ReactJS", "NodeJS", "Axios"],
    api: ["Google Drive"],
    liveweb: "https://surela.onlysiam.com/",
    git: "https://github.com/onlysiam/online-music-player",
  },
  greentouch: {
    name: "Greentouch Group",
    description: "Official Website Of Greentouch Grou Ltd.",
    technologies: ["HTML5", "CSS3", "JavaScript", "JQuery"],
    liveweb: "https://greentouch.onlysiam.com/",
    git: "https://github.com/onlysiam/greentouchgroup",
  },
};
