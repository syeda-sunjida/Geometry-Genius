function triangleArea() {
    var triangleHeight = parseInt(document.getElementById("triangle-height").value);

    var triangleBase = parseInt(document
        .getElementById("triangle-base").value);



    // console.log(typeof(triangleHeight));
    var area = (triangleHeight * triangleBase) * .5;



    document.getElementById(
        "calculate-triangle").innerText = area;
}