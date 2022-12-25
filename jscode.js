
// Example starter JavaScript for disabling form submissions if there are invalid fields
window.addEventListener("load", function () {
    // start dialoge after loading
    //   $("#exampleModal").modal('show');
    (function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })(); /**validation, **()required**/
    // // fill form with dialoge inputs
    // let dismissDialoge = document.querySelector("div[class=modal-footer] button:nth-child(2)");
    // dismissDialoge.onclick = function () {
    //     document.querySelector("#validationCustom01").value = document.querySelector("#name-text").value;
    //     localStorage.setItem("username", document.querySelector("#username-text").value);
    //     document.querySelector("#validationCustomUsername").value = localStorage.getItem("username");
    //      $("#exampleModal").modal('hide');

    // }

    // <!--Navbar Spy-  -JQuery important for nav ->
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: 'nav[class=navbar]'
    });
})//end loading
