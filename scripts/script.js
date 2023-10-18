function updateTime() {
  const currentTimeElementLg = document.getElementById("current-time-lg");
  const currentTimeElementMd = document.getElementById("current-time-md");
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const currentTimeString = `${hours}:${minutes}:${seconds}`;
  currentTimeElementLg.textContent = currentTimeString;
  currentTimeElementMd.textContent = currentTimeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to set the time
updateTime();

function reelPage() {
  const footer = document.getElementById("footer");
  const reelbtn = document.getElementById("reel-indicator");
  const infobtn = document.getElementById("info-indicator");
  reelbtn.classList.add("bg-black");
  infobtn.classList.remove("bg-black");
  footer.classList.remove("lg:fixed");
  footer.classList.add("fixed");
}

function infoPage() {
  const footer = document.getElementById("footer");
  const reelbtn = document.getElementById("reel-indicator");
  const infobtn = document.getElementById("info-indicator");
  reelbtn.classList.remove("bg-black");
  infobtn.classList.add("bg-black");
  footer.classList.remove("fixed");
  footer.classList.add("lg:fixed");
}
