const heroImages = [
  "https://www.minecraft.net/content/dam/minecraft/pmp/mkt_summer_sale_2024.jpg",
  "https://www.minecraft.net/content/dam/games/minecraft/key-art/Minecraft_BoxArt_800x1050.jpg",
  "https://www.minecraft.net/content/dam/games/dungeons/key-art/Dungeons_BoxArt_800x1050.jpg",
];

let current = 0;

const heroImg = document.getElementById("heroImage");

function nextImage() {
  current = (current + 1) % heroImages.length;
  heroImg.src = heroImages[current];
}

// Start the slider
if (heroImg) {
  setInterval(nextImage, 5000); // Change image every 5 seconds
}

function toggleLogin() {
  const popup = document.getElementById("loginPopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}
