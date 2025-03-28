<template>
  <div class="app-container">
    <!-- 全局导航栏 -->
    <nav class="nav">
      <div class="nav-container">
        <!-- Logo区域 -->
        <router-link to="/" class="nav-logo">
          <!-- <img src="@/assets/img/logo.png" alt="Logo" class="logo-image"> -->
          <span class="logo-text">E-Sports Talent</span>
        </router-link>

        <!-- 主导航菜单 -->
        <div class="nav-menu">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/mainTest" class="nav-link">能力测试</router-link>
          <router-link to="/pricing" class="nav-link">会员方案</router-link>
          <router-link to="/about" class="nav-link">关于我们</router-link>
        </div>

        <!-- 用户操作区 -->
        <div class="nav-actions">
          <div class="theme-toggle">
            <button class="theme-button" @click="toggleTheme">
              <svg class="theme-icon light" width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm7.071 7.071a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zm-14.142 0a1 1 0 0 1 1.414 0l.707.707A1 1 0 1 1 5.636 12.2l-.707-.707a1 1 0 0 1 0-1.414zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-8 4a1 1 0 0 1 1 1 7 7 0 1 0 14 0 1 1 0 1 1 2 0 9 9 0 1 1-18 0 1 1 0 0 1 1-1z"/>
              </svg>
              <svg class="theme-icon dark" width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3z"/>
              </svg>
            </button>
          </div>
          <router-link to="/login" class="user-avatar">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 10C12.21 10 14 8.21 14 6C14 3.79 12.21 2 10 2C7.79 2 6 3.79 6 6C6 8.21 7.79 10 10 10ZM10 12C7.33 12 2 13.34 2 16V18H18V16C18 13.34 12.67 12 10 12Z" fill="currentColor"/>
            </svg>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <slot></slot>
    </main>

    <!-- 全局页脚 -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>关于我们</h3>
            <p>专业的电竞天赋测试与分析平台</p>
          </div>
          <div class="footer-section">
            <h3>快速链接</h3>
            <router-link to="/pricing" class="footer-link">会员方案</router-link>
            <router-link to="/mainTest" class="footer-link">开始测试</router-link>
            <router-link to="/help" class="footer-link">帮助中心</router-link>
          </div>
          <div class="footer-section">
            <h3>联系方式</h3>
            <p>邮箱：support@esports-talent.com</p>
            <p>电话：400-888-8888</p>
          </div>
        </div>
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
      isDarkMode: false
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('dark-theme', this.isDarkMode);
      localStorage.setItem('darkMode', this.isDarkMode ? 'true' : 'false');
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
  mounted() {
    // 初始化主题
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    this.isDarkMode = savedDarkMode;
    document.documentElement.classList.toggle('dark-theme', this.isDarkMode);
    
    // 暴露全局方法
    window.$app = {
      showToast: this.showToast,
      showLoading: this.showLoading,
      hideLoading: this.hideLoading
    };
  },
  beforeUnmount() {
    // 移除全局方法
    delete window.$app;
  }
}
</script>

<style>
/* 基础样式 */
:root {
  --primary-color: #6e8efb;
  --secondary-color: #a777e3;
  --accent-color: #ff7b00;
  --text-color: #2c3e50;
  --text-light: #6c7a89;
  --bg-color: #ffffff;
  --card-bg: #ffffff;
  --border-color: #e0e0e0;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --nav-height: 70px;
  --footer-bg: #f8f9fa;
  --transition-speed: 0.3s;
}

/* 深色主题变量 */
:root.dark-theme {
  --primary-color: #4d6fd6;
  --secondary-color: #9256c9;
  --accent-color: #ff9a3d;
  --text-color: #e0e0e0;
  --text-light: #b0b0b0;
  --bg-color: #121212;
  --card-bg: #1e1e1e;
  --border-color: #333333;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --footer-bg: #1a1a1a;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
  transition: background-color var(--transition-speed), color var(--transition-speed);
}

a {
  text-decoration: none;
  color: var(--primary-color);
  transition: color var(--transition-speed);
}

/* 导航栏样式 */
.nav {
  position: sticky;
  top: 0;
  background-color: var(--bg-color);
  box-shadow: 0 2px 10px var(--shadow-color);
  height: var(--nav-height);
  z-index: 100;
  transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
}

.nav-logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: var(--text-color);
  font-weight: 500;
  position: relative;
  padding: 8px 0;
}

.nav-link:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  transition: width 0.3s;
}

.nav-link:hover:after, .nav-link.router-link-active:after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.theme-toggle {
  display: flex;
  align-items: center;
}

.theme-button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.theme-button:hover {
  background-color: var(--border-color);
}

.theme-icon {
  fill: currentColor;
}

.theme-icon.light {
  display: none;
}

.theme-icon.dark {
  display: block;
}

:root.dark-theme .theme-icon.light {
  display: block;
}

:root.dark-theme .theme-icon.dark {
  display: none;
}

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--border-color);
  color: var(--text-color);
  transition: background-color 0.2s;
}

.user-avatar:hover {
  background-color: var(--primary-color);
  color: white;
}

/* 主内容区域样式 */
.main-content {
  min-height: calc(100vh - var(--nav-height) - 200px);
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 页脚样式 */
.footer {
  background-color: var(--footer-bg);
  padding: 40px 0 20px;
  transition: background-color var(--transition-speed);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--text-color);
}

.footer-section p, .footer-section a {
  color: var(--text-light);
  margin: 5px 0;
  display: block;
}

.footer-link {
  display: block;
  margin-bottom: 8px;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  color: var(--text-light);
}

/* 全局加载动画 */
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 消息提示样式 */
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.toast {
  background-color: #333;
  color: white;
  padding: 12px 20px;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s, transform 0.3s;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

.toast-info {
  background-color: #2196F3;
}

.toast-success {
  background-color: #4CAF50;
}

.toast-error {
  background-color: #F44336;
}

.toast-warning {
  background-color: #FF9800;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 30px;
  }
  
  .footer-section {
    min-width: 100%;
  }

  
}
</style> 