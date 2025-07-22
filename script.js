document.addEventListener("DOMContentLoaded", () => {
  // Video Play/Pause Animation
  const videos = document.querySelectorAll("video");
  videos.forEach(video => {
    video.addEventListener("play", () => animateElement(video));
    video.addEventListener("pause", () => animateElement(video));
  });

  // Image Click Animation
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => animateElement(img));
  });

  // Download Button Animation
  const buttons = document.querySelectorAll(".clip-info button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      animateElement(button);
      button.textContent = "Downloading...";
      setTimeout(() => {
        button.textContent = "Download";
      }, 1500);
    });
  });

  // Animation Function (bounce glow effect)
  function animateElement(element) {
    element.classList.add("animate-glow");
    setTimeout(() => {
      element.classList.remove("animate-glow");
    }, 1000);
  }
});