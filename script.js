<script>
    // Navbar Shadow Effect

window.addEventListener("scroll", function(){

    let navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("shadow");
    }
    else{
        navbar.classList.remove("shadow");
    }

});


// Contact Form Alert

let form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank You! Your order/message has been sent successfully.");

});
</script>