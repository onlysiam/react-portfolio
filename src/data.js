export const skillPercentage = () => [
  {
    name: "react",
    progress: "80%",
  },
  {
    name: "js",
    progress: "90%",
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
    progress: "95%",
  },
  {
    name: "redux",
    progress: "65%",
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
