var brand_id = [];
var brand_name = [];
var brand_slug = [];
var detail = [];
var device_count = [];
var table = document.getElementById("tabla").tBodies[0];
let url = "https://api-mobilespecs.azharimm.site/v2/brands";

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    seleccionar_film(datos);
    cargar_listas(datos);
    chartsdc();
  })
  .catch(console.error);

window.addEventListener("DOMContentLoaded", (event) => {
  mostrarDatos();
});

function mostrarDatos() {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      let body = "";
      for (var i = 0; i < datos.data.length; i++) {
        body += `<tr>
           <th >${datos.data[i].brand_name}</th>
           <th >${datos.data[i].device_count}</th>
       </tr>`;
      }
      document.querySelector("#feedTable").innerHTML = body;
    })
    .catch(console.error);
}

buscaTabla = function () {
  texto = document.getElementById("buscar").value.toLowerCase();
  var r = 0;
  while ((row = table.rows[r++])) {
    if (row.innerText.toLowerCase().indexOf(texto) !== -1)
      row.style.display = null;
    else row.style.display = "none";
  }
};

document.getElementById("buscar").addEventListener("keyup", buscaTabla);
function cargar_listas(datos) {
  for (valor of datos.data) {
    brand_id.push(valor.brand_id);
    brand_name.push(valor.brand_name);
    brand_slug.push(valor.brand_slug);
    detail.push(valor.detail);
    device_count.push(valor.device_count);
  }
}

function seleccionar_film(datos) {
  let titulos =
    "<option value='' selected>Seleccione el nombre de una película</option>";
  var cont = 0;

  for (valor of datos.data) {
    titulos += ` 
        <option value="${cont}">${valor.brand_name}</option>
        `;
    cont++;
  }
  document.getElementById("select-primary").innerHTML = titulos;
}

document
  .getElementById("select-primary")
  .addEventListener("change", (event) => {
    url = detail[document.getElementById("select-primary").selectedIndex - 1];

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        // haciendo los calculos para inyectar las tarjetas
        let cardphone = "";
        for (var i = 0; i < datos.data.phones.length; i++) {
          var aleatorio = Math.random() * 1000;
          aleatorio = parseInt(aleatorio);
          cardphone += `<div class="card">
                          <div class="header">
                            <div class="date">${datos.data.phones[i].brand}</div>
                            <div class="title">${datos.data.phones[i].phone_name}</div>
                          </div>
                          <div class="imgphone">
                            <img src="${datos.data.phones[i].image} " alt="imagen">
                          </div>
                                <div class="price">
                                  <span class="currency">$</span>
                                  <span class="number">${aleatorio}</span>
                                  <span class="frequency">/mo</span>
                                </div>
                        </div>`;
        }
        document.querySelector("#cards").innerHTML = cardphone;
      })
      .catch(console.error);

    window.addEventListener("DOMContentLoaded", (event) => {
      mostrarDatos();
    });
  });

function chartsdc() {
  let chartid = document.querySelector("#graficophone");
  let ejex = [];
  let ejey = [];
  for (let index = 0; index < 10; index++) {
    ejex.push(brand_name[index]);
    ejey.push(device_count[index]);
  }

  const obchart = {
    label: "cantidad",
    data: ejey,
    backgroundColor: " rgba(54,152,235,02)",
    borderColor: " rgba(154,52,100,02)",
    boderWidth: 1,
  };
  return new Chart(chartid, {
    type: "bar",
    data: {
      labels: ejex,
      datasets: [obchart],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
