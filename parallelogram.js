function paraArea() {
    var paraHeight = parseFloat(document.getElementById("para-height").value);

    var paraBase = parseFloat(document
        .getElementById("para-base").value);



    // console.log(typeof(triangleHeight));
    var prevArea = (paraHeight * paraBase) ;
    var area = 'Area of Parallelogram: '+ prevArea.toFixed(2) + 'cm^2';



    document.getElementById(
        "calculate-para").innerText = area;
        return area;
}