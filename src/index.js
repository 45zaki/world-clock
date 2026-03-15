function updateTime(){
    // Brasilia
    let brasiliaElement=document.querySelector("#brasilia");
    let brasiliaDateElement=brasiliaElement.querySelector(".date");
    let brasiliaTimeElement=brasiliaElement.querySelector(".time");
    
    let brasiliaTime=moment().tz("America/Brasilia");
    brasiliaDateElement.innerHTML=brasiliaTime.format("MMM Do YYYY");
    brasiliaTimeElement.innerHTML=brasiliaTime.format("h:mm:ss [<small>]A[</small>]");


    // Tokyo
    let tokyoElement=document.querySelector("#tokyo");
    let tokyoDateElement=tokyoElement.querySelector(".date");
    let tokyoTimeElement=tokyoElement.querySelector(".time");

    let tokyoTime=moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML=tokyoTime.format("MMM Do YYYY");
    tokyoTimeElement.innerHTML=tokyoTime.format("h:mm:ss [<small>] A [</small>]");
// Istanbul
let istanbulElement=document.querySelector("#istanbul");
let istanbulDateElement=istanbulElement.querySelector(".date");
let istanbulTimeElement=istanbulElement.querySelector(".time");

let istanbulTime=moment().tz("Europe/Istanbul");
istanbulDateElement.innerHTML=istanbulTime.format("MMM Do YYYY");
istanbulTimeElement.innerHTML=istanbulTime.format("h:mm:ss [<small>] A [</small>]");


}
   updateTime(); // Call it initially
   setInterval(updateTime, 1000); // Update every second