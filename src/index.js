function updateTime(){
    // Kabul
    let kabulElement=document.querySelector("#kabul");
      if (kabulElement) {
    let kabulDateElement=kabulElement.querySelector(".date");
    let kabulTimeElement=kabulElement.querySelector(".time");
    
    let kabulTime=moment().tz("Asia/Kabul");
    kabulDateElement.innerHTML=kabulTime.format("MMM Do YYYY");
    kabulTimeElement.innerHTML=kabulTime.format("h:mm:ss [<small>]A[</small>]");
      }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

}
  
   function updateCity(event){
   let cityTimeZone=event.target.value;
   if(!cityTimeZone) return;
     if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
   let cityName=cityTimeZone.replace("_" , " ").split("/")[1];
   let cityTime=moment().tz(cityTimeZone);
   let citiesElement=document.querySelector("#cities");
   citiesElement.innerHTML=`
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMM Do YYYY")}</div>
            </div>
                <div class="time"> ${cityTime.format("h:mm:ss")} <small> ${cityTime.format("A")} </small></div>           
          </div>    
             <a href="#" id="backLink">Back to Cities</a>
      `;

      document.querySelector("#backLink").addEventListener("click", function(e) {
        e.preventDefault();
        citiesElement.innerHTML = `
        <div class="city" id="kabul">
          <div>
            <h2>Kabul</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>
        <div class="city" id="paris">
          <div>
            <h2>Paris</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>
        </div>               
         `;
        updateTime();
      });
   }
    updateTime(); // Call it initially
   setInterval(updateTime, 1000); // Update every second
let citiesSelectElement=document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
