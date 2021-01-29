var researchProjectsDiv = document.getElementById("research-projects-all");
var data = [
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "Designing heterostructure & interface for non-trivial topological quantum phases of matter.",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "Interfacial magnetism in layered and heterostructure quantum materials",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "A multiscale modeling framework for fluid-poroelastic structure interaction, funded by DST-SERB Ramanujan fellowship",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text: "SERB SRG- Micromechanism for biaxial stretching of biological cells",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text: "Polymorphism in ice crystallization",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "DST-SERB- Machine learning based algorithm for predicting three-dimensional fractal structure of aggregated nanoparticles from microscopy-based images and application in characterization of ultrafine particulate matter.",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "DST-Nano Mission- Atomically thin Photonic Devices as Hosts of Single-Photons and Entangled Photon Pair Emitters and Single-Spins For Quantum Sciences and Technologies",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "SERB SRG - a. Stability of multiphase interface. b. Hydrate adhesion on LIS surfaces based on industrial materials. c. Steel and Aluminum Surfaces with Marine corrosion and biofouling resistance. d. Low pressure delivery of highly viscous injectable drugs.",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text: "Institute SRG: Dust adhesion on solid surfaces.",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "Institute SRG: Nanoporous Glassy Carbon for Electrochemical Sensors: Study and Development",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "Design and development of low cost electrochemical sensor for rapid detection of SARS-CoV-2-Institute COVID Grant with Dr. Raja Mitra",
  },
];

for (var i = 0; i < data.length; i++) {
  var row = `
    <div class= 'research-div-project'>
      <img
        class="research-img-project"
        src=${data[i].imgLink}
        alt=""
      />
      <div class="research-text text-center mb-1 research-text-project">
        ${data[i].text}
      </div>
    </div>
    `;
  researchProjectsDiv.innerHTML += row;
}
