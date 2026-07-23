/**
 * MIA_Ether Portfolio — Interactions
 * Minimal, performant, accessible
 */

(() => {
  "use strict";

  // Header scroll state
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => {
    const isOpen = navLinks?.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(!!isOpen));
  });

  // Close mobile nav on link click
  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  // Smooth reveal on scroll (lightweight IntersectionObserver)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".project-card, .lab-card, .timeline-item, .stack-group").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(el);
  });

  // Add visible class styles via JS injection to keep CSS clean
  const style = document.createElement("style");
  style.textContent = `
    .project-card.visible,
    .lab-card.visible,
    .timeline-item.visible,
    .stack-group.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
})();
