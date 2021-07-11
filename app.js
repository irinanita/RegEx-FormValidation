// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("eircode").addEventListener("blur", validateEirCode);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  // Has to be letters only lower or upper case, at least 2 characters and max 10 characters long
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateEirCode() {
  const eircode = document.getElementById("eircode");
  /* 3-character routing key to identify the area 
   a 4-character unique identifier for each address, for example, A65 F4E2. 
   The routing key is the first 3 characters of an Eircode. The first character is always a letter, followed by 2 numbers
   Except for D6W - this exercise doesn't account for this case
  */
  const re = /^[A-Z][0-9]{2}[A-Z0-9]{4}$/i;

  if (!re.test(eircode.value)) {
    eircode.classList.add("is-invalid");
  } else {
    eircode.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  // 
  const re = /^([a-zA-Z0-9_\-\.])+@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validatePhone() {}
