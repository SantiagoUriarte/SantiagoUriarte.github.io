function copyEmail() {
    var email = document.getElementById("email");
    email.style.display="block";
    email.select();
    document.execCommand("copy");
    email.style.display="none";
    alert("email copied to clipboard");
}

function activateModal(element_id) {
    var modal_id = element_id + "modal"
    document.getElementById(modal_id).classList.add("is-active")
}

function closeModal(element) {
    modal_id = element.parentElement.id;
    document.getElementById(modal_id).classList.remove("is-active")
}

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1400, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
