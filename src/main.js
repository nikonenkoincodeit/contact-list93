import { formEl } from "./refs";
import { serviceWriteData } from "./api";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onFormInput);

function onFormInput(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  e.target.reset();
  data.createdAt = Date.now();
  serviceWriteData(data).then(console.log).catch(console.log);
}
