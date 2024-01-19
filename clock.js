setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  let seconds = date.getSeconds();
  if (seconds < 10) seconds = `0${seconds}`;
  let currentTime = `${hours}:${minutes}:${seconds}`;
  document.querySelector("#time").innerHTML = currentTime;
  if (hours < 12) welcomeText = "Good Morning";
  else if (hours < 18) welcomeText = "Good Afternoon";
  else if (hours < 24) welcomeText = "Good Evening";
}, 1000);

let partyTime = false;
let party = document.querySelector("#party");
let quote = document.querySelector("#quote");
let image = document.querySelector(".image");

let welcomeText = "Good Morning";
const isParty = () => {
  partyTime = !partyTime; // Toggle the value of partyTime
  console.log(partyTime);
  image.src = partyTime ? "party.jpg" : "sleep.jpg";
  let partyText = partyTime ? "Party Time!!!" : welcomeText;
  quote.innerHTML = partyText;
};

// else if (hours < 12) quot;
