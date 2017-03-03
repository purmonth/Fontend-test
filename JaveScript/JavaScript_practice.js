function getBinary(anInteger){
    var result = ""
    var shortResult = ""
    for(var i = 1;i < 33;i ++){
        if(anInteger & 1 == 1){
            result = "1" + result
            shortResult = result
        }else{
            result = "0" +result
        }
        anInteger = anInteger >> 1
        console.log(anInteger+" "+result+" "+shortResult);
    }
    return (shortResult)
}


function Clock(hours, minutes){
    this.hours = hours;
    this.minutes = minutes;
    this.setTime = setTime;
    this.displayTime = displayTime;
}

function setTime(hours, minutes){
    this.hours = hours;
    this.minutes = minutes;
}

function displayTime(){
    var line = this.hours + " : " + this.minutes;
    document.writeln("<HR>Time of clock: "+line);
}


function fsearch (aForm){
    alert("Sorry, search function not yet impelemented");
}

function foptions (aForm){
    alert("Sorry, no options available");
}
