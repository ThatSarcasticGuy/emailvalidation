<script type="text/javascript" >

 function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  return regex.test(email);
}
 $("#submitbutton").click(function(){
 var errorMessage="";
 var fieldMissing="";
 
 if($("#email").val() ==""){
 fieldMissing +="Email<br>";
 }
 if($("#phone").val() ==""){
 fieldMissing +="Telephone<br>";
 }
 if($("#password").val() ==""){
 fieldMissing +="Password<br>";
 }
 if($("#cpassword").val() ==""){
 fieldMissing +="Confirm Password<br>";
 }
 if(fieldMissing !="")
 {
 errorMessage +=" The following fields are missing :"+ fieldMissing;
}
 if(isEmail($("#email").val())==false){
 errorMessage +="<p>Your email address is not valid </p>";
 }
 
 if($.isNumeric($("#phone").val())==false) {
 errorMessage +="<p>Your phone number is not numeric </p>";
 }
 
 if($("#password").val()!=$("#cpassword").val()) {
 errorMessage +="<p>Your passwords don't match </p>";
 }
 if (errorMessage !=""){
$("#errorMessage").html(errorMessage);
}
else{
$("#success").show();
$("#errorMessage").hide();
}
 
 });
 </script>