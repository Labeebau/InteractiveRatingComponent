var rating = 0;
document.querySelectorAll("#number").forEach(element => {
    element.addEventListener("click", function () {
        document.querySelectorAll("#number").forEach(elm => {
            elm.classList.remove("pressed");
        });
        element.classList.add("pressed");
        rating = element.innerHTML;
    });
})
var btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", function () {
    if (rating === 0)
        document.getElementById("error").innerHTML = "Please select a rating !!!";
    else {

        document.getElementById("rate").classList.add("hidden");
        document.getElementById("thank").classList.remove("hidden");
        document.getElementById("thank").classList.add("active");
        document.getElementById("rating").innerHTML = "You selected " + rating + " out of 5";
    }
});

