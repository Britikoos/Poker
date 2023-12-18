(function () {
    document.addEventListener("DOMContentLoaded", () => {

        console.log(window.location.href);
    
        const hrefs = document.querySelectorAll('.menu li a');


        for (let link of hrefs) {

            if (link.href === window.location.href) {
                link.classList.add("active");
            }
        }
    });
})();