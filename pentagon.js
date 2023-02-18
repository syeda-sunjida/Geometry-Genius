function pentagonArea() {
    var penP = parseInt(document.getElementById("pen-p").value);

    var penD = parseInt(document
        .getElementById("pen-d").value);



    // console.log(typeof(triangleHeight));
    var area = (penP * penD)*.5 ;



    document.getElementById(
        "calculate-pentagon").innerText = area;
    }