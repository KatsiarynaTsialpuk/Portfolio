const url = form.getAttribute("action");
const type = form.getAttribute("method");
const formData = new FormData(form);
const errorMes = "Error";
const goodMed = "All right";

fetch(url, { method: type, body: formData })
  .then(checkStatus)
  .then(response => response.json())
  .then(data => {
    renderPopup(hapSmile, data.mes);
  })
  .catch(error => {
    renderPopup(sadSmile, error);
  });

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
