document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".toggle-icon").forEach(function (icon) {
    icon.addEventListener("click", function () {
      let infosContainer = icon.parentElement.nextElementSibling;
      let arrowIcon = icon.querySelector("i");
      if (
        infosContainer.style.maxHeight === "1000px" ||
        !infosContainer.style.maxHeight
      ) {
        infosContainer.style.maxHeight = "0";
        infosContainer.style.opacity = 0;
        arrowIcon.classList.remove("fa-caret-up");
        arrowIcon.classList.add("fa-caret-down");
      } else {
        infosContainer.style.maxHeight = "1000px";
        infosContainer.style.opacity = 1;
        arrowIcon.classList.remove("fa-caret-down");
        arrowIcon.classList.add("fa-caret-up");
      }
    });
  });
});
