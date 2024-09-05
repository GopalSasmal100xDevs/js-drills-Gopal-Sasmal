// Q1 The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:

export function getCarId33(inventory) {
  if (!inventory || inventory.length === 0) {
    return "Not a valid argument";
  }

  for (let index = 0; index < inventory.length; index++) {
    if (Object.keys(inventory[index]).length == 0) {
      return "Empty Object";
    }
    if (inventory[index]?.id == 33) {
      const { car_make, car_model, car_year } = inventory[index];
      if (!car_make && !car_model && !car_year) {
        return "That car has'n any model, make or year";
      } else {
        return `Car 33 is a ${car_year ?? ""} ${car_make ?? ""} ${
          car_model ?? ""
        }`;
      }
    }
  }
}

// Q2 The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
export function lastCarInInventory(inventory) {
  if (!inventory || !Array.isArray(inventory)) {
    return "Invalid argument";
  }
  const { car_make, car_model } = inventory.at(-1); // inventory[inventory.length-1]
  if (!car_make && !car_model) {
    return "That car has'n any car make or model";
  } else if (!car_make) {
    return "That car has'n any car make";
  } else if (!car_model) {
    return "That car has'n any car model";
  }
  return `Last car is a ${car_make} ${car_model}`;
}
