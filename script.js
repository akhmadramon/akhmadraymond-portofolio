const roles = ["Web Developer", "Web Designer", "UI/UX Designer"];
const roleText = document.querySelector("#roleText");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
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
