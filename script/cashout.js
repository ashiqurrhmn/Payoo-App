document.getElementById("cashout-btn").addEventListener("click", function () {
    
  const agentNumberInput = getValue("agent-number");
  console.log(agentNumberInput);

  // const agentNumberInput = document.getElementById("agent-number").value;
  // console.log(agentNumberInput);

  const amountInput = document.getElementById("input-amount").value;
  console.log(amountInput);

  // const balanceElement = document.getElementById("balance").innerText;
  // console.log(balanceElement);
  const currentBalance = getBalance();
  console.log(currentBalance);

  const newBalance = currentBalance - Number(amountInput);

  if (newBalance < 0) {
    alert("Insufficient balance. Transaction failed.");
    return;
  }
  console.log(newBalance);

  const pinInput = document.getElementById("input-pin").value;
  if (pinInput === "5466") {
    alert("Transaction successful!");
    // document.getElementById("balance").innerText = newBalance;
    setBalance(newBalance);
    
    const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="p-2 bg-white rounded-xl space-y-4">
        <p class="text-[16px] text-neutral/60 p-4">Money cashed out from ${agentNumberInput} successfully at ${new Date().toLocaleTimeString()}</p>

        </div>
        `
        history.append(newHistory);
  } else {
    alert("Invalid PIN. Transaction failed.");
  }
});
