let score = 0;


let answer1 = prompt(
  "Q1: What is the capital of France?\n1. Berlin\n2. Paris\n3. Madrid"
);
switch (answer1) {
  case "2":
    score++;
    break;
  default:
    break;
}


let answer2 = prompt(
  "Q2: Which planet is known as the Red Planet?\n1. Mars\n2. Venus\n3. Jupiter"
);
switch (answer2) {
  case "1":
    score++;
    break;
  default:
    break;
}


let answer3 = prompt(
  "Q3: What is 5 + 3?\n1. 6\n2. 8\n3. 10"
);
switch (answer3) {
  case "2":
    score++;
    break;
  default:
    break;
}


alert("Your Final Score: " + score + "/3");
