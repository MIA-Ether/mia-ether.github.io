/**
 * MIA_Ether Portfolio — Interactions + Theme Toggle
 */

(() => {
  "use strict";

  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  // Theme: prefer saved → system → dark default
  const saved = localStorage.getItem("mia-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initial = saved || (prefersLight ? "light" : "dark");
  root.setAttribute("data-theme", initial);

  toggle?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("mia-theme", next);
  });

  // Header scroll
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (window.scrollY > 16) header?.classList.add("scrolled");
    else header?.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav
  const navBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  navBtn?.addEventListener("click", () => {
    const open = navLinks?.classList.toggle("open");
    navBtn.setAttribute("aria-expanded", String(!!open));
  });
  navLinks?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navBtn?.setAttribute("aria-expanded", "false");
    });
  });

  // Reveal on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
  );

  document
    .querySelectorAll(".project-card, .lab-card, .timeline-item, .stack-group, .contact-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition =
        "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
      observer.observe(el);
    });

  const style = document.createElement("style");
  style.textContent = `
    .project-card.visible,
    .lab-card.visible,
    .timeline-item.visible,
    .stack-group.visible,
    .contact-card.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
})();
