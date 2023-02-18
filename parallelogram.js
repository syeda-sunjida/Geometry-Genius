function paraArea() {
    var paraHeight = parseFloat(document.getElementById("para-height").value);

    var paraBase = parseFloat(document
        .getElementById("para-base").value);



    // console.log(typeof(triangleHeight));
    var prevArea = (paraHeight * paraBase) ;
    var area = prevArea.toFixed(2);



    document.getElementById(
        "calculate-para").innerText = area;
        return area;
}