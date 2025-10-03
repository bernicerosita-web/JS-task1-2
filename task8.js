let distance = Number(prompt("Enter the distance to travel (in km):"));


let transportType = prompt("Enter transport type (Bus, Train, Flight):");


let farePerKm;

switch (transportType.toLowerCase()) {
  case "bus":
    farePerKm = 10 ;
    break;
  case "train":
    farePerKm = 20;
    break;
  case "flight":
    farePerKm = 1000;
    break;
  default:
    alert("Invalid transport type entered.");
    farePerKm = 0;
    break;
}


let totalFare = distance * farePerKm;


if (farePerKm > 0) {
  alert("Total Fare:" +totalFare);
}
