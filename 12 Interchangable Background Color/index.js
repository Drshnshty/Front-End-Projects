const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    number = btn.value;
    changeBackground(number);
  });
});

const body = document.body;
function changeBackground(number) {
  body.className = "";
  switch (number) {
    case "purple":
      body.classList.add("bg-purple-500");
      break;
    case "blue":
      body.classList.add("bg-blue-500");
      break;
    case "red":
      body.classList.add("bg-red-500");
      break;
    case "green":
      body.classList.add("bg-green-500");
      break;
    case "yellow":
      body.classList.add("bg-yellow-500");
      break;
    case "teal":
      body.classList.add("bg-teal-500");
      break;
  }
}
