var data = [];

var staffDiv = document.getElementById("staffAll");

for (var i = 0; i < data.length; i++) {
  var row = `<div class="staff-each">
  <div class="staff-each-left">
    <img class="staff-img" src=${data[i].img} alt="" />
    <div class="staff-each-info">
      <a
        href=${data[i].profileLink}
        class="staff-name"
        >${data[i].name}</a
      >
      <div class="staff-des">
        <span class="staff-designation">${data[i].facultyDesignation}</span>
        <br />
        <span class="staff-expertise">${data[i].facultyExpertise}</span>
      </div>

      <p class="research-interest-title">Research Interests</p>
      <p class="staff-interest">
        ${data[i].reasearchInterest}
      </p>
    </div>
  </div>
  <div class="staff-each-right">
    <div class="staff-email">${data[i].email}</div>
    <div class="staff-contact">${data[i].phone}</div>
    <div class="staff-address">
      ${data[i].address}
    </div>
  </div>
</div>`;
  staffDiv.innerHTML += row;
}
