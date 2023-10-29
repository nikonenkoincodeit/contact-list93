const BASE_URL = "http://localhost:3000/contacts/";

// function serviceWriteData(data) {
//   const options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };
//   return fetch(BASE_URL, options).then((resp) => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error(
//         resp.statusText || `Unknown Error. Response status ${resp.status}`
//       );
//     }
//     return resp.json();
//   });
// }

async function serviceWriteData(data) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const resp = await fetch(BASE_URL, options);

  if (!resp.ok) {
    throw new Error(
      resp.statusText || `Unknown Error. Response status ${resp.status}`
    );
  }
  return resp.json();
}

// function getData() {
//   return fetch(BASE_URL).then((resp) => {
//     if (!resp.ok) {
//       throw new Error(
//         resp.statusText || `Unknown Error. Response status ${resp.status}`
//       );
//     }
//     return resp.json();
//   })
// }

async function getData() {
  const resp = await fetch(BASE_URL);
  if (!resp.ok) {
    throw new Error(
      resp.statusText || `Unknown Error. Response status ${resp.status}`
    );
  }
  return resp.json();
}



function deleteData (id){
  const options = {
    method: "DELETE"
  };
  return fetch(`${BASE_URL}/${id}`, options)
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(
        resp.statusText || `Unknown Error. Response status ${resp.status}`
      );
    }
    return resp.json();
  } )
};
export { serviceWriteData, getData, deleteData };