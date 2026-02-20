console.log("Login script loaded");

document.getElementById("login-btn").addEventListener("click", function () {
  const inputNumber = document.getElementById("input-number");
  const mobileNumber = inputNumber.value;
  console.log("Mobile Number:", mobileNumber);

  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log("PIN:", pin);

  if (mobileNumber == "01571164022" && pin == "5466") {
    alert("Login successful!");

    window.location.assign("/home.html");
    //window.location.replace("/home.html");  //replace use korle back button kaj korbe na, assign use korle back button kaj korbe
  } else {
    alert("Invalid mobile number or PIN. Please try again.");
  }
});
