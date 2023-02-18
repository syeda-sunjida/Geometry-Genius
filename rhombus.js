function rhombusArea() {
    var rhombusd1 = parseFloat(document.getElementById("rhombusd1").value);

    var rhombusd2 = parseFloat(document
        .getElementById("rhombusd2").value);



    // console.log(typeof(triangleHeight));
    var prevArea = (rhombusd1 * rhombusd2)*.5 ;
    var area = prevArea.toFixed(2);



    document.getElementById(
        "calculate-rhombus").innerText = area;
    }