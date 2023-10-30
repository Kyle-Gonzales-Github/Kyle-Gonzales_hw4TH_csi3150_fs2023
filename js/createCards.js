import usedCars from "./usedCars.js";

function createCarCards() {
  const carContainer = document.getElementById("cargrid");

  usedCars.forEach((car) => {
    car.price = car.price.toLocaleString();
    car.mileage = car.mileage.toLocaleString();
    const card = document.createElement("div");
    card.className = "car-card";
    card.id = `${car.make},${car.model}`;
    card.innerHTML = `<img src="${car.image}" alt="${car.make} ${car.model} Image">
      <hr>
      <h2>${car.make} ${car.model}</h2>
      <p>Price: $${car.price}</p>
      <p>Mileage: ${car.mileage} miles</p>
      <p>Gas Mileage: ${car.gasMileage}</p> 
      <hr>
      <p> Year: ${car.year}</p>
      <p> Color: ${car.color}</p>
      <button type="button">More Details</button>`;
    carContainer.appendChild(card);
  });
}
createCarCards();
