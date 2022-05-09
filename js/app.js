const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const openLink = document.querySelector(".nav-open");

hamburger.addEventListener("click", function () {
  links.classList.toggle("nav-open");
  hamburger.classList.toggle("toggle");
});

finaltext = "AGC  RECRUITERS";
const characters =
  "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

iterations = finaltext.length + 20;
function randomstr() {
  n = Math.random();
  n = n * characters.length;
  n = Math.floor(n);
  out = characters[n];
  return out;
}

var text = [];
for (i = 0; i < finaltext.length; i++) {
  t = [];
  text.push(t);
}

for (i = 0; i < finaltext.length; i++) {
  t = text[i];
  for (j = 0; j < iterations - 20 * Math.random(); j++) {
    t.push(randomstr());
  }
  t.push(finaltext[i]);
}
counter = 0;

const elemout = document.getElementById("output");

for (i = 0; i < finaltext.length; i++) {
  const outputpart = document.createElement("div");
  outputpart.classList.add("letters");
  elemout.appendChild(outputpart);
  outputlist = document.getElementsByClassName("letters");
}

function change() {
  for (i = 0; i < finaltext.length; i++) {
    ft = text[i];
    if (counter < ft.length) {
      outputlist[i].innerHTML = ft[counter];
    } else {
      outputlist[i].innerHTML = ft[ft.length - 1];
    }
  }

  counter++;
}

const inst = setInterval(change, 100);
