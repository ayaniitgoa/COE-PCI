var fabricationData = [
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
var macData = [
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
];
var softwareData = [
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

buildFabricationTable(fabricationData);
buildMaCTable(macData);
buildSoftwareTable(softwareData);

function buildFabricationTable(fabData) {
  var fabTable = document.getElementsByClassName("fabrication-table-body")[0];
  for (var i = 0; i < fabData.length; i++) {
    var row = `
  <tr>
        <td class="facility-text">${i + 1}</td>
        <td
          class="facility-name facility-text"
          data-toggle="modal"
          data-target=${"#fabrication" + i}
        >
          ${fabData[i].name}
        </td>
        <div
          class="modal fade"
          id=${"fabrication" + i}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title facility-text"
                  id="exampleModalLabel"
                >
                ${fabData[i].name}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body facility-text">${fabData[i].info}</div>
            </div>
          </div>
        </div>
        <td>
          <img
            class="facility-img"
            src=${fabData[i].imgLink}
            alt=""
          />
        </td>
      </tr>
  `;
    fabTable.innerHTML += row;
  }
}
function buildMaCTable(macData) {
  var macTable = document.getElementsByClassName("mac-table-body")[0];
  for (var i = 0; i < macData.length; i++) {
    var row = `
  <tr>
        <td class="facility-text">${i + 1}</td>
        <td
          class="facility-name facility-text"
          data-toggle="modal"
          data-target=${"#mac" + i}
        >
          ${macData[i].name}
        </td>
        <div
          class="modal fade"
          id=${"mac" + i}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title facility-text"
                  id="exampleModalLabel"
                >
                ${macData[i].name}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body facility-text">${macData[i].info}</div>
            </div>
          </div>
        </div>
        <td>
          <img
            class="facility-img"
            src=${macData[i].imgLink}
            alt=""
          />
        </td>
      </tr>
  `;
    macTable.innerHTML += row;
  }
}
function buildSoftwareTable(softwareData) {
  var softwareTable = document.getElementsByClassName("software-table-body")[0];
  for (var i = 0; i < softwareData.length; i++) {
    var row = `
  <tr>
        <td class="facility-text">${i + 1}</td>
        <td
          class="facility-name facility-text"
          data-toggle="modal"
          data-target=${"#software" + i}
        >
          ${softwareData[i].name}
        </td>
        <div
          class="modal fade"
          id=${"software" + i}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title facility-text"
                  id="exampleModalLabel"
                >
                ${softwareData[i].name}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body facility-text">${
                softwareData[i].info
              }</div>
            </div>
          </div>
        </div>
        <td>
          <img
            class="facility-img"
            src=${softwareData[i].imgLink}
            alt=""
          />
        </td>
      </tr>
  `;
    softwareTable.innerHTML += row;
  }
}
