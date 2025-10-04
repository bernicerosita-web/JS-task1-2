const questions = [
  {
    question: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
    answer: 2
  },

  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1
  },

  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2
  },

  {
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 1
  },

  {
    question: "What is 12 / 4?",
    options: ["2", "3", "4", "6"],
    answer: 1
  }
  
];

let userData = {};
let selectedQuestions = [];

function register() 
{
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const errorEl = document.getElementById("regError");

  try {
    if (!name || !email || isNaN(age)) 
      throw "All fields are required.";

    if (age < 12) 
      throw "Age must be at least 12.";


    userData = { name, email, age };
    errorEl.textContent = "";
    document.getElementById("registration").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    generateQuiz();
  } 

  catch (err) 
  {
    errorEl.textContent = err;
  }

}

function generateQuiz() {
  const form = document.getElementById("quizForm");
  form.innerHTML = "";
  selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 3);

  selectedQuestions.forEach((q, i) => {
    const qDiv = document.createElement("div");
    qDiv.innerHTML = `<p>${i + 1}. ${q.question}</p>`;
    q.options.forEach((opt, idx) => {
      qDiv.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${idx}" />
          ${opt}
        </label><br/>
      `;
    });

    form.appendChild(qDiv);
    form.appendChild(document.createElement("br"));

  });
}

function submitQuiz() 
{
  const statusEl = document.getElementById("quizStatus");
  statusEl.textContent = "Calculating result...";
  document.getElementById("result").classList.add("hidden");

  new Promise((resolve) => {
    setTimeout(() => {
      let score = 0;
      selectedQuestions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) score += 1;
      });

      const percentage = (score / selectedQuestions.length) * 100;
      let grade = "D";
      if (percentage >= 80) grade = "A";
      else if (percentage >= 60) grade = "B";
      else if (percentage >= 40) grade = "C";

      const timestamp = new Date().toLocaleString();
      const resultData = {
        ...userData,
        score,
        percentage: `${percentage}%`,
        grade,
        timestamp
      };

      resolve(resultData);
    }, Math.floor(Math.random() * 1000) + 2000); 
  })
  .then((resultData) => {
    statusEl.textContent = "";
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("resultDisplay").innerHTML = `
      <p><strong>Name:</strong> ${resultData.name}</p>
      <p><strong>Email:</strong> ${resultData.email}</p>
      <p><strong>Age:</strong> ${resultData.age}</p>
      <p><strong>Score:</strong> ${resultData.score}/${selectedQuestions.length}</p>
      <p><strong>Percentage:</strong> ${resultData.percentage}</p>
      <p><strong>Grade:</strong> ${resultData.grade}</p>
      <p><strong>Timestamp:</strong> ${resultData.timestamp}</p>
    `;
    document.getElementById("jsonOutput").textContent = JSON.stringify(resultData, null, 2);
  })
  .catch((err) => {
    statusEl.textContent = "Error calculating result.";
    console.error("Quiz error:", err);
  });
}
