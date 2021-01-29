var data = [
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "MeFy Care",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "Weir",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "SpOvum technologies Pvt. Ltd.",
  },
];

var allInstitutes = document.getElementById("companyAll");
for (var i = 0; i < data.length; i++) {
  var row = `
      <div class="companyEach col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div class="companyEachCard">
            <img
              src=${data[i].imgLink}
              alt=""
              class="companyImg"
            />
            <p class="companyText">${data[i].companyName}</p>
          </div>
        </div>
      `;

  allInstitutes.innerHTML += row;
}
