(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  var toTop = document.querySelector(".to-top");
  var yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Mobile menu */
  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    mobileMenu.classList.add("is-open");
    document.body.classList.add("no-scroll");
  }
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* Active nav link (current page) + back-to-top on scroll */
  var navLinks = document.querySelectorAll(".nav-links a, .mobile-menu nav a");
  var currentPage = location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#") return;
    var isHome = currentPage === "index.html" && href === "index.html";
    a.classList.toggle("active", href === currentPage || isHome);
  });

  function onScroll() {
    if (toTop) toTop.classList.toggle("is-visible", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Reveal on scroll */
  var revealEls = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  }

  /* Close mobile menu if resized to desktop */
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 960) closeMenu();
  });
})();
