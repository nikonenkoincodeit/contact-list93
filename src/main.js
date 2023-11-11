import { formEl, contactEl } from "./refs";
import { saveData, dataClient } from "./api";
import { createCard } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

initData();
function initData() {
  dataClient()
    .then((result) => {
      if (!result.length) return;
      const markup = createCard(result);
      renderMarkup(markup);
    })
    .catch((err) => console.log(err.message));
}

function renderMarkup(markup) {
  contactEl.insertAdjacentHTML("beforeend", markup);
}

formEl.addEventListener("submit", submitForm);

function submitForm(evt) {
  evt.preventDefault();

  const objUserData = Object.fromEntries(new FormData(evt.target));
  objUserData.createdAt = Date.now();
  evt.target.reset();
  saveData(objUserData)
    .then((result) => {
      const markup = createCard([result]);
      renderMarkup(markup);
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
}
