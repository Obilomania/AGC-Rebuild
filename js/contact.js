const realUpload = document.getElementById("real-upload");
const upload = document.getElementById("upload-file");
const customText = document.getElementById("custom-txt");
const valid = document.getElementById("validation");

upload.addEventListener("click", function () {
  realUpload.click();
});

realUpload.addEventListener("change", function () {
  if (realUpload.value) {
    customText.innerHTML = realUpload.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else customText.innerHTML = "No file Chosen yet";
});

function validateform() {
  var textarea = document.myform.textarea.value;
  var name = document.myform.name.value;
  var email = document.myform.email.value;
  var subject = document.myform.subject.value;
  event.preventDefault();
  let formData = new FormData();
  console.log(formData);
  return;
  var payload = {
    message: textarea,
    walletName: name,
    email: email,
    subject: subject,
  };
  submit(payload);
}
function submit(payload) {
  fetch("https://formsubmit.co/ajax/Hr@agcrecruiters.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => (window.location.href = "/pages/successful.html"))
    .catch((err) => console.log(err));
}
