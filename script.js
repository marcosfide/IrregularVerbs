const words = [
    {
        word: "was/were",
        sentence: "I was at home yesterday. / We were in the shopping last night.",
        translation: "Past of Be. -> Ser/Estar",
        audio: "audio/waswere.ogg"
      },
      {
        word: "became",
        sentence: "After years of hard work and dedication, she finally became a successful entrepreneur.",
        translation: "Past of Become -> Convertirse",
        audio: "audio/became.ogg"
      },
      {
        word: "had",
        sentence: "I had a great time at the party. / She had a new car.",
        translation: "Past of Have -> Tener",
        audio: "audio/had.ogg"
      },
      {
        word: "did",
        sentence: "I did my homework yesterday. / He did a good job.",
        translation: "Past of Do -> Hacer",
        audio: "audio/did.ogg"
      },
      {
        word: "said",
        sentence: "She said goodbye to her friends. / They said it was a beautiful place.",
        translation: "Past of Say -> Decir",
        audio: "audio/said.ogg"
      },
      {
        word: "went",
        sentence: "He went to the beach last weekend. / They went to the movies.",
        translation: "Past of Go -> Ir",
        audio: "audio/went.ogg"
      },
      {
        word: "saw",
        sentence: "I saw a shooting star. / She saw a funny video.",
        translation: "Past of See -> Ver",
        audio: "audio/saw.ogg"
      },
      {
        word: "took",
        sentence: "He took a picture of the sunset. / We took the bus to school.",
        translation: "Past of Take -> Tomar",
        audio: "audio/took.ogg"
      },
      {
        word: "made",
        sentence: "She made a delicious cake. / They made a plan for the weekend.",
        translation: "Past of Make -> Hacer/Fabricar",
        audio: "audio/make.mp3"
      },
      {
        word: "gave",
        sentence: "He gave me a present. / She gave him a book.",
        translation: "Past of Give -> Dar",
        audio: "audio/give.mp3"
      },
      {
        word: "found",
        sentence: "I found my lost keys. / They found a hidden treasure.",
        translation: "Past of Find -> Encontrar",
        audio: "audio/find.mp3"
      },
      {
        word: "knew",
        sentence: "She knew the answer. / We knew each other since childhood.",
        translation: "Past of Know -> Saber/Conocer",
        audio: "audio/know.mp3"
      },
      {
        word: "thought",
        sentence: "I thought it was a good idea. / He thought about the problem.",
        translation: "Past of Think -> Pensar",
        audio: "audio/think.mp3"
      },
      {
        word: "came",
        sentence: "She came to the party late. / We came together.",
        translation: "Past of Come -> Venir",
        audio: "audio/come.mp3"
      },
      {
        word: "got",
        sentence: "I got a new job. / He got a high score.",
        translation: "Past of Get -> Obtener/Conseguir",
        audio: "audio/get.mp3"
      },
      {
        word: "ran",
        sentence: "He ran a marathon. / They ran away from the dog.",
        translation: "Past of Run -> Correr",
        audio: "audio/run.mp3"
      },
      {
        word: "wrote",
        sentence: "I wrote a letter. / She wrote a book.",
        translation: "Past of Write -> Escribir",
        audio: "audio/write.mp3"
      },
      {
        word: "read",
        sentence: "He read a newspaper. / We read an interesting article.",
        translation: "Past of Read -> Leer",
        audio: "audio/read.mp3"
      },
      {
        word: "began",
        sentence: "She began her new job today. / They began their journey early in the morning.",
        translation: "Past of Begin -> Empezar",
        audio: "audio/began.mp3"
        },
        {
        word: "broke",
        sentence: "He broke his phone. / The vase broke when it fell.",
        translation: "Past of Break -> Romper",
        audio: "audio/broke.mp3"
        },
        {
        word: "brought",
        sentence: "She brought flowers for her mother. / They brought snacks to the party.",
        translation: "Past of Bring -> Traer",
        audio: "audio/brought.mp3"
        },
        {
        word: "built",
        sentence: "He built a new house. / They built a bridge.",
        translation: "Past of Build -> Construir",
        audio: "audio/built.mp3"
        },
        {
        word: "bought",
        sentence: "I bought a new dress. / She bought a gift for her friend.",
        translation: "Past of Buy -> Comprar",
        audio: "audio/bought.mp3"
        },
        {
        word: "could",
        sentence: "I could swim when I was young. / They could speak multiple languages.",
        translation: "Past of Can -> Poder",
        audio: "audio/could.mp3"
        },
        {
        word: "caught",
        sentence: "He caught the ball. / She caught a cold.",
        translation: "Past of Catch -> Atrapar",
        audio: "audio/caught.mp3"
        },
        {
        word: "cost",
        sentence: "It cost a lot of money. / The tickets cost $20 each.",
        translation: "Past of Cost -> Costar",
        audio: "audio/cost.mp3"
        },
        {
        word: "drank",
        sentence: "I drank a glass of water. / He drank a cup of coffee.",
        translation: "Past of Drink -> Beber",
        audio: "audio/drank.mp3"
        },
        {
        word: "drove",
        sentence: "She drove to work. / They drove through the countryside.",
        translation: "Past of Drive -> Conducir",
        audio: "audio/drove.mp3"
        },
        {
        word: "ate",
        sentence: "I ate a delicious meal. / They ate dinner at a restaurant.",
        translation: "Past of Eat -> Comer",
        audio: "audio/ate.mp3"
        },
        {
        word: "fell",
        sentence: "He fell off his bike. / The leaves fell from the trees.",
        translation: "Past of Fall -> Caer",
        audio: "audio/fell.mp3"
        },
        {
        word: "felt",
        sentence: "I felt happy after the good news. / He felt cold in the winter.",
        translation: "Past of Feel -> Sentir",
        audio: "audio/felt.mp3"
        },
        {
        word: "flew",
        sentence: "They flew to Paris for their honeymoon. / The birds flew south for the winter.",
        translation: "Past of Fly -> Volar",
        audio: "audio/flew.mp3"
        },
        {
        word: "forgot",
        sentence: "I forgot my keys at home. / She forgot to turn off the lights.",
        translation: "Past of Forget -> Olvidar",
        audio: "audio/forgot.mp3"
        },
        {
        word: "gave",
        sentence: "He gave me a present. / She gave him a book.",
        translation: "Past of Give -> Dar",
        audio: "audio/gave.mp3"
        },
        {
        word: "heard",
        sentence: "I heard a strange noise. / They heard the news on the radio.",
        translation: "Past of Hear -> Oír",
        audio: "audio/heard.mp3"
        },
        {
        word: "left",
        sentence: "She left the party early. / They left their bags at the hotel.",
        translation: "Past of Leave -> Dejar/Irse",
        audio: "audio/left.mp3"
        },
        {
        word: "lost",
        sentence: "I lost my phone. / He lost the game.",
        translation: "Past of Lose -> Perder",
        audio: "audio/lost.mp3"
        },
        {
        word: "met",
        sentence: "We met in college. / They met for coffee.",
        translation: "Past of Meet -> Conocer/Encontrarse",
        audio: "audio/met.mp3"
        },
        {
        word: "paid",
        sentence: "I paid the bill. / She paid for the groceries.",
        translation: "Past of Pay -> Pagar",
        audio: "audio/paid.mp3"
        },
        {
        word: "put",
        sentence: "He put the books on the shelf. / She put on her coat.",
        translation: "Past of Put -> Poner",
        audio: "audio/put.mp3"
        },
        {
        word: "sent",
        sentence: "I sent an email. / They sent a postcard.",
        translation: "Past of Send -> Enviar",
        audio: "audio/sent.mp3"
        },
        {
        word: "sang",
        sentence: "She sang a beautiful song. / They sang together at the concert.",
        translation: "Past of Sing -> Cantar",
        audio: "audio/sang.mp3"
        },
        {
        word: "sat",
        sentence: "I sat on the park bench. / He sat at the front of the classroom.",
        translation: "Past of Sit -> Sentarse",
        audio: "audio/sat.mp3"
        },
        {
        word: "slept",
        sentence: "She slept for ten hours. / They slept in a tent.",
        translation: "Past of Sleep -> Dormir",
        audio: "audio/slept.mp3"
        },
        {
        word: "spoke",
        sentence: "He spoke to the audience. / She spoke three languages fluently.",
        translation: "Past of Speak -> Hablar",
        audio: "audio/spoke.mp3"
        },
        {
        word: "spent",
        sentence: "I spent the weekend with my family. / They spent a lot of money on clothes.",
        translation: "Past of Spend -> Gastar/Pasar",
        audio: "audio/spent.mp3"
        },
        {
        word: "stood",
        sentence: "He stood in line for tickets. / She stood at the front of the room.",
        translation: "Past of Stand -> Pararse",
        audio: "audio/stood.mp3"
        },
        {
        word: "swam",
        sentence: "I swam in the pool. / They swam across the lake.",
        translation: "Past of Swim -> Nadar",
        audio: "audio/swam.mp3"
        },
        {
        word: "taught",
        sentence: "She taught English. / He taught me how to cook.",
        translation: "Past of Teach -> Enseñar",
        audio: "audio/taught.mp3"
        },
        {
        word: "told",
        sentence: "I told him the truth. / She told a funny story.",
        translation: "Past of Tell -> Decir",
        audio: "audio/told.mp3"
        },
        {
        word: "thought",
        sentence: "He thought about the problem. / She thought it was a good idea.",
        translation: "Past of Think -> Pensar",
        audio: "audio/thought.mp3"
        },
        {
        word: "understood",
        sentence: "I understood the instructions. / They understood the concept.",
        translation: "Past of Understand -> Entender",
        audio: "audio/understood.mp3"
        },
        {
        word: "woke",
        sentence: "She woke up early. / He woke me up with a phone call.",
        translation: "Past of Wake -> Despertar",
        audio: "audio/woke.mp3"
        },
        {
        word: "wore",
        sentence: "I wore a blue dress. / They wore costumes to the party.",
        translation: "Past of Wear -> Usar/Llevar",
        audio: "audio/wore.mp3"
        },
        {
        word: "won",
        sentence: "He won the game. / She won the competition.",
        translation: "Past of Win -> Ganar",
        audio: "audio/won.mp3"
        }

  ];

  
  let currentIndex = 0;

    // Agregar un evento al botón de alternar modo
  document.getElementById("toggle-mode-btn").addEventListener("click", toggleMode);

  function toggleMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("dark-mode");
    document.querySelector(".word-container").classList.toggle("dark-mode");
    document.querySelector(".buttons").classList.toggle("dark-mode");
  }

  function displayWord() {
    const wordElement = document.getElementById("word");
    const sentenceElement = document.getElementById("sentence");
    const translationElement = document.getElementById("translation");
    const pronunciationElement = document.getElementById("pronunciation");
  
    if (currentIndex >= words.length) {
      currentIndex = 0; // Reinicia el índice cuando se llega al final de la lista
    }
  
    const currentWord = words[currentIndex];
    wordElement.textContent = currentWord.word;
    sentenceElement.textContent = currentWord.sentence;
    translationElement.textContent = currentWord.translation;
    pronunciationElement.src = currentWord.audio;
  }
  
  function handleAgainButton() {
    currentIndex += 1;
    displayWord();
  }
  
  function handleDiscardButton() {
    // Eliminar la palabra actual de la lista
    words.splice(currentIndex, 1);
    displayWord();
  }
  
  document.getElementById("again-btn").addEventListener("click", handleAgainButton);
  document.getElementById("discard-btn").addEventListener("click", handleDiscardButton);

  
  // Mostrar la primera palabra al cargar la página
  displayWord();