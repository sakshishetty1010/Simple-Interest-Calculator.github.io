function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = Number(document.getElementById("years").value);
    
    if(isNaN(p) ||p==0 || p<0){
        alert("Enter positive number");
        document.getElementById("principal").focus();

    }
    
   else{
    var n = new Date().getFullYear()
    var year = n+y-1;
    var interest = p*y*r/100;
    
    document.getElementById("result").innerHTML = "If you deposit "+"<mark>"+p+"</mark>,"+'<br/>'+"at an interest rate of <mark>"+r+"%</mark>"+"<br/>"+"You will receive amount of <mark>"+interest+"</mark>,"+"<br/>in the year<mark> "+year+"</mark>";

   }
}
function updateText(val){
    document.getElementById("textInput").value = val;
}

        
