// machine.js - shared helper utilities for dashboard pages
// These functions read values from the DOM, manipulate the
// visible balance, and control which section is displayed.

// get value of input element by id
function getValue(id) {
  return document.getElementById(id).value;
}

// read current balance from page and return as number
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}

// write updated balance back to DOM
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// showOnly hides all interactive sections and then reveals
// the one specified by id. Updated to include the transfer pane.
function showOnly(id) {
  const addmoney = document.getElementById("addMoney");
  const cashout = document.getElementById("cashout");
  const transfer = document.getElementById("transfer");
  const hisTory = document.getElementById("history");

  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transfer.classList.add("hidden");
  hisTory.classList.add("hidden");

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.remove("hidden");
  }
}
