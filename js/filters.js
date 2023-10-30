import usedCars from "./usedCars.js"; // Adjust the path as needed

// Get references to the HTML elements
document.getElementById("filter_button").onclick = function () {
  applyFilter();
};

// Function to apply the filter and update the display
function applyFilter() {
  const minYearInput = Number(document.getElementById("minYear").value);
  const maxYearInput = Number(document.getElementById("maxYear").value);
  const maxMileageInput = Number(document.getElementById("maxMileage").value);
  const colorSelect = document.getElementById("colorSelect").value;
  const maxPrice = Number(document.getElementById("maxPrice").value);
  const carSelect = document.getElementById("carSelect").value;

  usedCars.forEach((car) => {
    var id = `${car.make},${car.model}`;
    car.className = "carCard";

    // Normal Numeric Range Filters
    if (car.year < minYearInput) {
      car.className = "carCard filterHidden";
    }
    if (car.year > maxYearInput) {
      car.className = "carCard filterHidden";
    }
    if (car.mileage.replace(",", "") > maxMileageInput) {
      car.className = "carCard filterHidden";
    }
    if (car.price.replace(",", "") > maxPrice) {
      car.className = "carCard filterHidden";
    }
    if (car.make == carSelect) {
      car.className = "carCard filterHidden";
    }
    if (car.color == colorSelect) {
      car.className = "carCard filterHidden";
    }
    document.getElementById(id).className = car.className;
  });
}
