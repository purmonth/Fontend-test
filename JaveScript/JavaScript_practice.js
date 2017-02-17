var i = 1;
for(i = 0;i < 10;i ++){
	document.write(i + "   ");
}

function printInt(a) {
	document.write(a);
}

function printNewline() {
	document.write("<br>");
}

var j = 10;
printNewline();
while (j > 0){
	printInt(j);
	printNewline();
	j--;
}


document.getElementById('Hi').innerHTMl = 16;