// transfer_money.js
// ------------------
// Handles "Transfer Money" workflow: deducts amount from current
// balance and updates transaction history. Uses same helpers from
// machine.js as addMoney and cashout modules.

// ensure DOM is ready or script is loaded after elements

const transferButton = document.getElementById("transfer-btn");
if (transferButton) {
  transferButton.addEventListener("click", function () {
    console.log("Transfer button clicked");

    const recipient = getValue("transfer-number");
    if (recipient.length !== 11) {
      alert("Please enter a valid 11-digit recipient number.");
      return;
    }
    console.log("Recipient:", recipient);

    const amount = getValue("transfer-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amount);

    if (newBalance < 0) {
      alert("Insufficient balance. Transaction failed.");
      return;
    }

    const pin = getValue("transfer-pin");
    if (pin === "5466") {
      // proceed with transfer
      setBalance(newBalance);
      alert(
        `Sent $${amount} to ${recipient} successfully at ${new Date().toLocaleTimeString()}.`,
      );

      const history = document.getElementById("history-container");
      const newHistory = document.createElement("div");
      newHistory.innerHTML = `
        <div class="p-2 bg-white rounded-xl space-y-4">
        <p class="text-[16px] text-neutral/60 p-4">Money transferred to ${recipient} successfully at ${new Date().toLocaleTimeString()}</p>
        </div>
        `;
      history.append(newHistory);
    } else {
      alert("Invalid PIN. Transaction failed.");
    }
  });
}
