var rating = 0;
document.querySelectorAll(".radioLabel").forEach(element => {
    element.addEventListener("click", function () {
        var radio = document.querySelector("." + element.id);
        radio.checked = true;
        rating = element.innerHTML;
    });
});

var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function () {
    if (rating === 0) {
        document.getElementById("error").classList.remove("non-visible");
        document.getElementById("error").classList.add("visible");
    }
    else {

        document.getElementById("rate").classList.add("hidden");
        document.getElementById("thank").classList.remove("hidden");
        document.getElementById("thank").classList.add("active");
        document.getElementById("rating").innerHTML = "You selected " + rating + " out of 5";
    }
});

