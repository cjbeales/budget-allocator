var slider1 = document.getElementById("range1");
var slider2 = document.getElementById("range2");
var slider3 = document.getElementById("range3");
var slider4 = document.getElementById("range4");
var slider5 = document.getElementById("range5");
var output = document.getElementById("demo");
var inputs = document.querySelectorAll(".slider");
var totalbox = document.querySelectorAll(".slide_total");
var resultBtn = document.getElementById("getResults");
var total1 = document.getElementById("total1");
var total2 = document.getElementById("total2");
var total3 = document.getElementById("total3");
var total4 = document.getElementById("total4");
var total5 = document.getElementById("total5");
var ranges = document.querySelectorAll("input");

// console.log(totalbox);
// for (var i = 0; i < totalbox.length; i++) {
//   totalbox[i].id = "total" + (i + 1);
// }

function getResults(e) {
  var s1 = slider1.value;
  var s1val = parseInt(s1, 10);
  var s2 = slider2.value;
  var s2val = parseInt(s2, 10);
  var s3 = slider3.value;
  var s3val = parseInt(s3, 10);
  var s4 = slider4.value;
  var s4val = parseInt(s4, 10);
  var s5 = slider5.value;
  var s5val = parseInt(s5, 10);
  var totalval = s1val + s2val + s3val + s4val + s5val;
  output.innerHTML = totalval + "%";
  total1.innerHTML = s1val + "%";
  total2.innerHTML = s2val + "%";
  total3.innerHTML = s3val + "%";
  total4.innerHTML = s4val + "%";
  total5.innerHTML = s5val + "%";
  var maxtotal = 100;

  var theTarget = e.target;

  if (totalval <= 100) {

  } else {
    theTarget.value = theTarget.value - (totalval - maxtotal);
    e.preventDefault();
    output.innerHTML = "100%";

    for (var i = 0; i < ranges.length; i++) {
      var currentval = ranges[i].value;
      total1.innerHTML = ranges[0].value + "%";
      total2.innerHTML = ranges[1].value + "%";
      total3.innerHTML = ranges[2].value + "%";
      total4.innerHTML = ranges[3].value + "%";
      total5.innerHTML = ranges[4].value + "%";
    }

    return false;

  }

  return true;
};

for (var i = 0; i < inputs.length; i++) {
  addEventListener("input", getResults);
}