const questions = [
  "🔥 ¿Cuál es la parte de mi cuerpo que más te gusta?",
  "😳 ¿Qué es lo más loco que harías conmigo?",
  "💋 ¿Dónde me darías un beso ahora mismo?",
  "😂 ¿Quién se enamoró primero?",
  "❤️ ¿Me extrañas cuando no hablo?",
  " ¿Que harias si te enteras que Fer/Javier tiene a otra novi@?",
  "¿Cuantos hijos tendrias?",
  "¿Javier se va a quedar calvo antes que termine la carrera?",
  "¿Cogerias con Javier/Fernanda en un carro?"

];

let index = 0;

function answer(choice) {
  const result = document.getElementById("result");

  if (choice === "si") {
    result.innerHTML = "💖 Sabía que dirías que sí 😘";
    index++;
    nextQuestion();
  } else {
    result.innerHTML = "😏 Igual seguimos jugando...";
    index++;
    nextQuestion();
  }
}

function nextQuestion() {
  const q = document.getElementById("question");

  if (index < questions.length) {
    q.innerText = questions[index];
  } else {
    q.innerHTML =
    "❤️❤️❤️❤️❤️<br>" +
    "Te amo Chaeyoung 💕<br>" +
    "Javier siempre piensa en ti 😘<br>" +
    "❤️❤️❤️❤️❤️";


  }
}

function playMusic() {
    document.getElementById("bgMusic").play();
}

nextQuestion();

