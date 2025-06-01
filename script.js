tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3B82F6',
                        secondary: '#1E40AF',
                        dark: '#1F2937',
                        light: '#F3F4F6',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
}

//permet de gérer le texte comme si on saisissait sur code
// Typewriter effect for multiple lines
function typeWriter(element, html, speed = 35, callback) {
    let i = 0;
    function typing() {
        if (i <= html.length) {
            element.innerHTML = html.slice(0, i) + '<span class="border-r-2 border-yellow-300 animate-pulse"></span>';
            i++;
            setTimeout(typing, speed);
        } else {
            element.innerHTML = html; // Remove cursor
            if (callback) callback();
        }
    }
    typing();
}

document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('typewriter-title');
    const subtitle = document.getElementById('typewriter-subtitle');
    const desc = document.getElementById('typewriter-desc');
    const titleHtml = 'Bonjour, je suis <span class="text-yellow-300">AMOUSSA Sayidi</span>';
    const subtitleHtml = 'Développeur Full Stack';
    const descHtml = 'Je crée des applications web performantes et évolutives avec les dernières technologies. Passionné par le code propre et les solutions innovantes.';

    typeWriter(title, titleHtml, 35, () => {
        setTimeout(() => {
            typeWriter(subtitle, subtitleHtml, 30, () => {
                setTimeout(() => {
                    typeWriter(desc, descHtml, 18);
                }, 200);
            });
        }, 200);
    });
});