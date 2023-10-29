import { formEl, contactsContainerEl } from "./refs";
import { serviceWriteData, getData, deleteData} from "./api";
import { createCard } from "./markup";


import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onFormInput);
window.addEventListener("load", onLoad);

function onFormInput(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  e.target.reset();
  data.createdAt = Date.now();
  serviceWriteData(data)
    .then((data) => {
      const markup = createCard([data]);
      addMarkUp(markup);
    })
    .catch(console.log);
}

function onLoad() {
  getData()
    .then((data) => {
      const markup = createCard(data);
      addMarkUp(markup);
    })
    .catch((error) => {
      console.log(error);
    });
}

function addMarkUp(markup) {
  contactsContainerEl.insertAdjacentHTML("beforeend", markup);
}

contactsContainerEl.addEventListener('click', deleteCard);

function deleteCard(evt) {
if(!evt.target.classList.contains('btn-close')){
  return;
}
const parentEl = evt.target.closest('.js-wrap-card');
const cardId =  parentEl.dataset.cardid;
deleteData(cardId)
.then(() => {
  parentEl.remove()
})
.catch((err) => console.log(err))
}