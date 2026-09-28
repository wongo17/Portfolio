/* =========================================================
   PROJECTS — edit this array to update the cards and details.
   To add a project, copy one complete object and change its id.
   Image paths are relative to index.html, e.g. "images/arm.jpg".
   Leave an image path empty to show a polished placeholder.
   ========================================================= */
const projects = [
  {
    id: "bionic-arm",
    number: "01",
    title: "Bionic Arm Project",
    category: "Robotics / Assistive Technology",
    description: "Working with a team to design and develop a functional bionic arm using mechanical design, electronics, programming, and assistive technology.",
    tags: ["CAD", "Arduino", "Electronics", "3D Printing", "Programming"],
    cover: "",
    coverAlt: "Bionic arm prototype",
    github: "", // Add a repository URL when you have one.
    details: {
      problem: "Develop a functional bionic arm prototype that brings mechanical design, actuation, and control together.",
      role: "[Describe the subsystem you personally designed, programmed, assembled, or tested.]",
      process: "[Explain your team's sketches, calculations, CAD, electronics, printed iterations, programming, and test decisions.]",
      tools: "CAD, Arduino, electronics, 3D printing, and programming.",
      challenges: "[Describe one real fit, movement, control, or reliability problem and how you worked through it.]",
      solution: "[Explain how the prototype works and which design choices made it possible.]",
      results: "[Add a demo, measured performance, progress milestone, or test result.]",
      learned: "[Share a technical lesson and something you learned from collaborating with the team.]"
    },
    media: { cad: "", prototype: "", drawing: "", video: "" },
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
    github: "",
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
    id: "spur-gear",
    number: "03",
    title: "Spur Gear Design",
    category: "CAD / Manufacturing",
    description: "Designed and modeled a spur gear component based on engineering specifications and manufacturing dimensions.",
    tags: ["SolidWorks", "CAD", "Mechanical Design", "Manufacturing"],
    cover: "",
    coverAlt: "CAD rendering of a spur gear component",
    github: "",
    details: {
      problem: "Model a spur gear component to the dimensions and constraints in an engineering specification.",
      role: "I designed the component and created its 3D CAD model.",
      process: "[Describe how you used the supplied dimensions to plan and build the gear geometry.]",
      tools: "SolidWorks, CAD, mechanical design, and manufacturing specifications.",
      challenges: "[Describe a geometry or manufacturability issue you encountered.]",
      solution: "[Explain the modeling choices that resolved that issue.]",
      results: "[Add screenshots, drawing views, and final dimensions.]",
      learned: "[Describe what you learned about designing a part from specifications.]"
    },
    media: { cad: "", prototype: "", drawing: "", video: "" }
  },
  {
    id: "robotics-system",
    number: "04",
    title: "Robotics Project",
    category: "Robotics / Programming",
    description: "Designed, assembled, and programmed a robotic system while applying mechanical, electrical, and programming concepts.",
    tags: ["Robotics", "Arduino", "Programming", "Mechanical Design"],
    cover: "",
    coverAlt: "Assembled robotic system",
    github: "",
    details: {
      problem: "[Describe what the robot needed to sense, move, or accomplish.]",
      role: "[Specify the mechanical, electrical, and software work you personally completed.]",
      process: "[Outline your design, assembly, circuit, code, and testing steps.]",
      tools: "Robotics, Arduino, programming, and mechanical design.",
      challenges: "[Explain a real hardware or software challenge you debugged.]",
      solution: "[Describe how the mechanical parts, electronics, and code work together.]",
      results: "[Add a measured outcome, photo, or short demonstration video.]",
      learned: "[Explain how this project changed your approach to designing and debugging.]"
    },
    media: { cad: "", prototype: "", drawing: "", video: "" }
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

  const github = project.github
    ? `<a class="repo-link" href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">View GitHub repository <span aria-hidden="true">↗</span></a>`
    : `<span class="repo-placeholder">GitHub repository link can be added here.</span>`;

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
