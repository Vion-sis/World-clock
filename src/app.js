function showUpdate() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesCurrent = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = `${losAngelesCurrent.format(
    "dddd Do YYYY"
  )}`;
  losAngelesTimeElement.innerHTML = `${losAngelesCurrent.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  )}`;

  let newDelhiElement = document.querySelector("#new-delhi");
  let newDelhiDateElement = newDelhiElement.querySelector(".date");
  let newDelhiTimeElement = newDelhiElement.querySelector(".time");
  let newDelhiCurrent = moment().tz("Asia/Kolkata");
  newDelhiDateElement.innerHTML = `${newDelhiCurrent.format("dddd Do YYYY")}`;
  newDelhiTimeElement.innerHTML = `${newDelhiCurrent.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  )}`;
}

showUpdate();
setInterval(showUpdate, 1);

function showCityTime(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone == "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citySearch = document.querySelector("#cities");
  citySearch.innerHTML = `<div class="city">
         <div>
            <h2>${cityName}</h2>
            <div class="date">${moment()
              .tz(cityTimeZone)
              .format("dddd Do YYYY")}</div>
          </div>
          <div class="time">${moment()
            .tz(cityTimeZone)
            .format("h:mm:ss [<small>]A[</small>]")}</div>
        </div>`;
}

let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", showCityTime);
