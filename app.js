const button = document.querySelector("#generate");
const ulEven = document.querySelector(".even");
const ulOdd = document.querySelector(".odd");

button.addEventListener("click", (ev) => {
  ev.preventDefault();
  Numbers(0, 100);
});

function Numbers(min, max) {
  let number = 0;
  const numbersEven = ["Parzyste: "];
  const numbersOdd = ["Nieparzyste: "];

  for (let i = 0; i < 20; i++) {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (number % 2 === 0) numbersEven.push(number);
    if (number % 2 !== 0) numbersOdd.push(number);
  }

  numbersEven.sort((a, b) => a - b);
  numbersOdd.sort((a, b) => a - b);

  while (ulEven.firstChild) {
    ulEven.removeChild(ulEven.firstChild);
  }
  numbersEven.forEach((num) => {
    const newLi = document.createElement("li");
    newLi.innerText = num;
    ulEven.appendChild(newLi);
  });

  while (ulOdd.firstChild) {
    ulOdd.removeChild(ulOdd.firstChild);
  }
  numbersOdd.forEach((num) => {
    const newLi = document.createElement("li");
    newLi.innerText = num;
    ulOdd.appendChild(newLi);
  });
}
