// get_bonus.js
// ------------
// Simple bonus claim logic. Adds a fixed amount to the balance when
// the correct PIN is entered and records the action in transaction
// history.

const bonusButton = document.getElementById("bonus-btn");
if (bonusButton) {
    bonusButton.addEventListener("click", function () {
        console.log("Bonus button clicked");

        // verify PIN first
        const pin = getValue("bonus-pin");
        if (pin !== "5466") {
            alert("Invalid PIN. Cannot claim bonus.");
            return;
        }

        // read and validate voucher code
        const code = getValue("bonus-code").trim().toLowerCase();
        const match = /^bonus(\d+)$/.exec(code);
        if (!match) {
            alert("Invalid voucher code. Use format bonus100 or bonus500.");
            return;
        }
        const bonusAmount = Number(match[1]);
        if (bonusAmount <= 0) {
            alert("Voucher amount must be positive.");
            return;
        }

        // update balance and inform user
        const newBalance = getBalance() + bonusAmount;
        setBalance(newBalance);
        alert(`Bonus of $${bonusAmount} credited!`);

        // add to history
        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="p-2 bg-white rounded-xl space-y-4">
        <p class="text-[16px] text-neutral/60 p-4">Bonus of $${bonusAmount} received (code: ${code}) at ${new Date().toLocaleTimeString()}</p>
        </div>
        `;
        history.append(newHistory);
    });
}