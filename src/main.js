import { formEl, contactEl, cardContainerEl } from "./refs";
import { saveData, getData, deleteData, changeData } from "./api";
import { createCard } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", submitForm);

cardContainerEl.addEventListener("click", deleteCard);
cardContainerEl.addEventListener("input", changeCard);

async function deleteCard(evt) {
  try {
    if (!evt.target.classList.contains("btn-close")) return;
    const idCard = evt.target.closest(".js-wrap-card").dataset.cardid;

    await deleteData(idCard);
    evt.target.closest(".js-wrap-card").remove();
  } catch (error) {
    console.log("Server response error when deleting a card", error.message);
  }
}

async function changeCard(evt) {
  try {
    const idCard = evt.target.closest(".js-wrap-card").dataset.cardid;
    const nameData = evt.target.textContent;
    await changeData(idCard, nameData);
  } catch (error) {
    console.log("Server response error when changing a card", error.message);
  }
}

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
