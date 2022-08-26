getShinyImages()
  .then(function (data) {
    console.log(data);
    data.forEach(function (data) {
      const img = document.createElement('img');
      img.src = data.sprites.front_shiny;
      img.alt = data.name;
      app.appendChild(img);
    })
})

//Meter el id o el objeto de local storage
function getShinyImages() {
        return localStorage.id;
}
  

