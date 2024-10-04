
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.addEventListener("mouseover", () => {
            image.style.transform = "scale(1.05)";
            image.style.transition = "transform 0.3s";
        });

        image.addEventListener("mouseout", () => {
            image.style.transform = "scale(1)";
        });
    });
});
