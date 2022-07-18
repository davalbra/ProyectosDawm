document.getElementById("buscar").addEventListener("click", () => {
  //let valueText = document.getElementById("texto").value;
  //let arrayWords = valueText.split(" ");
  //arrayWords.map((palabra) => {
  let URL = "https://api-mobilespecs.azharimm.site/v2/brands";
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("data.data[0]");
      console.log(data.data[0]);

      `let plantilla = <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><a href="${data[0].sourceUrls}" target="_blank">${data[0].word}</a></h5>
                    <audio controls>
                      <source src="${data[0].phonetics[0].audio}" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                    <h6 class="card-subtitle mb-2 text-muted">${data[0].phonetics[0].text}</h6>
                    <p class="card-text text-primary">${data[0].meanings[0].antonyms}</p>
                    <p class="card-text text-danger">${data[0].meanings[0].synonyms}</p>
                </div>
            </div>
            </div>;
        document.getElementById("respuesta").innerHTML += plantilla;`;
    })
    .catch(console.error);
  // });
});
