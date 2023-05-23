const url = "http://localhost:3000";

function registrarse(nombre, correo, contraseña) {
  const data = {
    "correo": correo,
    "contraseña": contraseña
  }
  const urlUsusario = url + "/usuarios/registrarse/" + nombre;
  const response = fetch(urlUsusario, {
    url: urlUsusario,
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    //mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
}

function test() {
  const urlTest = url + "/usuarios";
  fetch(urlTest).then(function (response) {
    response.json().then(function (data) {
      console.log("entra al fetch");
      console.log(data);
    });
  });
}
