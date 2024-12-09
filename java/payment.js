function ChangeEvent(){
    //format currency USD
    var USDdollor = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD" // BTH,EUR,..
    });

    var payment=prompt("Pleas input your payment:");
    if(payment){
        alert("booking sucessful");
        document.getElementById('salary').value=
        USDdollor.format(payment);
    }else{
        alert("Pleas input Your payment again.");
        payment=prompt("Pleas input your payment again:");
        document.getElementById('salary').value=
        USDdollor.format(payment);
    }
}