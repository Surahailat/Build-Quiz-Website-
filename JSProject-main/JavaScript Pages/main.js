let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let resultsContainer = document.querySelector(".results");
let currentIndex = 0;
let rightAnswers = 0;
// Retrieves the saved quiz type from local storage.
let savedValue = localStorage.getItem("savedValue");



//  Fetching Questions
// This function loads quiz data from a JSON file (specified in savedValue).
// fetch retrieves the file, and await response.json() converts the response into a usable JavaScript object.
async function getQuestions() {

  const response = await fetch(savedValue);
  const questionsObject = await response.json();
  const qCount = questionsObject.length; // the total number of questions

  addQuestionData(questionsObject[currentIndex], qCount);



  // Handling the "Submit" Button

  submitButton.onclick = () => {
    const theRightAnswer = questionsObject[currentIndex].right_answer; // Get the correct answer for the current question

    let answers = document.getElementsByName("question");
    let isAnswerSelected = false; // Flag to check if an answer is selected

    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        isAnswerSelected = true;
        break;
      }
    }

    if (!isAnswerSelected) {
      alert("Please select an answer before proceeding.");
      return; // Stop execution if no answer is selected
    }

    saveAnswerToLocalStorage(questionsObject[currentIndex]);  // The user’s answer is saved to local storage.

    currentIndex++;  // currentIndex is incremented to move to the next question

    checkAnswer(theRightAnswer, qCount);

    quizArea.innerHTML = "";
    answersArea.innerHTML = ""; // The question and answers areas are cleared

    addQuestionData(questionsObject[currentIndex], qCount); // displays the next question

    showResults(qCount); // checks if it’s the last question and displays the result
  };
}

getQuestions();


// Adding Question Data

function addQuestionData(obj, count) { // displays the question title in the .quiz-area.
  if (currentIndex < count) { // It loops to create 4 answer options and appends them as radio buttons for user selection.
    let questionTitle = document.createElement("h2");
    let questionText = document.createTextNode(obj["title"]);
    questionTitle.appendChild(questionText);
    quizArea.appendChild(questionTitle);

    for (let i = 1; i <= 4; i++) {
      let mainDiv = document.createElement("div");
      mainDiv.className = "answer";

      let radioInput = document.createElement("input");
      radioInput.name = "question";
      radioInput.type = "radio";
      radioInput.id = `answer_${i}`;
      radioInput.dataset.answer = obj[`answer_${i}`];

      let theLabel = document.createElement("label");
      theLabel.htmlFor = `answer_${i}`;
      let theLabelText = document.createTextNode(obj[`answer_${i}`]);
      theLabel.appendChild(theLabelText);

      mainDiv.appendChild(radioInput);
      mainDiv.appendChild(theLabel);

      answersArea.appendChild(mainDiv);
    }
  }
}

function checkAnswer(rAnswer, count) {
  let answers = document.getElementsByName("question");
  let theChoosenAnswer;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      theChoosenAnswer = answers[i].dataset.answer;
    }
  }

  if (rAnswer === theChoosenAnswer) {
    rightAnswers++;
  }
}

function saveAnswerToLocalStorage(question) {
  let storedAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
  let storedAnswers1 = JSON.parse(localStorage.getItem("userAnswers1")) || [];
  let storedAnswers2 = JSON.parse(localStorage.getItem("userAnswers2")) || [];


  let answers = document.getElementsByName("question");
  let theChoosenAnswer;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      theChoosenAnswer = answers[i].dataset.answer;
    }
  }
  
  if (savedValue == `../JavaScript Pages/iq.json` ) {
    
    storedAnswers.push({
      question: question["title"],
      chosenAnswer: theChoosenAnswer,
      correctAnswer: question["right_answer"]
      
    });
    localStorage.setItem("userAnswers", JSON.stringify(storedAnswers));


  }else if (savedValue ==  `../JavaScript Pages/technical.json`) {
    storedAnswers1.push({
  
      question: question["title"],
  chosenAnswer: theChoosenAnswer,
  correctAnswer: question["right_answer"]
    });

    localStorage.setItem("userAnswers1", JSON.stringify(storedAnswers1));

  }else if (savedValue == `../JavaScript Pages/english.json`) {
    storedAnswers2.push({
  
      question: question["title"],
  chosenAnswer: theChoosenAnswer,
  correctAnswer: question["right_answer"]
    });
    localStorage.setItem("userAnswers2", JSON.stringify(storedAnswers2));

  }
  

}

function showResults(count) {
  if (currentIndex === count) {
    quizArea.remove();
    answersArea.remove();
    submitButton.remove();

    let resultText = document.createElement("h2");
    resultText.textContent = `You got ${rightAnswers} out of ${count} correct answers!`;

    resultsContainer.appendChild(resultText);
  }
}

let saveButton = document.getElementById("closePopupButtonGO22");
let saveButton1 = document.getElementById("closePopupButtonGO");
let saveButton2 = document.getElementById("closePopupButtonGO11");

saveButton.onclick = function() {
  let valueToSave = "../JavaScript Pages/iq.json"; 
  localStorage.setItem("savedValue", valueToSave);
};

saveButton1.onclick = function() {
  let valueToSave = "../JavaScript Pages/english.json"; 
  localStorage.setItem("savedValue", valueToSave); 
};


saveButton2.onclick = function() {
  let valueToSave = "../JavaScript Pages/technical.json"; 
  localStorage.setItem("savedValue", valueToSave); 
};





function showResults(count) {
  if (currentIndex === count) {
    // Remove unnecessary elements
    quizArea.remove();
    answersArea.remove();
    submitButton.remove();

    // Display the results
    let resultText = document.createElement("h2");
    resultText.textContent = `You got ${rightAnswers} out of ${count} correct answers!`;
    resultsContainer.appendChild(resultText);

    // Add a finished message
    let finishedMessage = document.createElement("p");
    finishedMessage.textContent = "Congratulations! You've finished the quiz.";
    finishedMessage.style.marginTop = "20px";
    finishedMessage.style.fontSize = "18px";
    finishedMessage.style.color = "#0075ff";
    resultsContainer.appendChild(finishedMessage);

    // Add a "Back" button
    let backButton = document.createElement("button");
    backButton.textContent = "Back to Home";
    backButton.className = "back-button";
    backButton.style.marginTop = "20px";
    backButton.style.padding = "10px 20px";
    backButton.style.border = "none";
    backButton.style.borderRadius = "5px";
    backButton.style.background = "#f37055";
    backButton.style.color = "#ffffff";
    backButton.style.cursor = "pointer";
    backButton.style.fontSize = "16px";
    backButton.style.transition = "background 0.3s ease";
    backButton.onmouseover = () => {
      backButton.style.background = "#f79533";
    };
    backButton.onmouseout = () => {
      backButton.style.background = "#f37055";
    };

    // Redirect to another page on click
    backButton.onclick = () => {
      window.location.href = "../HTML Pages/applyTest.html"; // Replace with your desired URL or page
    };

    resultsContainer.appendChild(backButton);
  }
}