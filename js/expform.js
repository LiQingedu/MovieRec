var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
checked(currentTab);
var totalSeconds=0;
  var timer=0;

function showTab(n) {

timer=setInterval(setTime, 1000);
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");

  x[n].style.display = "block";
  var img=document.getElementById("image"+n);

  if (n%3==0){
   // img.innerHTML='<img src="../images/pop/'+n+'.png">';
    var path=localStorage.getItem("selection");
    img.innerHTML='<img src="../images/social/'+path+'/'+n+'.png">';
    //var way=localStorage.getItem("catSelect");
    //img.innerHTML='<img src="../images/event/'+way+'/'+n+'.png">';

  }
  else if (n%3==1){
    img.innerHTML='<img src="../images/pop/'+n+'.png">';
    //var way=localStorage.getItem("catSelect");
    //img.innerHTML='<img src="../images/event/'+way+'/'+n+'.png">';
    //var path=localStorage.getItem("selection");
    //img.innerHTML='<img src="../images/social/'+path+'/'+n+'.png">';
  }
  else if (n%3==2){
    //img.innerHTML='<img src="../images/pop/'+n+'.png">';
    //var path=localStorage.getItem("selection");
    //img.innerHTML='<img src="../images/social/'+path+'/'+n+'.png">';
    var way=localStorage.getItem("catSelect");
    img.innerHTML='<img src="../images/event/'+way+'/'+n+'.png">';
  }


  var element = document.getElementById("question"+n);
  element.innerHTML = "<h3>Please select how likely YOU WILL watch this movie based on the explanation showN above.</h3>";

  // ... and fix the Previous/Next buttons:
//  checked(n);
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("submit").style.display = "inline";
  } else {
    //checked();
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("submit").style.display = "none";
  }

  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);


}
function setTime() {
++totalSeconds;

}

function getTime(n){

  clearInterval(timer);
  var count=document.getElementById("timer"+n);
  count.value=totalSeconds;

  totalSeconds=0;

  return totalSeconds;
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("movform").submit();
    return false;
  }
  //test if currentTab increased: console.log(currentTab);
  // Otherwise, display the correct tab:

checked(currentTab);
  showTab(currentTab);
  getTime(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function checked(n){
  document.getElementById("nextBtn").disabled=true;
  var ques=document.getElementsByClassName("tab");
  var radios=ques[n].getElementsByTagName("input");
for (var i=0; i<7; i++){
  radios[i].onclick=function(){
    document.getElementById("nextBtn").disabled=false;
  }
}
//   //
//   console.log(n+"r"+i);
//   if (document.getElementById(n+"r"+i).checked){
//     console.log("test");
//     document.getElementById("nextBtn").disabled=false;
//
//     break;
//   }
//
// }
}
