document.addEventListener('DOMContentLoaded', function() {
    // 获取导航栏元素
    const header = document.querySelector('.header');
    const navContainer = document.querySelector('.nav-container');

    // 页面滚动时添加阴影效果
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
    });

    // 平滑滚动到页面顶部
    document.querySelector('.logo').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 为产品卡片添加悬停效果
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 特性卡片的动画效果
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 响应式导航栏
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleResponsiveNav(e) {
        if (e.matches) {
            navContainer.style.transition = 'padding 0.3s ease';
        }
    }
    mediaQuery.addListener(handleResponsiveNav);
    handleResponsiveNav(mediaQuery);
});