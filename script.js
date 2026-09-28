/* =========================================================
   PROJECTS — edit this array to update the cards and details.
   To add a project, copy one complete object and change its id.
   Image paths are relative to index.html, e.g. "images/arm.jpg".
   Leave an image path empty to show a polished placeholder.
   ========================================================= */
const projects = [
  {
    id: "Crash Test Dummy Project",
    number: "01",
    title: "Crash Test Dummy Project",
    category: "Robotics / Design / Manufacturing / 3D Printing",
    description: "Working with a team to design and develop a simulation crash test dummy using mechanical design, electronics, and programming.",
    tags: ["CAD", "Robotics", "Electronics", "3D Printing", "Programming"],
    cover: "Dummy/20250615_121116.jpg",
    details: {
      problem: "Develop a crash test dummy that simulates human motion during a collision.",
      role: "Mechanical Designer / Testing.",
      process: "We began with a simple design to understand where we should start, then added features when we realized that it was lacking in some ways. That is part of the engineering process. We added these peices to mimic the weight and musculature of a human.",
      tools: "CAD, Arduino, electronics, 3D printing, and programming.",
      challenges: "We worked on a very tight budget, and short timetable, creating a conflict between implementing engineering ideas and having the means to do so.",
      solution: "It simulates a young female child.",
      results: "We recorded displacement in the x, y, and z, yaw, pitch, roll, velocity, and acceleration.",
      learned: "The iterative engineering process, R&D, GD&T, mechanical design and implementation."
    },
    extraImages: [
  {src: "Dummy/20250615_121102.jpg"},
  {src: "Dummy/20250615_121112.jpg"},
  {src: "Dummy/20250615_121116.jpg"}
    ]
  },
  {
    id: "SOLIDWORKS Portfolio",
    number: "02",
    title: "SOLIDWORKS CAD Portfolio",
    category: "CAD / Mechanical Design",
    description: "Created detailed 3D CAD models from engineering drawings while maintaining accurate dimensions and geometry.",
    tags: ["SOLIDWORKS", "CAD", "Engineering Drawings", "Mechanical Design"],
    cover: "SOLIDWORKS Portfolio/3.png",
    coverAlt: "Various CAD renderings",
    details: {
      problem: "Translate a dimensioned engineering drawing into a precise, parametric models.",
      role: "I created CAD models and check its geometry against the supplied drawing.",
      process: "[Add the sketches, features, and modeling steps used for these CAD parts.]",
      tools: "SOLIDWORKS, Microsoft Excel, CAD, engineering drawings, and dimensional checks.",
      challenges: "Properly approaching the CAD drawing to ensure full parametric dimensions, minimal required sketches, and optimal efficiency.",
      solution: "CAD is partially about approaching with unique solutions. Whether that be implementing revolves, unique extrudes, or deleting some faces.",
      results: "Gained experience using CAD systems, and how to design with manufacturing in priority.",
      learned: "Taught me about the importance of how a good approach can save hours. Taught how to CAD from a manufacturing background, ensuring easy manufacturing, and smart tolerences."
    },
    extraImages: [
  {src: "SOLIDWORKS Portfolio/1.png"},
  {src: "SOLIDWORKS Portfolio/2.png"},
  {src: "SOLIDWORKS Portfolio/3.png"},
  {src: "SOLIDWORKS Portfolio/4.png"},
  {src: "SOLIDWORKS Portfolio/5.png"},
  {src: "SOLIDWORKS Portfolio/6.png"},
  {src: "SOLIDWORKS Portfolio/7.png"},
  {src: "SOLIDWORKS Portfolio/8.png"},
  {src: "SOLIDWORKS Portfolio/9.png"},
  {src: "SOLIDWORKS Portfolio/10.png"},
  {src: "SOLIDWORKS Portfolio/11.png"},
  {src: "SOLIDWORKS Portfolio/12.png"},
  {src: "SOLIDWORKS Portfolio/13.png"},
  {src: "SOLIDWORKS Portfolio/14.png"}
]
  },
  {
    id: "work",
    number: "03",
    title: "Lab Technician @ Stratton Prime Drilling Inc.",
    category: "Soil Engineering / Lab",
    description: "I worked in a lab conducting testing on soil, and asphalt.",
    tags: ["Work Experience", "Soil", "Engineering", "Lab"],
    cover: "Soil/IMG_20260721_172803.jpg",
    details: {
      problem: "Testing needs to be done to verify for construction.",
      role: "Lab Technician",
      process: "Following a procedure and using past experience to conduct testing.",
      learned: "I learned analysis skills, teamwork, and how to robotically complete tasks."
    },
    extraImages: [
  {src: "Soil/IMG_20260717_145232.jpg"},
  {src: "Soil/IMG_20260721_172803.jpg"},
  {src: "Soil/IMG_20260817_145833.jpg"},
  {src: "Soil/IMG_20260818_125722.jpg"},
  {src: "Soil/IMG_20260818_160643.jpg"},
  {src: "Soil/IMG_20260821_171824.jpg"},
  {src: "Soil/IMG_20260828_124327.jpg"}
]
  }
];

// Content in this file is local, but escaping makes edited text safe to insert as HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function tagMarkup(tags) {
  return tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("");
}

function coverMarkup(project, isDialog = false) {
  const className = isDialog ? "dialog-cover" : "project-media";
  const image = project.cover
    ? `<img src="${escapeHTML(project.cover)}" alt="${escapeHTML(project.coverAlt)}" loading="lazy" decoding="async">`
    : `<span class="media-cross" aria-hidden="true">+</span>
       <span class="media-label">PROJECT IMAGE</span>
       <span class="media-subtitle">${escapeHTML(project.title)}</span>`;
  const imageRole = project.cover ? "" : `role="img" aria-label="Placeholder for ${escapeHTML(project.coverAlt)}"`;
  return `<div class="${className}" ${imageRole}>
    ${!isDialog && !project.cover ? `<span class="media-corner">PROJECT / ${escapeHTML(project.number)}</span>` : ""}
    ${image}
  </div>`;
}

// One array creates both cards and detail views, so future projects need no new layout code.
const projectGrid = document.querySelector("#project-grid");
projectGrid.innerHTML = projects.map(project => `
  <article class="project-card reveal">
    ${coverMarkup(project)}
    <div class="project-content">
      <p class="project-category">${escapeHTML(project.category)}</p>
      <h3>${escapeHTML(project.title)}</h3>
      <p>${escapeHTML(project.description)}</p>
      <div class="tags" aria-label="Technologies used">${tagMarkup(project.tags)}</div>
      <button class="project-button" type="button" data-project="${escapeHTML(project.id)}" aria-label="View details for ${escapeHTML(project.title)}">
        View Project <span aria-hidden="true">↗</span>
      </button>
    </div>
  </article>
`).join("");

const detailLabels = [
  ["problem", "The Problem"], ["role", "My Role"],
  ["process", "Design Process"], ["tools", "Tools & Technologies"],
  ["challenges", "Challenges"], ["solution", "Solution"],
  ["results", "Results"], ["learned", "What I Learned"]
];

const galleryLabels = [
  ["cad", "CAD screenshots"], ["prototype", "Prototype photos"],
  ["drawing", "Engineering drawings / diagrams"], ["video", "Demo video"]
];

function buildGalleryItems(project) {
  const extraImages = project.extraImages || [];
  const projectMedia = project.media || {};
  // Once photos are added, hide unused placeholder slots in the gallery.
  const showPlaceholders = !galleryLabels.some(([key]) => projectMedia[key]) && extraImages.length === 0;

  const standardMedia = galleryLabels.filter(([key]) => showPlaceholders || projectMedia[key]).map(([key, label]) => {
    const path = projectMedia[key];
    const media = path && key === "video"
      ? `<video controls preload="metadata" aria-label="${escapeHTML(label)} for ${escapeHTML(project.title)}"><source src="${escapeHTML(path)}" type="video/mp4">Your browser does not support this video.</video>`
      : path
        ? `<img src="${escapeHTML(path)}" alt="${escapeHTML(label)} for ${escapeHTML(project.title)}" loading="lazy" decoding="async">`
        : `<div class="gallery-placeholder" role="img" aria-label="Placeholder for ${escapeHTML(label)}">+</div>`;
    return `<div class="gallery-item">${media}<span>${escapeHTML(label)}</span></div>`;
  });

  const additionalPhotos = extraImages.filter(image => image.src).map((image, index) => {
    const caption = image.caption || `Image ${index + 1}`;
    const alt = image.alt || `${project.title}, image ${index + 1}`;
    return `<div class="gallery-item">
      <img src="${escapeHTML(image.src)}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async">
      <span>${escapeHTML(caption)}</span>
    </div>`;
  });

  return [...standardMedia, ...additionalPhotos];
}

const projectDialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogClose = document.querySelector("#dialog-close");
const galleryBatchSize = 4;
let activeGalleryItems = [];
let galleryShownCount = 0;

projectGrid.addEventListener("click", event => {
  const button = event.target.closest("button[data-project]");
  if (!button) return;
  const project = projects.find(item => item.id === button.dataset.project);
  if (!project) return;

  const details = detailLabels.map(([key, label]) => `
    <section class="detail-item">
      <h3>${label}</h3>
      <p>${escapeHTML(project.details[key])}</p>
    </section>
  `).join("");


  // Only create the first few images when the project opens. The rest load on request.
  activeGalleryItems = buildGalleryItems(project);
  galleryShownCount = Math.min(galleryBatchSize, activeGalleryItems.length);
  const remaining = activeGalleryItems.length - galleryShownCount;

  dialogContent.innerHTML = `
    ${coverMarkup(project, true)}
    <div class="dialog-body">
      <p class="dialog-kicker">Project ${escapeHTML(project.number)} / ${escapeHTML(project.category)}</p>
      <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
      <p class="dialog-intro">${escapeHTML(project.description)}</p>
      <div class="tags" aria-label="Technologies used">${tagMarkup(project.tags)}</div>
      <div class="detail-grid">${details}</div>
      <h3 class="gallery-heading">Project media</h3>
      <div class="project-gallery" id="project-gallery">${activeGalleryItems.slice(0, galleryShownCount).join("")}</div>
      ${remaining ? `<button class="button button-secondary gallery-more" type="button" aria-controls="project-gallery">Show ${Math.min(galleryBatchSize, remaining)} more photos (${remaining} remaining) <span aria-hidden="true">↓</span></button>` : ""}
      ${github}
    </div>
  `;
  projectDialog.showModal();
  projectDialog.scrollTop = 0;
  dialogClose.focus();
});

dialogContent.addEventListener("click", event => {
  const button = event.target.closest(".gallery-more");
  if (!button) return;

  const nextItems = activeGalleryItems.slice(galleryShownCount, galleryShownCount + galleryBatchSize);
  dialogContent.querySelector("#project-gallery").insertAdjacentHTML("beforeend", nextItems.join(""));
  galleryShownCount += nextItems.length;
  const remaining = activeGalleryItems.length - galleryShownCount;
  if (remaining) {
    button.innerHTML = `Show ${Math.min(galleryBatchSize, remaining)} more photos (${remaining} remaining) <span aria-hidden="true">↓</span>`;
  } else {
    button.remove();
  }
});

dialogClose.addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", event => {
  if (event.target === projectDialog) projectDialog.close();
});

/* Mobile navigation */
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpening = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpening));
  menuToggle.setAttribute("aria-label", isOpening ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("is-open", isOpening);
});

navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener("click", event => {
  if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 700) closeMenu();
});

/* Gentle entrance animation; content stays visible if animation is unsupported. */
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("js-enabled");
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
  document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
}
