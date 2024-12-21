document.addEventListener("DOMContentLoaded", () => {

    const services = document.querySelectorAll(".service");
    services.forEach(service => {
        service.addEventListener("click", () => {
            const serviceName = service.querySelector("h3").textContent;
            alert(`More details about ${serviceName} are coming soon!`);
        });
    });
});
