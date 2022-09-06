const fs = require("fs");

const equipo = [];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
for (let i = 0; i < 1000; i++) {
  numero1 = getRandomInt(8);
  goles1 = goles(numero1);
  golestime1 = golestime(numero1);
  numero2 = getRandomInt(8);
  goles2 = goles(numero2);
  golestime2 = golestime(numero2);
  numNombre = getRandomInt(20);
  numNombre2 = getRandomInt(20);
  equipo[i] = {
    id: `${i + 1}`,
    copa: `copa ${getRandomInt(10)}`,
    local: {
      nombreEquipo: `equipo ${numNombre2}`,
      fueraDeJuego: `${getRandomInt(5)}`,
      amarillas: `${getRandomInt(5)}`,
      rojas: `${getRandomInt(5)}`,
      goles: `${getRandomInt(5)}`,
      distancia: goles1,
      golestimer: golestime1,
      img: `../../../../../assets/shields/equipo ${numNombre2}.png`,
    },
    visitante: {
      nombreEquipo: `equipo ${numNombre}`,
      fueraDeJuego: `${getRandomInt(5)}`,
      amarillas: `${getRandomInt(5)}`,
      rojas: `${getRandomInt(5)}`,
      goles: `${getRandomInt(5)}`,
      distancia: goles2,
      golestimer: golestime2,
      img: `../../../../../assets/shields/equipo ${numNombre}.png`,
    },
  };
}
function golestime(numero) {
  a = [];
  for (let e = 0; e < numero; e++) {
    a[e] = `${getRandomInt(90)}`;
  }
  return a;
}
function goles(numero) {
  a = [];
  for (let e = 0; e < numero; e++) {
    a[e] = `${getRandomInt(90)}`;
  }
  return a;
}
fs.writeFile("./encuentros.json", JSON.stringify(equipo), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file Succesfyly");
  }
});
