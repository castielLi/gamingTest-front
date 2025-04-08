<template>
  <div class="main-test-container">
    <!-- 页面标题区域 -->
    <div class="page-header">
      <h1>能力测评中心</h1>
      <p class="page-description">完成下方游戏以测试和提升您的电竞技能</p>
    </div>

    <!-- 个人信息卡片 -->
    <div class="user-profile-card">
      <div class="profile-header">
        <div class="avatar-section">
          <div class="user-avatar" v-if="!userInfo.avatar">
            {{ userInitial }}
          </div>
          <img v-else :src="userInfo.avatar" alt="User Avatar" class="user-avatar-img">
        </div>
        <div class="user-info-section">
          <h2 class="user-name">{{ userInfo.name || '用户' }}</h2>
          <p class="user-email">{{ userInfo.email || 'user@example.com' }}</p>
          
          <div class="membership-container">
            <div class="membership-badge" v-if="userInfo.membership" @click="toggleMembershipDetails">
              <span class="badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              {{ userInfo.membership && userInfo.membership.level === 'pro' ? '专业版' : '基础版' }} 会员
              <svg class="dropdown-icon" :class="{ 'is-open': showMembershipDetails }" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="membership-details" v-show="showMembershipDetails">
              <div class="benefits-title">会员权益</div>
              <ul class="benefits-list">
                <li v-for="(benefit, index) in currentMembershipBenefits" :key="index">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 替换原先的统计面板为会员状态区域 -->
      <div class="membership-status">
        <div class="status-icon" :class="{ 'pro-status': userInfo.membership && userInfo.membership.level === 'pro' }">
          <svg v-if="userInfo.membership && userInfo.membership.level === 'pro'" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="status-info">
          <div class="status-title">测试权限</div>
          <div class="status-value" v-if="userInfo.membership && userInfo.membership.level === 'pro'">
            您可以无限制地使用所有测试功能
          </div>
          <div v-else>
            <div class="status-value">
              基础版用户每月可进行 5 次测试
            </div>
            <div class="test-usage">
              <div class="test-progress-container">
                <div class="test-progress-bar" :style="{ width: usedTestPercentage + '%' }"></div>
                <div class="test-progress-label">{{ usedTests }} / 5</div>
              </div>
              <div class="test-remaining-text">
                <span v-if="remainingTests > 0">本月还剩 {{ remainingTests }} 次测试机会</span>
                <span v-else class="test-depleted">本月测试次数已用完</span>
              </div>
            </div>
          </div>
        </div>
        <router-link v-if="!userInfo.membership || userInfo.membership.level !== 'pro'" to="/pricing" class="upgrade-button">
          升级会员
        </router-link>
      </div>
    </div>

    <!-- 测试类型选择器 -->
    <div class="test-categories">
      <div class="category-tabs">
        <button 
          v-for="category in categories" 
          :key="category.id"
          :class="['category-tab', { active: activeCategory === category.id }]"
          @click="setActiveCategory(category.id)"
        >
          <span class="tab-icon" v-html="category.icon"></span>
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- 测试游戏列表部分 -->
    <div class="games-section">
      <h2 class="section-title">可用的测试游戏</h2>
      
      <!-- 反应速度游戏列表 -->
      <div class="games-grid" v-if="activeCategory === 'reaction'">
        <div class="game-card">
          <div class="game-image-container">
            <div class="game-image reaction-game"></div>
            <div class="game-badge">反应速度</div>
          </div>
          <div class="game-details">
            <div class="game-header">
              <h3 class="game-title">反应点击</h3>
              <div class="game-difficulty">
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot"></span>
              </div>
            </div>
            <p class="game-description">测试您对视觉刺激的反应速度，训练快速动作能力</p>
            <div class="game-stats">
              <div class="stat">
                <span class="stat-name">最佳成绩</span>
                <span class="stat-value-sm">210ms</span>
              </div>
              <div class="stat">
                <span class="stat-name">测试次数</span>
                <span class="stat-value-sm">16</span>
              </div>
            </div>
            <a href="/games/reactiontest/index.html" target="_blank" class="game-button">
              开始测试
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="game-card">
          <div class="game-image-container">
            <div class="game-image fly-game"></div>
            <div class="game-badge">反应速度</div>
          </div>
          <div class="game-details">
            <div class="game-header">
              <h3 class="game-title">飞行挑战</h3>
              <div class="game-difficulty">
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot active"></span>
              </div>
            </div>
            <p class="game-description">测试您控制飞行物体的反应能力和运动预判能力</p>
            <div class="game-stats">
              <div class="stat">
                <span class="stat-name">最佳成绩</span>
                <span class="stat-value-sm">189秒</span>
              </div>
              <div class="stat">
                <span class="stat-name">测试次数</span>
                <span class="stat-value-sm">8</span>
              </div>
            </div>
            <a href="/games/flygame/index.html" target="_blank" class="game-button">
              开始测试
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- 精确度游戏列表 -->
      <div class="games-grid" v-if="activeCategory === 'precision'">
        <div class="game-card">
          <div class="game-image-container">
            <div class="game-image precision-game"></div>
            <div class="game-badge">精确度</div>
          </div>
          <div class="game-details">
            <div class="game-header">
              <h3 class="game-title">射击挑战</h3>
              <div class="game-difficulty">
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot active"></span>
              </div>
            </div>
            <p class="game-description">测试您的鼠标精确控制能力和目标追踪能力</p>
            <div class="game-stats">
              <div class="stat">
                <span class="stat-name">最佳成绩</span>
                <span class="stat-value-sm">92%</span>
              </div>
              <div class="stat">
                <span class="stat-name">测试次数</span>
                <span class="stat-value-sm">12</span>
              </div>
            </div>
            <a href="/games/shootgame/index.html" target="_blank" class="game-button">
              开始测试
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- 记忆力游戏列表 -->
      <div class="games-grid" v-if="activeCategory === 'memory'">
        <div class="game-card">
          <div class="game-image-container">
            <div class="game-image memory-game"></div>
            <div class="game-badge">记忆力</div>
          </div>
          <div class="game-details">
            <div class="game-header">
              <h3 class="game-title">图形记忆</h3>
              <div class="game-difficulty">
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot"></span>
              </div>
            </div>
            <p class="game-description">测试您的视觉记忆能力，提高短期记忆存储和提取效率</p>
          <div class="game-stats">
              <div class="stat">
                <span class="stat-name">最佳成绩</span>
                <span class="stat-value-sm">7级</span>
              </div>
              <div class="stat">
                <span class="stat-name">测试次数</span>
                <span class="stat-value-sm">23</span>
              </div>
            </div>
            <a href="/games/matchgame/index.html" target="_blank" class="game-button">
              开始测试
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- 添加还原游戏到记忆力分类 -->
        <div class="game-card">
          <div class="game-image-container">
            <div class="game-image strategy-game"></div>
            <div class="game-badge">记忆力</div>
          </div>
          <div class="game-details">
            <div class="game-header">
              <h3 class="game-title">还原游戏</h3>
              <div class="game-difficulty">
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot active"></span>
              </div>
            </div>
            <p class="game-description">测试您的空间记忆能力和图形还原能力，训练记忆细节的精确性</p>
            <div class="game-stats">
              <div class="stat">
                <span class="stat-name">最佳成绩</span>
                <span class="stat-value-sm">4分30秒</span>
              </div>
              <div class="stat">
                <span class="stat-name">测试次数</span>
                <span class="stat-value-sm">9</span>
              </div>
            </div>
            <a href="/games/reductiongame/index.html" target="_blank" class="game-button">
              开始测试
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- 策略思维游戏列表 -->
      <div class="games-grid" v-if="activeCategory === 'strategy'">
        <div class="game-card">
          <div class="game-image-container">
            <div class="game-image brain-game"></div>
            <div class="game-badge">策略思维</div>
          </div>
          <div class="game-details">
            <div class="game-header">
              <h3 class="game-title">颜色反应挑战</h3>
              <div class="game-difficulty">
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot active"></span>
                <span class="difficulty-dot active"></span>
              </div>
            </div>
            <p class="game-description">测试您的策略思考能力，在限定时间内分析和判断出现次数最少的颜色</p>
            <div class="game-stats">
              <div class="stat">
                <span class="stat-name">最佳成绩</span>
                <span class="stat-value-sm">3-2</span>
              </div>
              <div class="stat">
                <span class="stat-name">测试次数</span>
                <span class="stat-value-sm">7</span>
              </div>
            </div>
            <a href="/games/braingame/index.html" target="_blank" class="game-button">
              开始测试
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 建议提示区域 -->
    <div class="tips-section">
      <div class="tips-header">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
          <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
        </svg>
        <h3>测试小贴士</h3>
      </div>
      <ul class="tips-list">
        <li>测试前调整好座椅高度和屏幕位置，保持舒适的姿势</li>
        <li>确保环境光线适中，避免屏幕反光影响测试结果</li>
        <li>每个测试完成后可以短暂休息，避免眼睛和手部疲劳</li>
        <li>定期测试并记录结果，可以更好地追踪能力提升情况</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { membershipBenefits } from '@/config/membershipConfig'

export default {
  name: 'mainTest',
  data() {
    return {
      userInfo: {},
      activeCategory: 'reaction',
      showMembershipDetails: false,
      categories: [
      {
        id: 'reaction',
          name: '反应速度',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        },
        {
          id: 'precision',
          name: '精确度',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      },
      {
        id: 'memory',
          name: '记忆力',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 16.5V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15C13 13.8954 13.8954 13 15 13H17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      },
      {
        id: 'strategy',
          name: '策略思维',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L19.1924 6.5V15.5L12 20L4.80764 15.5V6.5L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }
      ]
    }
  },
  computed: {
    userInitial() {
      if (this.userInfo && this.userInfo.name) {
        return this.userInfo.name.charAt(0).toUpperCase();
      }
      return 'U';
    },
    currentMembershipBenefits() {
      const level = this.userInfo.membership?.level || 'basic';
      return membershipBenefits[level];
    },
    usedTests() {
      return this.userInfo.usedTests || 2;
    },
    remainingTests() {
      const monthlyLimit = 5;
      return Math.max(0, monthlyLimit - this.usedTests);
    },
    usedTestPercentage() {
      return Math.min(100, (this.usedTests / 5) * 100);
    }
  },
  methods: {
    loadUserInfo() {
      try {
        const userInfoStr = localStorage.getItem('esUserInfo');
        if (userInfoStr) {
          this.userInfo = JSON.parse(userInfoStr);
          
          // 如果用户信息中没有测试次数数据，则初始化它
          if (this.userInfo.membership && this.userInfo.membership.level !== 'pro' && !this.userInfo.usedTests) {
            // 实际项目中应从API获取真实数据
            this.userInfo.usedTests = Math.floor(Math.random() * 4) + 1; // 随机1-4次
          }
        } else {
          console.error('无法找到用户信息');
          this.$router.push('/login');
        }
      } catch (error) {
        console.error('解析用户信息失败:', error);
        this.$router.push('/login');
      }
    },
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
    },
    toggleMembershipDetails() {
      this.showMembershipDetails = !this.showMembershipDetails;
    }
  },
  mounted() {
    this.loadUserInfo();
  }
}
</script>

<style scoped>
.main-test-container {
  max-width: 1000px;
  margin: 40px auto 0;
  padding: 0 20px;
}

/* 页面标题样式 */
.page-header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #2C5AFF, #7A2BF6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  position: relative;
}

.page-header h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #2C5AFF, #7A2BF6);
  border-radius: 2px;
}

.page-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 20px auto 0;
}

/* 用户资料卡片样式 */
.user-profile-card {
  background: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px;
  margin-bottom: 40px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
}

.user-profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3f87ff, #6f42c1);
  border-radius: 12px 12px 0 0;
}

.profile-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
}

.avatar-section {
  margin-right: 20px;
  flex-shrink: 0;
}

.user-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3f87ff, #6f42c1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 600;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 12px rgba(63, 135, 255, 0.25);
}

.user-avatar-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 12px rgba(63, 135, 255, 0.25);
}

.user-info-section {
  flex: 1;
}

.user-name {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
}

.user-email {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-bottom: 12px;
}

.membership-container {
  position: relative;
}

.membership-badge {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(90deg, rgba(255, 193, 7, 0.15), rgba(255, 152, 0, 0.15));
  color: #FFC107;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(255, 193, 7, 0.25);
  cursor: pointer;
  transition: all 0.2s ease;
}

.membership-badge:hover {
  background: linear-gradient(90deg, rgba(255, 193, 7, 0.25), rgba(255, 152, 0, 0.25));
  border-color: rgba(255, 193, 7, 0.4);
}

.badge-icon {
  margin-right: 6px;
  display: flex;
  align-items: center;
}

.dropdown-icon {
  margin-left: 8px;
  transition: transform 0.2s ease;
}

.dropdown-icon.is-open {
  transform: rotate(180deg);
}

.membership-details {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 240px;
  background: rgba(23, 32, 50, 0.95);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  padding: 16px;
  z-index: 10;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.benefits-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits-list li {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  padding: 6px 0;
}

.benefits-list svg {
  margin-right: 8px;
  flex-shrink: 0;
  color: #4CAF50;
}

.membership-status {
  display: flex;
  align-items: center;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.status-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background: rgba(63, 135, 255, 0.15);
  color: #3f87ff;
  flex-shrink: 0;
}

.status-icon.pro-status {
  background: rgba(76, 175, 80, 0.15);
  color: #4CAF50;
}

.status-info {
  flex: 1;
}

.status-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.9);
}

.status-value {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.upgrade-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 20px;
  background: linear-gradient(90deg, #3f87ff, #6f42c1);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s;
  border: none;
  margin-left: 16px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(63, 135, 255, 0.25);
}

.upgrade-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(63, 135, 255, 0.35);
}

/* 测试类型选择器样式 */
.test-categories {
  margin-bottom: 40px;
}

.category-tabs {
  display: flex;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(12, 17, 40, 0.3);
  overflow: hidden;
}

.category-tab {
  flex: 1;
  padding: 16px 10px;
  text-align: center;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;
  position: relative;
}

.category-tab::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #37B9F1, #DA21C2);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.category-tab:hover {
  color: var(--text-color);
  background: rgba(255, 255, 255, 0.03);
}

.category-tab.active {
  color: var(--text-color);
  background: rgba(255, 255, 255, 0.05);
}

.category-tab.active::after {
  transform: scaleX(1);
}

.tab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .avatar-section {
    margin-right: 0;
  margin-bottom: 16px;
  }
  
  .user-info-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .membership-details {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .membership-status {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .status-icon {
    margin-bottom: 12px;
  }
  
  .upgrade-button {
    margin-left: 0;
    margin-top: 16px;
    width: 100%;
  }
}

/* 游戏区域样式 */
.section-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #37B9F1, #DA21C2);
  border-radius: 2px;
}

.games-section {
  margin-bottom: 60px;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.game-card {
  background: rgba(17, 26, 64, 0.5);
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.12);
}

.game-image-container {
  height: 160px;
  position: relative;
  overflow: hidden;
}

.game-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.game-card:hover .game-image {
  transform: scale(1.05);
}

.game-image.reaction-game {
  background-image: linear-gradient(135deg, rgba(44, 90, 255, 0.3), rgba(122, 43, 246, 0.3));
  background-color: rgba(17, 26, 64, 0.6);
}

.game-image.fly-game {
  background-image: linear-gradient(135deg, rgba(55, 185, 241, 0.3), rgba(44, 90, 255, 0.3));
  background-color: rgba(17, 26, 64, 0.6);
}

.game-image.precision-game {
  background-image: linear-gradient(135deg, rgba(218, 33, 194, 0.3), rgba(122, 43, 246, 0.3));
  background-color: rgba(17, 26, 64, 0.6);
}

.game-image.memory-game {
  background-image: linear-gradient(135deg, rgba(122, 43, 246, 0.3), rgba(55, 185, 241, 0.3));
  background-color: rgba(17, 26, 64, 0.6);
}

.game-image.strategy-game {
  background-image: linear-gradient(135deg, rgba(218, 33, 194, 0.3), rgba(255, 87, 34, 0.3));
  background-color: rgba(17, 26, 64, 0.6);
}

.game-image.brain-game {
  background-image: linear-gradient(135deg, rgba(255, 152, 0, 0.3), rgba(218, 33, 194, 0.3));
  background-color: rgba(17, 26, 64, 0.6);
}

.game-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.game-details {
  padding: 20px;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.game-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(90deg, #2C5AFF, #7A2BF6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.game-difficulty {
  display: flex;
  gap: 4px;
}

.difficulty-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.difficulty-dot.active {
  background: #37B9F1;
}

.game-description {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.game-stats {
  display: flex;
  justify-content: space-between;
  background: rgba(10, 14, 33, 0.4);
  border-radius: 8px;
  padding: 12px 15px;
  margin-bottom: 20px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-name {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.stat-value-sm {
  font-size: 16px;
  font-weight: 700;
  color: #37B9F1;
}

.game-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  background: linear-gradient(90deg, #2C5AFF, #7A2BF6);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s;
  border: none;
  position: relative;
  overflow: hidden;
}

.game-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s;
}

.game-button:hover {
  box-shadow: 0 5px 15px rgba(44, 90, 255, 0.4);
  transform: translateY(-2px);
}

.game-button:hover::before {
  left: 100%;
}

.game-button svg {
  transition: transform 0.3s;
}

.game-button:hover svg {
  transform: translateX(3px);
}

/* 提示区域样式 */
.tips-section {
  background: rgba(17, 26, 64, 0.5);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 25px;
  margin-bottom: 60px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.tips-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.tips-header svg {
  color: #37B9F1;
}

.tips-header h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.5;
}

.tips-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  color: #37B9F1;
  font-size: 18px;
  line-height: 1.5;
}

/* 页脚区域样式 */
.page-footer {
  text-align: center;
  padding: 30px 0;
  margin-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-links {
  margin-bottom: 15px;
}

.footer-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #37B9F1;
}

.footer-divider {
  display: inline-block;
  margin: 0 10px;
  color: var(--text-muted);
  opacity: 0.6;
}

.copyright {
  font-size: 13px;
  color: var(--text-muted);
  opacity: 0.8;
}

/* 额外的响应式样式 */
@media (max-width: 768px) {
  .games-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .game-image-container {
    height: 140px;
  }
  
  .tips-section {
    padding: 20px 15px;
  }
}

@media (max-width: 480px) {
  .game-stats {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .footer-divider {
    display: none;
  }
}

/* 添加空状态分类样式 */
.empty-category {
  background: rgba(17, 26, 64, 0.5);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 40px 20px;
  text-align: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.empty-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(44, 90, 255, 0.1);
  margin-bottom: 20px;
  color: var(--accent-blue-light);
}

.empty-category h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #2C5AFF, #7A2BF6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.empty-category p {
  color: var(--text-muted);
  max-width: 400px;
  margin: 0 auto;
}

/* 测试次数进度条样式 */
.test-usage {
  margin-top: 12px;
}

.test-progress-container {
  height: 24px;
  background: rgba(15, 23, 42, 0.5);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.test-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #3f87ff, #6f42c1);
  border-radius: 12px;
  transition: width 0.3s ease;
}

.test-progress-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 13px;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.test-remaining-text {
  margin-top: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

.test-depleted {
  color: #ff5252;
}

/* 更新会员状态卡片的间距，适应新增内容 */
.membership-status {
  padding: 20px;
}

.status-info {
  flex: 1;
}

.status-title {
  margin-bottom: 6px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .test-progress-container {
    max-width: 100%;
  }
}
</style> 