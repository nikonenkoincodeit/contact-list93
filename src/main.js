import { formEl } from "./refs";
import { saveData } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", submitForm);

function submitForm(evt) {
  evt.preventDefault();

  const objUserData = Object.fromEntries(new FormData(evt.target));
  objUserData.createdAt = Date.now();
  evt.target.reset();
  saveData(objUserData)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error;
    });
}
