/* =============================================
   AGRO FORTE QUIZ – Lógica Principal
   ============================================= */

'use strict';

// ---------- Perguntas ----------
const QUESTIONS = [
  {
    id: 1,
    question: "O que é agricultura sustentável?",
    options: [
      "Produzir alimentos sem se preocupar com o meio ambiente",
      "Produzir alimentos de forma que preserve os recursos naturais para as futuras gerações",
      "Usar o máximo de agrotóxicos para aumentar a produção",
      "Desmatar florestas para plantar mais"
    ],
    correct: 1,
    explanation: "A agricultura sustentável busca equilibrar a produção de alimentos com a conservação dos recursos naturais, garantindo que as gerações futuras também possam produzir.",
    category: "Conceitos Básicos"
  },
  {
    id: 2,
    question: "Qual prática ajuda a preservar o solo na agricultura?",
    options: [
      "Queimadas frequentes",
      "Plantio direto e rotação de culturas",
      "Uso excessivo de fertilizantes químicos",
      "Deixar o solo exposto ao sol e à chuva"
    ],
    correct: 1,
    explanation: "O plantio direto e a rotação de culturas protegem o solo da erosão, mantêm sua fertilidade e reduzem o uso de insumos químicos.",
    category: "Solo"
  },
  {
    id: 3,
    question: "O que é o Código Florestal Brasileiro?",
    options: [
      "Uma lei que proíbe toda atividade agrícola",
      "Uma lei que regula o uso da terra, protegendo áreas de preservação e permitindo a produção agrícola",
      "Um documento que autoriza o desmatamento total",
      "Uma norma apenas para empresas madeireiras"
    ],
    correct: 1,
    explanation: "O Código Florestal (Lei 12.651/2012) estabelece regras para o uso do solo, protege as Áreas de Preservação Permanente (APPs) e as Reservas Legais, equilibrando produção e conservação.",
    category: "Legislação"
  },
  {
    id: 4,
    question: "O que é a Reserva Legal em uma propriedade rural?",
    options: [
      "Uma área onde o agricultor pode construir sua casa",
      "Uma área da propriedade que deve ser mantida com vegetação nativa",
      "Um depósito de máquinas agrícolas",
      "Uma área destinada exclusivamente ao plantio de soja"
    ],
    correct: 1,
    explanation: "A Reserva Legal é uma área obrigatória dentro da propriedade rural que deve ser preservada com vegetação nativa, contribuindo para a biodiversidade e o equilíbrio ambiental.",
    category: "Legislação"
  },
  {
    id: 5,
    question: "Qual é o papel das florestas para a agricultura?",
    options: [
      "As florestas não têm relação com a agricultura",
      "As florestas regulam o clima, protegem nascentes e garantem chuvas para as lavouras",
      "As florestas apenas ocupam espaço que poderia ser usado para plantar",
      "As florestas atraem pragas para as plantações"
    ],
    correct: 1,
    explanation: "As florestas são fundamentais para a agricultura: regulam o ciclo das chuvas, protegem nascentes e rios, reduzem a temperatura e servem de habitat para polinizadores essenciais.",
    category: "Meio Ambiente"
  },
  {
    id: 6,
    question: "O que é o manejo integrado de pragas (MIP)?",
    options: [
      "Usar apenas agrotóxicos para eliminar todas as pragas",
      "Combinar diferentes métodos de controle para reduzir pragas com menor impacto ambiental",
      "Ignorar as pragas e esperar que desapareçam sozinhas",
      "Queimar toda a lavoura quando aparecem pragas"
    ],
    correct: 1,
    explanation: "O MIP combina controle biológico, cultural, mecânico e químico de forma equilibrada, reduzindo o uso de agrotóxicos e preservando insetos benéficos como abelhas e predadores naturais.",
    category: "Produção"
  },
  {
    id: 7,
    question: "Por que as abelhas são importantes para a agricultura?",
    options: [
      "Apenas produzem mel, sem relação com as plantações",
      "São responsáveis pela polinização de grande parte dos alimentos que consumimos",
      "São prejudiciais às lavouras",
      "Servem apenas como atração turística"
    ],
    correct: 1,
    explanation: "As abelhas polinizam cerca de 70% das culturas alimentares do mundo. Sem elas, a produção de frutas, legumes e sementes seria drasticamente reduzida.",
    category: "Biodiversidade"
  },
  {
    id: 8,
    question: "O que é a agricultura familiar?",
    options: [
      "Grandes fazendas com produção industrial",
      "Produção realizada em pequenas propriedades, com mão de obra da própria família",
      "Apenas plantações de flores para decoração",
      "Agricultura feita exclusivamente por robôs"
    ],
    correct: 1,
    explanation: "A agricultura familiar é responsável por mais de 70% dos alimentos consumidos no Brasil. É praticada em pequenas propriedades com gestão e trabalho da própria família.",
    category: "Conceitos Básicos"
  },
  {
    id: 9,
    question: "O que é a irrigação eficiente?",
    options: [
      "Usar a maior quantidade possível de água nas plantações",
      "Usar a quantidade certa de água no momento certo, evitando desperdício",
      "Irrigar apenas quando chover muito",
      "Não usar água nas plantações"
    ],
    correct: 1,
    explanation: "A irrigação eficiente, como o gotejamento, entrega água diretamente às raízes das plantas, economizando até 50% de água em comparação com métodos tradicionais.",
    category: "Recursos Hídricos"
  },
  {
    id: 10,
    question: "O que significa 'agronegócio sustentável'?",
    options: [
      "Produzir o máximo possível sem nenhuma preocupação ambiental",
      "Integrar produção agrícola, pecuária e florestal de forma que gere lucro e preserve o meio ambiente",
      "Exportar produtos agrícolas para outros países",
      "Usar apenas tecnologias antigas na produção"
    ],
    correct: 1,
    explanation: "O agronegócio sustentável busca integrar produtividade e responsabilidade ambiental, usando tecnologias como o sistema Integração Lavoura-Pecuária-Floresta (ILPF) para maximizar resultados com menor impacto.",
    category: "Produção"
  }
];

// ---------- Estado do jogo ----------
let state = {
  questions: [],
  currentIndex: 0,
  score: 0,
  answers: [],       // { questionId, chosen, correct, timeLeft }
  timerInterval: null,
  timeLeft: 20,
  answered: false,
  startTime: null,
  totalTime: 0
};

// ---------- Helpers de DOM ----------
const $ = id => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

// ---------- Inicializar ----------
function init() {
  $('btn-start').addEventListener('click', startQuiz);
  $('btn-next').addEventListener('click', nextQuestion);
  $('btn-restart').addEventListener('click', restartQuiz);
  $('btn-review').addEventListener('click', showReview);
  $('btn-back').addEventListener('click', () => showScreen('screen-result'));
}

// ---------- Iniciar Quiz ----------
function startQuiz() {
  state.questions = shuffle([...QUESTIONS]);
  state.currentIndex = 0;
  state.score = 0;
  state.answers = [];
  state.totalTime = 0;
  state.startTime = Date.now();

  showScreen('screen-quiz');
  renderQuestion();
}

// ---------- Renderizar Pergunta ----------
function renderQuestion() {
  const q = state.questions[state.currentIndex];
  state.answered = false;
  state.timeLeft = 20;

  // Contador e categoria
  $('question-counter').textContent = `Questão ${state.currentIndex + 1} de ${state.questions.length}`;
  $('category-badge').textContent = q.category;

  // Pontuação
  $('current-score').textContent = state.score;

  // Barra de progresso
  const pct = ((state.currentIndex) / state.questions.length) * 100;
  $('progress-bar').style.width = pct + '%';

  // Texto da pergunta
  $('question-text').textContent = q.question;

  // Opções
  const grid = $('options-grid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i));
    grid.appendChild(btn);
  });

  // Esconder feedback
  $('feedback-box').classList.add('hidden');

  // Iniciar timer
  startTimer();
}

// ---------- Timer ----------
function startTimer() {
  clearInterval(state.timerInterval);
  updateTimerUI();

  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();

    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      if (!state.answered) timeOut();
    }
  }, 1000);
}

function updateTimerUI() {
  const pct = (state.timeLeft / 20) * 100;
  const bar = $('timer-bar');
  bar.style.width = pct + '%';
  $('timer-text').textContent = state.timeLeft + 's';

  bar.classList.remove('warning', 'danger');
  if (state.timeLeft <= 5)       bar.classList.add('danger');
  else if (state.timeLeft <= 10) bar.classList.add('warning');
}

function timeOut() {
  state.answered = true;
  const q = state.questions[state.currentIndex];

  state.answers.push({
    questionId: q.id,
    chosen: -1,
    correct: q.correct,
    timeLeft: 0,
    isCorrect: false
  });

  // Destacar resposta correta
  highlightOptions(-1, q.correct);
  showFeedback(false, '⏰ Tempo esgotado! ' + q.explanation);
}

// ---------- Selecionar Resposta ----------
function selectAnswer(chosen) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const q = state.questions[state.currentIndex];
  const isCorrect = chosen === q.correct;

  // Pontuação baseada no tempo restante
  if (isCorrect) {
    const bonus = Math.round((state.timeLeft / 20) * 100);
    state.score += bonus;
  }

  state.answers.push({
    questionId: q.id,
    chosen,
    correct: q.correct,
    timeLeft: state.timeLeft,
    isCorrect
  });

  highlightOptions(chosen, q.correct);

  const feedbackMsg = isCorrect
    ? `✅ Correto! ${q.explanation}`
    : `❌ Resposta errada. ${q.explanation}`;

  showFeedback(isCorrect, feedbackMsg);
}

// ---------- Destacar Opções ----------
function highlightOptions(chosen, correct) {
  const btns = $('options-grid').querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    else if (i === chosen && chosen !== correct) btn.classList.add('wrong');
  });
}

// ---------- Mostrar Feedback ----------
function showFeedback(isCorrect, message) {
  const box = $('feedback-box');
  $('feedback-icon').textContent = isCorrect ? '🌟' : '🌱';
  $('feedback-text').textContent = message;
  box.classList.remove('hidden');
}

// ---------- Próxima Pergunta ----------
function nextQuestion() {
  state.currentIndex++;

  if (state.currentIndex >= state.questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

// ---------- Mostrar Resultado ----------
function showResult() {
  state.totalTime = Math.round((Date.now() - state.startTime) / 1000);

  const correct = state.answers.filter(a => a.isCorrect).length;
  const wrong   = state.answers.length - correct;
  const avgTime = state.answers.length > 0
    ? Math.round(state.totalTime / state.answers.length)
    : 0;

  // Normalizar pontuação para 0-1000
  const maxScore = state.questions.length * 100;
  const normalized = Math.round((state.score / maxScore) * 1000);

  $('final-score').textContent = normalized;
  $('stat-correct').textContent = correct;
  $('stat-wrong').textContent   = wrong;
  $('stat-time').textContent    = avgTime + 's';

  // Mensagem e emoji baseados no desempenho
  const pct = correct / state.questions.length;
  let emoji, title, subtitle, message;

  if (pct === 1) {
    emoji    = '🏆';
    title    = 'Perfeito!';
    subtitle = 'Você acertou todas as questões!';
    message  = 'Incrível! Você é um verdadeiro especialista em agricultura sustentável. Continue espalhando esse conhecimento para cuidar do nosso planeta!';
  } else if (pct >= 0.8) {
    emoji    = '🌟';
    title    = 'Excelente!';
    subtitle = 'Você tem ótimo conhecimento sobre o tema!';
    message  = 'Parabéns! Você demonstra um ótimo entendimento sobre o equilíbrio entre produção agrícola e meio ambiente. Quase lá!';
  } else if (pct >= 0.6) {
    emoji    = '🌿';
    title    = 'Muito Bom!';
    subtitle = 'Você está no caminho certo!';
    message  = 'Bom trabalho! Você tem uma boa base sobre agricultura sustentável. Continue estudando para aprofundar ainda mais seu conhecimento!';
  } else if (pct >= 0.4) {
    emoji    = '🌱';
    title    = 'Continue Aprendendo!';
    subtitle = 'Você está crescendo como uma semente!';
    message  = 'Não desanime! O conhecimento sobre sustentabilidade é fundamental. Revise as respostas e tente novamente para melhorar seu desempenho!';
  } else {
    emoji    = '🪴';
    title    = 'Vamos Crescer Juntos!';
    subtitle = 'Todo aprendizado começa com o primeiro passo.';
    message  = 'Não se preocupe! Agora você sabe mais sobre o tema. Revise as explicações das respostas e tente novamente. Você vai melhorar!';
  }

  $('result-emoji').textContent    = emoji;
  $('result-title').textContent    = title;
  $('result-subtitle').textContent = subtitle;
  $('result-message').textContent  = message;

  showScreen('screen-result');

  // Animar círculo de progresso
  setTimeout(() => {
    const circumference = 339.3;
    const offset = circumference - (pct * circumference);
    const circle = $('circle-progress');
    circle.style.strokeDashoffset = offset;

    if (pct >= 0.8)      circle.style.stroke = '#4caf50';
    else if (pct >= 0.5) circle.style.stroke = '#f9c74f';
    else                 circle.style.stroke = '#e53935';
  }, 300);
}

// ---------- Revisão ----------
function showReview() {
  const list = $('review-list');
  list.innerHTML = '';

  state.answers.forEach((ans, idx) => {
    const q = QUESTIONS.find(q => q.id === ans.questionId);
    if (!q) return;

    const item = document.createElement('div');
    item.className = `review-item ${ans.isCorrect ? 'correct-item' : 'wrong-item'}`;

    const letters = ['A', 'B', 'C', 'D'];
    const yourAnswerText = ans.chosen === -1
      ? 'Sem resposta (tempo esgotado)'
      : `${letters[ans.chosen]}. ${q.options[ans.chosen]}`;
    const correctAnswerText = `${letters[q.correct]}. ${q.options[q.correct]}`;

    item.innerHTML = `
      <div class="review-item-header">
        <span>${ans.isCorrect ? '✅' : '❌'}</span>
        <span>Questão ${idx + 1} — ${q.category}</span>
      </div>
      <div class="review-item-body">
        <p class="review-q">${q.question}</p>
        <div class="review-answers">
          ${!ans.isCorrect ? `<p class="review-answer your-answer">Sua resposta: ${yourAnswerText}</p>` : ''}
          <p class="review-answer right-answer">Resposta correta: ${correctAnswerText}</p>
        </div>
        <div class="review-explanation">💡 ${q.explanation}</div>
      </div>
    `;

    list.appendChild(item);
  });

  showScreen('screen-review');
}

// ---------- Reiniciar ----------
function restartQuiz() {
  // Resetar círculo
  $('circle-progress').style.strokeDashoffset = '339.3';
  showScreen('screen-start');
}

// ---------- Embaralhar ----------
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------- Iniciar ----------
document.addEventListener('DOMContentLoaded', init);
