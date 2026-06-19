// ============================================
// CONTROLES DO MENU RESPONSIVO
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ============================================
// NAVEGAÇÃO SUAVE
// ============================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// ANIMAÇÃO DE SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animar
const elementsToObserve = document.querySelectorAll('.dashboard-item, .item-card');
elementsToObserve.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============================================
// VALIDAÇÃO DE FORMULÁRIO
// ============================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validar campos
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.style.borderColor = '#ff6600';
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (isValid) {
            showNotification('Mensagem enviada com sucesso!', 'success');
            contactForm.reset();
        } else {
            showNotification('Por favor, preencha todos os campos!', 'error');
        }
    });
}

// ============================================
// NOTIFICAÇÃO
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        ${type === 'success' ? 'background-color: #4caf50; color: white;' : ''}
        ${type === 'error' ? 'background-color: #ff6600; color: white;' : ''}
        ${type === 'info' ? 'background-color: #0066ff; color: white;' : ''}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// ANIMAÇÕES CSS DINÂMICAS
// ============================================

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
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// MONITORAR POSIÇÃO DO SCROLL
// ============================================

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = 'var(--shadow)';
    }
});

// ============================================
// INICIALIZAÇÃO
// ============================================

console.log('✅ Website P5.JS carregado com sucesso!');
console.log('📊 Dashboard pronto para uso');
