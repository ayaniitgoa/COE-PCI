var studentsDiv = document.getElementById("studentsAll");
var data = [
  {
    name: "Muhammad Saiful Islam",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "muhammad183422004@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Anushka Gupta",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "anushka19242101@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Naresh Mandal",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "naresh20242104@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Amit K Nayse",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "amit183631003@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Abhishek Mund",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "abhishek183632001@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Shubham Ganar",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "shubham19263206@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Jithin S Thoppil",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "jithin183212002@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Yunus Waheed",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "yunus19221101@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Indrajeet D Prasad",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "indrajeet20221101@iitgoa.ac.in",
    phone: "",
    address: "",
  },

  {
    name: "Sumitra Shit",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "sumitra20221102@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Shriya Saha",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "shriya19251103@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Abhishek Singh",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "abhishek19263101@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Akshat Jain",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "akshat19263103@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Rubal Dhiman",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "rubal20263104@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Abhilasha Kumari",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "abhilasha20251101@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Himanshu Marwah",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "himanshu19263201@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Surasree Sadhukhan",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "surasree183212004@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Roumita Roy",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "PhD",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "roumita19221103@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Piyush Pulukool",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "M.Tech",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "piyush1916306@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Mahesh Jagrulla",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "M.Tech",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "jarugulla1916304@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Amit Kumar",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "M.Tech",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "arindam@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Shweta Bhaviskar",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "M.Tech",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "shweta1914209@iitgoa.ac.in",
    phone: "",
    address: "",
  },
  {
    name: "Priyanshi Saraswat",
    // img: "./images/faculty/arindam.jpg",
    img: "./images/white.png",
    profileLink: "https://iitgoa.ac.in/faculty_page.php?id=74",
    facultyDesignation: "M.Tech",
    facultyExpertise: "",
    reasearchInterest: "",
    email: "priyanshi1914206@iitgoa.ac.in",
    phone: "",
    address: "",
  },
];

for (var i = 0; i < data.length; i++) {
  var row = `
    <div class="student-each">
    <div class="student-each-left">
      <img
        class="student-img"
        src=${data[i].img}
        alt=""
      />
      <div class="student-each-info">
        <p class="student-name">${data[i].name}</p>
        <div class="student-des">
          <span class="student-designation">${data[i].facultyDesignation}</span>
          <br />
          <span class="student-expertise">${data[i].facultyExpertise}</span>
        </div>
${
  data[i].reasearchInterest.length > 0
    ? `<p class="research-interest-title">Research Interests</p><p class="student-interest">
    ${data[i].reasearchInterest}
    </p>
    `
    : ""
}
      </div>
    </div>
    <div class="student-each-right">
      <div class="student-email">${data[i].email}</div>
      <div class="student-contact">${data[i].phone}</div>
      <div class="student-address">${data[i].address}</div>
    </div>
  </div>
    `;
  studentsDiv.innerHTML += row;
}
