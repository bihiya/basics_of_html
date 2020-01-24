function my()
{
    
    var a=document.getElementById("one").Value;
    document.write(a);
    var b=document.getElementById("two").Value;
    document.write(parseInt(a*b));
    document.getElementById("ans").innerHTML=a*b;
}