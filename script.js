compass = document.getElementById("navArea");
compass.onmouseover = function(){
    document.getElementById("nav").style.display = "block";
}
compass.onmouseout = function(){
    document.getElementById("nav").style.display = "none";
}

projects = document.getElementById("projects");
projects.onmouseover = function(){
    document.getElementById("projects-container").style.display = "block";
}
projects.onmouseout = function(){
    document.getElementById("projects-container").style.display = "none";
}

border = document.getElementById("border");
window.setInterval(function() {
    border.rotate(10)
  }, 500);
