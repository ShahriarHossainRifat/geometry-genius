document.getElementById("blogs-button").addEventListener("click", function(){
    // change page to blogs.html in new window
    window.open("blogs.html", "_blank");
})

document.getElementById("triangle-calculate").addEventListener("click", function(){
    // calculate total area of triangle from "triangle-value-1" as base and "triangle-value-2" as height
    var base = document.getElementById("triangle-value-1").value;
    var height = document.getElementById("triangle-value-2").value;
    var area = 0.5 * base * height;
    // update the result in "triangle-area"
    document.getElementById("triangle-area").innerHTML = area;

    // make "triangle-result" visible
    document.getElementById("triangle-result").style.display = "block";

    document.getElementById("triangle-convert-button").addEventListener("click", function(){
        // convert area of triangle from square centimeter to square meter
        var area = document.getElementById("triangle-area").innerHTML;
        var area = area / 10000;
        // update the result in "triangle-area"
        document.getElementById("triangle-area").innerHTML = area;
        // change the text of "triangle-measure-unit" to m
        document.getElementById("triangle-measure-unit").innerHTML = "m";
    })

})

document.getElementById("rectangle-calculate").addEventListener("click", function(){
    // calculate total area of rectangle from "rectangle-value-1" as length and "rectangle-value-2" as width
    var length = document.getElementById("rectangle-value-1").value;
    var width = document.getElementById("rectangle-value-2").value;
    var area = length * width;
    // update the result in "rectangle-area"
    document.getElementById("rectangle-area").innerHTML = area;

    // make "rectangle-result" visible
    document.getElementById("rectangle-result").style.display = "block";

    document.getElementById("rectangle-convert-button").addEventListener("click", function(){
        // convert area of rectangle from square centimeter to square meter
        var area = document.getElementById("rectangle-area").innerHTML;
        var area = area / 10000;
        // update the result in "rectangle-area"
        document.getElementById("rectangle-area").innerHTML = area;
        // change the text of "rectangle-measure-unit" to m
        document.getElementById("rectangle-measure-unit").innerHTML = "m";
    })
})

document.getElementById("parallelogram-calculate").addEventListener("click", function(){
    // calculate total area of parallelogram from "parallelogram-value-1" as base and "parallelogram-value-2" as height
    var base = document.getElementById("parallelogram-value-1").value;
    var height = document.getElementById("parallelogram-value-2").value;
    var area = base * height;
    // update the result in "parallelogram-area"
    document.getElementById("parallelogram-area").innerHTML = area;

    // make "parallelogram-result" visible
    document.getElementById("parallelogram-result").style.display = "block";

    document.getElementById("parallelogram-convert-button").addEventListener("click", function(){
        // convert area of parallelogram from square centimeter to square meter
        var area = document.getElementById("parallelogram-area").innerHTML;
        var area = area / 10000;
        // update the result in "parallelogram-area"
        document.getElementById("parallelogram-area").innerHTML = area;
        // change the text of "parallelogram-measure-unit" to m
        document.getElementById("parallelogram-measure-unit").innerHTML = "m";
    })
})

document.getElementById("rhombus-calculate").addEventListener("click", function(){
    // calculate total area of rhombus from "rhombus-value-1" as base and "rhombus-value-2" as height
    var base = document.getElementById("rhombus-value-1").value;
    var height = document.getElementById("rhombus-value-2").value;
    var area = 0.5 * base * height;
    // update the result in "rhombus-area"
    document.getElementById("rhombus-area").innerHTML = area;

    // make "rhombus-result" visible
    document.getElementById("rhombus-result").style.display = "block";

    document.getElementById("rhombus-convert-button").addEventListener("click", function(){
        // convert area of rhombus from square centimeter to square meter
        var area = document.getElementById("rhombus-area").innerHTML;
        var area = area / 10000;
        // update the result in "rhombus-area"
        document.getElementById("rhombus-area").innerHTML = area;
        // change the text of "rhombus-measure-unit" to m
        document.getElementById("rhombus-measure-unit").innerHTML = "m";
    })
})

document.getElementById("pentagon-calculate").addEventListener("click", function(){
    // calculate total area of pentagon from "pentagon-value-1" as base and "pentagon-value-2" as height
    var base = document.getElementById("pentagon-value-1").value;
    var height = document.getElementById("pentagon-value-2").value;
    var area = 0.5 * base * height;
    // update the result in "pentagon-area"
    document.getElementById("pentagon-area").innerHTML = area;

    // make "pentagon-result" visible
    document.getElementById("pentagon-result").style.display = "block";

    document.getElementById("pentagon-convert-button").addEventListener("click", function(){
        // convert area of pentagon from square centimeter to square meter
        var area = document.getElementById("pentagon-area").innerHTML;
        var area = area / 10000;
        // update the result in "pentagon-area"
        document.getElementById("pentagon-area").innerHTML = area;
        // change the text of "pentagon-measure-unit" to m
        document.getElementById("pentagon-measure-unit").innerHTML = "m";
    })
})

document.getElementById("ellipse-calculate").addEventListener("click", function(){
    // calculate total area of ellipse from "ellipse-value-1" as base and "ellipse-value-2" as height
    var base = document.getElementById("ellipse-value-1").value;
    var height = document.getElementById("ellipse-value-2").value;
    var area = 3.1416 * base * height;
    // update the result in "ellipse-area"
    document.getElementById("ellipse-area").innerHTML = area;

    // make "ellipse-result" visible
    document.getElementById("ellipse-result").style.display = "block";

    document.getElementById("ellipse-convert-button").addEventListener("click", function(){
        // convert area of ellipse from square centimeter to square meter
        var area = document.getElementById("ellipse-area").innerHTML;
        var area = area / 10000;
        // update the result in "ellipse-area"
        document.getElementById("ellipse-area").innerHTML = area;
        // change the text of "ellipse-measure-unit" to m
        document.getElementById("ellipse-measure-unit").innerHTML = "m";
    })
})