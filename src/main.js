import { formEl, contactEl } from "./refs";
import { saveData, getData } from "./api";
import { createCard } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

initData();

async function initData() {
  try {
    const result = await getData();
    const markup = createCard(result);
    renderMarkup(markup);
  } catch (err) {
    console.log(err.message);
  }

  // getData()
  //   .then((result) => {
  //     if (!result.length) return;
  //     const markup = createCard(result);
  //     renderMarkup(markup);
  //   })
  //   .catch((err) => console.log(err.message));
}

function renderMarkup(markup) {
  contactEl.insertAdjacentHTML("beforeend", markup);
}

formEl.addEventListener("submit", submitForm);

async function submitForm(evt) {
  evt.preventDefault();

  const objUserData = Object.fromEntries(new FormData(evt.target));
  objUserData.createdAt = Date.now();
  evt.target.reset();

  try {
    const response = await saveData(objUserData);
    const markup = createCard([response]);
    renderMarkup(markup);
  } catch (error) {
    console.error(error.message);
  }

  // saveData(objUserData)
  //   .then((result) => {
  //     const markup = createCard([result]);
  //     renderMarkup(markup);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
}
