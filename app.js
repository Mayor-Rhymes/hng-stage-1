const dayOfWeek = document.querySelector("#dayOfWeek");
const utcTime = document.querySelector("#utcTime");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

dayOfWeek.textContent = daysOfWeek[new Date().getDay()];

setInterval(() => {
  utcTime.textContent = Date.now();
}, 1);
