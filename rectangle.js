function rectangleArea() {
    var rectangleLength = parseInt(document
        .getElementById("rectangle-length").value);

    var rectangleWidth = parseInt(document
        .getElementById("rectangle-width").value);



    // console.log(typeof(triangleHeight));
    var area = (rectangleLength * rectangleWidth);



    document.getElementById(
        "calculate-rectangle").innerText = area;
}