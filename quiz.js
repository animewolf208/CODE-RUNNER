const subject = new URLSearchParams(window.location.search).get("subject");
let currentIndex = 0;
let score = 0;

function displayQuestion() {
  const q = questions[subject][currentIndex];
  const container = document.getElementById("question-container");
  container.innerHTML = \`<h2>\${q.question}</h2>\` +
    q.options.map((opt, i) => \`<div><input type='radio' name='opt' value='\${i}'> \${opt}</div>\`).join("");
}

function saveAnswer() {
  const selected = document.querySelector("input[name='opt']:checked");
  if (selected && Number(selected.value) === questions[subject][currentIndex].answer) score++;
  currentIndex++;
  if (currentIndex < questions[subject].length) displayQuestion();
  else location.href = \`result.html?score=\${score}&total=\${questions[subject].length}\`;
}

window.onload = () => {
  if (subject && questions[subject]) displayQuestion();
};