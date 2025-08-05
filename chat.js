// Array of study tips
const studyTips = [
  "Take regular breaks to improve focus. Try using the Pomodoro Technique (25 min study, 5 min break).",
  "Teach what you've learned to someone else. It helps reinforce the material.",
  "Use active recall instead of passive reading for better retention.",
  "Make use of spaced repetition for long-term memory retention.",
  "Set clear goals for each study session to stay on track."
];

// Array of general knowledge questions and answers
const questionsAndAnswers = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
  { question: "What is the chemical symbol for water?", answer: "H2O" },
  { question: "What is the square root of 64?", answer: "8" },
];

async function sendMessage() {
  const input = document.getElementById('userInput');
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage('user', userText);
  input.value = '';

  let botReply = '';

  // Check if the user asks for a study tip
  if (userText.toLowerCase().includes("study tip")) {
    const randomTip = studyTips[Math.floor(Math.random() * studyTips.length)];
    botReply = randomTip;
  }
  // Check if the user asks for a quiz question
  else if (userText.toLowerCase().includes("quiz")) {
    const randomQuestion = questionsAndAnswers[Math.floor(Math.random() * questionsAndAnswers.length)];
    botReply = `Here's a quiz question for you: ${randomQuestion.question}`;
    setTimeout(() => {
      const correctAnswer = prompt(`${botReply} \n(Enter your answer)`);
      if (correctAnswer.trim().toLowerCase() === randomQuestion.answer.toLowerCase()) {
        appendMessage('bot', "Correct! Well done.");
      } else {
        appendMessage('bot', `Oops! The correct answer is: ${randomQuestion.answer}`);
      }
    }, 1000);
  }
  // Answer to any other query
  else {
    botReply = "I'm here to help! You can ask for a 'study tip' or take a 'quiz'. Try one of these!";
  }

  appendMessage('bot', botReply);
}

function appendMessage(sender, text) {
  const chatbox = document.getElementById('chatbox');
  const message = document.createElement('div');
  message.className = 'message ' + sender;
  message.textContent = (sender === 'user' ? 'You: ' : 'Bot: ') + text;
  chatbox.appendChild(message);
  chatbox.scrollTop = chatbox.scrollHeight;
}
