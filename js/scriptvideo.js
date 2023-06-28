// Obtén una referencia al formulario, el campo de entrada y la lista
let videoForm = document.getElementsByClassName('.formulario');
let videoUrlInput = document.getElementById('video-url-input');
let videoList = document.getElementsByClassName('.image-list');

// Agrega un evento de escucha al formulario cuando se envía
videoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y se refresque la página

  // Obtiene la URL ingresada por el usuario
  let videoUrl = videoUrlInput.value;

  // Obtiene el ID del video de YouTube desde la URL
  let videoId = obtenerIdVideo(videoUrl);

  // Construye la URL de la miniatura del video
  let thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/0.jpg';

  // Crea un elemento de lista para el video
  let videoItem = document.createElement('li');
  videoItem.className = 'video-item';

  // Crea un elemento de imagen para la miniatura y la configura
  let thumbnail = document.createElement('img');
  thumbnail.className = 'video-thumbnail';
  thumbnail.src = thumbnailUrl;
  videoItem.appendChild(thumbnail);

  // Crea un enlace para el video y lo configura
  let videoLink = document.createElement('a');
  videoLink.href = videoUrl;
  videoLink.textContent = 'Video';
  videoItem.appendChild(videoLink);

  // Agrega el elemento de lista al elemento de lista principal
  videoList.appendChild(videoItem);

  // Limpia el campo de entrada de URL
  videoUrlInput.value = '';
});

// Función para extraer el ID del video de YouTube desde la URL
function obtenerIdVideo(url) {
  let id = '';
  let regex = /[?&]v=([^&#]*)/i;
  let match = regex.exec(url);
  if (match) {
    id = match[1];
  }
  return id;
}


function obtenerIdVideo(url) {
  var id = '';
  var regex = /[?&]v=([^&#]*)/i;
  var match = regex.exec(url);
  if (match) {
    id = match[1];
  }
  return id;
}



  