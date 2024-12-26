



// Contact form submission handler
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); 
            const name = this.querySelector("input[placeholder='Your Name']").value;
            const email = this.querySelector("input[placeholder='Your Email']").value;
            const message = this.querySelector("textarea[placeholder='Your Message']").value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been received. I will contact you at ${email} soon.`);
                this.reset(); 
            } else {
                alert("Please fill in all fields before submitting.");
            }
        });
    }
});
