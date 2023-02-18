function rhombusArea() {
    var rhombusd1 = parseInt(document.getElementById("rhombusd1").value);

    var rhombusd2 = parseInt(document
        .getElementById("rhombusd2").value);



    // console.log(typeof(triangleHeight));
    var area = (rhombusd1 * rhombusd2)*.5 ;



    document.getElementById(
        "calculate-rhombus").innerText = area;
    }