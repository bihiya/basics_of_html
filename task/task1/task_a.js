
$(document).ready(function(){
  
    $(".add-data").click(function(){
        var name = $("#name").val();
        var sal = $("#salary").val();
        if(name != "" && sal != ""){
        var data = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + sal + "</td></tr>";
        $("table tbody").append(data);
    
    }
    else{
        alert("enter details first");
    }
    });

   
   
    $(".remove_data").click(function(){
        var x = false;
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
                x=true;
                alert("deleted successfully")

            }
           
        });
        if(x==false)
        {
            alert("select any data first");
        }
    });
}); 