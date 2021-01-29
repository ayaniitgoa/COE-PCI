var data = [
  {
    // ./images/company/
    imgLink: "./images/collab/insti/iitkgp.png",
    companyName: "IIT KGP",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/iith.png",
    companyName: "IIT Hyderabad",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/iitb.png",
    companyName: "IIT Bombay",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/iitbhu.png",
    companyName: "IIT BHU",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/manipal.jpeg",
    companyName: "Manipal Institute of Technology",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/iiest.png",
    companyName: "IIEST Shibpur",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/uci.png",
    companyName: "UC Irvine",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/sandiego.png",
    companyName: "San Diego State University",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/fiu.png",
    companyName: "FIU",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/monterrey.png",
    companyName: "Tec de Monterrey Mexico",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/mit.png",
    companyName: "MIT",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/varanasi.png",
    companyName: "Varanasi Group",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/exterer.jpg",
    companyName: "University of Exterer",
  },

  {
    // ./images/company/
    imgLink: "./images/collab/insti/bitspilani.png",
    companyName: "BITS Pilani Goa",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/iiser.png",
    companyName: "IISER Pune",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/nitgoa.png",
    companyName: "NIT Goa",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/um.png",
    companyName: "University of Memphis",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/cenide.png",
    companyName: "CeNIDE",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/ude.png",
    companyName: "U. Duisburg-Esssen",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/m2d2.jpg",
    companyName: "M2D2 lab",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/iacs.jpg",
    companyName: "IACS, Kolkata",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/snbncbs.gif",
    companyName: "SNBNCBS, Kolkata",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/niser.png",
    companyName: "NISER",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/jnu.jpg",
    companyName: "JNU",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/ugcdae.jpg",
    companyName: "UGC DAE",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/csr.png",
    companyName: "CSR, Mumbai",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/npl.png",
    companyName: "NPL CSIR",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/nitk.png",
    companyName: "NIT Kurukshetra",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/calcutta.png",
    companyName: "Calcutta University",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/ifw.jpg",
    companyName: "IFW Dresden",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/mpi.png",
    companyName: "MPI Stuttgart",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/rutherford.png",
    companyName: "Rutherford Appleton Laboratory, UK",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/weizmann.jpg",
    companyName: "Weizmann Institute of Technology, Israel",
  },
  {
    // ./images/company/
    imgLink: "./images/collab/insti/uppsala.png",
    companyName: "Uppsala University, KTH Royal, Sweden",
  },
];

var allInstitutes = document.getElementById("companyAll");
for (var i = 0; i < data.length; i++) {
  var row = `
    <div class="companyEach col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
