// =====================================================================
// WILOO - GLOBAL SECURITY & APP SCRIPT (assets/js/app.js)
// =====================================================================

document.addEventListener("DOMContentLoaded", function() {
    // Pran adrès paj kote itilizatè a ye a kounye a
    const pageActuelle = window.location.pathname;
    
    // Si itilizatè a PA sou paj login lan
    if (!pageActuelle.includes("login.html")) {
        // Al chache matricule a nan memwa navigatè a (localStorage)
        const activeUser = localStorage.getItem("wiloo_matricule");
        
        // Si pa gen okenn itilizatè ki konekte
        if (!activeUser) {
            // Voye l tounen sou paj login lan fòs
            window.location.href = "login.html";
        } else {
            // Si l konekte tout bon, mete matricule li nan header a otomatikman
            const profileElement = document.querySelector(".user-profile");
            if (profileElement && !profileElement.innerText.includes(activeUser)) {
                profileElement.innerHTML = `👤 Mat: ${activeUser}`;
            }
        }
    }
});

// Fonksyon pou Dekonekte (Logout) si w vle ajoute yon bouton dekoneksyon pita
function wilooLogout() {
    localStorage.removeItem("wiloo_matricule");
    window.location.href = "login.html";
}
