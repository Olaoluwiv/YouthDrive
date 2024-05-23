//  bank account details
let user1AccountBalance = 1000;
let user2AccountBalance = 2000;

// Function to display account balance
function displayBalance() {
    alert("Your account balance: #" + user1AccountBalance);
}

// Function to transfer money
function transferMoney() {
    let amount = parseFloat(prompt("Enter the amount to transfer:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a valid amount.");
        return;
    }

    let receiverBank = prompt("Enter receiver's bank:");
    let receiverAccountNumber = prompt("Enter receiver's account number:");

    let receiverName = generateReceiverName(receiverAccountNumber);

    let confirmation = confirm("Transfer #" + amount + " to " + receiverName + " at " + receiverBank + " (Account Number: " + receiverAccountNumber + ")?");

    if (confirmation) {
        if (user1AccountBalance < amount) {
            alert("Insufficient balance.");
            return;
        }

        user1AccountBalance -= amount;
        user2AccountBalance += amount;

        alert("Money transferred successfully!");

        alert("Your  account balance: #" + user1AccountBalance);
        alert("Recipient's receiver account balance: #" + user2AccountBalance);
    } else {
        alert("Transfer cancelled.");
    }
}

// Function to generate receiver's name
function generateReceiverName(accountNumber) {
    return "Receiver" + accountNumber.slice(-4);
}

// Function to recharge account
function rechargeAccount() {
    let amount = parseFloat(prompt("Enter the amount to recharge:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a valid amount.");
        return;
    }

    let phoneNumber = prompt("Enter the phone number to recharge:");
    let networkSelection = prompt("Select network:\n1. MTN\n2. Airtel\n3. Glo\n4. 9mobile");

    let network;
    switch (networkSelection) {
        case "1":
            network = "MTN";
            break;
        case "2":
            network = "Airtel";
            break;
        case "3":
            network = "Glo";
            break;
        case "4":
            network = "9mobile";
            break;
        default:
            alert("Invalid network selection.");
            return;
    }

    alert("Recharging #" + amount + " for " + phoneNumber + " on " + network + " network.");
    // Add logic to perform the recharge
}

// Function to authenticate user
function authenticateUser() {
    alert("Welcome! Please insert your card.");
    let pinAttempts = 3;
    while (pinAttempts > 0) {
        let pin = prompt("Welcome! Please enter your 4-digit PIN:");
        if (pin === "1234") {
            mainMenu();
            return;
        } else {
            pinAttempts--;
            if (pinAttempts > 0) {
                alert("Incorrect PIN. You have " + pinAttempts + " attempt(s) left.");
            } else {
                alert("Authentication failed. Your card has been blocked. Please contact customer support.");
                return;
            }
        }
    }
}

// Main menu
function mainMenu() {
    let choice = prompt("Choose an option:\n1. Display Account Balance\n2. Transfer Money\n3. Recharge\n4. Exit");

    switch (choice) {
        case "1":
            displayBalance();
            break;
        case "2":
            transferMoney();
            break;
        case "3":
            rechargeAccount();
            break;
        case "4":
            alert("Thank you for using our service!");
            break;
        default:
            alert("Invalid choice. Please select a valid option.");
            mainMenu();
            break;
    }
}

// Start the application
authenticateUser(); // Start with authentication
