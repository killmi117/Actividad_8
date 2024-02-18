var slideIndex = 0;

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
}

showSlides(); // Inicia el carrusel automáticamente al cargar la página

// Función para abrir el modal con la imagen ampliada
function abrirModal(url) {
  var modal = document.getElementById("myModal");
  var imagenModal = document.getElementById("imagenModal");
  imagenModal.src = url;
  modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Maps

function iniciarMap(){
  var coord = {lat: 31.5889594 ,lng: -106.3760624};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}