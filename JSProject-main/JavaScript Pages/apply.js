// JavaScript to show and hide the pop-up

let iqTest = document.querySelectorAll(".applyTestButtonIQ");

iqTest.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("testInstructionsIQ").style.display = "flex";
  });
});

let itTest = document.querySelectorAll(".applyTestButtonIT");


itTest.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("testInstructionsIT").style.display = "flex";
  });
});

let ENTest = document.querySelectorAll(".applyTestButtonEN");


ENTest.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("testInstructionsEN").style.display = "flex";
  });
});


// const storedData = localStorage.getItem('users');
//     const users = JSON.parse(storedData);
//         const email = users[0].email;
//     console.log(email);


document.getElementById("closePopupButtonBack").addEventListener("click", () => {
    document.getElementById("testInstructionsIQ").style.display = "none";
  });

document.getElementById("closePopupButtonGO").addEventListener("click", () => {
  document.getElementById("testInstructionsIQ").style.display = "none";
});
