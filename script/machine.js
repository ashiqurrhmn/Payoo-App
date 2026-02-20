//get value from input field
function getValue(id){
    return document.getElementById(id).value;
}

//get balance
function getBalance(){
    // return document.getElementById("balance").innerText;
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}


//set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

//toggle  
//hide all and show only selected
function showOnly(id){
    const addmoney = document.getElementById("addMoney");
    const cashout = document.getElementById("cashout");
    const hisTory = document.getElementById("history");

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    hisTory.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

};