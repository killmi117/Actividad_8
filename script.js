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

function initMap() {
  // Crea un mapa en el elemento con id "map"
  var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
  });

  // Obtiene la ubicación actual del usuario si es compatible
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          };

          // Centra el mapa en la ubicación del usuario
          map.setCenter(pos);

          // Crea un marcador en la ubicación del usuario
          var marker = new google.maps.Marker({
              position: pos,
              map: map
          });
      }, function () {
          // Maneja los errores de geolocalización
          handleLocationError(true, infoWindow, map.getCenter());
      });
  } else {
      // El navegador no soporta geolocalización
      handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  // Maneja los errores de geolocalización
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
      'Error: El servicio de geolocalización falló.' :
      'Error: Tu navegador no soporta geolocalización.');
  infoWindow.open(map);
}
