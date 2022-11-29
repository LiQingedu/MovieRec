
function getInput(){
  var route="";
  var gender=document.getElementById("gender");
  var ocpt=document.getElementById("occupation");
  var hobby=document.getElementById("hobby");
  var eventCat=document.getElementById("event1cat");

  for (let i=0; i<gender.options.length; i++){
    var gd=gender.options[i];
    if (gd.selected==true){
      break;
    }

  }
  var gdResult=gd.value;

  for (let i=0; i<ocpt.options.length; i++){
    var op=ocpt.options[i];
    if (op.selected==true){
      break;
    }

  }
  var opResult=op.value;

  for (let i=0; i<hobby.options.length; i++){
    var hb=hobby.options[i];
    if (hb.selected==true){
      break;
    }

  }
  var hbResult=hb.value;

  for (let i=0; i<eventCat.options.length; i++){
    var cat=eventCat.options[i];
    if (cat.selected==true){
      break;
    }

  }
var catResult=cat.value;

  if (gdResult=="f"&&opResult=="STEM"&&hbResult=="arts"){
     route="saf";
   }
  else if (gdResult=="f"&&opResult=="STEM"&&hbResult=="sports"){
      route="ssf";
    }
  else if (gdResult=="m"&&opResult=="STEM"&&hbResult=="arts"){
       route="sam";
     }
  else if (gdResult=="f"&&opResult=="Non-STEM"&&hbResult=="arts"){
        route="naf";
      }
  else if (gdResult=="m"&&opResult=="Non-STEM"&&hbResult=="sports"){
         route="nsm";
       }
  else if (gdResult=="f"&&opResult=="Non-STEM"&&hbResult=="sports"){
          route="nsf";
        }
  else if (gdResult=="m"&&opResult=="Non-STEM"&&hbResult=="arts"){
           route="nam";
         }
  else if (gdResult=="m"&&opResult=="STEM"&&hbResult=="sports"){
            route="ssm";
          }

      localStorage.setItem("selection", route);
localStorage.setItem("catSelect",catResult);
var userID=document.getElementById("userID").value;
localStorage.setItem("user",userID);
}
