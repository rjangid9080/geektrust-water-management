const fs = require("fs");

let costOfAllotedWater;
let totalGuests = 0;
let waterConsumptionByGuests = 0;
let consumptionOfWater = 0;
let costOfWaterByGuests = 0;

let allotmentOfWater = (typeOfApartment, corporationWater, borewellWater) => {
  let peopleInApartment;
  if (typeOfApartment === 2) {
    peopleInApartment = 3;
    consumptionOfWater = peopleInApartment * 10 * 30;
  } else if (typeOfApartment === 3) {
    peopleInApartment = 5;
    consumptionOfWater = peopleInApartment * 10 * 30;
  } else {
    return console.log("Only 2 BHK and 3 BHK are available");
  }
  costOfAllotedWater =
    (consumptionOfWater / (corporationWater + borewellWater)) *
    (corporationWater * 1 + borewellWater * 1.5);
};

let addGuest = (guests) => {
  totalGuests += guests;
  waterConsumptionByGuests = totalGuests * 10 * 30;
};

let costOfTankerWater = () => {
  if ( waterConsumptionByGuests>0) {
    costOfWaterByGuests = waterConsumptionByGuests * 2;
  }
  if ( waterConsumptionByGuests >=501) {
    costOfWaterByGuests = 500 * 2 + (waterConsumptionByGuests - 500) * 3;
  }
  if ( waterConsumptionByGuests >=1501) {
    costOfWaterByGuests =
      500 * 2 + 1000 * 3 + (waterConsumptionByGuests - 1500) * 5;
  }
  if (waterConsumptionByGuests >= 3001) {
    costOfWaterByGuests =
      500 * 2 + 1000 * 3 + 1500 * 5 + (waterConsumptionByGuests - 3000) * 8;
  }
};

let totalBill = () => {
  let totalWaterConsumed;
  let totalCostOfConsumedWater;

  totalWaterConsumed = consumptionOfWater + waterConsumptionByGuests;
  totalCostOfConsumedWater = Math.ceil(
    costOfAllotedWater + costOfWaterByGuests
  );
  return `${totalWaterConsumed} ${totalCostOfConsumedWater}`;
};

const data = fs.readFileSync("./inputs/input1.txt", {
  encoding: "utf8",
  flag: "r",
});
const input = data.split("\n").join("").split("\r");

for (let i = 0; i < input.length; i++) {
  let type = input[i].split(" ");
  if (type[0] === "ALLOT_WATER") {
    let apartment = parseInt(type[1]);
    let waterRatio = type[2].split(":");
    let corporation = parseInt(waterRatio[0]);
    let borewell = parseInt(waterRatio[1]);
    allotmentOfWater(apartment, corporation, borewell);
  } else if (type[0] === "ADD_GUESTS") {
    let guests = parseInt(type[1]);
    addGuest(guests);
  } else if (type[0] === "BILL") {
    costOfTankerWater();
    console.log(totalBill());
  }
}
