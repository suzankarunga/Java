
const truthlist = [
    "What is yor bigest fear? ",
    "Have you ever messed up with someone",
    "Whats your dream though",
    "Whats your bigest secret" ,
    "What is your deepest regret in life?",
    "Have you ever spread a harmful rumor about someone?" ,
    "Have you ever intentionally hurt someone emotionally?",
    "What is the biggest secret you have kept from your loved ones?",
    "Have you ever manipulated someone to get what you want? ",
];
const darelist =[
    
   " Do a stand-up comedy routine for at least two minutes.",
   "Eat a spoonful of a spicy chili sauce.",
   "Perform a belly dance in front of everyone.",
 //"Go outside and yell "I love [insert name of a celebrity]" at the top of your lungs."
   "Let someone give you a makeover using only food items.",
   "Do a handstand against a wall for one minute.",
   "Take a cold shower fully clothed.",
   "take a tablespoon of mustard or hot sauce without making a face.",
   "Do ten push-ups with someone sitting on your back.",
] ;

function pickTruth() {
    const randomIndex = Math.floor(Math.random() * truthList.length);
    const truth = truthList[randomIndex];
    console.log('Truth: ' + truth);
    rl.close();
  }
  
  function pickDare() {
    const randomIndex = Math.floor(Math.random() * dareList.length);
    const dare = dareList[randomIndex];
    console.log('Dare: ' + dare);
    rl.close();
  }
  
  function startGame() {
    console.log('Welcome to Truth or Dare!');
    rl.question('Choose truth or dare (t/d): ', (answer) => {
      if (answer.toLowerCase() === 't') {
        pickTruth();
      } else if (answer.toLowerCase() === 'd') {
        pickDare();
      } else {
        console.log('Invalid input. Please choose truth or dare by entering "t" or "d".');
        startGame();
      }
    });
  }
  
  startGame();
  
  
  
  
  