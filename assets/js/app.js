let totalAllocated = document.querySelector('.total-allocated');
let slider = document.querySelectorAll('input');
let inputTotal = document.querySelectorAll('.slide_total');
let budget = document.getElementById('budget');
let remaining = document.getElementById('remaining');
let statedBudget = 5000;
remaining.innerHTML = '£' + statedBudget;

budget.innerHTML = "£" + statedBudget;

for (let a = 0; a < inputTotal.length; a++) {
  inputTotal[a].id = "inputTotal" + (a + 1);
}
for (let b = 0; b < slider.length; b++) {
  slider[b].id = "slider" + (b + 1);
}

function getResults() {
  let total = [];

  // Get 'input' value
  for (let i = 0; i < slider.length; i++) {
    let sliderValue = slider[i].value;
    let sliderNumValue = parseInt(sliderValue, 10);
    total.push(sliderNumValue);

    for (let t = 0; t < inputTotal.length; t++) {
      if (total[t] > 0) {
        inputTotal[t].innerHTML = '£' + total[t];
      } else {
        inputTotal[t].innerHTML = '-'
      }
    }
  }

  // Add values together
  var sumTotal = total.reduce(function (a, b) {
    return a + b;
  }, 0);

  let remainingBudget = statedBudget - sumTotal;
  // Output total allocated
  document.getElementById('allocated').innerHTML = '£' + sumTotal;
  remaining.innerHTML = '£' + remainingBudget;
  if (remainingBudget < 0) {
    remaining.style.color = "red";
  } else {
    remaining.style.color = "#ffffff";
  }
};

for (let a = 0; a < slider.length; a++) {
  slider[a].addEventListener('change', getResults)
}