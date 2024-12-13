let searchInput = document.getElementById("search");
let form = document.querySelector(".live form");
async function getData(cityName) {
  let res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=aa98572802334178bc3181853241312&q=${
      searchInput.value ? searchInput.value : cityName
    }&days=3 `
  );
  if (res.ok && 400 != res.status) {
    let data = await res.json();
    day1(data);
    day2(data);
    day3(data);
  }
}
searchInput.addEventListener("input", (e) => {
  e.preventDefault();
  getData();
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
function day1(data) {
  //   console.log(data);

  let img = data.current.condition.icon;
  let degree = data.current.temp_c;
  let text = data.current.condition.text;
  let cityName = data.location.name;
  let date = data.location.localtime;
  document.getElementById("day1").innerHTML = `
                    <div class="w-100 head">
                    <h4 class="mb-3">${cityName}</h4>
                    <p class="date">${date}</p>
                    </div>
                    <img src='https:${img}'class="mb-3" alt>
                    <h3 class="mb-3">${degree} <sup> o</sup> C</h3>
                    <h5 class="mb-3">${text}</h5>`;
}
function day2(data) {
  let img = data.forecast.forecastday[1].day.condition.icon;
  let degree = data.forecast.forecastday[1].day.maxtemp_c;
  let text = data.forecast.forecastday[1].day.condition.text;
  let cityName = data.location.name;
  let date = data.forecast.forecastday[1].date;
  document.getElementById("day2").innerHTML = `
                    <div class="w-100 head">
                    <h4 class="mb-3">${cityName}</h4>
                    <p class="date">${date}</p>
                    </div>                   
                   
                    <img src='https:${img}'class="mb-3" alt>
                   <h3 class="mb-3">${degree} <sup> o</sup> C</h3>
                    <h5 class="mb-3">${text}</h5>
    `;
}
function day3(data) {
  let img = data.forecast.forecastday[2].day.condition.icon;
  let degree = data.forecast.forecastday[2].day.maxtemp_c;
  let text = data.forecast.forecastday[2].day.condition.text;
  let cityName = data.location.name;
  let date = data.forecast.forecastday[2].date;
  document.getElementById("day3").innerHTML = `
                    <div class="w-100 head">
                    <h4 class="mb-3">${cityName}</h4>
                    <p class="date">${date}</p>
                    </div> 
                   <img src='https:${img}'class="mb-3" alt>
                   <h3 class="mb-3">${degree} <sup> o</sup> C</h3>
                    <h5 class="mb-3">${text}</h5>
    `;
}

getData("cairo");
