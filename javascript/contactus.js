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
  {
    name: "Raman-cum-PL setup",
    info: "Raman-cum-PL setup",
    imgLink: "./images/facility/mac/ramanCup.jpg",
  },
  {
    name: "Rheometer",
    info: "Rheometer Information",
    imgLink: "./images/facility/mac/rheometer.jpg",
  },
  {
    name: "AFM",
    info: "AFM Information",
    imgLink: "./images/facility/mac/AFM.jpg",
  },
  {
    name: "Potentiostat",
    info: "Potentiostat Information",
    // imgLink: "./images/facility/mac/.jpg",
  },
  {
    name: "Goniometer cum Optical Tensiometer",
    info: "Goniometer cum Optical Tensiometer Information",
    imgLink: "./images/facility/mac/goniometer.jpg",
  },
  {
    name:
      "Dynamic Light Scattering Particle Size Analyzer + Zeta Potential Meter",
    info:
      "Dynamic Light Scattering Particle Size Analyzer + Zeta Potential Meter Information",
    // imgLink: "./images/facility/mac/.jpg",
  },
  {
    name: "Force Tensiometer",
    info: "Force Tensiometer Information",
    imgLink: "./images/facility/mac/forceTensiometer.jpg",
  },
  {
    name: "Semiconductor Parametric Analyser",
    info: "Semiconductor Parametric Analyser Information",
    // imgLink: "./images/facility/mac/forceTensiometer.jpg",
  },
  {
    name: "Ellipsometer",
    info: "Ellipsometer Information",
    imgLink: "./images/facility/mac/ellipsometer.jpg",
  },
  {
    name: "DAQ",
    info: "DAQ Information",
    // imgLink: "./images/facility/mac/ellipsometer.jpg",
  },
  {
    name: "DC/RF Probe station",
    info: "DC/RF Probe station Information",
    imgLink: "./images/facility/mac/probeStation.jpg",
  },
  {
    name: "XRD",
    info: "XRD Information",
    imgLink: "./images/facility/mac/xrd.jpg",
  },
  {
    name: "FESEM",
    info: "FESEM Information",
    // imgLink: "./images/facility/mac/.jpg",
  },
  {
    name: "VASP",
    info: "VASP Information",
    // imgLink: "./images/facility/software/.jpg",
  },
  {
    name: "Gaussian",
    info: "Gaussian Information",
    // imgLink: "./images/facility/software/.jpg",
  },
];

var selectDiv = document.getElementById("selectFacility");
for (var i = 0; i < data.length; i++) {
  var row = `
    <option value=${data[i].name}>${data[i].name}</option>
    `;
  selectDiv.innerHTML += row;
}

function getSelectedValue() {
  var selectedValue = document.getElementById("selectFacility").value;
  var afterSelectedText = document.getElementById("after-selectedText");
  var calenderImg = document.getElementById("calenderContactUs");
  if (selectedValue !== "select") {
    afterSelectedText.innerText =
      "Please select the date for using the " + selectedValue + " facility :";
    calenderImg.style.display = "block";
  } else {
    calenderImg.style.display = "none";
    afterSelectedText.innerText = "";
  }
}
