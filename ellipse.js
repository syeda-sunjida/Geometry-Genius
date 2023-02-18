function ellipseArea() {
    var a = parseInt(document.getElementById("a").value);

    var b = parseInt(document
        .getElementById("b").value);


if(a<=0 && b<=0){
    console.log('enter a positive number')
}
    
    var area = (a * b)*3.1416 ;



    document.getElementById(
        "calculate-ellipse").innerText = area;
    }