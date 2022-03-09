const setOfWords = [
    "Success is the progressive realization of predetermined, worthwhile, personal goals.",
    "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
    "A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.",
    "Don't be distracted by criticism. Remember, the only taste of success some people get is to take a bite out of you.",
    "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.",
    "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
    "I love being married. It's so great to find that one special person you want to annoy for the rest of your life.",
    "When your mother asks, 'Do you want a piece of advice?' it is a mere formality. It doesn't matter if you answer yes or no. You're going to get it anyway.",
    "I want my children to have all the things I couldn't afford. Then I want to move in with them.",
];
const msg = document.getElementById('message');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
}
const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime) / 1000;
    // console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMsg = "Your speed is " + speed + " words per minute.\n";

    finalMsg += compareWords(msg.innerText, totalStr);

    msg.innerText = finalMsg;
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;

    words1.forEach(
        function (item, index) {
            if (item == words2[index]) count++;
        }
    )
    // let errorWords=words1.length-count; ((count / words1.length) * 100)
    let accuracy=(count*100)/words1.length;
    accuracy=+accuracy.toFixed(2);
    return (count + " words out of " + words1.length + " are correct!\n Your accuracy is "+accuracy+"%.");
}

btn.addEventListener('click', function () {
    // console.log(this);
    if (this.innerText == 'Start') {
        // typeWords.innerText="";
        // typeWords.innerHTML="";
        typeWords.disabled = false;
        btn.innerText = "Done";
        playGame();
    }
    else if (this.innerText == 'Done') {
        typeWords.disabled = true;
        btn.innerText = 'Start';
        endGame();
    }
})