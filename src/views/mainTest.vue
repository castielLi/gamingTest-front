<template>
  <div class="main-test-page">
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

    <!-- 测试页面标题部分 -->
    <header class="test-header">
      <h1 class="test-title">全方位能力评估</h1>
      <p class="test-subtitle">六项专业测试，全面评估您的电竞天赋</p>
    </header>

    <!-- 游戏测试卡片网格 -->
    <section class="games-grid">
      <!-- 反应速度测试 -->
      <div class="game-card" v-for="game in games" :key="game.id">
        <div class="game-content">
          <div class="game-icon" v-html="game.icon"></div>
          <h3 class="game-title">{{ game.title }}</h3>
          <p class="game-description">{{ game.description }}</p>
          <div class="game-stats">
            <div class="stat-item">
              <span class="stat-label">{{ game.stats[0].label }}</span>
              <span class="stat-value">{{ game.stats[0].value }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">{{ game.stats[1].label }}</span>
              <span class="stat-value">{{ game.stats[1].value }}</span>
            </div>
          </div>
          <div class="game-actions">
            <router-link :to="game.route" class="start-button">
              开始测试
              <span class="button-glow"></span>
            </router-link>
            <button class="history-button" @click="showHistory(game.id)">
              历史记录
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MainTest',
  setup() {
    const games = ref([
      {
        id: 'reaction',
        title: '反应速度测试',
        description: '测试您对突发状况的反应能力，评估基础反应速度水平',
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>`,
        stats: [
          { label: '最佳记录', value: '0.185s' },
          { label: '测试次数', value: '12' }
        ],
        route: '/games/shootgame'
      },
      {
        id: 'tracking',
        title: '目标追踪测试',
        description: '评估您的目标跟踪能力和手眼协调性',
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>`,
        stats: [
          { label: '最高分数', value: '89%' },
          { label: '测试次数', value: '8' }
        ],
        route: '/games/trackingtest'
      },
      {
        id: 'shooting',
        title: '精准射击测试',
        description: '测试您的瞄准精度和快速点击能力',
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 12l10 10 10-10L12 2z" stroke="currentColor" stroke-width="2"/>
              </svg>`,
        stats: [
          { label: '命中率', value: '92%' },
          { label: '测试次数', value: '15' }
        ],
        route: '/games/shootgame'
      },
      {
        id: 'memory',
        title: '记忆力测试',
        description: '评估您的短期记忆能力和空间识别能力',
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" stroke="currentColor" stroke-width="2"/>
                <path d="M4 9h16M9 4v16" stroke="currentColor" stroke-width="2"/>
              </svg>`,
        stats: [
          { label: '最高等级', value: '8' },
          { label: '测试次数', value: '6' }
        ],
        route: '/games/matchgame'
      },
      {
        id: 'multitask',
        title: '多任务处理测试',
        description: '测试您同时处理多个目标的能力',
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 6v6l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>`,
        stats: [
          { label: '最高分数', value: '76分' },
          { label: '测试次数', value: '4' }
        ],
        route: '/games/multitask'
      },
      {
        id: 'strategy',
        title: '策略决策测试',
        description: '评估您的战略思维和快速决策能力',
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16v16H4V4z" stroke="currentColor" stroke-width="2"/>
                <path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>`,
        stats: [
          { label: '最高得分', value: '85分' },
          { label: '测试次数', value: '7' }
        ],
        route: '/games/strategy'
      }
    ]);

    const showHistory = (gameId) => {
      console.log(`显示 ${gameId} 的历史记录`);
      // 这里可以实现显示历史记录的逻辑，比如打开一个弹窗
    };

    return {
      games,
      showHistory
    };
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

/* 测试页面标题样式 */
.test-header {
  text-align: center;
  padding: 120px 20px 60px;
  background: linear-gradient(180deg, #121218 0%, #1a1a24 100%);
  color: white;
}

.test-title {
  font-size: 2.5rem;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #f0f0f0, #ffffff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
}

.test-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

/* 游戏测试卡片网格样式 */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  padding: 30px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.game-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.game-content {
  padding: 30px;
}

.game-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2a2a36, #1a1a24);
  margin-bottom: 20px;
  color: #738adb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.game-title {
  font-size: 1.5rem;
  margin: 0 0 10px;
  color: white;
}

.game-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 25px;
  line-height: 1.5;
  font-size: 0.95rem;
}

.game-stats {
  display: flex;
  margin-bottom: 30px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.stat-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 5px;
}

.stat-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: #738adb;
}

.game-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.start-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #5567c9, #738adb);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
}

.start-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(85, 103, 201, 0.4);
}

.button-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.start-button:hover .button-glow {
  opacity: 1;
}

.history-button {
  display: inline-flex;
  align-items: center;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s;
}

.history-button:hover {
  color: white;
}

.history-button svg {
  margin-left: 5px;
  transition: transform 0.3s;
}

.history-button:hover svg {
  transform: translateX(3px);
}

/* 整体页面样式 */
.main-test-page {
  min-height: 100vh;
  background-color: #121218;
  color: white;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .games-grid {
    grid-template-columns: 1fr;
  }
  
  .test-title {
    font-size: 2rem;
  }
  
  .test-subtitle {
    font-size: 1rem;
  }
}
</style> 