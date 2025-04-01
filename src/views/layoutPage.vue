<template>
  <div class="app-container">
    <!-- 全局导航栏 - 仅在非登录页面显示 -->
    <nav class="nav" :class="{ 'scrolled': isScrolled }" v-if="!isLoginPage">
      <div class="nav-container">
        <!-- Logo区域 -->
        <router-link to="/" class="nav-logo">
          <div class="logo-icon"></div>
          <span class="logo-text">E-Sports Talent</span>
        </router-link>

        <!-- 主导航菜单 -->
        <div class="nav-menu">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/features" class="nav-link">功能介绍</router-link>
          <router-link to="/pricing" class="nav-link">会员方案</router-link>
        </div>

        <!-- 用户操作区 -->
        <div class="nav-actions">
          <router-link to="/login" class="user-avatar">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 10C12.21 10 14 8.21 14 6C14 3.79 12.21 2 10 2C7.79 2 6 3.79 6 6C6 8.21 7.79 10 10 10ZM10 12C7.33 12 2 13.34 2 16V18H18V16C18 13.34 12.67 12 10 12Z" fill="currentColor"/>
            </svg>
          </router-link>
        </div>
        
        <!-- 移动菜单按钮 -->
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </button>
      </div>
      
      <!-- 移动菜单 -->
      <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
        <router-link to="/" class="mobile-nav-link">首页</router-link>
        <router-link to="/features" class="mobile-nav-link">功能介绍</router-link>
        <router-link to="/pricing" class="mobile-nav-link">会员方案</router-link>
        <router-link to="/about" class="mobile-nav-link">关于我们</router-link>
      </div>
    </nav>

    <!-- 主要内容区域 - 给登录页增加特殊样式 -->
    <main class="main-content" :class="{ 'login-page-content': isLoginPage }">
      <slot></slot>
    </main>

    <!-- 全局页脚 - 仅在非登录页面显示 -->
    <footer class="footer" v-if="!isLoginPage">
      <div class="footer-container">
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} E-Sports Talent. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- 全局加载动画 -->
    <div class="global-loading" v-show="isLoading">
      <div class="loading-spinner"></div>
    </div>

    <!-- 全局消息提示 -->
    <div class="toast-container" ref="toastContainer"></div>
  </div>
  
</template>

<script>
export default {
  name: 'layoutPage',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      isLoading: false,
      isDarkMode: false,
      isMobileMenuOpen: false,
      isScrolled: false
    }
  },
  computed: {
    // 判断当前是否为登录页面
    isLoginPage() {
      return this.$route.path === '/login';
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('dark-theme', this.isDarkMode);
      localStorage.setItem('darkMode', this.isDarkMode ? 'true' : 'false');
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 20;
    },
    showToast(message, type = 'info') {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.innerText = message;
      this.$refs.toastContainer.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.add('show');
      }, 10);
      
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          this.$refs.toastContainer.removeChild(toast);
        }, 300);
      }, 3000);
    },
    showLoading() {
      this.isLoading = true;
    },
    hideLoading() {
      this.isLoading = false;
    }
  },
  watch: {
    // 监听路由变化，在路由变化时关闭移动菜单
    '$route'() {
      if (this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
        document.body.style.overflow = '';
      }
    }
  },
  mounted() {
    // 初始化主题
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    this.isDarkMode = savedDarkMode;
    document.documentElement.classList.toggle('dark-theme', this.isDarkMode);
    
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // 初始检查
    
    // 暴露全局方法
    window.$app = {
      showToast: this.showToast,
      showLoading: this.showLoading,
      hideLoading: this.hideLoading
    };
  },
  beforeUnmount() {
    // 移除事件监听和全局方法
    window.removeEventListener('scroll', this.handleScroll);
    delete window.$app;
  }
}
</script>

<style>
/* 基础样式 */
:root {
  /* Leonardo.ai 精确匹配的配色系统 */
  --bg-color-primary: #070A19; /* 更新：深色背景色匹配Leonardo.ai */
  --bg-color-secondary: #0C1128; /* 更新：次级背景色 */
  --bg-color-tertiary: #111A40; /* 更新：三级背景色 */
  
  --accent-blue: #2C5AFF; /* 蓝色强调色 */
  --accent-blue-light: #37B9F1; /* 浅蓝色强调色 */
  --accent-purple: #7A2BF6; /* 紫色强调色 */
  --accent-pink: #DA21C2; /* 粉色强调色 */
  
  --primary-gradient: linear-gradient(90deg, #2C5AFF, #7A2BF6); /* 主要渐变 */
  --secondary-gradient: linear-gradient(90deg, #37B9F1, #DA21C2); /* 次要渐变 */
  --button-gradient: linear-gradient(90deg, #2C5AFF, #7A2BF6 51%, #2C5AFF); /* 按钮渐变 */
  
  --text-color: #FFFFFF; /* 主文本色 */
  --text-muted: rgba(255, 255, 255, 0.6); /* 次要文本色 */
  --text-disabled: rgba(255, 255, 255, 0.4); /* 禁用文本色 */
  
  --border-light: rgba(255, 255, 255, 0.08); /* 浅色边框 */
  --glass-bg: rgba(12, 17, 40, 0.75); /* 更新：磨砂玻璃背景 */
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); /* 磨砂玻璃阴影 */
  
  --success-color: #05CC87; /* 成功色 */
  --warning-color: #FFC107; /* 警告色 */
  --error-color: #FF3D71; /* 错误色 */
  
  --nav-height: 70px; /* 导航栏高度 */
  --transition-speed: 0.3s; /* 过渡动画速度 */
  --glow-effect: 0 0 20px rgba(124, 58, 237, 0.5); /* 发光效果 */
}

/* 深色主题变量（默认就是深色） */
:root.dark-theme {
  /* 深色主题不需要更改变量，因为默认已经是深色 */
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color-primary);
  background-image: 
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%232C5AFF' fill-opacity='0.05'/%3E%3C/svg%3E"),
    radial-gradient(circle at top right, rgba(45, 90, 255, 0.08), transparent 400px),
    radial-gradient(circle at bottom left, rgba(122, 43, 246, 0.08), transparent 400px);
  background-attachment: fixed;
  transition: background-color var(--transition-speed), color var(--transition-speed);
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: var(--accent-blue-light);
  transition: color var(--transition-speed);
}

a:hover {
  color: var(--text-color);
}

button {
  cursor: pointer;
}

/* 导航栏样式 - 更新为匹配 homePage.vue 的风格 */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(7, 10, 25, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-light);
  height: var(--nav-height);
  z-index: 100;
  transition: all var(--transition-speed);
}

.nav.scrolled {
  background-color: rgba(7, 10, 25, 0.95);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 30px;
}

.nav-logo {
  display: flex;
  align-items: center;
  z-index: 101;
  padding: 8px;
  border-radius: 50%;
  background: rgba(7, 10, 25, 0.4);
  overflow: hidden;
  position: relative;
  width: 40px;
  height: 40px;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.nav-logo:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-effect);
}

.nav-logo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: -1;
}

.nav-logo:hover::before {
  opacity: 0.2;
}

/* 移除 logo-text 的显示，改为只显示 logo 图标 */
.logo-text {
  display: none;
}

/* 创建 logo 图标样式 */
.logo-icon {
  width: 24px;
  height: 24px;
  background: var(--primary-gradient);
  border-radius: 6px;
  position: relative;
  transform: rotate(45deg);
  transition: transform 0.3s;
}

.logo-icon::before,
.logo-icon::after {
  content: '';
  position: absolute;
  background: var(--bg-color-primary);
}

.logo-icon::before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 7px;
  left: 7px;
}

.logo-icon::after {
  width: 14px;
  height: 2px;
  top: 11px;
  left: 5px;
  transform: rotate(-45deg);
}

.nav-logo:hover .logo-icon {
  transform: rotate(225deg);
}

/* 导航链接样式强化 - 加粗和高亮效果 */
.nav-menu {
  display: flex;
  gap: 40px;
}

.nav-link {
  color: var(--text-color); /* 改为主文本色，不再使用次要文本色 */
  font-weight: 600; /* 默认加粗 */
  position: relative;
  padding: 8px 0;
  font-size: 16px;
  letter-spacing: 0.02em;
  transition: all 0.3s;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.1); /* 轻微发光效果 */
}

.nav-link:hover {
  color: var(--accent-blue-light); /* 悬停时使用亮蓝色 */
  text-shadow: 0 0 10px rgba(55, 185, 241, 0.5); /* 蓝色光晕 */
  transform: translateY(-2px); /* 轻微上浮效果 */
}

/* 增强下划线效果 */
.nav-link:after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 3px; /* 粗下划线 */
  background: var(--secondary-gradient); /* 使用次要渐变 */
  opacity: 0;
  transition: width 0.3s, opacity 0.3s;
  border-radius: 3px;
  box-shadow: 0 0 12px rgba(218, 33, 194, 0.6); /* 强发光效果 */
}

.nav-link:hover:after {
  width: 100%;
  opacity: 1;
}

/* 活跃状态强化 */
.nav-link.router-link-active {
  font-weight: 700; /* 更粗的字体 */
  background: var(--secondary-gradient); /* 使用亮丽的次要渐变 */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(218, 33, 194, 0.6); /* 强光晕 */
  transform: scale(1.05); /* 轻微放大 */
}

.nav-link.router-link-active:after {
  width: 100%;
  opacity: 1;
  height: 4px; /* 更粗的下划线 */
  background: var(--secondary-gradient);
  box-shadow: 0 0 18px rgba(218, 33, 194, 0.7); /* 很强的发光效果 */
}

/* 活跃状态额外指示器 */
.nav-link.router-link-active::before {
  content: '';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-blue);
  box-shadow: 0 0 10px var(--accent-blue);
  opacity: 1;
  animation: pulse 2s infinite; /* 脉冲动画 */
}

@keyframes pulse {
  0% { opacity: 0.5; transform: translateX(-50%) scale(0.8); }
  50% { opacity: 1; transform: translateX(-50%) scale(1.2); }
  100% { opacity: 0.5; transform: translateX(-50%) scale(0.8); }
}

/* 加强导航菜单的整体对比度 */
.nav-menu {
  background: rgba(7, 10, 25, 0.5);
  padding: 5px 15px;
  border-radius: 30px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* 主题切换按钮样式 */
.theme-toggle {
  display: flex;
  align-items: center;
}

.theme-button {
  background: rgba(17, 26, 64, 0.4);
  border: 1px solid var(--border-light);
  cursor: pointer;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.theme-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 0;
}

.theme-button:hover::before {
  opacity: 0.2;
}

.theme-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-effect);
}

.theme-icon {
  fill: currentColor;
  position: relative;
  z-index: 1;
}

/* 用户头像样式 */
.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(17, 26, 64, 0.4);
  border: 1px solid var(--border-light);
  color: var(--text-color);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.user-avatar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 0;
}

.user-avatar:hover::before {
  opacity: 0.2;
}

.user-avatar:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-effect);
}

.user-avatar svg {
  position: relative;
  z-index: 1;
}

/* 移动菜单按钮样式 */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 101;
}

.menu-bar {
  width: 100%;
  height: 2px;
  background: var(--text-color);
  transition: transform 0.3s, opacity 0.3s;
}

.is-open .menu-bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
  background: var(--accent-blue-light);
}

.is-open .menu-bar:nth-child(2) {
  opacity: 0;
}

.is-open .menu-bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
  background: var(--accent-blue-light);
}

/* 移动菜单样式 */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(7, 10, 25, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
  z-index: 100;
  pointer-events: none;
}

.mobile-menu.is-open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}

/* 移动菜单链接强化 */
.mobile-nav-link {
  color: var(--text-color);
  font-size: 24px;
  font-weight: 700; /* 加粗 */
  padding: 12px;
  position: relative;
  transition: all 0.3s;
  letter-spacing: 0.03em;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
}

.mobile-nav-link:hover {
  transform: translateY(-3px);
  color: transparent;
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 12px rgba(218, 33, 194, 0.5);
}

.mobile-nav-link.router-link-active {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(218, 33, 194, 0.7);
  transform: scale(1.1);
}

.mobile-nav-link.router-link-active::after {
  width: 100%;
  height: 4px;
  background: var(--secondary-gradient);
  box-shadow: 0 0 15px rgba(218, 33, 194, 0.6);
}

/* 主内容区域样式 - 移除顶部内边距 */
.main-content {
  min-height: calc(100vh - var(--nav-height) - 200px);
  padding: 0 20px 60px; /* 移除顶部内边距，从70px减为0 */
  max-width: 1400px;
  margin: 0 auto;
}

/* 页脚样式 - Leonardo.ai 风格 */
.footer {
  background-color: var(--bg-color-secondary);
  background-image: linear-gradient(to bottom, var(--bg-color-secondary), rgba(7, 10, 25, 0.9));
  padding: 60px 0 30px;
  border-top: 1px solid var(--border-light);
  transition: background-color var(--transition-speed);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(44, 90, 255, 0.1), transparent 70%);
  z-index: 0;
}

.footer::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(122, 43, 246, 0.1), transparent 70%);
  z-index: 0;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--text-color);
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--primary-gradient);
}

.footer-section p {
  color: var(--text-muted);
  margin: 5px 0;
}

.footer-link {
  color: var(--text-muted);
  display: block;
  margin-bottom: 10px;
  transition: all 0.2s;
  position: relative;
  padding-left: 0;
}

.footer-link:hover {
  color: var(--accent-blue-light);
  transform: translateX(5px);
}

.footer-link::before {
  content: '→';
  position: absolute;
  left: -20px;
  opacity: 0;
  transition: all 0.2s;
  color: var(--accent-blue-light);
}

.footer-link:hover::before {
  left: -15px;
  opacity: 1;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--border-light);
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* 全局加载动画 - Leonardo.ai 风格 */
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 7, 17, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  border-top: 3px solid var(--accent-blue);
  border-right: 3px solid var(--accent-purple);
  border-bottom: 3px solid var(--accent-pink);
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
  box-shadow: 0 0 15px rgba(122, 43, 246, 0.3);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 消息提示样式 - Leonardo.ai 风格 */
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.toast {
  background-color: var(--bg-color-tertiary);
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: var(--glass-shadow);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-light);
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.3s;
  min-width: 280px;
  position: relative;
  overflow: hidden;
}

.toast::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

.toast-info::before {
  background: var(--accent-blue);
}

.toast-success::before {
  background: var(--success-color);
}

.toast-error::before {
  background: var(--error-color);
}

.toast-warning::before {
  background: var(--warning-color);
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-color-secondary);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(var(--accent-blue), var(--accent-purple));
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(var(--accent-purple), var(--accent-blue));
}

/* 文本选择效果 */
::selection {
  background: rgba(122, 43, 246, 0.3);
  color: white;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .nav-menu {
    gap: 20px;
  }
  
  .main-content {
    padding: 0 20px 50px; /* 修改响应式内边距 */
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 40px;
  }
  
  .footer-section {
    min-width: 100%;
  }
  
  .main-content {
    padding-top: 0; /* 确保移动端也没有顶部内边距 */
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 15px;
  }
  
  .nav-actions {
    gap: 10px;
  }
  
  .theme-button, .user-avatar {
    width: 32px;
    height: 32px;
  }
  
  .mobile-nav-link {
    font-size: 1.3rem;
  }
}

/* 按钮通用样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;
}

.btn-primary {
  background-image: var(--button-gradient);
  background-size: 200% auto;
  color: white;
  box-shadow: 0 4px 15px rgba(44, 90, 255, 0.3);
}

.btn-primary:hover {
  background-position: right center;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(44, 90, 255, 0.4);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--border-light);
  color: var(--text-color);
}

.btn-outline:hover {
  border-color: var(--accent-blue);
  box-shadow: 0 0 10px rgba(44, 90, 255, 0.2);
  transform: translateY(-2px);
}

/* 卡片样式 */
.card {
  background-color: var(--bg-color-tertiary);
  border-radius: 12px;
  border: 1px solid var(--border-light);
  overflow: hidden;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--glass-shadow);
  border-color: rgba(255, 255, 255, 0.1);
}

/* 给登录页内容添加特殊样式 */
.login-page-content {
  min-height: 100vh; /* 确保登录页面占满全屏 */
  padding: 0 !important; /* 移除所有内边距 */
}
</style> 