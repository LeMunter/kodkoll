import "./main.css";

const setFooterYear = function () {
  const div = document.querySelector("#copyright");
  const d = new Date();
  div.textContent = "© Sprinkler " + d.getFullYear();
};

const setServicesContent = () => {
  const div = document.querySelector("#service-1");
  div.childNodes;
  console.log(div.childNodes);
};

setFooterYear();
setServicesContent();
