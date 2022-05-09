var cusBtn = document.querySelector(".customer");
var modalOne = document.querySelector(".modal-bg1");
var closeOne = document.querySelector(".close-btn1");
var loanBtn = document.querySelector(".loan");
var modalTwo = document.querySelector(".modal-bg2");
var closeTwo = document.querySelector(".close-btn2");
var hremBtn = document.querySelector(".hrmanager");
var modalThree = document.querySelector(".modal-bg3");
var closeThree = document.querySelector(".close-btn3");
var form = document.querySelector(".form");
var cancel = document.querySelector(".cancel-form");
var submitCv = document.querySelector(".submit");

// Cutomer care
cusBtn.addEventListener("click", () => {
  modalOne.classList.add("bg1-active");
});
closeOne.addEventListener("click", () => {
  modalOne.classList.remove("bg1-active");
});

// Loan
loanBtn.addEventListener("click", () => {
  modalTwo.classList.add("bg2-active");
});
closeTwo.addEventListener("click", () => {
  modalTwo.classList.remove("bg2-active");
});

// human resource
hremBtn.addEventListener("click", () => {
  modalThree.classList.add("bg3-active");
});
closeThree.addEventListener("click", () => {
  modalThree.classList.remove("bg3-active");
});

// FORM
submitCv.addEventListener("click", () => {
  console.log("clicked");
  form.classList.add("form-active");
});
cancel.addEventListener("click", () => {
  console.log("clicked");
  form.classList.remove("form-active");
});
