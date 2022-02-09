var css = document.queryselector("h3");
var color1 = document.queryselector(".color1");
var color2 = document.queryselector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background =
	"linear- gradient(to right,"
+ color1.value 
+ ", "
color2.value
+ ")";

css.textcontent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color1.addEventListener("input", setGradient);