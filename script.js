document.addEventListener('DOMContentLoaded', function() {
    // Create floating elements
    const heartsContainer = document.querySelector('.floating-hearts');
    const starsContainer = document.querySelector('.floating-stars');
    
    function createFloatingElement(container, className) {
        const element = document.createElement('div');
        element.classList.add(className);
        
        element.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 20 + 10;
        element.style.width = size + 'px';
        element.style.height = size + 'px';
        element.style.animationDuration = Math.random() * 3 + 4 + 's';
        element.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(element);
        
        setTimeout(() => {
            element.remove();
        }, 9000);
    }
    
    setInterval(() => createFloatingElement(heartsContainer, 'heart'), 300);
    setInterval(() => createFloatingElement(starsContainer, 'star'), 500);
    
    // Balloon hover effects
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) translateY(-15px)';
        });
        
        balloon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
    
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (passwordInput.value === "harsha") {
            // Correct password
            celebrate();
            
            setTimeout(() => {
                window.location.href = "main.html";
            }, 3000);
        } else {
            // Wrong password
            passwordInput.value = '';
            passwordInput.focus();
            loginForm.classList.add('shake');
            setTimeout(() => {
                loginForm.classList.remove('shake');
            }, 500);
            
            passwordInput.style.boxShadow = '0 0 0 2px rgba(255, 0, 0, 0.5)';
            setTimeout(() => {
                passwordInput.style.boxShadow = 'none';
            }, 1000);
        }
    });
    
    // Celebration function
    function celebrate() {
        // Show all confetti
        document.querySelectorAll('.confetti').forEach(confetti => {
            confetti.style.opacity = '1';
        });
        
        // Make balloons fly away
        document.querySelectorAll('.balloon').forEach(balloon => {
            balloon.style.transform = 'translateY(-500px)';
            balloon.style.opacity = '0';
        });
        
        // Title animation
        const title = document.querySelector('.birthday-title');
        title.style.transform = 'scale(1.2)';
        title.style.textShadow = '0 0 10px rgba(255, 107, 136, 0.8)';
        
        // Create extra hearts
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createFloatingElement(heartsContainer, 'heart');
            }, i * 50);
        }
    }
    
    // Title hover effect
    const title = document.querySelector('.birthday-title');
    title.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.textShadow = '0 0 15px rgba(255, 107, 136, 0.6)';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.1)';
    });
});