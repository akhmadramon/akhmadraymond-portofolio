const roles = ["Web Developer", "Web Designer", "UI/UX Designer"];
const roleText = document.querySelector("#roleText");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  if (!roleText) return;

  const currentRole = roles[roleIndex];
  const nextText = isDeleting
    ? currentRole.slice(0, Math.max(charIndex - 1, 0))
    : currentRole.slice(0, charIndex + 1);

  roleText.textContent = nextText;
  charIndex = nextText.length;

  let delay = isDeleting ? 46 : 82;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 280;
  }

  window.setTimeout(typeRole, delay);
}

typeRole();

const workTabs = document.querySelectorAll("[data-work-tab]");
const workPanels = document.querySelectorAll("[data-work-panel]");
const workTabsShell = document.querySelector(".work-tabs");

workTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.workTab;
    workTabsShell?.classList.toggle("is-uiux", target === "uiux");

    workTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    workPanels.forEach((panel) => {
      panel.hidden = panel.dataset.workPanel !== target;
    });
  });
});

const projectOpeners = document.querySelectorAll("[data-project-open]");
const projectClosers = document.querySelectorAll("[data-project-close]");
const projectDetails = document.querySelectorAll(".project-detail");
const detailBackButton = document.querySelector("[data-project-close]");
let lastDetailScrollY = 0;

function openProjectDetail(projectId) {
  const detail = document.querySelector(`#project-${projectId}`);
  if (!detail) return;

  projectDetails.forEach((item) => {
    item.classList.remove("detail-visible");
    item.hidden = item !== detail;
  });

  document.body.classList.add("detail-open");
  detailBackButton?.classList.remove("back-hidden");
  lastDetailScrollY = 0;
  detail.hidden = false;
  window.scrollTo({ top: 0, behavior: "auto" });

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      detail.classList.add("detail-visible");
    });
  });
}

function closeProjectDetail() {
  const activeDetail = document.querySelector(".project-detail.detail-visible");

  if (!activeDetail) {
    document.body.classList.remove("detail-open");
    detailBackButton?.classList.remove("back-hidden");
    return;
  }

  activeDetail.classList.remove("detail-visible");

  window.setTimeout(() => {
    projectDetails.forEach((item) => {
      item.hidden = true;
    });

    document.body.classList.remove("detail-open");
    detailBackButton?.classList.remove("back-hidden");
    document.querySelector(".work-section")?.scrollIntoView({ behavior: "smooth" });
  }, 260);
}

function updateDetailBackVisibility() {
  if (!document.body.classList.contains("detail-open") || !detailBackButton) return;

  const currentScrollY = window.scrollY;

  if (currentScrollY <= 0 || currentScrollY < lastDetailScrollY) {
    detailBackButton.classList.remove("back-hidden");
  } else if (currentScrollY > lastDetailScrollY) {
    detailBackButton.classList.add("back-hidden");
  }

  lastDetailScrollY = currentScrollY;
}

function handleDetailWheel(event) {
  if (!document.body.classList.contains("detail-open") || !detailBackButton) return;

  if (event.deltaY < 0) {
    detailBackButton.classList.remove("back-hidden");
  } else if (event.deltaY > 0) {
    detailBackButton.classList.add("back-hidden");
  }
}

function routeProjectHash() {
  const projectMatch = window.location.hash.match(/^#\/project\/(.+)$/);

  if (projectMatch) {
    openProjectDetail(projectMatch[1]);
    return;
  }

  closeProjectDetail();
}

projectOpeners.forEach((opener) => {
  opener.addEventListener("click", (event) => {
    const targetHash = `#/project/${opener.dataset.projectOpen}`;

    if (window.location.hash === targetHash) {
      event.preventDefault();
      routeProjectHash();
    }
  });
});

projectClosers.forEach((closer) => {
  closer.addEventListener("click", () => {
    window.location.hash = "#work";
  });
});

window.addEventListener("hashchange", routeProjectHash);
window.addEventListener("scroll", updateDetailBackVisibility, { passive: true });
window.addEventListener("wheel", handleDetailWheel, { passive: true, capture: true });
routeProjectHash();
