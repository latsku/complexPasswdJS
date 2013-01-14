//
// 
var passwordLengthRequirement = 6

var reqLength, reqQuality, reqUppercase, reqLowercase, reqDigits, reqNoAlphaNum, reqUnicode, reqNoname;
window.onload=function(){
  reqLength = document.getElementById('reqLength');
  reqQuality = document.getElementById('reqQuality')
  reqUppercase = document.getElementById('reqUppercase');
  reqLowercase = document.getElementById('reqLowercase');
  reqDigits = document.getElementById('reqDigits');
  reqNoAlphaNum = document.getElementById('reqNoAlphaNum');
  reqUnicode = document.getElementById('reqUnicode');
  reqNoname = document.getElementById('reqNoname');  
}

function testpasswd(password, name, username) {

  var qualityRequirements = 0;
  
  if ( password.length >= passwordLengthRequirement ) {
    reqLength.className="green";
  } else {
    reqLength.className="red";
  }
  
  if ( password.match(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/) ) {
    reqLowercase.className="green";
    qualityRequirements++;
  } else {
    reqLowercase.className="red";
    qualityRequirements--;
  }

  if ( password.match(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/) ) {
    reqUppercase.className="green";
    qualityRequirements++;
  } else {
    reqUppercase.className="red";
    qualityRequirements--;
  }

  if ( password.match(/~|!|@|#|\$|%|\^|&|\*|_|-|\+|\=|`|\||\\|\(|\)|\{|\}|\[|\]|:|\;|\"|\'|<|>|,|\.|\?|\//) ) { 
  // http://msdn.microsoft.com/en-us/subscriptions/cc786468%28v=ws.10%29.aspx
  // ~!@#$%^&*_-+=`|\(){}[]:;"'<>,.?/
    reqNoAlphaNum.className="green";
    qualityRequirements++;
  } else {
    reqNoAlphaNum.className="red";
    qualityRequirements--;
  }
  
  if ( password.match(/1|2|3|4|5|6|7|8|9|0/) ) {
    reqDigits.className="green";
    qualityRequirements++;
  } else {
    reqDigits.className="red";
    qualityRequirements--;
  }
  
  if ( qualityRequirements >= 2 ) {
    reqQuality.className="green";
  } else {
    reqQuality.className="red";
  }

  var noName = 0;
  var nameArray = String(name).toLowerCase().replace(/,|\.|-|–|—|_|\$|\t/g, " ").split(" ");
  for (part in nameArray) {
    if ( name.length >0 && nameArray[part].length >= 3 ) {
      if ( String(password).toLowerCase().indexOf(nameArray[part]) !== -1 ) {
        noName++;
      }
    }
  }
  
  if ( username.length > 0 && String(password).toLowerCase().indexOf(username) !== -1 ) {
    noName++;
  }
  
  if ( noName > 0 ) {
    reqNoname.className="red";
  } else {
    reqNoname.className="green";
  }
  
}




