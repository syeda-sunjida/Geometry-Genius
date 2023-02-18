function ellipseArea() {
    var a = parseInt(document.getElementById("a").value);

    var b = parseInt(document
        .getElementById("b").value);



    
    var area = (a * b)*3.1416 ;



    document.getElementById(
        "calculate-ellipse").innerText = area;
    }