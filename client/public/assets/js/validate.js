function validation()
{
 var flag=true;
 var name=document.getElementById("name").value;
 var username=document.getElementById("username").value;
 var password=document.getElementById("password").value;
 var cpassword=document.getElementById("cpassword").value;
 var mobile=document.getElementById("mobile").value;
 var address=document.getElementById("address").value;
 var city=document.getElementById("city").value;
 var male=document.getElementById("male").checked;
 var female=document.getElementById("female").checked;
 var h1=document.getElementById("h1").checked;
 var h2=document.getElementById("h2").checked;
 var h3=document.getElementById("h3").checked; 
  
 var error1=document.getElementById("error1");
 var error2=document.getElementById("error2");
 var error3=document.getElementById("error3");
 var error4=document.getElementById("error4");
 var error5=document.getElementById("error5");
 var error6=document.getElementById("error6"); 
 var error7=document.getElementById("error7");
 var error8=document.getElementById("error8");
 var error9=document.getElementById("error9");
 
 if(!(h1 || h2 || h3))
 {
  error8.innerHTML="*Please select hobbies";
  error8.style.color="red";
  flag=false;
 }
 else
  error8.innerHTML="";
 
 if(!(male || female))
 {
  error7.innerHTML="*Please select gender";
  error7.style.color="red";
  flag=false;
 }
 else
  error7.innerHTML="";
 
 if(city==0)
 {
  error6.innerHTML="*City is required";
  error6.style.color="red";
  flag=false;
 }
 else
  error6.innerHTML="";

 if(address.length==0)
 {
  error5.innerHTML="*Address is required";
  error5.style.color="red";
  flag=false;
 }
 else
  error5.innerHTML="";

 if(mobile.length==0)
 {
  error4.innerHTML="*Mobile number is required";
  error4.style.color="red";
  flag=false;
 }
 else if(isNaN(mobile))
 {
  error4.innerHTML="*Mobile number must be numeric";
  error4.style.color="red";
  flag=false;
 }
 else if(mobile.length!=10)
 {
  error4.innerHTML="*Mobile number must 10-digit";
  error4.style.color="red";
  flag=false;
 }
 else
  error4.innerHTML="";

 if(name.length==0)
 {
  error1.innerHTML="*Name is required";
  error1.style.color="red";
  flag=false;
 }
 else
  error1.innerHTML="";
  
 var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 if(username.length==0)
 {
  error2.innerHTML="*Username is required";
  error2.style.color="red";
  flag=false;
 }
 else if(!username.match(pattern))
 {
  error2.innerHTML="*Enter valid Emailid/Username";
  error2.style.color="red";
  flag=false;
 }
 else
  error2.innerHTML="";
  
 if(password=="")
 {
  error3.innerHTML="*Password is required";
  error3.style.color="red";
  flag=false;
 }
 else if(password.length<5 || password.length>8)
 {
  error3.innerHTML="*Password must be 5-8 letters long";
  error3.style.color="red";
  flag=false;
 }
 else
  error3.innerHTML="";
  
  
 if(cpassword!=password)
 {
  error9.innerHTML="*Password & Confirm password mismatch";
  error9.style.color="red";
  flag=false;
 }
 else
  error9.innerHTML="";  
  
  
 return flag;
}
