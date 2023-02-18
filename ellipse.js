function ellipseArea() {
    var a = parseFloat(document.getElementById("a").value);

    var b = parseFloat(document
        .getElementById("b").value);


    if (a <= 0 && b <= 0) {
        console.log('enter a positive number')
    }

    var prevArea = (a * b) * 3.1416;
    var area = prevArea.toFixed(2);


    document.getElementById(
        "calculate-ellipse").innerText = area;
}