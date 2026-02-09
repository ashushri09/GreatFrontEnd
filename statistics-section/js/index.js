// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const API_URL =
  "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics";

const fetchData = async () => {
  const response = await fetch(API_URL);

  const data = await response.json();

  document.querySelector(".Downloads").innerHTML = data.data[0].value;
  document.querySelector(".paid-users").innerHTML = data.data[1].value;
  document.querySelector(".images-in-library").innerHTML = data.data[2].value;
};

fetchData();
