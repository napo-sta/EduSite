// quiz.js : logique de validation du quiz
function checkQuiz() {
  const answers = [1, 1];
  let score = 0;
  answers.forEach((val, idx) => {
    const q = document.querySelector(`input[name="q${idx + 1}"]:checked`);
    if (q && parseInt(q.value) === val) score++;
  });
  document.getElementById("quizResult").textContent = `Tu as ${score}/${answers.length} bonnes réponses.`;
}
