// ==========================================
// Navigation and Menu Handling
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    updateActiveNavLink();
    setupFormSubmission();
    setupSmoothScrolling();
});

function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==========================================
// Form Submission
// ==========================================

function setupFormSubmission() {
    const form = document.querySelector('.form-group');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputs = form.querySelectorAll('input, textarea');
        const hasValues = Array.from(inputs).every(input => input.value.trim() !== '');

        if (hasValues) {
            // Simular envío
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = '✓ Mensaje enviado';
            submitBtn.style.background = 'var(--success-color)';

            // Limpiar formulario después de 2 segundos
            setTimeout(() => {
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 2000);
        }
    });
}

// ==========================================
// Smooth Scrolling
// ==========================================

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==========================================
// Utility Functions
// ==========================================

// Función para copiar texto al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copiado al portapapeles', 'success');
    }).catch(() => {
        showNotification('Error al copiar', 'error');
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 6px;
        color: white;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        ${type === 'success' ? 'background: var(--success-color);' : ''}
        ${type === 'error' ? 'background: var(--warning-color);' : ''}
        ${type === 'info' ? 'background: var(--info-color);' : ''}
    `;

    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar estilos para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// Dark Mode Toggle (Opcional)
// ==========================================

function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedMode === 'dark' || (savedMode === null && prefersDark)) {
        document.body.classList.add('dark-mode');
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
}

// ==========================================
// Scroll Progress Bar (Opcional)
// ==========================================

function initScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        width: 0%;
        z-index: 9998;
        transition: width 0.1s ease;
    `;
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Inicializar progress bar
initScrollProgressBar();

// ==========================================
// Performance Optimization
// ==========================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==========================================
// Search Functionality (Para búsqueda dentro de la página)
// ==========================================

function setupPageSearch() {
    // Esta función se puede usar para agregar búsqueda en las páginas individuales
    // que contengan mucho contenido
}

// ==========================================
// Accessibility Improvements
// ==========================================

// Mejorar navegación con teclado
document.addEventListener('keydown', function(e) {
    // Alt + 1: Ir a inicio
    // Alt + 2: Ir a manuales
    // Alt + 3: Ir a FAQ
    if (e.altKey) {
        switch(e.key) {
            case '1':
                window.location.href = 'index.html';
                break;
            case '2':
                document.getElementById('manuales')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case '3':
                window.location.href = 'faq.html';
                break;
        }
    }
});

console.log('Script cargado correctamente');
