var data = [
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "IIT KGP",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "IIT Hyderabad",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "IIT Bombay",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "Manipal Institute of Technology",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "IIEST Shibpur",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "UC Irvine",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "San Diego State University",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "FIU",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "Tec de Monterrey Mexico",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "MIT",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "Varanasi Group",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "University of Exterer",
  },

  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "BITS Pilani Goa",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "IISER Pune",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "NIT Goa",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "University of Memphis",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "CeNIDE",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "U. Duisburg-Esssen",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "M2D2 lab",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "IISc",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "IACS, Kolkata",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "SNBNCBS, Kolkata",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "NISER",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "BARC",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "JNU",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "IIT-BHU",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "UGC DAE CSR, Mumbai",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "NPL-CSIR",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "NIT-Kurukshetra",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "Calcutta University",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "IFW-Dresden",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "MPI-Stuttgart",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "Rutherford Appleton Laboratory, UK",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "Weizmann Institute of Technology, Israel",
  },
  {
    // ./images/company/
    imgLink: "https://iitgoa.ac.in/img/dept/EE/bidhan.jpg",
    companyName: "Uppsala University, KTH Royal, Sweden",
  },
];

var allInstitutes = document.getElementById("companyAll");
for (var i = 0; i < data.length; i++) {
  var row = `
    <div class="companyEach col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
