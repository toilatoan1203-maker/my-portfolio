document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Thịnh Toàn đã sẵn sàng!');

    // Hiệu ứng chạy thanh tiến độ (Skills)
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 1.5s cubic-bezier(0.1, 0.5, 0.5, 1)';
            bar.style.width = width;
        }, 300);
    });

    // Form submission simple feedback
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Đang gửi...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Đã nhận tin nhắn! 🎉';
                btn.style.background = '#4CAF50';
                btn.style.color = 'white';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});