function myFunction() {
    var logo = document.getElementById("myPopup");
    logo.classList.toggle("show");
}

function myFunction1() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
}
