document.getElementById("add-money-btn").addEventListener("click", function () {
    console.log("Add Money button clicked");
    //get bank
    const bankName = getValue("add-money-bank");
    if(bankName == "Select Bank"){
        alert("Please select a bank.");
        return;
    }
    console.log("Selected Bank:", bankName);

    //get account number
    const accountNumber = getValue("bank-account-number");
    if(accountNumber.length !== 11){
        alert("Please enter a valid 11-digit account number.");
        return;
    }

    //get amount
    const amount = getValue("add-money-amount");
    const newBalance = getBalance() + Number(amount);
    console.log(newBalance);

    //get pin
    const pin = getValue("add-money-pin");
    if(pin === "5466"){
        alert(`Money added from ${bankName} successfully at ${new Date().toLocaleTimeString()}.`);
        setBalance(newBalance);
        
        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="p-2 bg-white rounded-xl space-y-4">
        <p class="text-[16px] text-neutral/60 p-4">Money added from ${bankName} successfully at ${new Date().toLocaleTimeString()}</p>

        </div>
        `
        history.append(newHistory);

    } else {
        alert("Invalid PIN. Transaction failed.");
        return;
    }
});
