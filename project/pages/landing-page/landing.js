// تغيير ستايل الهيدر عند التمرير (Scrolling)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.8rem 8%';
        header.style.background = '#ffffff';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '1.2rem 8%';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
    }
});

// تأثير بسيط عند الضغط على زر البحث
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    const input = document.querySelector('.input-group input').value;
    if (input) {
        alert('جاري البحث عن: ' + input);
    } else {
        alert('يرجى إدخال كلمة بحث');
    }
});

// إضافة تأثير ظهور تدريجي للكروت عند التمرير
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});