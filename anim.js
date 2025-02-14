// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Por que aunque no puede verte, yo nunca culpare a la suerte", time: 0},
  { text: "Yo ya gaste toda mi suerte, mi suerte la use en encontrate a ti", time: 5.5 },
  { text: "Y aunque me quede sin nada, yo nunca culpare a la suerte (suerte)", time: 12 },
  { text: "Yo ya gaste toda mi suerte, mi suerte la use en encontrarte a ti", time: 16.5 },
  { text: "Tengo que confesarte, hoy que estas aqui", time: 23.5 },
  { text: "No te has ido y ya empiezo a extrañarte", time: 24 },
  { text: "Quiero que pase el tiempo entre tu y yo (Muy lento)", time: 29 },
  { text: "Muy lento el tiempo entre tu y yo (Muy lento)", time: 31 },
  { text: "Y aunque de ratos pueda ver en mi guitarra tu cintura", time: 34},
  { text: "Y aunque pueda ver tus fotos sé que no estan a tu altura", time: 37},
  { text: "No hay ninguna cura a la locura de perderte", time: 39.7 },
  { text: "Tus ojos verdes no conservan su color, y en mi cabeza nunca suena igual tu voz", time: 46 },
  { text: "Ya no quiero acudir a recuerdos TE QUIERO AQUÍ", time: 54 },
  { text: "Busco tus BESOS y no encuentro su sabor", time: 56 },
  { text: "Pienso en tu RISA y sin pensar caigo en mi error", time: 60 },
  { text: "Ya no quiero acudir a recuerdos TE QUIERO AQUI", time: 63.4 },
  { text: "Por que aunque no puede verte, yo nunca culpare a la suerte ", time: 70 },
  { text: "Yo ya gaste toda mi suerte, mi suerte la use en encontrate a ti", time: 74.6 },
  { text: "Y aunque me quede sin nada, yo nunca culpare a la suerte (suerte)", time: 80 },
  { text: "Yo ya gaste toda mi suerte, mi suerte la use en encontrarte a ti", time: 86 },
  { text: "...............................", time: 90 },
  { text: "Espero que te haya gustado este pequeño regalo.....", time: 93 },
  { text: "Se que esta fecha es algo importante.....", time: 96 },
  { text: "Pero quiero demostrarte que sin importar el tiempo, eres la única para mi.....", time: 100 },
  { text: "Me hubiera gustado sorprenderte con flores reales....", time: 108 },
  { text: "Pero queria darte algo que se que es poco usual....", time: 112 },
  { text: "Te quiero mucho Lizbeth <3....", time: 116 },
  { text: "Aunque sabes que en realidad Te A*** xd....", time: 123 },
  { text: "Perdón por esto, pero sin importar que....", time: 127 },
  { text: "Queria darte algo especial el día de hoy, lo hice porque pienso en ti mi vida <3", time: 133 },
  { text: "FELIZ 14 DE FEBRERO MI SUERTE <3<3<3<3", time: 137 },
  { text: "Yo ya gaste toda mi suerte, MI SUERTE la use en ENCONTRARTE A TI", time: 144 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);