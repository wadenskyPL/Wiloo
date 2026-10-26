// =====================================================================
// WILOO - GLOBAL APP SCRIPT (assets/js/app.js)
// =====================================================================

// Konfigirasyon Prensipal Sistèm Nan
const WILOO_CONFIG = {
    appName: "Wiloo ERP",
    version: "1.0.0",
    dbConnection: "Neon PostgreSQL"
};

// 1. Tcheke Sesyon Itilizatè a otomatikman sou tout paj yo
document.addEventListener("DOMContentLoaded", function() {
    const pageActuelle = window.location.pathname;
    
    // Si nou pa sou paj login lan, nou dwe tcheke si itilizatè a konekte
    if (!pageActuelle.includes("login.html")) {
        const activeUser = localStorage.getItem("wiloo_matricule");
        
        if (!activeUser) {
            // Si pa gen itilizatè ki anrejistre nanmemwa navigatè a, voye l sou login
            window.location.href = "login.html";
        } else {
            // Si l konekte, nou ka mete non l oswa matricule l nan header a si l egziste
            const profileElement = document.querySelector(".user-profile");
            if (profileElement && !profileElement.innerText.includes(activeUser)) {
                profileElement.innerHTML = `👤 Mat: ${activeUser}`;
            }
        }
    }
});

// 2. Fonksyon pou Dekonekte (Logout)
function wilooLogout() {
    localStorage.removeItem("wiloo_matricule");
    localStorage.removeItem("wiloo_role");
    window.location.href = "login.html";
}

// 3. Fonksyon Global pou Notifikasyon Pwòp
function wilooAlert(message, type = "success") {
    alert(message); // Ou ka ranplase sa ak yon bèl bwat modèn pita
}
