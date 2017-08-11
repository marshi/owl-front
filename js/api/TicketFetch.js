export default function (callback) {
  fetch("http://localhost:8080/tickets")
    .then(res => res.json())
    .then(json => json.map(convertFrom))
    .then(model => callback(model))
}

function convertFrom(json) {
  return {
    id: json.id,
    title: json.title,
    content: json.content,
    projectName: json.projectId,
    assignee: json.assignId
  }
}
