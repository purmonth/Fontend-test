function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "jkjlk";
    x = document.getElementById("demo").value;
    try { 
        if(x == "")  throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5)    throw "too low";
        if(x > 10)   throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}



try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("Hi").innerHTML = err.message;
}