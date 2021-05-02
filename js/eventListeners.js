const phoneInput = document.getElementById("phone");

function createListener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
    //   showOrHideTip(showTip, tooltip);
    };
}

// function showOrHideTip(show, element) {
//     // show element when show is true, hide when false
//     if (show) {
//       element.style.display = "inherit";
//     } else {
//       element.style.display = "none";
//     }
// }


//need if statement to make it pick which listener to use1
nameInput.addEventListener("input", createListener(isValidName));

nameInput.addEventListener("blur", e => {
    e.target.value = formatName(e.target.value);
});

phoneInput.addEventListener("input", createListener(isValidPhone));

phoneInput.addEventListener("blur", e => {
    e.target.value = formatPhone(e.target.value);
});

emailInput.addEventListener("input", createListener(isValidEmail));