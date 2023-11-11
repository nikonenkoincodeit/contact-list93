const BASE_URL = "http://localhost:3000/contacts/";

export function saveData(bodyData) {
  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };
  return fetch(BASE_URL, data).then((result) => {
    if (!result.ok) {
      throw new Error(result.statusText || result.status);
    }
    return result.json();
  });
}

export function dataClient() {
  return fetch(BASE_URL).then((result) => {
    if (!result.ok) {
      throw new Error(result.statusText || result.status);
    }
    return result.json();
  });
}
