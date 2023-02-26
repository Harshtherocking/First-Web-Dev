function submitkro(){
    if(document.getElementById("seats").value >15){
        alert("You can't book more than 15 seats.");
        document.getElementsById("seats").value="";
    }
    else{
        alert("Thanks for booking your seats. Happy to serve you.");
        document.getElementsByTagName("input").value="";
    }
}

function navbuttons(){
    document.getElementById("navbt").color = "aqua";
}
