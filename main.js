const button = document.querySelector("button");

function clicked() {
  axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res) => {
    for (i = 0; i < res.data.results[0].residents.length; i++) {
      axios.get(res.data.results[0].residents[i]).then((res) => {
        let h2 = document.createElement("h2");
        h2.innerText = res.data.name;
        document.querySelector("body").appendChild(h2);
      });
    }
  });
}

button.addEventListener("click", clicked);
