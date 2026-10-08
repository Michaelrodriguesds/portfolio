// ===== BOTÃO VOLTAR AO TOPO — completamente independente =====
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== BOTÃO WHATSAPP — oculta durante scroll =====
const whatsappButton = document.querySelector('.whatsapp-float');

if (whatsappButton) {
    let scrollTimer;

    window.addEventListener('scroll', function () {
        clearTimeout(scrollTimer);
        whatsappButton.style.opacity = '0';

        scrollTimer = setTimeout(function () {
            whatsappButton.style.opacity = '1';
        }, 150);
    });

    // Tremida periódica
    setInterval(function () {
        whatsappButton.classList.add('whatsapp-shake');
        setTimeout(function () {
            whatsappButton.classList.remove('whatsapp-shake');
        }, 400);
    }, 6000);
}

// ===== NAVEGAÇÃO SUAVE =====
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const header = document.querySelector('header');
                const offset = header ? header.offsetHeight : 0;
                window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
            }
        }
    });
});

// ===== FALLBACK DE IMAGENS =====
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.img-projeto[src*="githubusercontent.com"]').forEach(function (img) {
        img.onerror = function () { this.src = 'img/placeholder-php.jpg'; };
    });
});


// ===== AVISO DE MANUTENÇÃO =====
window.addEventListener('load', function () {
    alert(
        '⚠️ AVISO IMPORTANTE\n\n' +
        'Este portfólio está em constante atualização e manutenção.\n\n' +
        'Por esse motivo, alguns dos projetos apresentados podem estar temporariamente indisponíveis ou offline.\n\n' +
        'Caso algum projeto não esteja acessível, tente novamente mais tarde.\n\n' +
        'Obrigado pela compreensão!'
    );
});