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
