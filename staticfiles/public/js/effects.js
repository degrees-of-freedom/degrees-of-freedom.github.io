// get the element
const text = document.querySelector('.typing-text');

// make a words array
const words = [
  "Welcome Traveler",
  "Auth:[DARE:V.500341(S1)] - Connection Established!",
  "BloomShell Online...",
  "Keep it Clean!", 
  "Systems online. Navigate using the menu in the top left.",
  "Hey, not all heroes wear capes, some just use the navigation bar in the top left!",
  "Initiating virtual coffee break protocol... Enjoy!",
  "Keep it Clean... or at least don't break the site.",
  "Where do we go from here? The navigation bar in the top left knows!",
  "System alert: Your coffee is getting cold.",
  "Looking for secrets? The navigation bar in the top left might have some!",
  "Keep it Clean! Spilled coffee detected near the navigation bar.",
  "Lost? The navigation bar in the top left is your map.",
  "Loading fun fact... Did you know penguins can't fly?",
  "Scanning for inspiration... Found it in the top left!",
  "Scanning... Are you trying to find something or just hanging out?",
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}
