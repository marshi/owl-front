import fetch from "isomorphic-fetch";

export default function post(path, body) {
  return fetch(
    path,
    Object.assign(
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(body),
      }
    )
  ).then(res => {console.log(res); return res.json});

}
