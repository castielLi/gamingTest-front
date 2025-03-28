document.addEventListener('DOMContentLoaded', () => {
    const billingToggle = document.getElementById('billingToggle');
    const priceAmounts = document.querySelectorAll('.price-amount');
    const pricePeriods = document.querySelectorAll('.price-period');

    // 定义月付和年付的价格
    const prices = {
        monthly: ['¥29', '¥69', '¥299'],
        yearly: ['¥279', '¥669', '¥2899']
    };

    billingToggle.addEventListener('change', (e) => {
        const isYearly = e.target.checked;
        const currentPrices = isYearly ? prices.yearly : prices.monthly;
        const period = isYearly ? '/年' : '/月';

        // 更新价格显示
        priceAmounts.forEach((amount, index) => {
            amount.textContent = currentPrices[index];
        });

        // 更新周期显示
        pricePeriods.forEach(periodEl => {
            periodEl.textContent = period;
        });

        // 添加价格切换动画
        priceAmounts.forEach(amount => {
            amount.style.animation = 'none';
            amount.offsetHeight; // 触发重绘
            amount.style.animation = 'priceFade 0.4s ease-in-out';
        });
    });
});

// 添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 