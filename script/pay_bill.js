// pay_bill.js
// ----------
// Handles paying a bill: deducts amount from balance and logs the
// transaction. Requires biller name, account number and PIN.

const billButton = document.getElementById("bill-btn");
if (billButton) {
  billButton.addEventListener("click", function () {
    console.log("Pay bill button clicked");

    const biller = getValue("bill-biller").trim();
    if (!biller) {
      alert("Please enter a biller name.");
      return;
    }

    const account = getValue("bill-account");
    if (account.length !== 11) {
      alert("Please enter a valid 11-digit account number.");
      return;
    }

    const amount = getValue("bill-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amount);
    if (newBalance < 0) {
      alert("Insufficient balance. Cannot pay bill.");
      return;
    }

    const pin = getValue("bill-pin");
    if (pin !== "5466") {
      alert("Invalid PIN. Transaction failed.");
      return;
    }

    // complete payment
    setBalance(newBalance);
    alert(`Paid $${amount} to ${biller} (acct ${account}).`);

    const history = document.getElementById("history-container");
    const entry = document.createElement("div");
    entry.innerHTML = `
        <div class="p-2 bg-white rounded-xl space-y-4">
        <p class="text-[16px] text-neutral/60 p-4">Paid $${amount} to ${biller} (acct ${account}) at ${new Date().toLocaleTimeString()}</p>
        </div>
        `;
    history.append(entry);
  });
}
