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
        <div class="featured-badge">推荐</div>
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
/* 导航样式 */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(18, 18, 24, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
  padding: 15px 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
}

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: background-color 0.3s;
}

.user-avatar:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 定价页面标题样式 */
.pricing-header {
  text-align: center;
  padding: 120px 20px 60px;
  background: linear-gradient(180deg, #121218 0%, #1a1a24 100%);
  color: white;
}

.pricing-title {
  font-size: 2.5rem;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #f0f0f0, #ffffff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
}

.pricing-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

/* 定价切换 */
.pricing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  color: white;
}

.toggle-label {
  margin: 0 12px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
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
  background-color: rgba(255, 255, 255, 0.2);
  transition: .4s;
  border-radius: 24px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #738adb;
}

input:checked + .toggle-slider:before {
  transform: translateX(26px);
}

.save-badge {
  background-color: #738adb;
  color: white;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 12px;
  margin-left: 10px;
}

/* 定价卡片容器 */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 0 20px;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.pricing-card.featured {
  background: linear-gradient(135deg, rgba(85, 103, 201, 0.2), rgba(115, 138, 219, 0.1));
  border: 1px solid rgba(115, 138, 219, 0.4);
  box-shadow: 0 8px 20px rgba(85, 103, 201, 0.25);
}

.featured-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #738adb;
  color: white;
  font-size: 0.8rem;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
}

.card-header {
  padding: 30px 25px 20px;
  text-align: center;
  color: white;
}

.plan-name {
  font-size: 1.5rem;
  margin: 0 0 15px;
}

.plan-price {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.price-amount {
  color: #738adb;
}

.price-period {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
}

.plan-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 10px;
}

.card-features {
  padding: 20px 25px 30px;
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
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.feature-icon {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  color: #738adb;
  flex-shrink: 0;
}

.plan-button {
  width: calc(100% - 50px);
  margin: 0 25px 25px;
  padding: 12px 0;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.plan-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.plan-button.featured {
  background: linear-gradient(90deg, #5567c9, #738adb);
}

.plan-button.featured:hover {
  background: linear-gradient(90deg, #495ab5, #6279c9);
}

/* 整体页面样式 */
.pricing-page {
  min-height: 100vh;
  background-color: #121218;
  color: white;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
  
  .pricing-title {
    font-size: 2rem;
  }
  
  .pricing-subtitle {
    font-size: 1rem;
  }
}
</style> 