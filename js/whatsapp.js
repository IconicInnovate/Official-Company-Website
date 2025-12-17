function hidePreloaderAndShowWhatsApp() {
const preloader = document.getElementById('preloader');
const whatsappBtn = document.getElementById('whatsapp-chat-btn');

if (preloader && preloader.style.display !== 'none') {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    
    setTimeout(() => {
    preloader.style.display = 'none';

    if (whatsappBtn) {
        whatsappBtn.style.display = 'flex';
    }
    }, 800);
}

document.querySelector(".heroContent h1").style.opacity = "1";
document.querySelector(".heroContent h1").style.transform = "translateY(0)";
}

window.addEventListener('load', hidePreloaderAndShowWhatsApp);
setTimeout(hidePreloaderAndShowWhatsApp, 3000);