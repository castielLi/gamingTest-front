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
            <button class="start-button" @click="navigateToGame(game.route)">
              开始测试
              <span class="button-glow"></span>
            </button>
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
        route: '/games/reactiontest/index.html'
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
        route: '/games/trackingtest/index.html'
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
        route: '/games/shootgame/index.html'
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

    const navigateToGame = (route) => {
      window.location.href = route;
    };

    const showHistory = (gameId) => {
      console.log(`显示 ${gameId} 的历史记录`);
    };

    return {
      games,
      navigateToGame,
      showHistory
    };
  }
}
</script>

<style scoped>
/* 全局风格变量 - Leonardo.ai 风格 */
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
.main-test-page {
  min-height: 100vh;
  background-color: var(--primary-bg);
  color: var(--text-color);
  overflow-x: hidden;
  background-image: 
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%232C5AFF' fill-opacity='0.05'/%3E%3C/svg%3E"),
    linear-gradient(to bottom, var(--primary-bg), var(--secondary-bg));
}

/* 全局背景效果 */
.main-test-page::before {
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

/* 导航样式 */
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

/* 测试页面标题样式 */
.test-header {
  text-align: center;
  padding: calc(var(--nav-height) + 50px) 20px 60px;
  position: relative;
  overflow: hidden;
}

.test-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center top, rgba(44, 90, 255, 0.1), transparent 70%);
  z-index: -1;
}

.test-title {
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

.test-title::after {
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

.test-subtitle {
  font-size: 20px;
  color: var(--text-muted);
  max-width: 600px;
  margin: 20px auto 0;
}

/* 游戏测试卡片网格样式 */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  padding: 30px 30px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.game-card {
  background: rgba(17, 26, 64, 0.4);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-light);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: transform 0.4s, box-shadow 0.4s;
}

.game-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(44, 90, 255, 0.1), transparent 70%);
  z-index: 0;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.game-content {
  padding: 30px;
  position: relative;
  z-index: 1;
}

.game-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--tertiary-bg), rgba(10, 14, 33, 0.9));
  margin-bottom: 20px;
  color: var(--accent-blue);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.game-icon::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(44, 90, 255, 0.3), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.game-card:hover .game-icon::after {
  opacity: 1;
}

.game-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 15px;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
}

.game-description {
  color: var(--text-muted);
  margin-bottom: 25px;
  line-height: 1.6;
  font-size: 16px;
}

.game-stats {
  display: flex;
  margin-bottom: 30px;
  padding: 15px;
  background: rgba(10, 14, 33, 0.5);
  border-radius: 12px;
  border: 1px solid var(--border-light);
}

.stat-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.stat-item:first-child::after {
  content: '';
  position: absolute;
  top: 10%;
  right: 0;
  height: 80%;
  width: 1px;
  background: var(--border-light);
}

.stat-label {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent-blue-light);
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
  background: var(--primary-gradient);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(44, 90, 255, 0.3);
}

.start-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(44, 90, 255, 0.4);
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
}

.start-button:hover .button-glow {
  animation: buttonShimmer 1.5s infinite;
}

@keyframes buttonShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.history-button {
  display: inline-flex;
  align-items: center;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  padding: 8px 12px;
  border-radius: 20px;
}

.history-button:hover {
  color: var(--text-color);
  background: rgba(255, 255, 255, 0.05);
}

.history-button svg {
  margin-left: 5px;
  transition: transform 0.3s;
  stroke: var(--accent-blue-light);
}

.history-button:hover svg {
  transform: translateX(3px);
}

/* 响应式调整 */
@media (max-width: 992px) {
  .games-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 20px 20px 50px;
  }
}

@media (max-width: 768px) {
  .games-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .test-title {
    font-size: 36px;
  }
  
  .test-subtitle {
    font-size: 18px;
  }
  
  .test-header {
    padding-top: calc(var(--nav-height) + 30px);
    padding-bottom: 40px;
  }
  
  .game-content {
    padding: 25px;
  }
}

@media (max-width: 480px) {
  .test-title {
    font-size: 30px;
  }
  
  .game-title {
    font-size: 22px;
  }
  
  .game-stats {
    padding: 12px;
  }
  
  .stat-value {
    font-size: 18px;
  }
  
  .game-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
  }
  
  .start-button, .history-button {
    width: 100%;
    justify-content: center;
  }
}
</style> 