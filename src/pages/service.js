const BASE_URL = "http://localhost:4000/";

export const get = (url) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`${BASE_URL}${url}`)
      .then((res) => res.json())
      .then((res) => res);
    return resolve(response);
  });
};

export const post = (url, data) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => res);
    return resolve(response);
  });
};
