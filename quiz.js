// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SuaApiKey",
    authDomain: "team-os-mosqueteiros.firebaseapp.com",
    projectId: "team-os-mosqueteiros",
    storageBucket: "team-os-mosqueteiros.appspot.com",
    messagingSenderId: "714464364802",
    appId: "1:714464364802:web:557248e064c01a13e39a1b"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Obtenha uma referência para o Firestore
const db = firebase.firestore();

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
      }
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

    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const scoreElement = document.getElementById("score-value");
    const timerElement = document.getElementById("timer-value");

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
        timerElement.textContent = 10;

        timer = setInterval(() => {
            const currentTime = parseInt(timerElement.textContent);
            if (currentTime > 0) {
                timerElement.textContent = currentTime - 1;
            } else {
                clearInterval(timer);
                showCorrectAnswer();
            }
        }, 1000);
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const answersElement = document.getElementById("answers");
    answersElement.querySelectorAll("button").forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        }
        if (button.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
            button.classList.add("incorrect");
        }
    });
    if (selectedAnswer === correctAnswer) {
        score += 7;
    }
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 2000);
}


function showCorrectAnswer() {
    const answersElement = document.getElementById("answers");
    answersElement.querySelectorAll("button").forEach(button => {
        if (button.textContent === questions[currentQuestion].correctAnswer) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 2000);
}

function endQuiz() {
    const playerName = document.getElementById("player-name").value;
    saveScore(playerName, score); // Salvar a pontuação no Firebase Firestore
    setTimeout(() => {
        window.location.href = "quiz.html"; // Redirecionar para quiz.html após 2 segundos
    }, 2000);
}

function saveScore(playerName, playerScore) {
    db.collection("rankings").add({
        name: playerName,
        score: playerScore
    })
    .then((docRef) => {
        console.log("Pontuação salva com ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Erro ao salvar pontuação: ", error);
    });
}

function showRanking() {
    const rankingTable = document.getElementById("ranking-table");
    db.collection("rankings").orderBy("score", "desc").limit(10).get()
    .then((querySnapshot) => {
        let rank = 1;
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const row = rankingTable.insertRow(-1);
            const rankCell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const scoreCell = row.insertCell(2);
            rankCell.textContent = rank;
            nameCell.textContent = data.name;
            scoreCell.textContent = data.score;
            if (rank <= 3) {
                // Adicionar ícone de troféu para os 3 primeiros lugares
                const trophyIcon = document.createElement("i");
                trophyIcon.className = "trophy"; // Use a classe CSS 'trophy'
                scoreCell.appendChild(trophyIcon);
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
