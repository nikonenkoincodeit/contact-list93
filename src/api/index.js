import axios from "axios";

const BASE_URL = "http://localhost:3000/contacts/";

export async function saveData(bodyData) {
  // нужно ли в этом блоке добавлять трай-кетч, или ошибка прокинется в трай-кетч функции которая вызывает saveData?
  const response = await axios.post(BASE_URL, bodyData);
  return response.data;
  // const data = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(bodyData),
  // };
  // return fetch(BASE_URL, data).then((result) => {
  //   if (!result.ok) {
  //     throw new Error(result.statusText || result.status);
  //   }
  //   return result.json();
  // });
}

export async function getData() {
  // нужно ли в этом блоке добавлять трай-кетч, или ошибка прокинется в трай-кетч функции которая вызывает getData?
  const response = await axios.get(BASE_URL);
  return response.data;
  // return fetch(BASE_URL).then((result) => {
  //   if (!result.ok) {
  //     throw new Error(result.statusText || result.status);
  //   }
  //   return result.json();
  // });
}
