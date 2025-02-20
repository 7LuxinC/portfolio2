//it is option to write  ; 
//variable
var x = 5;

//condition
if(x == 5){
    //print out sth 
    console.log("It is 5")
}else{
    console.log("It is not 5")
}

//loops 
for(var counter = 0; counter <= 5; counter++){
    console.log(counter);
}

//function
function addNumbers(x, y){
    var result = x + y;
    return result;
}


function displayEmail(){
    var email = document.getElementById("emailInput").value;
    console.log(email);
    //.innerHTML email will be shown inside the html 
    document.getElementById("pageTitle").innerHTML = email;
}