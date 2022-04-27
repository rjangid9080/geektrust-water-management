let consumptionOfWater;
let costOfAllotedWater;
let costOfWaterByGuests;
let totalWaterConsumed;
let totalCostOfConsumedWater;
let totalGuests = 0;

let allotmentOfWater = (typeOfApartment, corporationWater, borewellWater) => {
  let peopleInApartment;
  if (typeOfApartment === 2) {
    peopleInApartment = 3;
    consumptionOfWater = peopleInApartment * typeOfApartment * 10 * 30;
  } else if (typeOfApartment === 3) {
    peopleInApartment = 5;
    consumptionOfWater = peopleInApartment * typeOfApartment * 10 * 30;
  } else {
    console.log("Only 2 BHK and 3 BHK are available");
  }
  costOfAllotedWater =
    (consumptionOfWater / (corporationWater + borewellWater)) *
    (corporationWater * 1 + borewellWater * 1.5);
};

let addGuest = (guests) => {
  totalGuests += guests;
  waterConsumptionByGuests = totalGuests * 10 * 30;
};

let totalWaterQuantity = () => {
  totalWaterConsumed = consumptionOfWater + waterConsumptionByGuests;
};

let costOfTankerWater = () => {
  if (0 <= waterConsumptionByGuests <= 500) {
    costOfWaterByGuests = waterConsumptionByGuests * 2;
  }
  if (501 <= waterConsumptionByGuests <= 1500) {
    costOfWaterByGuests = 500 * 2 + (waterConsumptionByGuests - 500) * 3;
  }
  if (1501 <= waterConsumptionByGuests <= 3000) {
    costOfWaterByGuests =
      500 * 2 + 1000 * 3(waterConsumptionByGuests - 1500) * 5;
  }
  if (waterConsumptionByGuests >= 3001) {
    costOfWaterByGuests =
      500 * 2 + 1000 * 3 + 1500 * 5(waterConsumptionByGuests - 3000) * 8;
  }
};

let totalCostOfWater = () => {
  totalCostOfConsumedWater = Math.ceil(
    costOfAllotedWater + costOfWaterByGuests
  );
};
