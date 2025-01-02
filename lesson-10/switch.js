var on = document.getElementById("on");
var off = document.getElementById("off");
var bulb = document.getElementById("bulb");
var itoggle = document.getElementById("toggle");
var startBlink = document.getElementById("start-blink");
var stopBlink = document.getElementById("stop-blink");
var interval;

on.addEventListener("click", () => {
  bulb.src = "on.png";
})
off.addEventListener("click", () => {
  bulb.src = "off.png";
})

itoggle.addEventListener("click", () => {
  if (bulb.src.substring(bulb.src.lastIndexOf("/") + 1) == "off.png") {
    bulb.src = "on.png";
  } else {
    bulb.src = "off.png";
  }
})

startBlink.addEventListener("click", () => {
  if (interval !== null) {
    clearInterval(interval);
  }
  
  interval = setInterval(() => {
    if (bulb.style.visibility === "hidden") {
      bulb.style.visibility = "visible";
    } else {
      bulb.style.visibility = "hidden";
    }
  }, 500);
})

stopBlink.addEventListener("click", () => {
  clearInterval(interval);
  bulb.style.visibility = "visible";

})