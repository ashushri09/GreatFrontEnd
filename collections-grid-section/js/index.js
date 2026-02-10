// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const API_URL =
  "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections";

const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const collectionData = data.data;

  document.querySelector(".left-image").src = collectionData[0].image_url;
  document.querySelector(".right-upper-image").src =
    collectionData[1].image_url;
  document.querySelector(".right-lower-image").src =
    collectionData[2].image_url;

  document.querySelector(".left-name").innerHTML = collectionData[0].name;
  document.querySelector(".right-upper-name").innerHTML =
    collectionData[1].name;
  document.querySelector(".right-lower-name").innerHTML =
    collectionData[2].name;

  document.querySelector(".left-description").innerHTML =
    collectionData[0].description;
  document.querySelector(".right-upper-description").innerHTML =
    collectionData[1].description;
  document.querySelector(".right-lower-description").innerHTML =
    collectionData[2].description;
};

fetchData();
