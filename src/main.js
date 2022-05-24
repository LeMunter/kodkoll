import "./main.css";
import data from "./data.json" assert { type: "json" };

const setFooterYear = function () {
  const div = document.querySelector("#copyright");
  const d = new Date();
  div.textContent = "© Sprinkler " + d.getFullYear();
};

const setServicesContent = (index, title, content) => {
  const div = document.querySelector(`#service-${index}`);
  const titleElm = div.querySelector("h3");
  const contentElm = div.querySelector("p");
  titleElm.textContent = title;
  contentElm.textContent = content;
};

for (const [i, service] of data.services.entries()) {
  setServicesContent(i, title, content);
}

setFooterYear();
setServicesContent();
