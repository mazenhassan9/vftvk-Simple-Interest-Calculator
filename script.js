function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (isNaN(principal) || principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML =
        "            If you deposit <mark>" + principal + "</mark>,<br>\n" +
        "            at an interest rate of <mark>" + rate + "%</mark>.<br>\n" +
        "            You will receive an amount of <mark>" + interest + "</mark>,<br>\n" +
        "            In Year <mark>" + year + "</mark>.<br>\n";
    }   
}
function updateRate() 
    {
        var rateval = document.getElementById("rate").value+"%";
        document.getElementById("rate_val").innerText=rateval;
    }
        