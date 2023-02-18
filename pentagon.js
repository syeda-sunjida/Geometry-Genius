function pentagonArea() {
    var penP = parseFloat(document.getElementById("pen-p").value);

    var penD = parseFloat(document
        .getElementById("pen-d").value);



    // console.log(typeof(triangleHeight));
    var prevArea = (penP * penD)*.5 ;
    var area = 'Area of Parallelogram: '+ prevArea.toFixed(2) + 'cm^2';



    document.getElementById(
        "calculate-pentagon").innerText = area;
    }