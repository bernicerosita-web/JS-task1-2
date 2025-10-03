let income = Number(prompt("Enter your monthly income:"));


let rent = Number(prompt("Enter your rent amount:"));
let groceries = Number(prompt("Enter your groceries expense:"));
let transport = Number(prompt("Enter your transport expense:"));


let totalExpenses = rent + groceries + transport;


let remainingBalance = income - totalExpenses;
let percentageSpent = (totalExpenses / income) * 100;


let message = "";
if (totalExpenses > income) {
  alert( "You are overspending!");
} else {
  alert( "You are within budget.");
}


 alert(
 "\nTotal Expenses:" + totalExpenses +
 "\nRemaining Balance:" +remainingBalance +
 "\nPercentage Spent:" +percentageSpent.toFixed(0)% +
 "\nMessage:" +message
 )
