// functions
const canvas = document.querySelector('canvas');


draw = (myColor="#fbecffcb", myDates="2003-2024", myText="places I've lived!") => {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        // clear the canvas
        ctx.clearRect(0, 0, 250, 200); 

        // Set the background color
        ctx.fillStyle = myColor;
        ctx.fillRect(0, 0, 250, 200);

        // fade in
        // var op = 0.1;
        // var fade = () => {
        //     if 
        // }

        // Set font and align text
        ctx.font = "italic 25px 'Lato'"; 
        ctx.textAlign = "center";

        // Fill the text
        ctx.fillStyle = "black"; 
        ctx.fillText(myText, 125, 115);

        ctx.font = "bold 15px 'Lato'"; 
        ctx.fillText(myDates, 125, 75);
    }
}


hoverAL = () => {
    draw("#da9191", "2022-2024", "Huntsville, AL");
}

hoverMI = () => {
    draw("#ffbae9", "2003-2005", "Southfield, MI");
}

hoverIA = () => {
    draw("rgb(123, 109, 253)", "2008-2015", "Bettendorf, IA");
}

hoverWI = () => {
    draw("#9fdae9", "2015-2017", "Brookfield, WI");
}

hoverNC = () => {
    draw("rgb(255, 203, 171)", "2019-2021", "Charlotte, NC");
}

hoverNH = () => {
    draw("#ffdd00", "2019-2021", "Hanover, NH");
}

hoverCAN = () => {
    draw();
}

// TODO: make this display both cities
hoverIN = () => {
    draw("#abe585", "2005-2008", "West Lafayette, IN");
    }

// <!-- mi, in, ia, wi, nc, nh, al -->

// define variables
var michigan = document.getElementById("MI");
var indiana = document.getElementById("IN");
var iowa = document.getElementById("IA");
var wisconsin = document.getElementById("WI");
var carolina = document.getElementById("NC");
var hampshire = document.getElementById("NH");
var alabama = document.getElementById("AL");
var map = document.getElementById("map-outline");

// draw the initial places popup
draw();

// add event listeners
alabama.addEventListener("mouseover", hoverAL);
michigan.addEventListener("mouseover", hoverMI);
indiana.addEventListener("mouseover", hoverIN);
iowa.addEventListener("mouseover", hoverIA);
wisconsin.addEventListener("mouseover", hoverWI);
carolina.addEventListener("mouseover", hoverNC);
hampshire.addEventListener("mouseover", hoverNH);
canvas.addEventListener("mouseover", hoverCAN);
map.addEventListener("mouseout", hoverCAN);


