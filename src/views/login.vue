<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-logo">
        <div class="logo-icon"></div>
        <div class="logo-text">E-Sports Talent</div>
      </div>
      
      <h1 class="login-title">欢迎登录</h1>
      <p class="login-subtitle">扫描二维码，开启您的能力测试之旅</p>
      
      <div class="qr-container">
        <div class="qr-code" :class="{ 'scanning': isScanning }">
          <!-- 二维码图像占位符，实际项目中替换为真实二维码 -->
          <div class="qr-placeholder">
            <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10H40V40H10V10ZM15 15V35H35V15H15Z" fill="currentColor"/>
              <path d="M20 20H30V30H20V20Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M60 10H90V40H60V10ZM65 15V35H85V15H65Z" fill="currentColor"/>
              <path d="M70 20H80V30H70V20Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 60H40V90H10V60ZM15 65V85H35V65H15Z" fill="currentColor"/>
              <path d="M20 70H30V80H20V70Z" fill="currentColor"/>
              <path d="M60 60H70V70H60V60Z" fill="currentColor"/>
              <path d="M70 60H80V70H70V60Z" fill="currentColor"/>
              <path d="M80 60H90V70H80V60Z" fill="currentColor"/>
              <path d="M60 70H70V80H60V70Z" fill="currentColor"/>
              <path d="M80 70H90V80H80V70Z" fill="currentColor"/>
              <path d="M60 80H70V90H60V80Z" fill="currentColor"/>
              <path d="M70 80H80V90H70V80Z" fill="currentColor"/>
              <path d="M80 80H90V90H80V80Z" fill="currentColor"/>
              <path d="M45 10H55V15H45V10Z" fill="currentColor"/>
              <path d="M45 15H50V20H45V15Z" fill="currentColor"/>
              <path d="M45 20H50V25H45V20Z" fill="currentColor"/>
              <path d="M45 25H50V30H45V25Z" fill="currentColor"/>
              <path d="M45 30H50V35H45V30Z" fill="currentColor"/>
              <path d="M45 35H55V40H45V35Z" fill="currentColor"/>
              <path d="M10 45H15V55H10V45Z" fill="currentColor"/>
              <path d="M15 45H20V50H15V45Z" fill="currentColor"/>
              <path d="M20 45H25V50H20V45Z" fill="currentColor"/>
              <path d="M25 45H30V50H25V45Z" fill="currentColor"/>
              <path d="M30 45H35V50H30V45Z" fill="currentColor"/>
              <path d="M35 45H40V55H35V45Z" fill="currentColor"/>
              <path d="M85 45H90V55H85V45Z" fill="currentColor"/>
              <path d="M80 45H85V50H80V45Z" fill="currentColor"/>
              <path d="M75 45H80V50H75V45Z" fill="currentColor"/>
              <path d="M70 45H75V50H70V45Z" fill="currentColor"/>
              <path d="M65 45H70V50H65V45Z" fill="currentColor"/>
              <path d="M60 45H65V55H60V45Z" fill="currentColor"/>
              <path d="M45 45H55V50H45V45Z" fill="currentColor"/>
              <path d="M45 50H50V55H45V50Z" fill="currentColor"/>
              <path d="M50 55H55V60H50V55Z" fill="currentColor"/>
              <path d="M45 60H50V65H45V60Z" fill="currentColor"/>
              <path d="M50 65H55V70H50V65Z" fill="currentColor"/>
              <path d="M45 70H50V75H45V70Z" fill="currentColor"/>
              <path d="M50 75H55V80H50V75Z" fill="currentColor"/>
              <path d="M45 80H50V85H45V80Z" fill="currentColor"/>
              <path d="M45 85H55V90H45V85Z" fill="currentColor"/>
            </svg>
          </div>
          <div class="qr-scanner"></div>
        </div>
        <div class="qr-status">{{ qrStatus }}</div>
      </div>
      
      <div class="login-help">
        <p>打开微信 <i class="wechat-icon"></i> 扫一扫登录</p>
        <button class="refresh-btn" @click="refreshQR">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="currentColor"/>
          </svg>
          刷新二维码
        </button>
      </div>
      
      <div class="login-footer">
        <a href="/" class="back-to-home" @click.prevent="goToHome">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      isScanning: false,
      qrStatus: '等待扫码',
      loginTimer: null
    }
  },
  mounted() {
    // 检查用户是否已登录，如果已登录则跳转到测试页面
    const isLoggedIn = localStorage.getItem('esLoggedIn') === 'true';
    if (isLoggedIn) {
      this.$router.push('/maintest');
      return;
    }
    
    // 模拟二维码刷新周期
    this.refreshQR();
  },
  beforeUnmount() {
    if (this.loginTimer) {
      clearTimeout(this.loginTimer);
    }
  },
  methods: {
    refreshQR() {
      // 重置状态
      this.isScanning = false;
      this.qrStatus = '等待扫码';
      
      // 清除之前的定时器
      if (this.loginTimer) {
        clearTimeout(this.loginTimer);
      }
      
      // 模拟二维码刷新
      console.log('二维码已刷新');
      
      // 模拟扫码过程 (实际项目中应使用WebSocket或轮询API)
      setTimeout(() => {
        this.isScanning = true;
        this.qrStatus = '扫描成功，请在微信上确认';
        
        // 模拟登录成功
        this.loginTimer = setTimeout(() => {
          this.qrStatus = '登录成功，正在跳转...';
          
          // 保存用户信息并更新全局状态
          this.saveUserInfo();
        }, 2000);
      }, 3000);
    },
    saveUserInfo() {
      // 模拟用户信息
      const userInfo = {
        id: 'user123',
        name: '张三',
        email: 'zhangsan@example.com',
        avatar: '',
        membership: {
          level: 'pro',
          expiryDate: '2023-12-31'
        }
      };
      
      // 先保存用户信息
      localStorage.setItem('esUserInfo', JSON.stringify(userInfo));
      localStorage.setItem('esLoggedIn', 'true');
      
      // 确保全局状态更新
      if (window.$app && window.$app.updateLoginStatus) {
        window.$app.updateLoginStatus();
        console.log('更新登录状态'); // 调试日志
      }
      
      // 延迟跳转，确保状态更新完成
      setTimeout(() => {
        this.$router.push('/maintest');
      }, 300);
    },
    goToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color-primary);
  background-image: 
    radial-gradient(circle at top right, rgba(44, 90, 255, 0.1), transparent 400px),
    radial-gradient(circle at bottom left, rgba(122, 43, 246, 0.1), transparent 400px);
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 400px;
  background: rgba(17, 26, 64, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

.login-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    rgba(44, 90, 255, 0),
    rgba(44, 90, 255, 0.8) 20%, 
    rgba(122, 43, 246, 0.8) 80%,
    rgba(122, 43, 246, 0));
  z-index: 1;
}

.login-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: var(--primary-gradient);
  border-radius: 8px;
  position: relative;
  transform: rotate(45deg);
  margin-right: 15px;
}

.logo-icon::before,
.logo-icon::after {
  content: '';
  position: absolute;
  background: var(--bg-color-tertiary);
}

.logo-icon::before {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  top: 9px;
  left: 9px;
}

.logo-icon::after {
  width: 18px;
  height: 3px;
  top: 14px;
  left: 7px;
  transform: rotate(-45deg);
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}

.login-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #fff;
}

.login-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
}

.qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.qr-code {
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.qr-placeholder {
  color: #333;
}

.qr-scanner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(44, 90, 255, 0.8);
  box-shadow: 0 0 10px rgba(44, 90, 255, 0.5);
  border-radius: 3px;
  opacity: 0;
  transform: translateY(-10px);
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s;
}

.qr-code.scanning .qr-scanner {
  opacity: 1;
  animation: scanning 2s ease-in-out infinite;
}

@keyframes scanning {
  0% { transform: translateY(10px); }
  50% { transform: translateY(180px); }
  100% { transform: translateY(10px); }
}

.qr-status {
  font-size: 16px;
  font-weight: 500;
  color: var(--accent-blue-light);
  height: 24px;
}

.login-help {
  margin-bottom: 30px;
}

.login-help p {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
}

.wechat-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #2BAD13;
  border-radius: 4px;
  margin: 0 5px;
  position: relative;
}

.wechat-icon::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 10px;
  border: 2px solid white;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  top: 3px;
  left: 3px;
}

.refresh-btn {
  background: transparent;
  border: none;
  color: var(--accent-blue-light);
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 20px;
  transition: all 0.3s;
}

.refresh-btn svg {
  margin-right: 5px;
}

.refresh-btn:hover {
  background: rgba(44, 90, 255, 0.1);
  transform: translateY(-2px);
}

.login-options {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.other-methods {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.other-methods::before,
.other-methods::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 50px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.other-methods::before {
  right: 100%;
  margin-right: 15px;
}

.other-methods::after {
  left: 100%;
  margin-left: 15px;
}

.options-list {
  display: flex;
  gap: 20px;
}

.option-btn {
  background: rgba(44, 90, 255, 0.1);
  border: 1px solid rgba(44, 90, 255, 0.3);
  border-radius: 50px;
  padding: 10px 20px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s;
}

.option-btn svg {
  margin-right: 8px;
}

.option-btn:hover {
  background: rgba(44, 90, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(44, 90, 255, 0.2);
}

.login-footer {
  margin-top: 20px;
}

.back-to-home {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 14px;
}

.back-to-home:hover {
  color: var(--accent-blue-light);
}

/* 响应式调整 */
@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }
  
  .qr-code {
    width: 180px;
    height: 180px;
  }
  
  .options-list {
    flex-direction: column;
    gap: 10px;
  }
  
  .option-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
