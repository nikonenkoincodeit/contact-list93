import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
const PATH_URL = "contacts/";

export async function saveData(bodyData) {
  const response = await axios.post(PATH_URL, bodyData);
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
  const response = await axios.get(PATH_URL);
  return response.data;

  // return fetch(BASE_URL).then((result) => {
  //   if (!result.ok) {
  //     throw new Error(result.statusText || result.status);
  //   }
  //   return result.json();
  // });
}

export async function deleteData(id) {
  await axios.delete(PATH_URL + id).then((response) => {
    return response;
  });
}

export async function changeData(id, nameData) {
  await axios
    .patch(PATH_URL + id, {
      name: nameData,
    })
    .then((response) => {
      return response;
    });
}
