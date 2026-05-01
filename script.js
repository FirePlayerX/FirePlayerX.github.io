const questionStage = document.querySelector("#question-stage");
const stepLabel = document.querySelector("#step-label");
const questionTitle = document.querySelector("#question-title");
const choicesContainer = document.querySelector("#choices");
const progressFill = document.querySelector("#progress-fill");
const vibeTitle = document.querySelector("#vibe-title");
const vibeDescription = document.querySelector("#vibe-description");
const storyCopy = document.querySelector("#story-copy");
const energyWord = document.querySelector("#energy-word");
const energyIntention = document.querySelector("#energy-intention");
const energyNote = document.querySelector("#energy-note");
const ending = document.querySelector("#ending");
const endingTitle = document.querySelector("#ending-title");
const endingText = document.querySelector("#ending-text");
const finalNote = document.querySelector("#final-note");
const restartButton = document.querySelector("#restart");
const musicToggle = document.querySelector("#music-toggle");
const backgroundSong = document.querySelector("#background-song");
const currentSongName = document.querySelector("#current-song-name");
const songChoiceButtons = [...document.querySelectorAll(".song-choice")];
const entryScreen = document.querySelector("#entry-screen");
const enterButton = document.querySelector("#enter-button");
const vibeAura = document.querySelector(".vibe-aura");
const pauseOverlay = document.querySelector("#pause-overlay");
const pauseTitle = document.querySelector("#pause-title");
const pauseFact = document.querySelector("#pause-fact");
const pauseFill = document.querySelector("#pause-fill");
const pauseContinue = document.querySelector("#pause-continue");

const songs = {
  como: {
    name: "Como Te Veo",
    src: "Darho%20-%20Como%20Te%20Veo%20(Video%20Oficial)%20-%20Bless%20Music.mp3"
  },
  flaquita: {
    name: "Flaquita",
    src: "marco-mares-flaquita-audio-128-ytshorts.savetube.me.mp3"
  }
};

const storyMessages = [
  "Esta no es una encuesta normal es mi forma de conocerte un poquito más, de una manera especial.",
  "Esto empezó como una excusa bonita y cada respuesta lo hace más interesante.",
  "Cada respuesta deja una pista pequeña y sí, estoy poniendo atención.",
  "No sé si esto cuenta como encuesta pero sí cuenta como intento bonito.",
  "Es un pequeño espacio donde quiero ir descubriendo quién eres.",
  "Esto es mi manera de hacer algo diferente contigo, sin hacerlo raro. Bueno, solo un poquito."
];

const vibes = {
  amorosa: {
    title: "Como un detalle que sí se queda",
    description: "Energía cálida, cercana y atenta a los detalles pequeños.",
    energy: ["Ternura", "Detalles que se quedan"],
    notes: [
      "Dato lindo: recordar tu bebida favorita cuenta como romance avanzado.",
      "Un detalle pequeño puede quedarse dando vueltas en la cabeza todo el día.",
      "Nivel de ternura detectado: peligrosamente alto, proceder con detalles.",
      "Si esto fuera película, aquí entraría una mirada lenta y cero disimulo."
    ],
    pause: {
      titles: ["Tomando un momento", "Construyendo algo", "Algo bonito se está formando"],
      facts: [
        "Dato curioso: los pingüinos regalan una piedra cuando encuentran a alguien especialsupongo que cada quien encuentra su forma.",
        "Dato curioso: recordar un detalle pequeño suele sentirse más especial que hacer un gesto enorme sin intención.",
        "Dato curioso: el cerebro guarda mejor los momentos que tienen emoción por eso algunos detalles se quedan tanto."
      ],
      done: ["Listo esta respuesta tiene algo de ternura.", "Ok aquí hay una pista bonita.", "Confirmado los detalles sí importan."]
    },
    endingTitle: "Contigo no son detalles, es la intención lo que cuenta",
    endingText: "Tus respuestas dicen más de lo que parecen: que para ti lo bonito vive en la intención, en lo que se cuida y en esos gestos que no necesitan hacerse notar.",
    note: "Esto empezó como cualquier plática",
    melody: [392, 523.25, 659.25, 783.99, 659.25],
    tempo: 0.36,
    wave: "sine"
  },
  aventurera: {
    title: "como un momento que se vuelve anécdota",
    description: "Energía ligera, espontánea y con ganas de que algo fluya.",
    energy: ["Vibra positiva", "Algo que se vuelve historia"],
    notes: [
      "Dato importante: un plan improvisado también puede llevar outfit bonito.",
      "Traje un mapa emocional, pero creo que ya lo perdí. Buen inicio.",
      "Modo aventura: activado. Modo saber exactamente qué hacemos: pendiente.",
      "Si dices 'vamos', probablemente ya estoy buscando dónde queda 'allá'."
    ],
    pause: {
      titles: ["Esto se está poniendo interesante", "Como que ya va fluyendo", "No esperaba esto"],
      facts: [
        "Dato curioso: reír con alguien ayuda a que la confianza aparezca más rápido, casi sin pedir permiso.",
        "Dato curioso: compartir algo nuevo con alguien puede hacer que ese momento se recuerde con más fuerza.",
        "Dato curioso: a veces una caminata sin plan dice más que una cita perfectamente planeada."
      ],
      done: ["Listo esto ya tiene un poco de aventura.", "Ok. esto va mejor de lo esperado.", "Confirmado aquí hay ganas de que algo fluya."]
    },
    endingTitle: "Creo que contigo algo tendría que fluir",
    endingText: "Tus respuestas tienen chispa: no piden un guion perfecto, piden un momento vivo, una risa a tiempo y una historia que no se sienta demasiado planeada.",
    note: "Si esto fuera una invitación, dejaría espacio para improvisar un poco:yo llevo las flores tu traen la canasta.",
    melody: [329.63, 392, 493.88, 587.33, 783.99],
    tempo: 0.24,
    wave: "triangle"
  },
  tranquila: {
    title: "como una conversación sin prisa",
    description: "Energía serena, cómoda y con espacio para confiar sin correr.",
    energy: ["Calma", "Confianza sin presión"],
    notes: [
      "Dato lindo: la calma también coquetea, nomás lo hace bajito.",
      "Bajé la voz para no arruinar el momento.",
      "Plan recomendado: café, buena plática y cero presión de actuar cool.",
      "Aquí nadie corre. Bueno, quizá mi corazón, pero ese no sabe comportarse."
    ],
    pause: {
      titles: ["Ordenando ideas", "Entendiendo mejor", "Se siente más claro"],
      facts: [
        "Dato curioso: escuchar de verdad es una de las formas más simples y más raras de hacer sentir especial a alguien.",
        "Dato curioso: a veces una conexión empieza cuando dos personas pueden estar en silencio sin que se sienta incómodo.",
        "Dato curioso: cuando alguien te da paz, el cuerpo lo nota antes de que uno sepa explicarlo."
      ],
      done: ["Listoesta respuesta se siente tranquila.", "Ok esto habla de calma y confianza.", "Confirmado ir sin prisa también dice mucho."]
    },
    endingTitle: "Hay algo en ti que transmite calma",
    endingText: "Tus respuestas se sienten serenas: valoras la confianza, la constancia y esos momentos donde no hace falta correr ni llenar cada silencio.",
    note: "Si esto fuera una invitación, sería sin presión: Pero vamos a un museo a perdernos un raton.",
    melody: [293.66, 349.23, 440, 523.25, 440],
    tempo: 0.52,
    wave: "sine"
  },
  autentica: {
    title: "como algo real, sin máscaras",
    description: "Energía profunda, honesta y con intención de entender de verdad.",
    energy: ["Profundidad", "Verdad que se nota"],
    notes: [
      "Dato lindo: ser sincero sigue siendo de las formas más bonitas de coquetear.",
      "Me quité la máscara. Abajo no había misterio, solo nervios.",
      "Modo autenticidad: decir la verdad, pero con buen peinado emocional.",
      "Aquí las palabras bonitas pasan, pero los hechos traen identificación oficial."
    ],
    pause: {
      titles: ["Dándole sentido", "Entendiendo mejor", "Conexión en proceso"],
      facts: [
        "Dato curioso: las mejores historias casi nunca empiezan con algo perfecto, sino con algo honesto.",
        "Dato curioso: la sinceridad puede sentirse más romántica que una frase bonita dicha sin intención.",
        "Dato curioso: cumplir lo que dices también es una forma silenciosa de cuidar a alguien."
      ],
      done: ["Listo esto tiene algo muy real.", "Ok ahora la pista se siente más clara.", "Confirmado la honestidad pesa bonito."]
    },
    endingTitle: "Creo que contigo lo real pesa bonito",
    endingText: "Tus respuestas miran más allá de lo bonito: para ti importan la sinceridad, la coherencia y sentir que la otra persona no está actuando un papel.",
    note: "Si esto fuera una invitación, empezaría con: Unos tacos ¿jalas?.",
    melody: [329.63, 415.3, 493.88, 622.25, 493.88],
    tempo: 0.44,
    wave: "sine"
  }
};

const introEnergy = {
  title: "como una primera sonrisa",
  description: "Una energía suave, curiosa y con ganas de descubrir el siguiente paso.",
  energy: ["Ritmo suave", "Curiosidad bonita"],
  notes: [
    "Estoy intentando verme tranquilo, pero claramente estoy nervioso.",
    "Dato lindo: si sonríes en la primera pantalla, esto ya cumplió su misión.",
    "Esto no es examen. Si lo fuera, la respuesta correcta sería conocerte.",
    "La canción está lista. Yo también. Finjo que no estoy nervioso."
  ]
};

const questions = [
  {
    title: "Si estamos hablando sin prisa, ¿qué hace que ese momento se sienta especial?",
    choices: [
      ["Que realmente me escuches, como si nada más importara", "tranquila"],
      ["Que tengas esos pequeños detalles que no se olvidan", "amorosa"],
      ["Que me hagas sentir tranquila, en confianza", "tranquila"],
      ["Que seas tal cual eres, sin máscaras", "autentica"]
    ]
  },
  {
    title: "Alguien empieza a mostrar interés en ti, poco a poco. ¿Cómo notas que va en serio?",
    choices: [
      ["Con lo que dice", "autentica"],
      ["Con lo que hace", "autentica"],
      ["Con el tiempo que te dedica", "tranquila"],
      ["Con detalles que no esperabas", "amorosa"]
    ]
  },
  {
    title: "Estás compartiendo tiempo con alguien y todo fluye. ¿Qué momento te hace conectar más?",
    choices: [
      ["Una conversación que se vuelve profunda sin darte cuenta", "autentica"],
      ["Caminar sin rumbo, solo disfrutando el momento", "aventurera"],
      ["Estar juntos en algo tranquilo, sin necesidad de hablar mucho", "tranquila"],
      ["Reír hasta que todo se sienta ligero", "aventurera"]
    ]
  },
  {
    title: "Cuando alguien nuevo llega a tu vida, ¿cómo sueles acercarte?",
    choices: [
      ["Paso a paso, sin prisa", "tranquila"],
      ["Dejándote llevar si sientes algo", "amorosa"],
      ["Observando antes de abrirte", "autentica"],
      ["Viviendo el momento sin pensarlo tanto", "aventurera"]
    ]
  },
  {
    title: "Y cuando se trata de confiar en alguien, ¿qué es lo que más pesa para ti?",
    choices: [
      ["Que sea sincero", "autentica"],
      ["Que sea constante", "tranquila"],
      ["Cómo te hace sentir", "amorosa"],
      ["Que cumpla lo que dice", "autentica"]
    ]
  },
  {
    title: "Última, pero importante: si te saco una sonrisa, ¿qué tuvo la culpa?",
    choices: [
      ["Un detalle inesperado que sí se sintió pensado", "amorosa"],
      ["Una broma mala, pero dicha con mucha confianza", "aventurera"],
      ["Una plática fácil, de esas que no se sienten forzadas", "tranquila"],
      ["Que se sienta real, sin pose ni teatro", "autentica"]
    ]
  }
];

let currentStep = 0;
let answers = [];
let currentVibe = "inicio";
let currentSongKey = "flaquita";
let backgroundMusicOn = false;
let audioContext;
let pulseFrame;
let isPausing = false;
let pauseCompleteHandler;

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function renderQuestion() {
  const question = questions[currentStep];

  ending.hidden = true;
  questionStage.hidden = false;
  stepLabel.textContent = `Momento ${currentStep + 1} de ${questions.length}`;
  questionTitle.textContent = question.title;
  choicesContainer.innerHTML = "";

  question.choices.forEach(([text, vibe]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    button.dataset.vibe = vibe;
    button.addEventListener("click", () => handleChoice(vibe));
    choicesContainer.appendChild(button);
  });

  progressFill.style.width = `${(currentStep / questions.length) * 100}%`;
}

function applyVibe(vibe) {
  const selected = vibes[vibe];
  currentVibe = vibe;

  document.body.classList.remove("vibe-amorosa", "vibe-aventurera", "vibe-tranquila", "vibe-autentica");
  document.body.classList.add(`vibe-${vibe}`);
  vibeTitle.textContent = selected.title;
  vibeDescription.textContent = selected.description;
  updateEnergy(selected);
}

function updateEnergy(source = introEnergy) {
  const [word, intention] = source.energy;

  energyWord.textContent = word;
  energyIntention.textContent = intention;
  energyNote.textContent = getRandomItem(source.notes);
  energyNote.classList.remove("is-changing");
  requestAnimationFrame(() => energyNote.classList.add("is-changing"));
}

function updateStoryMessage(step) {
  storyCopy.textContent = storyMessages[step % storyMessages.length];
  storyCopy.classList.remove("is-changing");
  requestAnimationFrame(() => storyCopy.classList.add("is-changing"));
}

function playVibe(vibe) {
  if (backgroundMusicOn) {
    return;
  }

  const selected = vibes[vibe];

  if (!audioContext) {
    audioContext = new AudioContext();
  }

  const start = audioContext.currentTime + 0.03;
  selected.melody.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const begins = start + index * selected.tempo;
    const ends = begins + selected.tempo * 0.9;

    oscillator.type = selected.wave;
    oscillator.frequency.setValueAtTime(frequency, begins);
    gain.gain.setValueAtTime(0.0001, begins);
    gain.gain.exponentialRampToValueAtTime(0.075, begins + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, ends);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(begins);
    oscillator.stop(ends + 0.04);
  });
}

function startBackgroundMusic() {
  backgroundSong.volume = 0.48;
  return backgroundSong.play().then(() => {
    backgroundMusicOn = true;
    musicToggle.textContent = "Pausar";
    musicToggle.setAttribute("aria-pressed", "true");
    startAuraPulse();
  }).catch(() => {
    musicToggle.textContent = "Toca otra vez";
  });
}

function stopBackgroundMusic() {
  backgroundSong.pause();
  backgroundMusicOn = false;
  musicToggle.textContent = "Reproducir";
  musicToggle.setAttribute("aria-pressed", "false");
  stopAuraPulse();
}

function switchSong(songKey) {
  const song = songs[songKey];

  if (!song || songKey === currentSongKey) {
    return;
  }

  const shouldResume = backgroundMusicOn;
  backgroundSong.pause();
  currentSongKey = songKey;
  currentSongName.textContent = song.name;
  backgroundSong.src = song.src;
  backgroundSong.load();

  songChoiceButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.song === songKey);
  });

  if (shouldResume) {
    startBackgroundMusic();
  }
}

function startAuraPulse() {
  cancelAnimationFrame(pulseFrame);

  const pulse = () => {
    const beat = Math.sin(backgroundSong.currentTime * 5.8);
    const secondBeat = Math.sin(backgroundSong.currentTime * 11.6) * 0.35;
    const slowWave = Math.sin(backgroundSong.currentTime * 2.4);
    const energy = Math.max(0, beat + secondBeat);
    const scale = 1 + energy * 0.1;
    const scaleX = 1 + energy * 0.18;
    const scaleY = 1 - energy * 0.1 + Math.max(0, slowWave) * 0.04;
    const radiusA = 46 + energy * 18;
    const radiusB = 54 - energy * 14;

    document.documentElement.style.setProperty("--song-pulse", scale.toFixed(3));
    document.documentElement.style.setProperty("--aura-scale-x", scaleX.toFixed(3));
    document.documentElement.style.setProperty("--aura-scale-y", scaleY.toFixed(3));
    document.documentElement.style.setProperty("--aura-rotate", `${(slowWave * 7).toFixed(2)}deg`);
    document.documentElement.style.setProperty("--aura-radius", `${radiusA}% ${radiusB}% ${radiusB}% ${radiusA}% / ${radiusB}% ${radiusA}% ${radiusA}% ${radiusB}%`);
    document.documentElement.style.setProperty("--song-brightness", `${Math.round(energy * 38)}px`);
    pulseFrame = requestAnimationFrame(pulse);
  };

  pulse();
}

function stopAuraPulse() {
  cancelAnimationFrame(pulseFrame);
  document.documentElement.style.setProperty("--song-pulse", "1");
  document.documentElement.style.setProperty("--aura-scale-x", "1");
  document.documentElement.style.setProperty("--aura-scale-y", "1");
  document.documentElement.style.setProperty("--aura-rotate", "0deg");
  document.documentElement.style.setProperty("--aura-radius", "50%");
  document.documentElement.style.setProperty("--song-brightness", "0px");
}

function reactAura() {
  vibeAura.classList.remove("is-choice-burst");
  document.documentElement.style.setProperty("--aura-scale-x", (1.12 + Math.random() * 0.18).toFixed(3));
  document.documentElement.style.setProperty("--aura-scale-y", (0.82 + Math.random() * 0.12).toFixed(3));
  document.documentElement.style.setProperty("--aura-rotate", `${Math.random() > 0.5 ? 9 : -9}deg`);
  document.documentElement.style.setProperty("--aura-radius", "62% 38% 48% 52% / 42% 58% 42% 58%");
  requestAnimationFrame(() => vibeAura.classList.add("is-choice-burst"));

  if (!backgroundMusicOn) {
    setTimeout(() => {
      document.documentElement.style.setProperty("--aura-scale-x", "1");
      document.documentElement.style.setProperty("--aura-scale-y", "1");
      document.documentElement.style.setProperty("--aura-rotate", "0deg");
      document.documentElement.style.setProperty("--aura-radius", "50%");
      vibeAura.classList.remove("is-choice-burst");
    }, 760);
  }
}

function releasePetals() {
  for (let index = 0; index < 7; index += 1) {
    const petal = document.createElement("span");
    petal.className = "answer-spark";
    petal.style.left = `${35 + Math.random() * 30}vw`;
    petal.style.top = `${54 + Math.random() * 22}vh`;
    petal.style.animationDelay = `${index * 45}ms`;
    document.body.appendChild(petal);
    petal.addEventListener("animationend", () => petal.remove());
  }
}

function showPause(vibe, onComplete) {
  const content = vibes[vibe].pause;
  let readyToContinue = false;

  isPausing = true;
  pauseTitle.textContent = getRandomItem(content.titles);
  pauseFact.textContent = getRandomItem(content.facts);
  pauseOverlay.classList.remove("is-loading", "is-complete");
  pauseContinue.hidden = true;
  pauseOverlay.classList.add("is-active");
  pauseOverlay.setAttribute("aria-hidden", "false");

  pauseFill.style.animation = "none";
  void pauseFill.offsetWidth;
  pauseFill.style.animation = "";

  requestAnimationFrame(() => pauseOverlay.classList.add("is-loading"));

  const readyTimer = setTimeout(() => {
    readyToContinue = true;
    pauseOverlay.classList.add("is-complete");
    pauseContinue.hidden = false;
  }, 2300);

  pauseCompleteHandler = () => {
    if (!readyToContinue) {
      return;
    }

    clearTimeout(readyTimer);
    pauseOverlay.classList.remove("is-active", "is-loading", "is-complete");
    pauseOverlay.setAttribute("aria-hidden", "true");
    pauseContinue.hidden = true;
    pauseContinue.removeEventListener("click", pauseCompleteHandler);
    pauseCompleteHandler = null;
    isPausing = false;
    onComplete();
  };

  pauseContinue.addEventListener("click", pauseCompleteHandler);
}

function handleChoice(vibe) {
  if (isPausing) {
    return;
  }

  const nextStep = currentStep + 1;
  answers.push(vibe);
  applyVibe(vibe);
  updateStoryMessage(nextStep);
  reactAura();
  playVibe(vibe);
  releasePetals();

  showPause(vibe, () => {
    currentStep = nextStep;

    if (currentStep >= questions.length) {
      showEnding();
      return;
    }

    renderQuestion();
  });
}

function getDominantVibe() {
  const totals = answers.reduce((accumulator, vibe) => {
    accumulator[vibe] = (accumulator[vibe] || 0) + 1;
    return accumulator;
  }, {});

  let winner = answers[0];
  let highScore = 0;
  answers.forEach((vibe) => {
    if (totals[vibe] >= highScore) {
      winner = vibe;
      highScore = totals[vibe];
    }
  });

  return winner || "amorosa";
}

function showEnding() {
  const dominantVibe = getDominantVibe();
  const selected = vibes[dominantVibe];

  questionStage.hidden = true;
  ending.hidden = false;
  endingTitle.textContent = selected.endingTitle;
  endingText.textContent = selected.endingText;
  finalNote.textContent = selected.note;
  progressFill.style.width = "100%";
  applyVibe(dominantVibe);
}

function resetExperience() {
  currentStep = 0;
  answers = [];
  currentVibe = "inicio";
  isPausing = false;

  if (pauseCompleteHandler) {
    pauseContinue.removeEventListener("click", pauseCompleteHandler);
    pauseCompleteHandler = null;
  }

  pauseOverlay.classList.remove("is-active", "is-loading", "is-complete");
  pauseOverlay.setAttribute("aria-hidden", "true");
  pauseContinue.hidden = true;
  ending.hidden = true;
  questionStage.hidden = false;
  document.body.classList.remove("vibe-amorosa", "vibe-aventurera", "vibe-tranquila", "vibe-autentica");
  vibeTitle.textContent = introEnergy.title;
  vibeDescription.textContent = introEnergy.description;
  updateEnergy(introEnergy);
  updateStoryMessage(0);
  renderQuestion();
}

musicToggle.addEventListener("click", () => {
  if (backgroundMusicOn) {
    stopBackgroundMusic();
    return;
  }

  startBackgroundMusic();
});

songChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => switchSong(button.dataset.song));
});

enterButton.addEventListener("click", () => {
  startBackgroundMusic();
  entryScreen.classList.add("is-hidden");
});

restartButton.addEventListener("click", resetExperience);

renderQuestion();
updateEnergy(introEnergy);
