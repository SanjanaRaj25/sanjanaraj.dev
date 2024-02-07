// functions
fade = (myColor="#fbecffcb", myDates="2003-2024", myText="places I've lived!") => {
    let opacity = 0.5; 
    const interval = setInterval(() => {
        draw(myColor, myDates, myText, opacity);
        opacity += 0.02; 
        if (opacity >= 1) {
            clearInterval(interval); 
        }
    }, 10);
}

fadeIN = (myColor="#abe585") => {
    let opacity = 0.5; 
    const interval = setInterval(() => {
        drawIN(myColor, opacity);
        opacity += 0.02; 
        if (opacity >= 1) {
            clearInterval(interval); 
        }
    }, 10);
}

draw = (myColor, myDates, myText, opacity = 1.0) => {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        // set opacity
        ctx.globalAlpha = opacity;

        // clear the canvas
        ctx.clearRect(0, 0, 250, 200); 

        // Set the background color
        ctx.fillStyle = myColor;
        ctx.fillRect(0, 0, 250, 200);

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

drawIN = (myColor="#abe585", opacity = 1) => {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        // set opacity
        ctx.globalAlpha = opacity;

        // clear the canvas
        ctx.clearRect(0, 0, 250, 200); 

        // Set the background color
        ctx.fillStyle = myColor;
        ctx.fillRect(0, 0, 250, 200);

        // make a dashed line through the center
        ctx.beginPath();
        ctx.setLineDash([5, 15]);
        ctx.moveTo(0, 100);
        ctx.lineTo(300, 100);
        ctx.stroke();

        // Set font and align text
        ctx.font = "italic 20px 'Lato'"; 
        ctx.textAlign = "center";

        // Fill the text
        ctx.fillStyle = "black"; 
        ctx.fillText("West Lafeyette, IN", 125, 75);
        ctx.fillText("Chesterton, IN", 125, 155);

        ctx.font = "bold 15px 'Lato'"; 
        ctx.fillText("2005-2008", 125, 55);
        ctx.fillText("2017-2019", 125, 135);
    }
}

hoverAL = () => {
    fade("#da9191", "2022-2024", "Huntsville, AL");
}

hoverMI = () => {
    fade("#ffbae9", "2003-2005", "Southfield, MI");
}

hoverIA = () => {
    fade("rgb(123, 109, 253)", "2008-2015", "Bettendorf, IA");
}

hoverWI = () => {
    fade("#9fdae9", "2015-2017", "Brookfield, WI");
}

hoverNC = () => {
    fade("rgb(255, 203, 171)", "2019-2021", "Charlotte, NC");
}

hoverNH = () => {
    fade("#ffdd00", "2019-2021", "Hanover, NH");
}

hoverIN = () => {
    fadeIN();
}

hoverCAN = () => {
    fade();
}



// define variables
const canvas = document.querySelector('canvas');
var michigan = document.getElementById("MI");
var indiana = document.getElementById("IN");
var iowa = document.getElementById("IA");
var wisconsin = document.getElementById("WI");
var carolina = document.getElementById("NC");
var hampshire = document.getElementById("NH");
var alabama = document.getElementById("AL");
var map = document.getElementById("map");

// draw the initial places popup
draw(myColor="#fbecffcb", myDates="2003-2024", myText="places I've lived!");

// add event listeners
alabama.addEventListener("mouseover", hoverAL);
michigan.addEventListener("mouseover", hoverMI);
indiana.addEventListener("mouseover", hoverIN);
iowa.addEventListener("mouseover", hoverIA);
wisconsin.addEventListener("mouseover", hoverWI);
carolina.addEventListener("mouseover", hoverNC);
hampshire.addEventListener("mouseover", hoverNH);
canvas.addEventListener("mouseover", hoverCAN);
