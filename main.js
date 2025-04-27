document.addEventListener('DOMContentLoaded', function() {
    // Countdown to June 3
    function updateCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        let birthday = new Date(currentYear, 5, 3); // June 3 (month is 0-indexed)
        
        // If birthday has passed this year, set to next year
        if (now > birthday) {
            birthday = new Date(currentYear + 1, 5, 3);
        }
        
        const diff = birthday - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
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
        element.style.animationDuration = Math.random() * 3 + 6 + 's';
        element.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(element);
        
        setTimeout(() => {
            element.remove();
        }, 10000);
    }
    
    setInterval(() => createFloatingElement(heartsContainer, 'heart'), 300);
    setInterval(() => createFloatingElement(starsContainer, 'star'), 500);
    
    // Special effect when countdown reaches 0
    function checkBirthday() {
        const now = new Date();
        const birthday = new Date(now.getFullYear(), 5, 3);
        
        if (now.getMonth() === birthday.getMonth() && now.getDate() === birthday.getDate()) {
            // It's her birthday!
            document.querySelector('.countdown-title').textContent = "Happy Birthday Harshawww!";
            document.querySelector('.countdown').style.display = 'none';
            
            // Create celebration effect
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    createFloatingElement(heartsContainer, 'heart');
                }, i * 50);
            }
        }
    }
    
    checkBirthday();
});