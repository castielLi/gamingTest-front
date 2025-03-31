<template>
  <div class="pricing-page">
    <!-- 保持与主页相同的导航按钮 -->
    <nav class="nav">
      <div class="nav-container">
        <router-link to="/login" class="user-avatar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10C12.21 10 14 8.21 14 6C14 3.79 12.21 2 10 2C7.79 2 6 3.79 6 6C6 8.21 7.79 10 10 10ZM10 12C7.33 12 2 13.34 2 16V18H18V16C18 13.34 12.67 12 10 12Z" fill="currentColor"/>
          </svg>
        </router-link>
      </div>
    </nav>

    <!-- 定价页面标题 -->
    <header class="pricing-header">
      <h1 class="pricing-title">选择您的会员方案</h1>
      <p class="pricing-subtitle">解锁全部测试功能，获取专业分析报告</p>
    </header>

    <!-- 定价方案切换 -->
    <div class="pricing-toggle">
      <span class="toggle-label">按月付费</span>
      <label class="toggle-switch">
        <input type="checkbox" v-model="yearlyBilling">
        <span class="toggle-slider"></span>
      </label>
      <span class="toggle-label">按年付费</span>
      <span class="save-badge">省20%</span>
    </div>

    <!-- 定价卡片容器 -->
    <section class="pricing-grid">
      <!-- 基础版 -->
      <div class="pricing-card">
        <div class="card-header">
          <h3 class="plan-name">基础版</h3>
          <div class="plan-price">
            <span class="price-amount">¥{{ yearlyBilling ? '23' : '29' }}</span>
            <span class="price-period">/{{ yearlyBilling ? '月 (年付)' : '月' }}</span>
          </div>
          <p class="plan-description">适合个人体验使用</p>
        </div>
        <div class="card-features">
          <ul class="feature-list">
            <li v-for="(feature, index) in basicFeatures" :key="'basic-'+index">
              <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
        <button class="plan-button" @click="selectPlan('basic')">开始体验</button>
      </div>

      <!-- 专业版 -->
      <div class="pricing-card featured">
        <!-- <div class="featured-badge">推荐</div> -->
        <div class="card-header">
          <h3 class="plan-name">专业版</h3>
          <div class="plan-price">
            <span class="price-amount">¥{{ yearlyBilling ? '55' : '69' }}</span>
            <span class="price-period">/{{ yearlyBilling ? '月 (年付)' : '月' }}</span>
          </div>
          <p class="plan-description">适合深度学习提升</p>
        </div>
        <div class="card-features">
          <ul class="feature-list">
            <li v-for="(feature, index) in proFeatures" :key="'pro-'+index">
              <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
        <button class="plan-button featured" @click="selectPlan('pro')">立即升级</button>
      </div>

      <!-- 团队版 -->
      <div class="pricing-card">
        <div class="card-header">
          <h3 class="plan-name">团队版</h3>
          <div class="plan-price">
            <span class="price-amount">¥{{ yearlyBilling ? '239' : '299' }}</span>
            <span class="price-period">/{{ yearlyBilling ? '月 (年付)' : '月' }}</span>
          </div>
          <p class="plan-description">适合战队集体训练</p>
        </div>
        <div class="card-features">
          <ul class="feature-list">
            <li v-for="(feature, index) in teamFeatures" :key="'team-'+index">
              <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
        <button class="plan-button" @click="selectPlan('team')">联系我们</button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'PricingPage',
  setup() {
    const router = useRouter()
    const yearlyBilling = ref(false)
    
    // 各版本特性列表
    const basicFeatures = [
      '基础能力测试',
      '基础数据分析',
      '每月5次测试机会'
    ]
    
    const proFeatures = [
      '全部测试项目',
      '专业数据分析',
      '无限次测试机会',
      '个性化提升建议',
      '优先客服支持'
    ]
    
    const teamFeatures = [
      '专业版全部功能',
      '最多10人账号',
      '团队数据分析',
      '专属客户经理'
    ]
    
    // 选择套餐方法
    const selectPlan = (plan) => {
      console.log(`已选择 ${plan} 套餐`)
      
      // 根据套餐类型跳转到不同页面
      if (plan === 'basic') {
        router.push('/maintest')
      } else if (plan === 'pro') {
        router.push('/payment?plan=pro&billing=' + (yearlyBilling.value ? 'yearly' : 'monthly'))
      } else if (plan === 'team') {
        router.push('/contact?plan=team')
      }
    }
    
    return {
      yearlyBilling,
      basicFeatures,
      proFeatures,
      teamFeatures,
      selectPlan
    }
  }
}
</script>

<style scoped>
/* 全局风格变量 - 匹配 homePage.vue 的 Leonardo.ai 风格 */
:root {
  /* Leonardo.ai 精确匹配的配色系统 */
  --primary-bg: #070A19; /* 深色背景色 */
  --secondary-bg: #0C1128; /* 次级背景色 */
  --tertiary-bg: #111A40; /* 三级背景色 */
  
  --accent-blue: #2C5AFF; /* 蓝色强调色 */
  --accent-blue-light: #37B9F1; /* 浅蓝色强调色 */
  --accent-purple: #7A2BF6; /* 紫色强调色 */
  --accent-pink: #DA21C2; /* 粉色强调色 */
  
  --primary-gradient: linear-gradient(90deg, #2C5AFF, #7A2BF6); /* 主要渐变 */
  --secondary-gradient: linear-gradient(90deg, #37B9F1, #DA21C2); /* 次要渐变 */
  --glow-effect: 0 0 20px rgba(124, 58, 237, 0.5); /* 发光效果 */
  
  --text-color: #FFFFFF; /* 主文本色 */
  --text-muted: rgba(255, 255, 255, 0.6); /* 次要文本色 */
  --border-light: rgba(255, 255, 255, 0.08); /* 浅色边框 */
  --glass-bg: rgba(10, 14, 33, 0.75); /* 磨砂玻璃背景 */
  --nav-height: 70px; /* 导航栏高度 */
}

/* 整体页面样式 */
.pricing-page {
  min-height: 100vh;
  background-color: var(--primary-bg);
  color: var(--text-color);
  overflow-x: hidden;
  background-image: 
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%232C5AFF' fill-opacity='0.05'/%3E%3C/svg%3E"),
    linear-gradient(to bottom, var(--primary-bg), var(--secondary-bg));
}

/* 全局背景效果 */
.pricing-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 10% 10%, rgba(44, 90, 255, 0.08), transparent 30%),
    radial-gradient(circle at 90% 90%, rgba(122, 43, 246, 0.08), transparent 30%),
    radial-gradient(circle at 50% 50%, rgba(218, 33, 194, 0.05), transparent 50%);
  pointer-events: none;
  z-index: -1;
}

/* 导航样式 - 匹配 homePage.vue */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(7, 10, 25, 0.85);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid var(--border-light);
  display: flex;
  align-items: center;
}

.nav-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 0 30px;
}

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
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
}

.user-avatar:hover::before {
  opacity: 0.2;
}

.user-avatar:hover {
  box-shadow: var(--glow-effect);
  transform: translateY(-2px);
}

.user-avatar svg {
  position: relative;
  z-index: 1;
}

/* 定价页面标题样式 */
.pricing-header {
  text-align: center;
  padding: calc(var(--nav-height) + 50px) 20px 60px;
  position: relative;
  overflow: hidden;
}

.pricing-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center top, rgba(44, 90, 255, 0.1), transparent 70%);
  z-index: -1;
}

.pricing-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 20px;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
}

.pricing-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--primary-gradient);
  border-radius: 3px;
}

.pricing-subtitle {
  font-size: 20px;
  color: var(--text-muted);
  max-width: 600px;
  margin: 20px auto 0;
}

/* 定价切换 */
.pricing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  padding: 12px 20px;
  background: rgba(10, 14, 33, 0.4);
  border-radius: 30px;
  border: 1px solid var(--border-light);
  width: fit-content;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.pricing-toggle::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(44, 90, 255, 0.05), transparent);
  border-radius: 30px;
  z-index: -1;
}

.toggle-label {
  margin: 0 12px;
  font-size: 16px;
  color: var(--text-muted);
  transition: color 0.3s;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  transition: 0.4s;
  border-radius: 24px;
  overflow: hidden;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
  z-index: 2;
}

.toggle-slider::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  opacity: 0;
  transition: opacity 0.4s;
  z-index: 1;
}

input:checked + .toggle-slider::after {
  opacity: 1;
}

input:checked + .toggle-slider:before {
  transform: translateX(26px);
}

.save-badge {
  background: var(--secondary-gradient);
  color: white;
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 20px;
  margin-left: 15px;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(55, 185, 241, 0.3);
  position: relative;
  overflow: hidden;
}

.save-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}

/* 定价卡片容器 */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 30px;
  position: relative;
  z-index: 1;
}

.pricing-card {
  background: rgba(17, 26, 64, 0.4);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-light);
  transition: transform 0.4s, box-shadow 0.4s;
  position: relative;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(44, 90, 255, 0.1), transparent 70%);
  z-index: -1;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.pricing-card.featured {
  background: rgba(18, 27, 65, 0.6);
  border: 1px solid rgba(44, 90, 255, 0.3);
  box-shadow: 0 15px 40px rgba(44, 90, 255, 0.2);
  position: relative;
  z-index: 2;
  margin-top: 12px;
  padding-top: 5px;
}

.pricing-card.featured::before {
  background: radial-gradient(circle at top right, rgba(122, 43, 246, 0.15), transparent 70%);
}

.featured-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: var(--primary-gradient);
  color: white;
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(44, 90, 255, 0.3);
  z-index: 3;
  transform: translateY(0);
  white-space: nowrap;
  height: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.card-header {
  padding: 40px 30px 25px;
  text-align: center;
  position: relative;
}

.plan-name {
  font-size: 24px;
  margin: 0 0 20px;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.pricing-card.featured .plan-name {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.plan-price {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 10px;
  line-height: 1.2;
}

.price-amount {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.pricing-card.featured .price-amount {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(55, 185, 241, 0.2);
}

.price-period {
  font-size: 16px;
  color: var(--text-muted);
  font-weight: 400;
}

.plan-description {
  color: var(--text-muted);
  font-size: 16px;
  margin-top: 15px;
}

.card-features {
  padding: 20px 30px 40px;
  flex-grow: 1;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  display: flex;
  align-items: center;
  color: var(--text-color);
  margin-bottom: 15px;
  font-size: 16px;
  position: relative;
  padding-left: 5px;
}

.feature-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 2px;
  background: var(--accent-blue-light);
  opacity: 0;
  transition: all 0.3s;
}

.pricing-card:hover .feature-list li::before {
  width: 3px;
  opacity: 0.7;
  transform: translateY(-50%);
}

.feature-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  color: var(--accent-blue);
  flex-shrink: 0;
}

.pricing-card.featured .feature-icon {
  color: var(--accent-pink);
}

.plan-button {
  width: calc(100% - 60px);
  margin: 0 30px 30px;
  padding: 15px 0;
  border: none;
  border-radius: 30px;
  background: rgba(44, 90, 255, 0.15);
  color: var(--text-color);
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.plan-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
}

.plan-button:hover {
  background: rgba(44, 90, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(44, 90, 255, 0.2);
}

.plan-button:hover::before {
  animation: btnShimmer 1.5s infinite;
}

@keyframes btnShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.plan-button.featured {
  background: var(--primary-gradient);
  box-shadow: 0 5px 20px rgba(44, 90, 255, 0.3);
}

.plan-button.featured:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(44, 90, 255, 0.5);
}

/* 响应式调整 */
@media (max-width: 992px) {
  .pricing-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .pricing-title {
    font-size: 36px;
  }
  
  .pricing-subtitle {
    font-size: 18px;
  }
  
  .pricing-header {
    padding-top: calc(var(--nav-height) + 30px);
  }
  
  .card-header {
    padding: 30px 20px 20px;
  }
  
  .card-features {
    padding: 15px 20px 30px;
  }
  
  .plan-button {
    width: calc(100% - 40px);
    margin: 0 20px 20px;
  }
  
  .featured-badge {
    top: -10px;
    right: 15px;
    font-size: 12px;
    padding: 4px 12px;
  }
  
  .pricing-card.featured {
    margin-top: 10px;
  }
  
  .pricing-card.featured .card-header {
    padding-top: 30px;
  }
}

@media (max-width: 480px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 360px;
  }
  
  .pricing-title {
    font-size: 30px;
  }
  
  .pricing-toggle {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .save-badge {
    margin-top: 10px;
  }
  
  .toggle-label {
    font-size: 14px;
  }
}

@media (max-width: 375px) {
  .featured-badge {
    right: 10px;
    font-size: 11px;
    padding: 3px 10px;
  }
}
</style> 