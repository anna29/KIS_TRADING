document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       STICKY HEADER LOGIC
       ========================================= */
    const header = document.querySelector('.header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case page is loaded halfway down
    handleScroll();

    /* =========================================
       FAQ ACCORDION LOGIC
       ========================================= */
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(acc => {
                acc.classList.remove('active');
                acc.querySelector('.accordion-content').style.maxHeight = null;
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                // Set max-height to its scrollHeight to allow smooth transition
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    /* =========================================
       SMOOTH SCROLL FOR ANCHOR LINKS
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});
