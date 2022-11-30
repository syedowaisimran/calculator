var display = document.getElementById("display");



function getval(a) {

    display.value += a;
}
function calculate() {
    var a = eval(display.value);
    console.log(a)
    display.value = a
}
function clearall() {
    display.value = ""
}