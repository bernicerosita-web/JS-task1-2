let student = 
{
  name: "",
  birthYear: null,
  city: ""
};


function saveProfile()
{
  try 
  {
    let name = document.getElementById("name").value.trim();
    let birthYear = parseInt(document.getElementById("birthYear").value.trim());
    let city = document.getElementById("city").value.trim();

    if (!name || !birthYear || !city)
    {
      throw "All fields are required!";
    }
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > new Date().getFullYear()) 
    {
      throw "Enter a valid birth year!";
    }

    student.name = name;
    student.birthYear = Number(birthYear);
    student.city = city;

    document.getElementById("profileOutput").innerText =
      `Profile Saved: ${student.name},  ${student.city}`;
}

   catch (err) 
  {
    document.getElementById("profileOutput").innerText = " Error: " + err;
  }
}


function checkAge() 
{
  try 
  {
    if (!student.birthYear) 
      throw "Please save your profile first!";

    let currentYear = new Date().getFullYear();
    let age = currentYear - student.birthYear;
    let eligibility = age >= 18 ? " Eligible (18+)" : " Not Eligible (under 18)";

    document.getElementById("ageOutput").innerText =
      `${student.name} is ${age} years old. ${eligibility}`;
  } 

  catch (err) 
  {
    document.getElementById("ageOutput").innerText = " Error: " + err;
  }

}


function showGreeting() 
{
  let hours = new Date().getHours();
  let greeting;
  if (hours < 12) 
    greeting = "Good Morning ";

  else if (hours < 18) 
    greeting = "Good Afternoon ";

  else 
    greeting = "Good Evening ";

  document.getElementById("greetingOutput").innerText =
    `${greeting}, ${student.name || "Student"}!`;
}


function calculate() 
{
  try {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;

    if (isNaN(num1) || isNaN(num2)) throw "Enter valid numbers!";

    let result;
    switch (operation) {
      case "add": result = num1 + num2; 
      break;

      case "sub": result = num1 - num2; 
      break;

      case "mul": result = num1 * num2; 
      break;

      case "div":
        if (num2 === 0) 
          throw "Division by zero not allowed!";
        result = num1 / num2;
        break;

    default: 
    throw "Invalid operation!";
    }

    document.getElementById("calcOutput").innerText = "Result: " + result;
  } 

  catch (err) 
  {
    document.getElementById("calcOutput").innerText = " Error: " + err;
  }
}

function showQuote() 
{
const quotes = [
  "Believe in yourself and all that you are.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it."];
  
  let randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteOutput").innerText = quotes[randomIndex];
}


function showJSON() 
{
  document.getElementById("jsonOutput").innerText = JSON.stringify(student, null, 2);
}
