import { formEl } from "./refs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", submitForm);

function submitForm(evt) {
  evt.preventDefault();

  const objUserData = Object.fromEntries(new FormData(evt.target));
    objUserData.createdAt = Date.now();
    evt.target.reset()
}
