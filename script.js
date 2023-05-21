const words = [
    {
        word: "was/were",
        sentence: "I was at home yesterday. / We were in the shopping last night.",
        translation: "Past of Be. -> Ser/Estar",
        audio: "audio/waswere.mp3"
      },
      {
        word: "had",
        sentence: "I had a great time at the party. / She had a new car.",
        translation: "Past of Have -> Tener",
        audio: "audio/have.mp3"
      },
      {
        word: "did",
        sentence: "I did my homework yesterday. / He did a good job.",
        translation: "Past of Do -> Hacer",
        audio: "audio/do.mp3"
      },
      {
        word: "said",
        sentence: "She said goodbye to her friends. / They said it was a beautiful place.",
        translation: "Past of Say -> Decir",
        audio: "audio/say.mp3"
      },
      {
        word: "went",
        sentence: "He went to the beach last weekend. / They went to the movies.",
        translation: "Past of Go -> Ir",
        audio: "audio/go.mp3"
      },
      {
        word: "saw",
        sentence: "I saw a shooting star. / She saw a funny video.",
        translation: "Past of See -> Ver",
        audio: "audio/see.mp3"
      },
      {
        word: "took",
        sentence: "He took a picture of the sunset. / We took the bus to school.",
        translation: "Past of Take -> Tomar",
        audio: "audio/take.mp3"
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

  ];

  
  let currentIndex = 0;

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