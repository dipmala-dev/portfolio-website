const projects = [
  {
    title: "InternVault AI",
    subtitle: "Digital Internship & Career Passport",
    description: "A platform designed to make internship records authentic, transparent and data-driven.",
    tech: ["HTML","CSS","JavaScript","Java","MySQL"],
    image: "",
    link: "#"
  },
  {
    title: "DeskGuard",
    subtitle: "AI-powered Library Seat Allocation System",
    description: "Real-time library seat availability and online reservation for students.",
    tech: ["Java","HTML","CSS","JavaScript"],
    image: "",
    link: "#"
  },
  {
    title: "Automated Attendance Management System",
    subtitle: "Student attendance management",
    description: "A simple and efficient system designed to manage student attendance.",
    tech: ["Java","MySQL","HTML","CSS","JavaScript"],
    image: "",
    link: "#"
  },
  {
    title: "KrishiMitra",
    subtitle: "Farmer Support & Scheme Platform",
    description: "A platform for information about government schemes, insurance and financial support for farmers.",
    tech: ["HTML","CSS","JavaScript"],
    image: "",
    link: "#"
  }
];

const events = [
  ["2026","FutureAI Global Hackathon","Team Infinity Her · AI"],
  ["2026","Build the Future with AI","Team Infinity Her · AI"],
  ["2026","HackNEXT 1.0","Team Infinity Her · Web Development"],
  ["2026","Techathon 3.0","AISSMS IOIT Pune · Problem Solving"],
  ["2026","SunHacks","Sandip University · Innovation"],
  ["2026","SIH Internal Hackathon","PS SIH25012 · Team Binary Brains"]
];

const certificates = [
  {title:"C++ Training", issuer:"Spoken Tutorial / IIT Bombay · Score: 80%", image:"", link:"#", category:"Technical Course"},
  {title:"Deloitte Technology Job Simulation", issuer:"Forage", image:"", link:"#", category:"Professional"},
  {title:"HackNEXT 1.0", issuer:"National-level hackathon", image:"", link:"#", category:"Hackathon"},
  {title:"FutureAI Global Hackathon", issuer:"Team Infinity Her", image:"", link:"#", category:"Hackathon"},
  {title:"Build the Future with AI", issuer:"Global Hackathon", image:"", link:"#", category:"Hackathon"},
  {title:"Techathon 3.0", issuer:"AISSMS IOIT Pune", image:"", link:"#", category:"Technical Event"},
  {title:"SunHacks", issuer:"Sandip University", image:"", link:"#", category:"Hackathon"},
  {title:"SIH Internal Hackathon", issuer:"Team Binary Brains", image:"", link:"#", category:"Hackathon"}
];

function tagHTML(tags){
  return tags.map(t => `<span class="tag">${t}</span>`).join("");
}

function renderProjects(){
  document.getElementById("projectList").innerHTML = projects.map((p,i) => `
    <a class="project-card reveal" href="${p.link}" target="_blank" rel="noopener">
      <span class="project-no">0${i+1}</span>
      <div class="project-info">
        <h3>${p.title}</h3>
        <p>${p.subtitle}<br>${p.description}</p>
        <div class="tags">${tagHTML(p.tech)}</div>
      </div>
      <div class="project-image">
        ${p.image ? `<img src="${p.image}" alt="${p.title} screenshot">` : `<span class="placeholder">ADD PROJECT IMAGE</span>`}
      </div>
      <span class="project-arrow">→</span>
    </a>
  `).join("");
}

function certCard(c){
  return `<article class="cert-card reveal">
    <div class="cert-thumb">${c.image ? `<img src="${c.image}" alt="${c.title} certificate">` : `<span>ADD CERTIFICATE IMAGE</span>`}</div>
    <div class="cert-body">
      <strong>${c.title}</strong>
      <p>${c.issuer}</p>
      <a class="cert-link" href="${c.link}" target="_blank" rel="noopener">View Certificate →</a>
    </div>
  </article>`;
}

function renderCertificates(){
  document.getElementById("featuredCerts").innerHTML = certificates.slice(0,4).map(certCard).join("");
  document.getElementById("allCerts").innerHTML = certificates.map(certCard).join("");
}

function renderEvents(){
  document.getElementById("eventList").innerHTML = events.map(e => `
    <div class="event-item reveal">
      <span class="event-year">${e[0]}</span>
      <div><strong>${e[1]}</strong><small>${e[2]}</small></div>
      <span class="event-cert">View Certificate →</span>
    </div>
  `).join("");
}

renderProjects();
renderCertificates();
renderEvents();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".desktop-nav a")];
window.addEventListener("scroll", () => {
  const y = window.scrollY + 160;
  let current = sections[0].id;
  sections.forEach(s => { if(y >= s.offsetTop) current = s.id; });
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
});

const modal = document.getElementById("certModal");
document.getElementById("viewAllCerts").addEventListener("click", () => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
});
document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
function closeModal(){ modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); }
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".desktop-nav").classList.toggle("mobile-open");
});
