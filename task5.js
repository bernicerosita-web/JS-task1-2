let correctPIN = "1234";
let balance = 1000;


let enteredPIN = prompt("Welcome to the ATM!\nPlease enter your 4-digit PIN:");


if (enteredPIN === correctPIN) {
    

    let wantWithdraw = confirm("Do you want to Withdraw?");
    
    if (wantWithdraw) {
    
        let amount = parseFloat(prompt("Enter amount to withdraw:"));
        if ( amount > 0 && amount <= balance) {
            balance -= amount;
            alert(`Withdrawal successful! New balance: ${balance}`);
        } else {
            alert("Invalid amount or insufficient balance.");
        }

    } else {
    
        let wantDeposit = confirm("Do you want to Deposit?");
        
        if (wantDeposit) {
            
            let amount = parseFloat(prompt("Enter amount to deposit:"));
            if ( amount > 0) {
                balance += amount;
                alert(`Deposit successful! New balance: ${balance}`);
            } else {
                alert("Invalid deposit amount.");
            }

        } else {
            
            alert(`Your current balance is: ${balance}`);
        }
    }

} else {
    
    alert("Incorrect PIN. Access denied.");
}
