var box = document.getElementById("box");
document.addEventListener("keydown", function(event) {
  if (event.key === "c") {
    if (box.style.display === "none") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  }
});