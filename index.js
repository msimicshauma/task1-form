let counter = 0;
const percentage = document.getElementById("percentage");
const completed1 = document.getElementById("completed1");
const completed2 = document.getElementById("completed2");
const completed3 = document.getElementById("completed3");
const completed4 = document.getElementById("completed4");
const btn = document.getElementById("btn");

const changePercentage = counter => {
  if (counter === 0) percentage.innerHTML = "0%";
  else if (counter === 1) {
    percentage.innerHTML = "25%";
    btn.className = "";
  }
  else if (counter === 2) {
    percentage.innerHTML = "50%";
    btn.className = "";
  }
  else if (counter === 3) {
    percentage.innerHTML = "75%";
    btn.className = "";
  }
  else if (counter === 4) {
    percentage.innerHTML = "100%";
    btn.className = "btn-animation";
  }
};

const firstname = document.getElementById("firstname");
let nameCheck = 0;

if (firstname.value !== "" && nameCheck === 0) {
  counter++;
  nameCheck = 1;
  completed1.style.display = "flex";
  changePercentage(counter);
}

firstname.addEventListener("change", () => {
  if (firstname.value !== "" && nameCheck === 0) {
    counter++;
    nameCheck = 1;
    completed1.style.display = "flex";
    changePercentage(counter);
  } else if (firstname.value === "") {
    counter--;
    nameCheck = 0;
    completed1.style.display = "none";
    changePercentage(counter);
  }
});

const lastname = document.getElementById("lastname");
let lastNameCheck = 0;

if (lastname.value !== "" && lastNameCheck === 0) {
  counter++;
  lastNameCheck = 1;
  completed2.style.display = "flex";
  changePercentage(counter);
}

lastname.addEventListener("change", () => {
  if (lastname.value !== "" && lastNameCheck === 0) {
    counter++;
    lastNameCheck = 1;
    completed2.style.display = "flex";
    changePercentage(counter);
  } else if (lastname.value === "") {
    counter--;
    lastNameCheck = 0;
    completed2.style.display = "none";
    changePercentage(counter);
  }
});

const email = document.getElementById("email");
let emailCheck = 0;

if (email.value !== "" && emailCheck === 0) {
  counter++;
  emailCheck = 1;
  completed3.style.display = "flex";
  changePercentage(counter);
}

email.addEventListener("change", () => {
  if (email.value !== "" && emailCheck === 0) {
    counter++;
    emailCheck = 1;
    completed3.style.display = "flex";
    changePercentage(counter);
  } else if (email.value === "") {
    counter--;
    emailCheck = 0;
    completed3.style.display = "none";
    changePercentage(counter);
  }
});

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
let radioCheck = 0;

if (monday.checked && radioCheck === 0) {
  counter++;
  radioCheck = 1;
  completed4.style.display = "flex";
  changePercentage(counter);
}

monday.addEventListener("change", () => {
  if (monday.checked && radioCheck === 0) {
    counter++;
    radioCheck = 1;
    completed4.style.display = "flex";
    changePercentage(counter);
  }
});

if (tuesday.checked && radioCheck === 0) {
  counter++;
  radioCheck = 1;
  completed4.style.display = "flex";
  changePercentage(counter);
}

tuesday.addEventListener("change", () => {
  if (tuesday.checked && radioCheck === 0) {
    counter++;
    radioCheck = 1;
    completed4.style.display = "flex";
    changePercentage(counter);
  }
});

changePercentage(counter);
