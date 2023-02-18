function rectangleArea() {
    var rectangleLength = parseFloat(document
        .getElementById("rectangle-length").value);

    var rectangleWidth = parseFloat(document
        .getElementById("rectangle-width").value);



    // console.log(typeof(triangleHeight));
    var prevArea = (rectangleLength * rectangleWidth);
    var area = 'Area of Rectangle: '+ prevArea.toFixed(2) + 'cm^2';

    if (rectangleLength<=0 || rectangleWidth<=0) {
        document.getElementById("calculate-rectangle").innerText = 'no negative'
    }
else{
    document.getElementById(
        "calculate-rectangle").innerText = area;
    }
}