var parameters = {
    target: "#myFunction",
    data: [{
        fn: 'sin(x)',
        color: 'blue'
    }
        ],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
};

function plot(){
    functionPlot(parameters);
}

function function1(){
    document.getElementById("heading1").innerHTML = "Or is it??";
}

function myFunction(){
    pagetitle.style.color = "blueviolet";
}