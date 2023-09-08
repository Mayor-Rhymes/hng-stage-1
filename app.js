const dayOfWeek = document.querySelector("#dayOfWeek");
const utcTime = document.querySelector("#utcTime");
const username = document.querySelector("#username");

const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
]

dayOfWeek.textContent = daysOfWeek[new Date().getDay()];
utcTime.textContent = new Date().getTime();
username.addEventListener("click", () => {

      window.open("https://github.com/mayor-rhymes", "blank");
})