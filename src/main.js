import "./main.css";
import data from "./data.json" assert { type: "json" };

const setFooterYear = function () {
  const div = document.querySelector("#copyright");
  const d = new Date();
  div.textContent = "© Sprinkler " + d.getFullYear();
};

const setServicesContent = (index, title, content) => {
  const div = document.querySelector(`#service-${index}`);
  const titleElmt = div.querySelector("h3");
  const contentElmt = div.querySelector("p");
  titleElmt.textContent = title;
  contentElmt.textContent = content;
};

const setAboutData = () => {
  setContent("#about-title", data.about.title);
  setContent("#about-content", data.about.content);
};

const setHeroData = () => {
  setContent("#hero-title", data.hero.title);
  setContent("#hero-content", data.hero.content);
};

const setContactData = () => {
  setContent("#contact-title", data.contact.title);
  setContent("#contact-content", data.contact.content);
  setEmail(".email", data.contact.email);
};

const setContent = (id, content) => {
  const elmt = document.querySelector(id);
  elmt.textContent = content;
};

const setEmail = (id, email) => {
  const elmtArr = document.querySelectorAll(id);
  for (const elmt of elmtArr) {
    if (!elmt.textContent) elmt.textContent = email;
    elmt.href = `mailto:${email}`;
  }
};

const main = () => {
  for (const [i, service] of data.services.entries()) {
    setServicesContent(i, service.title, service.content);
  }

  setHeroData();

  setFooterYear();
  setAboutData();
  setContactData();
};

main();
