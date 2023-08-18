// Menü düğmesini seç
var menuButton = document.getElementById("menuButton");
// Menü listesini seç
var menuList = document.getElementById("menuList");

// Menü düğmesine tıklama olayını ekle
menuButton.addEventListener("click", function() {
  // Menü listesini görünür veya gizli hale getir
  if (menuList.style.display === "none" || menuList.style.display === "") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});