const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

const hours = document.querySelectorAll(".hour");
const time_selector = document.querySelectorAll(".time");
const last_value = document.querySelectorAll(".time-duration");

fetch("./data.json")
  .then((response) => {
    if (!response.ok) throw new Error("Something went wrong");
    return response.json();
  })
  .then((data) => {
    updateCards(data,"weekly");

    monthly.addEventListener("click", () => updateCards(data,"monthly"));
    daily.addEventListener("click", () => updateCards(data,"daily"));
    weekly.addEventListener("click", () => updateCards(data,"weekly"));
  });

function updateCards(data,period) {
  for (let i = 0; i < data.length; i++) {
    hours[i].textContent = data[i].timeframes[period].current;
    last_value[i].textContent = data[i].timeframes[period].previous;
    time_selector[i].textContent = `${period} -`;
  }
}


const buttons = document.querySelectorAll(".profile__period");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("profile__period--active"));
    btn.classList.add("profile__period--active");
  });
});