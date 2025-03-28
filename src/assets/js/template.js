// 模板页面的全局JavaScript功能

// 主题切换功能
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }
}

// 全局加载动画管理
class LoadingManager {
    constructor() {
        this.loader = document.getElementById('globalLoading');
    }

    show() {
        this.loader.style.display = 'flex';
    }

    hide() {
        this.loader.style.display = 'none';
    }
}

// 全局消息提示管理
class ToastManager {
    constructor() {
        this.container = document.getElementById('toastContainer');
    }

    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">
                ${this.getIcon(type)}
            </span>
            <span class="toast-message">${message}</span>
        `;

        this.container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                this.container.removeChild(toast);
            }, 300);
        }, duration);
    }

    getIcon(type) {
        const icons = {
            success: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>',
            error: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 8a1 1 0 100-2 1 1 0 000 2z"/></svg>'
        };
        return icons[type] || icons.info;
    }
}

// 移动端菜单管理
class MobileMenuManager {
    constructor() {
        this.menuButton = document.querySelector('.mobile-menu-button');
        this.menu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        if (this.menuButton) {
            this.menuButton.addEventListener('click', () => this.toggleMenu());
        }

        // 点击外部关闭菜单
        document.addEventListener('click', (e) => {
            if (this.menu && this.menu.classList.contains('active') && 
                !this.menu.contains(e.target) && 
                !this.menuButton.contains(e.target)) {
                this.menu.classList.remove('active');
            }
        });
    }

    toggleMenu() {
        this.menu.classList.toggle('active');
    }
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
    window.loadingManager = new LoadingManager();
    window.toastManager = new ToastManager();
    window.mobileMenuManager = new MobileMenuManager();
});

// 导出全局工具函数
window.showLoading = () => window.loadingManager.show();
window.hideLoading = () => window.loadingManager.hide();
window.showToast = (message, type, duration) => window.toastManager.show(message, type, duration); 