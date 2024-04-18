const submitBtn = document.getElementById("submit-btn");
const messageBox = document.getElementById("message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const last_name = document.getElementById("last_name").value;
  const battle_name = document.getElementById("name_battle").value;
  var message

  if (name === "" || last_name === "" || battle_name === "" || document.form1.chk1.checked == false /*|| document.webform.rank.value=="0"*/) {
    message = "กรุณากรอกข้อมูลให้ครบถ้วน"    
  } else {
    message = "ข้อมูลของคุณถูกส่งเรียบร้อยแล้ว!";
  }
  // messageBox.innerHTML = `<span class='error'>${message}</span>`;
  displayPopup(message)
});



function displayPopup(message) {
  const popupBoxParagraph = document.querySelector("#popup-box > p").innerHTML = message
  const popupBox = document.getElementById("popup-box").showModal()
}

function hidePopup() {
  const popupBoxParagraph = document.querySelector("#popup-box > p").innerHTML = ''
  const popupBox = document.getElementById("popup-box").close()
}





