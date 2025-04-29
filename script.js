document.getElementById('menu-toggle').addEventListener('click', toggleName
        
        
);

function toggleName() {
    // Add or remove the 'active' class on the nav links
    const navLinks = document.querySelector('.nav-link');
    navLinks.classList.toggle('active');
}