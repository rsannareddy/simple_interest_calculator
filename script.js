function compute()
{
    var p = document.getElementById("principal").value;
    var rat = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var RateInPercent = rat / 100

    var A = p * (1 + RateInPercent*years)

    document.getElementById("result").innerHTML = A;
    
}
        

