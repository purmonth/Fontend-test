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
    }
    return (shortResult)
}



