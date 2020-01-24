function myFunction()
{
    alert("hi");
   var name= document.getElementById("name").value;
   var email= document.getElementById("email").value;
   var mobile= document.getElementById("mobile").value;
   var password= document.getElementById("password").value;
//    var name= document.getElementById("name");
//    var name= document.getElementById("name");
// alert(name);
// alert(email);
// alert(mobile);
// alert(password);
//document.write("Name="+name+"<br>"+"Mobile="+mobile+"<br>"+"Email="+email+"<br>"+"password="+password+"<br>");
var empdata={
    ename:" ",
    eemail:" ",
    emobile:" ",
    epassword:" "
};
empdata.ename=name;
empdata.eemail=email;
empdata.emobile=mobile;
empdata.epassword=password;
alert(empdata);
// console.log(empdata.eemail);
// console.log(empdata.emobile);
// console.log(empdata.epassowrd);


}