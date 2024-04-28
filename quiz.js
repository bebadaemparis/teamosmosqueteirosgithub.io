const questions = [
  {
    question: "Qual é a capital do Brasil?",
    answers: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    correctAnswer: "Brasília"
  },
  {
    question: "Quem escreveu Dom Casmurro?",
    answers: ["Machado de Assis", "José de Alencar", "Euclides da Cunha", "Monteiro Lobato"],
    correctAnswer: "Machado de Assis"
  },
  {
    question: "Qual é o maior animal terrestre?",
    answers: ["Elefante Africano", "Girafa", "Hipopótamo", "Rinoceronte"],
    correctAnswer: "Elefante Africano"
  },
  {
    question: "Qual é a capital da Argentina?",
    answers: ["Buenos Aires", "Córdoba", "Rosário", "Mendoza"],
    correctAnswer: "Buenos Aires"
  },
  {
    question: "Qual é o maior país do mundo em área territorial?",
    answers: ["Rússia", "Canadá", "China", "Estados Unidos"],
    correctAnswer: "Rússia"
  },
  {
    question: "Quem pintou o quadro 'Mona Lisa'?",
    answers: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "Qual é o planeta mais próximo do Sol?",
    answers: ["Mercúrio", "Vênus", "Terra", "Marte"],
    correctAnswer: "Mercúrio"
  },
  {
    question: "Qual é o maior oceano do mundo?",
    answers: ["Oceano Pacífico", "Oceano Atlântico", "Oceano Índico", "Oceano Ártico"],
    correctAnswer: "Oceano Pacífico"
  },
  {
    question: "Qual é o monte mais alto do mundo?",
    answers: ["Monte Everest", "Monte Kilimanjaro", "Monte Aconcágua", "Monte Denali"],
    correctAnswer: "Monte Everest"
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    answers: ["Deodoro da Fonseca", "Getúlio Vargas", "Juscelino Kubitschek", "Tancredo Neves"],
    correctAnswer: "Deodoro da Fonseca"
  },
  {
    question: "Qual é a capital da Austrália?",
    answers: ["Camberra", "Sydney", "Melbourne", "Brisbane"],
    correctAnswer: "Camberra"
  },
  {
    question: "Quem escreveu 'Romeu e Julieta'?",
    answers: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "Quantos continentes existem no mundo?",
    answers: ["Sete", "Cinco", "Seis", "Oito"],
    correctAnswer: "Sete"
  },
  {
    question: "Qual é a moeda oficial do Japão?",
    answers: ["Iene", "Dólar", "Euro", "Libra"],
    correctAnswer: "Iene"
  },
  {
    question: "Qual é o maior deserto do mundo?",
    answers: ["Deserto do Saara", "Deserto de Gobi", "Deserto do Kalahari", "Deserto da Arábia"],
    correctAnswer: "Deserto do Saara"
  },
  {
    question: "Quem foi o primeiro homem a pisar na Lua?",
    answers: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Alan Shepard"],
    correctAnswer: "Neil Armstrong"
  },
  {
    question: "Qual é o maior animal do mundo?",
    answers: ["Baleia Azul", "Elefante Africano", "Tubarão Branco", "Girafa"],
    correctAnswer: "Baleia Azul"
  },
  {
    question: "Qual é a cidade mais populosa do mundo?",
    answers: ["Tóquio", "Xangai", "Cidade do México", "Nova Delhi"],
    correctAnswer: "Tóquio"
  },
  {
    question: "Quem foi o fundador da Microsoft?",
    answers: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"],
    correctAnswer: "Bill Gates"
  },
  {
    question: "Qual é o maior rio do mundo em volume de água?",
    answers: ["Rio Amazonas", "Rio Nilo", "Rio Yangtzé", "Rio Mississippi"],
    correctAnswer: "Rio Amazonas"
  },
  {
    question: "Qual é o filme mais longo da história?",
    answers: ["Logistics", "O Senhor dos Anéis: O Retorno do Rei", "Apocalypse Now", "Cleópatra"],
    correctAnswer: "Logistics"
  },
  {
    question: "Quem pintou o teto da Capela Sistina?",
    answers: ["Michelangelo", "Leonardo da Vinci", "Rafael", "Donatello"],
    correctAnswer: "Michelangelo"
  },
  {
    question: "Qual é a montanha mais alta do sistema solar?",
    answers: ["Monte Olimpo", "Monte Everest", "Monte Kilimanjaro", "Monte Fuji"],
    correctAnswer: "Monte Olimpo"
  },
  {
    question: "Quantos ossos tem o corpo humano adulto?",
    answers: ["206", "210", "198", "220"],
    correctAnswer: "206"
  },
  {
    question: "Quem foi o primeiro homem a ganhar o Prêmio Nobel da Paz?",
    answers: ["Henry Dunant", "Frédéric Passy", "Theodore Roosevelt", "Albert Schweitzer"],
    correctAnswer: "Frédéric Passy"
  },
  {
    question: "Qual é o menor país do mundo em área territorial?",
    answers: ["Vaticano", "Mônaco", "Nauru", "Tuvalu"],
    correctAnswer: "Vaticano"
  },
  {
    question: "Qual é o país mais populoso do mundo?",
    answers: ["China", "Índia", "Estados Unidos", "Indonésia"],
    correctAnswer: "China"
  },
  {
    question: "Qual é a cidade mais antiga do mundo?",
    answers: ["Damasco", "Jerusalém", "Alexandria", "Beirute"],
    correctAnswer: "Damasco"
  },
  {
    question: "Qual é o sistema de governo do Brasil?",
    answers: ["Monarquia", "República", "Ditadura", "Oligarquia"],
    correctAnswer: "República"
},
{
  question: "Quem foi o presidente dos Estados Unidos durante a Guerra Civil Americana?",
  answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Franklin D. Roosevelt"],
  correctAnswer: "Abraham Lincoln"
},

];


let currentQuestion = 0;
let score = 0;
let timer;

function startQuiz() {
  const playerName = document.getElementById("player-name").value;
  if (playerName === "") {
    alert("Por favor, digite seu nome.");
    return;
  }

  shuffleArray(questions); // Embaralha as perguntas
  questions.forEach(question => {
    shuffleArray(question.answers); // Embaralha as respostas de cada pergunta
  });

  // Ocultar o formulário
  document.getElementById('start-container').style.display = 'none';

  // Exibir o quiz
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('score').style.display = 'block';
  document.getElementById('timer').style.display = 'block';
  document.getElementById('question-total').textContent = questions.length;

  showQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const scoreElement = document.getElementById("score-value");
  const timerElement = document.getElementById("timer-value");
  const progressElement = document.getElementById("progress");
  const questionCountElement = document.getElementById("question-count");

  clearInterval(timer); // Limpa o temporizador atual (se existir)

  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = "";
    question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.onclick = () => checkAnswer(answer, question.correctAnswer);
      answersElement.appendChild(button);
    });

    scoreElement.textContent = score;
    timerElement.textContent = 20;
    progressElement.textContent = ((currentQuestion + 1) / questions.length * 100).toFixed(0);
    questionCountElement.textContent = currentQuestion + 1;

    let remainingTime = 20;
    timer = setInterval(() => {
      timerElement.textContent = remainingTime;
      if (remainingTime > 0) {
        remainingTime--; // Decrementa o tempo restante
      } else {
        clearInterval(timer);
        showCorrectAnswer();
      }
    }, 1000); // Intervalo de 1 segundo
  } else {
    endQuiz();
  }
}

function checkAnswer(selectedAnswer, correctAnswer) {
  clearInterval(timer); // Limpa o temporizador

  const answersElement = document.getElementById("answers");
  answersElement.querySelectorAll("button").forEach(button => {
    button.disabled = true;
    if (button.textContent === correctAnswer) {
      button.style.backgroundColor = "green"; // Cor verde para respostas corretas
      if (button.textContent === selectedAnswer) {
        score += 7; // Adiciona 7 pontos à pontuação do jogador para respostas corretas
        document.getElementById("score-value").textContent = score;
      }
    } else if (button.textContent === selectedAnswer) {
      button.style.backgroundColor = "red"; // Cor vermelha para respostas incorretas
    }
  });

  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 2000); // Muda para a próxima pergunta após 2 segundos
}

function endQuiz() {
  // Exibir a pontuação final do jogador
  const finalScore = document.getElementById("score").textContent;
  alert(`Sua pontuação final é: ${finalScore}`);
  setTimeout(() => {
    window.location.href = "quiz.html"; // Redirecionar para quiz.html após 2 segundos
}, 2000);
 // Salvar os dados do jogador
 savePlayerData();


}


 

function savePlayerData() {
  const playerName = document.getElementById("player-name").value;
  const playerPhotoInput = document.getElementById("player-photo");

  if (!playerName) {
    alert("Por favor, digite seu nome.");
    return;
  }

  if (playerPhotoInput.files.length === 0) {
    alert("Por favor, selecione uma foto.");
    return;
  }

  const playerPhoto = playerPhotoInput.files[0];

  const storageRef = firebase.storage().ref().child(`players/${playerName}/${playerPhoto.name}`);
  storageRef.put(playerPhoto).then(() => {
    console.log("Foto do jogador enviada com sucesso.");

    storageRef.getDownloadURL().then((photoUrl) => {
      console.log("URL da foto do jogador: ", photoUrl); // Adicionado para depuração

      // Salvar os dados do jogador no Firestore
      firebase.firestore().collection("rankings").add({
        name: playerName,
        score: score,
        player_photo_url: photoUrl
      }).then(() => {
        console.log("Dados do jogador salvos com sucesso.");
        showRanking();
      }).catch((error) => {
        console.error("Erro ao salvar os dados do jogador: ", error);
      });
    }).catch((error) => {
      console.error("Erro ao obter a URL da foto do jogador: ", error);
    });
  }).catch((error) => {
    console.error("Erro ao enviar a foto do jogador: ", error);
  });
}

function showRanking() {
  const rankingTable = document.getElementById("ranking-table");
  firebase.firestore().collection("rankings").orderBy("score", "desc").limit(10).get()
    .then((querySnapshot) => {
      rankingTable.innerHTML = ""; // Limpar a tabela antes de adicionar novas linhas
      let rank = 1;
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = rankingTable.insertRow(-1);
        const rankCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const scoreCell = row.insertCell(2);
        const photoCell = row.insertCell(3); // Coluna para a foto do jogador

        rankCell.textContent = rank;
        nameCell.textContent = data.name;
        scoreCell.textContent = data.score;

        // Adicionar a foto do jogador, se disponível
        if (data.player_photo_url) {
          const playerPhoto = document.createElement("img");
          playerPhoto.src = data.player_photo_url;
          playerPhoto.alt = "Photo";
          playerPhoto.className = "player-photo";
          photoCell.appendChild(playerPhoto);
        }

        if (rank <= 3) {
          // Adicionar ícone de troféu para os 3 primeiros lugares
          const trophyIcon = document.createElement("i");
          trophyIcon.className = "trophy"; // Use a classe CSS 'trophy'
          scoreCell.insertBefore(trophyIcon, scoreCell.firstChild);
        }
        rank++;
      });
    })
    .catch((error) => {
      console.error("Erro ao obter ranking: ", error);
    });
}


document.addEventListener("DOMContentLoaded", function() {
    showRanking();
});

window.addEventListener("beforeunload", function(event) {
  savePlayerData();
});



