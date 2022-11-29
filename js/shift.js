function showBoard(){
  document.getElementById("writeBoard").style.display="block";
  document.getElementById("preview").style.display="none";
  window.location.href="example.html";
}

function showAlert(){
  alert("Start recording");
}
function showAddBtn(){
  let i=1;
  $(".addvideo").hide();
  $("#start"+i).show();
}

function showPaint(){
  document.getElementById("jspaint").style.display="block";
  var iframe = document.getElementById('jspaint');
  iframe.src=iframe.src;
  document.getElementById("finished").style.display="block";
}

function showDraw(){
  document.getElementById("jspaint1").style.display="block";
  //document.getElementById("draw1").src=saved_file_path+saved_file_name;
  var pat=document.getElementById("jspaint1");
  //let session_id="1cd0d3d468bfa";
  var qqqq = document.getElementById('jspaint').contentWindow.qjsi;
  pat.src="../jspaint-master/index.html#local:"+qqqq;
  console.log("jj"+qqqq);
}

function loaddata(){
  if(window.localStorage["data"]){
    document.getElementById("textarea").value = window.localStorage["data"];
  }
}
function savedata(){
  window.localStorage["data"] = document.getElementById("textarea").value;
}

//code copy from http://stackoverflow.com/questions/1601593/fire-tab-keypress-event-in-javascript
document.getElementById('textarea').onkeydown = function(e){
  if (e.keyCode == 9) {
    insertAtCursor('    ');
    return false;
  }
}

// code edit from http://jsfiddle.net/Znarkus/Z99mK/
function insertAtCursor(myValue) {
  myField = document.getElementById("textarea");
    //IE support
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
    }
}
loaddata();
