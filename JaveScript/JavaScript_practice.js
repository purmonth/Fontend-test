console.log("Hello World");



var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
    points.sort();
    document.getElementById("demo").innerHTML = points;
}
function myFunction2() {
    points.sort(function(a, b){return a - b});
    document.getElementById("demo").innerHTML = points;
}


document.write('Hi');

var i;
for(i = 0;i < 10;i ++){
	console.log( i +" ");
}