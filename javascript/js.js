document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const scrollTo = this.getAttribute("href");
      const whitespace = scrollTo === "#s1" ? 70 : 30;

      const target = document.querySelector(scrollTo);
      if (target) {
        const top = target.offsetTop - whitespace;
        window.scrollTo({
          top: top,
          behavior: "smooth"
        });
      }
    });
  });
});
