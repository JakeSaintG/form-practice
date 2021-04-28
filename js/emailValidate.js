const emailInput = document.getElementById("email");

function isValidEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email)
  };
  //Anything that is not an @ sym;