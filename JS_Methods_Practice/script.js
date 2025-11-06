const quizData = [
  {
    situation: "Need to make a new array from old",
    answer: ".map()",
    options: [".filter()", ".map()", ".reduce()", ".forEach()"],
  },
  {
    situation: "Need to keep only some items",
    answer: ".filter()",
    options: [".map()", ".filter()", ".reduce()", ".sort()"],
  },
  {
    situation: "Need one combined value from array",
    answer: ".reduce()",
    options: [".reduce()", ".map()", ".find()", ".some()"],
  },
  {
    situation: "Need to find one matching item",
    answer: ".find()",
    options: [".find()", ".filter()", ".some()", ".every()"],
  },
  {
    situation: "Need the index of a matching item",
    answer: ".findIndex()",
    options: [".indexOf()", ".findIndex()", ".some()", ".filter()"],
  },
  {
    situation: "Need to loop through items (no return)",
    answer: ".forEach()",
    options: [".forEach()", ".map()", ".filter()", ".reduce()"],
  },
  {
    situation: "Need to sort an array",
    answer: ".sort()",
    options: [".sort()", ".reverse()", ".map()", ".filter()"],
  },
  {
    situation: "Need to reverse an array",
    answer: ".reverse()",
    options: [".reverse()", ".sort()", ".map()", ".filter()"],
  },
  {
    situation: "Need to combine arrays",
    answer: ".concat() or [...arr1, ...arr2]",
    options: [".concat()", ".slice()", ".map()", "[...arr1, ...arr2]"],
  },
  {
    situation: "Need to remove duplicates from an array",
    answer: "[...new Set(array)]",
    options: ["array.filter()", "[...new Set(array)]", ".reduce()", ".map()"],
  },
  {
    situation: "Need to flatten nested arrays",
    answer: ".flat()",
    options: [".flat()", ".concat()", ".reduce()", ".map()"],
  },
  {
    situation: "Need to get all object keys",
    answer: "Object.keys(obj)",
    options: [
      "Object.keys(obj)",
      "Object.values(obj)",
      "Object.entries(obj)",
      ".hasOwnProperty()",
    ],
  },
  {
    situation: "Need all object values",
    answer: "Object.values(obj)",
    options: [
      "Object.keys(obj)",
      "Object.values(obj)",
      "Object.entries(obj)",
      ".hasOwnProperty()",
    ],
  },
  {
    situation: "Need all [key, value] pairs from object",
    answer: "Object.entries(obj)",
    options: [
      "Object.keys(obj)",
      "Object.values(obj)",
      "Object.entries(obj)",
      ".hasOwnProperty()",
    ],
  },
  {
    situation: "Need to merge two objects",
    answer: "{...obj1, ...obj2}",
    options: ["Object.assign()", "{...obj1, ...obj2}", ".keys()", ".values()"],
  },
  {
    situation: "Need to clone an object",
    answer: "{...obj}",
    options: ["{...obj}", "Object.assign()", ".keys()", ".values()"],
  },
  {
    situation: "Need to split string into array",
    answer: ".split()",
    options: [".slice()", ".split()", ".join()", ".replace()"],
  },
  {
    situation: "Need to join array into string",
    answer: ".join()",
    options: [".join()", ".split()", ".map()", ".reduce()"],
  },
  {
    situation: "Need to replace text",
    answer: ".replace() or .replaceAll()",
    options: [".replace()", ".replaceAll()", ".split()", ".join()"],
  },
  {
    situation: "Need to check if string contains something",
    answer: ".includes()",
    options: [".includes()", ".indexOf()", ".startsWith()", ".endsWith()"],
  },
  {
    situation: "Need optional chaining (skip undefined)",
    answer: "?.",
    options: ["?.", "??", "||", "==="],
  },
  {
    situation: "Need fallback for null or undefined",
    answer: "??",
    options: ["??", "||", "?.", "==="],
  },
  {
    situation: "Need to repeat a string",
    answer: ".repeat()",
    options: [".repeat()", ".split()", ".join()", ".slice()"],
  },
  {
    situation: "Need to trim spaces from string",
    answer: ".trim()",
    options: [".trim()", ".slice()", ".substring()", ".replace()"],
  },
];

let currentIndex = 0;
let score = 0;

// Shuffle array function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(quizData);

function showQuestion() {
  const q = quizData[currentIndex];
  document.getElementById("situation").textContent = q.situation;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  shuffle(q.options);
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("feedback").textContent = "";
  document.getElementById("score").textContent = `Score: ${score}`;
}

function checkAnswer(selected) {
  const q = quizData[currentIndex];
  const feedback = document.getElementById("feedback");
  if (selected === q.answer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = `❌ Wrong! Correct answer: ${q.answer}`;
    feedback.style.color = "red";
  }
  document.getElementById("score").textContent = `Score: ${score}`;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= quizData.length) {
    alert(`🎉 Quiz finished! Your final score is ${score}/${quizData.length}`);
    currentIndex = 0;
    score = 0;
    shuffle(quizData);
  }
  showQuestion();
}

showQuestion();
