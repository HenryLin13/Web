function validateForm() {
	//Check if the name box is empty
  var nameIs = document.forms["contact"]["name"].value;
  if (nameIs == "") {
    alert("Please enter your name");
    document.forms["contact"]["name"].focus();
  return false;
  }
  //Check if the email box is empty
  var emailIs = document.forms["contact"]["email"].value;
  if (emailIs == "") {
    alert("Please enter your email");
    document.forms["contact"]["email"].focus();
    return false;
  }
  //Check if the phone number box is empty
  var phoneIs = document.forms["contact"]["phone"].value;
  if (phoneIs == ""){
    alert("Please enter your phone number");
    document.forms["contact"]["phone"].focus();
    return false;
  }
  //Check if a radio option has been selected by comparing if they are equal in status which can only occur when not selected
  var radios = document.getElementsByName("questionaire");
  if(radios[0].checked == radios[1].checked){
      alert("Please answer if you have been to the restaurant before");
      return false;
  }
  //Check if no availability is selected by going through each check box, once a checked box is found it flips to true
  var checks = document.getElementsByName("day");
  var count = 0;
  var valid = false;
  while(!valid && count < checks.length){
    if(checks[count].checked){
      valid = true;
    }
    count++;
  }
  if(valid == false){
    alert("Please select your availability");
    return false;
  }
  alert("Your information has been submitted!")
  //Set to false so it does not open or reload the page while testing
  return false;
}