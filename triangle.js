function triangleArea() {
    var triangleHeight = parseFloat(document.getElementById("triangle-height").value);

    var triangleBase = parseFloat(document
        .getElementById("triangle-base").value);



    // console.log(typeof(triangleHeight));
    var prevArea = (triangleHeight * triangleBase) * .5;
    var area = ' Area of Triangle: '+ prevArea.toFixed(2) + 'cm^2';


    if (triangleBase<=0 || triangleHeight<=0) {
        document.getElementById("calculate-triangle").innerText = 'no negative'
    }
    if (triangleBase==" " || triangleHeight== " ") {
        document.getElementById("calculate-triangle").innerText = 'no negative'
    }
   
     else{
    document.getElementById(
        "calculate-triangle").innerText = area;
    }

}