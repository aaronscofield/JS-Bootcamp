var parameters = {
    target: "#myFunction",
    data: [{
        fn: 'sin(x)',
        color: 'blue'
    }],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
};

function reset(){
    parameters.data[0].fn = "sin(x)";
    parameters.xAxis.domain = [0, 2*Math.PI];
    parameters.yAxis.domain = [-1, 1];
    parameters.data[0].color = "blue";

    functionPlot(parameters);
}

function plot(){
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;
    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;
    var color = document.querySelector("#color").value;
    var f = document.querySelector("#function").value;

    parameters.data[0].fn = f;
    parameters.xAxis.domain = [xMin, xMax];
    parameters.yAxis.domain = [yMin, yMax];
    parameters.data[0].color = color;

    functionPlot(parameters);
}