
const inputSlider = document.querySelectorAll("input");
const selectVal = document.querySelectorAll(".selector");
const weightValue = document.querySelector(".weightValueBx");
const heightValue = document.querySelector(".heightValueBx");
const calcBtn = document.querySelector(".calc-btn");
const kgRangeStart = document.querySelector(".kgrange-start");
const kgRangeEnd = document.querySelector('.kgrange-end');
const score = document.querySelector('.score');
let timeoutId;
for (let i = 0; i < inputSlider.length; i++) {
  inputSlider[i].addEventListener("input", () => {
    const min = +inputSlider[i].getAttribute("min");
    const max = +inputSlider[i].getAttribute("max");

    let val = inputSlider[i].value;
    clearTimeout(timeoutId);

    selectVal[i].style.display = "block";
    selectVal[i].style.left = ((val - min) / (max - min)) * 100 + "%";
    selectVal[i].textContent = val;

    if (i == 0) {
      heightValue.textContent = (val / 12).toFixed(2).replace(".", "'");
    } else {
      weightValue.textContent = val;
    }

    timeoutId = setTimeout(() => {
      selectVal[i].style.display = "none";
    }, 500);
  });
}

calcBtn.addEventListener("click", () => {
  let heightInMeters = heightValue.textContent.replace("'", ".") * 0.0254;
  const bmi = (parseInt(weightValue.textContent) / (heightInMeters * heightInMeters) * 703) / 100000;
  score.textContent = bmi.toFixed(2);

  let lowerBound = 18.5;
  let upperBound = 24.9;

 // kgRangeStart.textContent = lowerBound * heightInMeters;
  //kgRangeEnd.textContent = bmi * heightInMeters;
});
