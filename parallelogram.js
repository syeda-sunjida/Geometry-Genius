function paraArea() {
    var paraHeight = parseInt(document.getElementById("para-height").value);

    var paraBase = parseInt(document
        .getElementById("para-base").value);



    // console.log(typeof(triangleHeight));
    var area = (paraHeight * paraBase) ;



    document.getElementById(
        "calculate-para").innerText = area;
        return area;
}