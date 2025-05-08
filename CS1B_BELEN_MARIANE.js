/*
Belen, Mariane I.
BSCS 1B
*/

//use const and m create password 
const password = "1234567";
//create variable let and prompt their username and the password 
let username = prompt("Enter username: ");
let pass = prompt("Enter Password:");

//use while loop so that if password is incorrect it will ask again
while (pass !== password) {
    alert("Wrong Password! Try Again");
    pass = prompt("Enter Password:");
}
//alert when the password is correct
alert(`Successfully logged in. Welcome, ${username}`);

//const a pin and their account number
const pin = "77777777";
const accNum = "2345 7777 8910 5432";
//use prompt to input their pib and account number 
let pinInput = prompt("Enter your PIN: ");
let accNumInput = prompt("Enter your Account Number:");

//use while loop if the pin and account number is incorrect to try again
while (pinInput !== pin || accNumInput !== accNum) {
    alert("Wrong PIN or Account Number");
    pinInput = prompt("Enter your PIN:");
    accNumInput = prompt("Enter your Account Number:");
}
alert("Welcome!");
//show the current balance
let balance = 50000;
let anotherTransaction = true;

//use while loop to create another transaction 
while (anotherTransaction) {
    //use prompt to choose number whether balance inquiry, withdraw cash or cancel transaaction
    let yourChoice = prompt(
        "Choose a Number:\nATM Options:\n1. Balance Inquiry\n2. Withdraw Cash\n3. Cancel Transaction"
    );

//use switch for each options
    switch (yourChoice) {
        case "1": //Balance Inquiry 
            alert(`Your current balance is ${balance}`);
            break; //never forget the breaks

        case "2": //Withdraw Cash
            //create variable use prompt to enter ammount to get and use parseInt to covert into number
            let withdraw = parseInt(prompt("Enter amount to withdraw:"));

           //use while loop if the withdraw is not a number or greater that balance
            while (isNaN(withdraw) || withdraw > balance) {
                //if greater that it will alert Insufficient 
                if (withdraw > balance) {
                    alert("Invalid! Insufficient balance.");
                } else { //else if Invalid 
                    alert("Invalid amount or not a number.");
                }
                //then it will ask again
                withdraw = parseInt(prompt("Enter amount to withdraw:"));
            }
            //if the withdraw is valid it will do the code below
            alert("Processing...");
            balance -= withdraw;// it will minus

            //alert the receipt 
            alert(`Receipt\nWithdrawn Amount: ${withdraw}\nYour Current Balance: ${balance}`);
            break;

        case "3": //Cancel transaction 
            alert("Transaction Cancelled.");
            anotherTransaction = false;
            break;

        default: // then default 
            alert("Invalid option. Please select 1, 2, or 3.");
            break;
    }

     //if the option is 3 it will ask transaction
    if (yourChoice !== "3") {
        let another = prompt("Another transaction? (Yes/No):");
        //if its not yes it will say thank you and came again
        if (another !== "yes") {
            anotherTransaction = false;
            alert("Thank you! Come Again.");
        }
    }
}
