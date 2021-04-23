function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function leftOpenNav() {
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mainContent").style.marginLeft = "25%";
    document.getElementById("openLeftBtn").style.display = "none";
}

function leftCloseNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
    document.getElementById("openLeftBtn").style.display = "block";
}

var dropdown = document.getElementsByClassName("menu-items");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}