var data = [
  {
    // ./images/company/
    imgLink: "./images/collab/lab/csir.jpg",
    companyName: "IICB-CSIR",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/lab/nio.jpg",
    companyName: "NIO Goa",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/lab/barc.png",
    companyName: "BARC",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/lab/ampri.png",
    companyName: "CSIR-AMPRI, Bhopal",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/lab/cmeri.png",
    companyName: "CSIR-CMERI, Durgapur",
  },
];

var allInstitutes = document.getElementById("companyAll");
for (var i = 0; i < data.length; i++) {
  var row = `
        <div class="companyEach col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="companyEachCard">
            <div class="img-colab-div">
            <img
            src=${data[i].imgLink}
            alt=""
            class="companyImg"
            />
            </div>
              <p class="companyText">${data[i].companyName}</p>
            </div>
          </div>
        `;

  allInstitutes.innerHTML += row;
}
