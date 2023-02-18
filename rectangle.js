function rectangleArea() {
    var rectangleLength = parseFloat(document
        .getElementById("rectangle-length").value);

    var rectangleWidth = parseFloat(document
        .getElementById("rectangle-width").value);



    // console.log(typeof(triangleHeight));
    var prevArea = (rectangleLength * rectangleWidth);
    var area = prevArea.toFixed(2);



    document.getElementById(
        "calculate-rectangle").innerText = area;
}