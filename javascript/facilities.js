var data = [
  {
    name: "Ice Machine",
    info: "Ice Machine Information",
    imgLink: "./images/1.jpg",
  },
  {
    name: "-30&#176; C Freezer",
    info: "-30&#176; C Freezer Information",
    imgLink: "./images/2.jpg",
  },
  {
    name: "Chemical fume hood",
    info: "Chemical fume hood Information",
    imgLink: "./images/3.jpg",
  },
];
var table = document.getElementById("table-body");
for (var i = 0; i < data.length; i++) {
  var row = `
  <tr>
        <td class="facility-text">${i + 1}</td>
        <td
          class="facility-name facility-text"
          data-toggle="modal"
          data-target=${"#facility" + i}
        >
          ${data[i].name}
        </td>
        <div
          class="modal fade"
          id=${"facility" + i}
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
                ${data[i].name}
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
              <div class="modal-body facility-text">${data[i].info}</div>
            </div>
          </div>
        </div>
        <td>
          <img
            class="facility-img"
            src=${data[i].imgLink}
            alt=""
          />
        </td>
      </tr>
  `;
  table.innerHTML += row;
}
