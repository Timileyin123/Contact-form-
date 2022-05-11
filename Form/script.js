function validate()
{

var email = document.getElementById("email").value;
var regex =/^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/
//  var name = document.getElementById("name").value;
//  var subject = document.getElementById("subject").value;
//  var query = document.getElementById("query").value;
   if (email.trim()=="")
  {
      alert("Missing Credentials");
      return false
  }

 

//  if (email.trim()=="" ||name.trim()=="string" || query.trim()==""|| subject.trim()=="")
//   {
//       alert("Please enter a valid email,name and description");
//    return false
else if(regex.test(email))
  {
      alert("Email submitted successfully");
   return true
  }
 else
 {
     alert("Wrong email");
     return false
     }

}

// function validate()
// {
// var name = document.getElementById("name").value;
// var query = document.getElementById("query").value;

// if (name.trim=="" || query.trim=="")
// alert("")
// }