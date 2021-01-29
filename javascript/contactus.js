var data = [
  {
    name: "Micropatterning (Lithography)",
    info: "Micropatterning (Lithography) Information",
    imgLink: "./images/facility/fabrication/micropatterning.jpg",
  },
  {
    name: "Electrospinning",
    info: "Electrospinning Information",
    imgLink: "./images/facility/fabrication/electrospinning.jpg",
  },
  {
    name: "Coaters (Dip Coater with Heater, Regular Dip Coater)",
    info: "Coaters (Dip Coater with Heater, Regular Dip Coater) Information",
    imgLink: "./images/facility/fabrication/coaters.jpg",
  },
  {
    name: "Spinner System",
    info: "Spinner System Information",
    imgLink: "./images/facility/fabrication/spinnerSystem.jpg",
  },
  {
    name: "Convection Ovens",
    info: "Convection Ovens Information",
    imgLink: "./images/facility/fabrication/convectionOven.jpg",
  },
  {
    name: "Plasma Cleaner and Vacuum Pump, Flow Meter System",
    info: "Plasma Cleaner and Vacuum Pump, Flow Meter System Information",
    // imgLink: "./images/facility/fabrication/.jpg",
  },
  {
    name: "E-Beam Evaporator",
    info: "E-Beam Evaporator Information",
    // imgLink: "./images/facility/fabrication/.jpg",
  },
  {
    name: "Pyrolysis Furnace",
    info: "Pyrolysis Furnace Information",
    // imgLink: "./images/facility/fabrication/.jpg",
  },
  {
    name: "Oxidation Furnace",
    info: "Oxidation Furnace Information",
    imgLink: "./images/facility/fabrication/oxidationFurnace.jpg",
  },
];

var selectDiv = document.getElementById("selectFacility");
for (var i = 0; i < data.length; i++) {
  var row = `
    <option value=${data[i].name}>${data[i].name}</option>
    `;
  selectDiv.innerHTML += row;
}


