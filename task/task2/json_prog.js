
var i;
var saas=0;


function getJsonData() {
   
    
   
   
let response = " ";
let obj = " ";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
response = xhttp.responseText;
console.log(response);

obj = JSON.parse(response);
console.log(obj);

console.log(obj.value[1].joke);
saas=1;
if(saas==1)
    {
       
        document.getElementById('tb').style.visibility="visible";

    }
$("table tbody").find("tr:lt(10)").remove();



for(i=0;i<=9;i++)
{
    var ind = i;
        var id = obj.value[i].id;
        var joke = obj.value[i].joke;
        
        var data = "<tr><td>" + ind + "</td><td>" + id + "</td><td>" + joke + "</td></tr>";
      
        $("table tbody").append(data);
   
    
}



         }
         

    
    };

xhttp.open("GET", "http://api.icndb.com/jokes/random/1000", true);
xhttp.send();

$( "#nnext" ).click(function() {
    p=i+10;
    $("table tbody").find("tr:lt(10)").remove();
   
   
   
    for(k=i;k<p;k++)
    {
        var ind = k;
        var id = obj.value[k].id;
        var joke = obj.value[k].joke;
      
        var data = "<tr><td>" + ind + "</td><td>" + id + "</td><td>" + joke + "</td></tr>";
        $("table tbody").append(data);

    }
    i=k;
    
  });

 
}


