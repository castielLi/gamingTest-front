<template>
  <div class="home">
    <!-- 第一部分：漫画轮播 -->
    <section class="comic-slider">
      <div class="slider-container">
        <div class="slider-track">
          <div class="slide" v-for="(slide, index) in comicSlides" :key="index">
            <div class="slide-content">
              <!-- <img :src="slide.image" :alt="slide.alt"> -->
              <div class="slide-text">
                <p class="emotion-text">{{ slide.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-controls">
          
          <div class="slider-dots">
            <span 
              v-for="(slide, index) in comicSlides" 
              :key="index" 
              class="dot" 
              :class="{ active: currentSlideIndex === index }"
              @click="goToSlide(index)">
            </span>
          </div>
         
        </div>
      </div>
    </section>

    <!-- 第二部分：问题陈述 -->
    <section class="problem-statement">
      <div class="content-wrapper">
        <h2 class="empathy-title">您的孩子，是否也这样？</h2>
        <div class="problem-text">
          <p class="narrative-text">
            <span class="highlight-word">戒不掉</span>的游戏瘾，
            <span class="highlight-word">无法沟通</span>的反抗情绪，
            <span class="highlight-word">逐渐放弃</span>的学业，
            <span class="highlight-word">昼夜颠倒</span>的作息，
            <span class="highlight-word">虚度光阴</span>的生活...
          </p>
          <p class="despair-text">
            眼看着孩子的<span class="glow-text">前途一片黑暗</span>，
            却依旧<span class="glow-text">束手无策</span>...
          </p>
        </div>
      </div>
    </section>

    <!-- 第三部分：数据统计 -->
    <section class="statistics">
      <div class="content-wrapper">
        <div class="stat-story">
          <div class="stat-narrative">
            <p class="trend-text">
              中国的游戏瘾少年人数正在逐年递增，
              <span class="stat-highlight">
                <span class="animate-number">{{ animatedNumbers['trend'] }}%</span>
              </span>
              的家庭都在面临着相同的困扰
            </p>
            
            <p class="industry-text">
              电子竞技作为一种新业态持续扩展，
              <span class="stat-emphasis">各地政府加码支持，职业赛事稳步发展</span>
            </p>
            
            <div class="key-question">
              但对于孩子，职业电竞，真的是一种出路吗？
            </div>
          </div>

          <div class="stat-reality">
            <div class="reality-item">
              <div class="stat-number">
                <span class="animate-number">{{ animatedNumbers['users'] }}亿</span>
              </div>
              <div class="stat-label">电竞用户基数</div>
              <div class="stat-year">截止2024年</div>
            </div>

            <div class="reality-item highlight">
              <div class="stat-number">
                <span class="animate-number">{{ animatedNumbers['percentage'] }}%</span>
              </div>
              <div class="stat-label">职业选手占比</div>
              <div class="stat-detail">仅10万注册职业选手</div>
            </div>

            <div class="reality-item warning">
              <div class="stat-number">
                <span class="animate-number">{{ animatedNumbers['hours'] }}小时</span>
              </div>
              <div class="stat-label">日均训练时长</div>
              <div class="stat-detail">远超普通学习强度</div>
            </div>
          </div>

          <div class="stat-conclusion">
            <p>想要成为真正的职业电竞人，必须通过
              <span class="emphasis">严苛的考核筛选</span>，
              这不仅需要
              <span class="emphasis">过人的天赋</span>，
              更需要
              <span class="emphasis">极强的意志力</span>
              和
              <span class="emphasis">职业素养</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 第四部分：电竞新星 - 全新设计 -->
    <section class="esports-stars">
      <div class="content-wrapper">
        <h2 class="contrast-title">当游戏不再只是游戏</h2>
        <p class="subtitle">要面对的挑战比学业<span class="emphasis-text">更大</span></p>
        
        <div class="stars-contrast">
          <div class="contrast-panel rise">
            <div class="panel-header">
              <h3>新星的燃起</h3>
              <div class="header-decoration"></div>
            </div>
            
            <div class="stars-list">
              <div class="star-card">
                <div class="star-header">
                  <div class="star-avatar">
                    <!-- <img src="../assets/images/star-uzi.jpg" alt="UZI"> -->
                  </div>
                  <div class="star-identity">
                    <h4>UZI</h4>
                    <p class="star-title">英雄联盟传奇ADC</p>
                  </div>
                </div>
                <div class="star-info">
                  <div class="star-income">
                    <span class="income-value">
                      <span class="income-currency">¥</span>
                      <span class="animate-number">{{ animatedNumbers['income1'] }}万+</span>
                    </span>
                    <span class="income-period">年薪</span>
                  </div>
                  <div class="star-abilities">
                    <span>超人反应</span>
                    <span>精准操作</span>
                    <span>战场意识</span>
                  </div>
                </div>
              </div>
              
              <div class="star-card">
                <div class="star-header">
                  <div class="star-avatar">
                    <!-- <img src="../assets/images/star-knight.jpg" alt="Knight"> -->
                  </div>
                  <div class="star-identity">
                    <h4>Knight</h4>
                    <p class="star-title">中路核心选手</p>
                  </div>
                </div>
                <div class="star-info">
                  <div class="star-income">
                    <span class="income-value">
                      <span class="income-currency">¥</span>
                      <span class="animate-number">{{ animatedNumbers['income2'] }}万+</span>
                    </span>
                    <span class="income-period">年薪</span>
                  </div>
                  <div class="star-abilities">
                    <span>团战判断</span>
                    <span>线上统治</span>
                    <span>英雄池宽广</span>
                  </div>
                </div>
              </div>
              
              <div class="star-card">
                <div class="star-header">
                  <div class="star-avatar">
                    <!-- <img src="../assets/images/star-simple.jpg" alt="Simple"> -->
                  </div>
                  <div class="star-identity">
                    <h4>Simple</h4>
                    <p class="star-title">CSGO顶级狙击手</p>
                  </div>
                </div>
                <div class="star-info">
                  <div class="star-income">
                    <span class="income-value">
                      <span class="income-currency">$</span>
                      <span class="animate-number">{{ animatedNumbers['income3'] }}万+</span>
                    </span>
                    <span class="income-period">年薪</span>
                  </div>
                  <div class="star-abilities">
                    <span>枪法精准</span>
                    <span>决策冷静</span>
                    <span>关键局表现</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contrast-divider">
            <!-- <div class="divider-line"></div>
            <div class="divider-vs">与</div>
            <div class="divider-line"></div> -->
          </div>
          
          <div class="contrast-panel fall">
            <div class="panel-header">
              <h3>新星的陨落</h3>
              <div class="header-decoration"></div>
            </div>
            
            <div class="stars-list">
              <div class="star-card fallen">
                <div class="star-header">
                  <div class="star-avatar grayscale">
                    <!-- <img src="../assets/images/fall-player1.jpg" alt="退役选手"> -->
                  </div>
                  <div class="star-identity">
                    <h4>曾经的天才</h4>
                    <p class="star-title">巅峰仅2年</p>
                  </div>
                </div>
                <div class="star-info">
                  <div class="star-current">
                    <span class="current-label">现状:</span>
                    <span class="current-value">送外卖维生</span>
                  </div>
                  <div class="star-quote">
                    "没有学历，年龄大了反应跟不上，只能做这些..."
                  </div>
                </div>
              </div>
              
              <div class="star-card fallen">
                <div class="star-header">
                  <div class="star-avatar grayscale">
                    <!-- <img src="../assets/images/fall-player2.jpg" alt="退役选手"> -->
                  </div>
                  <div class="star-identity">
                    <h4>前职业选手</h4>
                    <p class="star-title">22岁被迫退役</p>
                  </div>
                </div>
                <div class="star-info">
                  <div class="star-current">
                    <span class="current-label">现状:</span>
                    <span class="current-value">重返校园深造</span>
                  </div>
                  <div class="star-quote">
                    "从零开始，比同龄人晚了至少5年..."
                  </div>
                </div>
              </div>
              
              <div class="star-card fallen">
                <div class="star-header">
                  <div class="star-avatar grayscale">
                    <!-- <img src="../assets/images/fall-player3.jpg" alt="退役选手"> -->
                  </div>
                  <div class="star-identity">
                    <h4>电竞老兵</h4>
                    <p class="star-title">无缘顶级赛事</p>
                  </div>
                </div>
                <div class="star-info">
                  <div class="star-current">
                    <span class="current-label">现状:</span>
                    <span class="current-value">依靠父母生活</span>
                  </div>
                  <div class="star-quote">
                    "曾以为梦想触手可及，如今却一无所有..."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="stars-conclusion">
          <div class="conclusion-container">
            <p class="conclusion-lead">能一直在电竞圈发展的，除了拥有超高的能力水准与刻苦的意志力之外，<span class="conclusion-emphasis">最重要的是：</span></p>
            <div class="key-factor">
              <span class="key-word">天赋!</span>
              <div class="key-glow"></div>
            </div>
            <p class="conclusion-note">仅有<span class="stat-text">0.02%</span>的电竞爱好者能成为职业选手，而能长久稳定发展的比例更是微乎其微</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 第五部分：最终抉择 - 简化设计 -->
    <section class="final-choice">
      <div class="content-wrapper">
        <h2 class="path-title">人生的抉择</h2>
        
        <div class="path-contrast">
          <div class="path-branch gaokao">
            
            <h3 class="branch-title">高考之路</h3>
            <p class="branch-metaphor">千军万马过独木桥</p>
            
            <!-- 添加轮播图 -->
            <div class="branch-carousel">
              <div class="carousel-container">
                <div class="carousel-track">
                  <div class="carousel-slide">
                    <!-- <img src="../assets/images/gaokao1.jpg" alt="学习场景"> -->
                    <div class="slide-caption">刻苦学习</div>
                  </div>
                  <div class="carousel-slide">
                    <!-- <img src="../assets/images/gaokao2.jpg" alt="考试场景"> -->
                    <div class="slide-caption">公平竞争</div>
                  </div>
                  <div class="carousel-slide">
                    <!-- <img src="../assets/images/gaokao3.jpg" alt="毕业场景"> -->
                    <div class="slide-caption">多元出路</div>
                  </div>
                </div>
                <div class="carousel-dots">
                  <span class="carousel-dot active" data-index="0"></span>
                  <span class="carousel-dot" data-index="1"></span>
                  <span class="carousel-dot" data-index="2"></span>
                </div>
                <button class="carousel-arrow prev">&lt;</button>
                <button class="carousel-arrow next">&gt;</button>
              </div>
            </div>
            
            <div class="branch-content">
              <div class="branch-principles">
                <div class="principle-item">
                  <span class="principle-marker">
                    <span class="animate-number">{{ animatedNumbers['principle1'] }}</span>
                  </span>
                  <p class="principle-text">努力是基础</p>
                </div>
                <div class="principle-item">
                  <span class="principle-marker">
                    <span class="animate-number">{{ animatedNumbers['principle2'] }}</span>
                  </span>
                  <p class="principle-text">付出就有回报</p>
                </div>
                <div class="principle-item">
                  <span class="principle-marker">
                    <span class="animate-number">{{ animatedNumbers['principle3'] }}</span>
                  </span>
                  <p class="principle-text">选择面更广阔</p>
                </div>
              </div>
              
              <div class="branch-quote">
                <p>只要坚持努力，就会有改变的机会</p>
              </div>
            </div>
          </div>
          
          <div class="paths-divider">
            <span class="vs-text">VS</span>
          </div>
          
          <div class="path-branch esports">
           
            <h3 class="branch-title">电竞之路</h3>
            <p class="branch-metaphor">踩钢丝绳的风险</p>
            
            <!-- 添加轮播图 -->
            <div class="branch-carousel">
              <div class="carousel-container">
                <div class="carousel-track">
                  <div class="carousel-slide">
                    <!-- <img src="../assets/images/esports1.jpg" alt="训练场景"> -->
                    <div class="slide-caption">高强度训练</div>
                  </div>
                  <div class="carousel-slide">
                    <!-- <img src="../assets/images/esports2.jpg" alt="比赛场景"> -->
                    <div class="slide-caption">激烈竞争</div>
                  </div>
                  <div class="carousel-slide">
                    <!-- <img src="../assets/images/esports3.jpg" alt="退役场景"> -->
                    <div class="slide-caption">短暂职业生涯</div>
                  </div>
                </div>
                <div class="carousel-dots">
                  <span class="carousel-dot active" data-index="0"></span>
                  <span class="carousel-dot" data-index="1"></span>
                  <span class="carousel-dot" data-index="2"></span>
                </div>
                <button class="carousel-arrow prev">&lt;</button>
                <button class="carousel-arrow next">&gt;</button>
              </div>
            </div>
            
            <div class="branch-content">
              <div class="branch-principles">
                <div class="principle-item">
                  <span class="principle-marker">
                    <span class="animate-number">{{ animatedNumbers['principle4'] }}</span>
                  </span>
                  <p class="principle-text">天赋是门槛</p>
                </div>
                <div class="principle-item">
                  <span class="principle-marker">
                    <span class="animate-number">{{ animatedNumbers['principle5'] }}</span>
                  </span>
                  <p class="principle-text">极高的淘汰率</p>
                </div>
                <div class="principle-item">
                  <span class="principle-marker">
                    <span class="animate-number">{{ animatedNumbers['principle6'] }}</span>
                  </span>
                  <p class="principle-text">全无保障机制</p>
                </div>
              </div>
              
              <div class="branch-quote">
                <p>没有天赋，就没有入局的资格</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="final-conclusion">
          <p class="conclusion-text">
            电竞之路充满<span class="pulse-text">荆棘</span>，为了孩子的将来
          </p>
          
          <div class="conclusion-highlights">
            <div class="highlight-item">
              <span class="highlight-icon">✓</span>
              <p class="highlight-point">不浪费<span class="text-glow">每一个天才</span></p>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">✓</span>
              <p class="highlight-point">不允许<span class="text-glow">无意义的消耗</span></p>
            </div>
          </div>
          
          <div class="decision-prompt">
            <div class="prompt-question-wrapper">
              <p class="prompt-question">是<span class="decision-choice">成全</span>还是<span class="decision-choice">及时止损</span>?</p>
            </div>
            <p class="prompt-answer">科学的<span class="decision-word">天赋测试</span>，给出客观答案</p>
            <router-link to="/maintest" class="cta-button">
              立即开始测试
              <span class="button-glow"></span>
              <span class="button-arrow">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'homePage',
  setup() {
    // 使用Vue的响应式系统
    const animatedNumbers = ref({
      trend: 0,
      users: 0,
      percentage: 0,
      hours: 0,
      income1: 0,
      income2: 0,
      income3: 0,
      principle1: '00',
      principle2: '00',
      principle3: '00',
      principle4: '00',
      principle5: '00',
      principle6: '00'
    });
    
    // 漫画轮播图数据
    const comicSlides = ref([
      { text: '又是一个通宵...', image: '../assets/images/comic1.jpg', alt: '沉迷游戏' },
      { text: '为什么不能理解我？', image: '../assets/images/comic2.jpg', alt: '与父母争执' },
      { text: '我真的没有出路了吗...', image: '../assets/images/comic3.jpg', alt: '成绩下滑' },
      { text: '未来在哪里...', image: '../assets/images/comic4.jpg', alt: '迷茫未来' }
    ]);
    
    const currentSlideIndex = ref(0);
    const isAnimating = ref(false);
    const mouseX = ref(0);
    const mouseY = ref(0);
    const intervals = ref([]);
    
    // 用于管理视口内元素的动画状态
    const animatedElements = ref(new Set());
    
    // 处理鼠标移动
    const handleMouseMove = (event) => {
      mouseX.value = event.clientX;
      mouseY.value = event.clientY;
      
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };
    
    // 添加定时器
    const addInterval = (interval) => {
      intervals.value.push(interval);
      return interval;
    };
    
    // 轮播图控制函数
    const goToSlide = (index) => {
      if (isAnimating.value) return;
      
      isAnimating.value = true;
      currentSlideIndex.value = index;
      
      // 更新轮播图显示
      updateSliderPosition();
      
      // 动画结束后解除锁定
      setTimeout(() => {
        isAnimating.value = false;
      }, 600);
    };
    
    const nextSlide = () => {
      const newIndex = (currentSlideIndex.value + 1) % comicSlides.value.length;
      goToSlide(newIndex);
    };
    
    const prevSlide = () => {
      const newIndex = (currentSlideIndex.value - 1 + comicSlides.value.length) % comicSlides.value.length;
      goToSlide(newIndex);
    };
    
    // 更新轮播图位置
    const updateSliderPosition = () => {
      const sliderTrack = document.querySelector('.comic-slider .slider-track');
      if (!sliderTrack) return;
      
      // 计算偏移量：每个幻灯片宽度的80%乘以当前索引
      const slideWidth = document.querySelector('.comic-slider .slide')?.offsetWidth || 0;
      const offset = slideWidth * 0.8 * currentSlideIndex.value;
      
      // 设置轨道位置
      sliderTrack.style.transform = `translateX(-${offset}px)`;
    };
    
    // 初始化轮播图
    const initComicSlider = () => {
      // 设置轮播图初始位置
      updateSliderPosition();
      
      // 设置自动轮播
      const autoSlideInterval = setInterval(nextSlide, 5000);
      addInterval(autoSlideInterval);
      
      // 监听窗口大小变化，更新轮播图位置
      window.addEventListener('resize', updateSliderPosition);
    };
    
    // 缓动函数
    const easeOutQuart = (x) => {
      return 1 - Math.pow(1 - x, 4);
    };
    
    // 初始化数字动画并使用 Vue 的响应式系统
    const initNumberAnimations = () => {
      // 定义所有需要动画的目标值
      const targets = {
        trend: 80,
        users: 4.90,
        percentage: 0.02,
        hours: 12,
        income1: 2000,
        income2: 1500,
        income3: 200,
        principle1: '01',
        principle2: '02',
        principle3: '03',
        principle4: '01',
        principle5: '02',
        principle6: '03'
      };
      
      // 为每个数字创建动画
      Object.keys(targets).forEach(key => {
        const target = targets[key];
        const isString = typeof target === 'string';
        const numTarget = isString ? parseFloat(target) : target;
        
        let decimals = 0;
        if (!isString && String(target).includes('.')) {
          decimals = String(target).split('.')[1].length;
        }
        
        // 动画配置
        const duration = 1500;
        const steps = 30;
        const stepDuration = duration / steps;
        
        let currentStep = 0;
        const interval = setInterval(() => {
          currentStep++;
          
          const progress = currentStep / steps;
          const easeProgress = easeOutQuart(progress);
          const currentValue = numTarget * easeProgress;
          
          if (isString) {
            // 处理带前导零的字符串数字
            const numValue = Math.round(currentValue);
            animatedNumbers.value[key] = String(numValue).padStart(target.length, '0');
          } else {
            // 处理普通数字
            animatedNumbers.value[key] = currentValue.toFixed(decimals);
          }
          
          if (currentStep >= steps) {
            // 动画完成后显示最终值
            if (isString) {
              animatedNumbers.value[key] = target;
            } else {
              animatedNumbers.value[key] = numTarget.toFixed(decimals);
            }
            clearInterval(interval);
          }
        }, stepDuration);
        
        addInterval(interval);
      });
    };
    
    // 检查元素是否在视口内
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };
    
    // 滚动时触发动画
    const handleScroll = () => {
      // 查找所有数字动画容器
      const sections = [
        document.querySelector('.statistics'),
        document.querySelector('.esports-stars'),
        document.querySelector('.final-choice')
      ];
      
      // 如果任何一个主要区域进入视口且未动画，就触发动画
      sections.forEach(section => {
        if (section && isInViewport(section) && !animatedElements.value.has(section)) {
          animatedElements.value.add(section);
          initNumberAnimations();
        }
      });
    };
    
    // 初始化轮播图
    const initSliders = () => {
      // 初始化漫画轮播图
      initComicSlider();
      
      // 初始化高考与电竞路径轮播图
      initPathCarousels();
    };
    
    // 路径轮播图
    const initPathCarousels = () => {
      const carousels = document.querySelectorAll('.branch-carousel .carousel-container');
      
      carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-arrow.prev');
        const nextBtn = carousel.querySelector('.carousel-arrow.next');
        
        if (!track || slides.length === 0) return;
        
        let currentIndex = 0;
        let isAnimating = false;
        
        // 设置轮播容器高度
        const setCarouselHeight = () => {
          // 获取当前幻灯片的高度
          const currentSlide = slides[currentIndex];
          if (currentSlide) {
            const slideHeight = currentSlide.offsetHeight;
            if (slideHeight > 0) {
              track.style.height = `${slideHeight}px`;
            } else {
              // 默认高度
              track.style.height = '200px';
            }
          }
        };
        
        // 设置轮播图样式
        slides.forEach((slide, i) => {
          slide.style.position = 'absolute';
          slide.style.left = '0';
          slide.style.top = '0';
          slide.style.width = '100%';
          slide.style.transform = i === 0 ? 'translateX(0)' : `translateX(${100}%)`;
          slide.style.transition = 'transform 0.6s ease-in-out';
          slide.style.opacity = i === 0 ? '1' : '0.7';
          slide.style.visibility = 'visible';
        });
        
        track.style.position = 'relative';
        track.style.overflow = 'hidden';
        
        // 更新轮播状态
        const updateCarousel = () => {
          slides.forEach((slide, i) => {
            if (i === currentIndex) {
              slide.style.transform = 'translateX(0)';
              slide.style.opacity = '1';
              slide.style.zIndex = '2';
            } else if (i < currentIndex) {
              slide.style.transform = 'translateX(-100%)';
              slide.style.opacity = '0.7';
              slide.style.zIndex = '1';
            } else {
              slide.style.transform = 'translateX(100%)';
              slide.style.opacity = '0.7';
              slide.style.zIndex = '1';
            }
          });
          
          // 更新指示点
          dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
          });
          
          // 更新轮播图高度
          setTimeout(setCarouselHeight, 100);
        };
        
        // 带动画过渡的导航方法
        const navigateTo = (index) => {
          if (isAnimating) return;
          isAnimating = true;
          
          // 确保索引在有效范围内
          if (index < 0) index = slides.length - 1;
          if (index >= slides.length) index = 0;
          
          currentIndex = index;
          updateCarousel();
          
          // 动画完成后解锁
          setTimeout(() => {
            isAnimating = false;
          }, 600);
        };
        
        // 导航方法
        const goPrev = () => navigateTo(currentIndex - 1);
        const goNext = () => navigateTo(currentIndex + 1);
        
        // 绑定事件
        if (prevBtn) prevBtn.addEventListener('click', goPrev);
        if (nextBtn) nextBtn.addEventListener('click', goNext);
        
        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => navigateTo(index));
        });
        
        // 确保初始状态正确
        updateCarousel();
        
        // 监听窗口调整大小事件
        window.addEventListener('resize', setCarouselHeight);
        
        // 自动轮播
        const carouselInterval = setInterval(goNext, 6000);
        addInterval(carouselInterval);
        
        // 第一次加载时也要手动设置高度
        setTimeout(setCarouselHeight, 300);
      });
    };
    
    // 组件挂载后
    onMounted(() => {
      document.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      // 初始化并立即检查可见性
      setTimeout(() => {
        initSliders();
        handleScroll(); // 检查初始视图中的元素
      }, 300);
    });
    
    // 组件卸载前
    onBeforeUnmount(() => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      
      // 清除所有定时器
      intervals.value.forEach(interval => clearInterval(interval));
    });
    
    return {
      animatedNumbers,
      mouseX,
      mouseY,
      comicSlides,
      currentSlideIndex,
      goToSlide,
      nextSlide,
      prevSlide
    };
  }
}
</script>

<style scoped>
/* 漫画轮播图样式 */
.comic-slider {
  width: 100%;
  margin: 0 auto;
  padding: 30px 0;
  overflow: hidden;
}

.slider-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.6s ease;
}

.slide {
  flex: 0 0 calc(60% + 40px); /* 中间显示60%的内容，左右各20% */
  min-width: calc(60% + 40px);
  padding: 0 20px;
  box-sizing: border-box;
}

.slide-content {
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-text {
  text-align: center;
  padding: 20px;
}

.emotion-text {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.slider-arrow {
  background-color: #333;
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  transition: background-color 0.3s;
}

.slider-arrow:hover {
  background-color: #555;
}

.slider-dots {
  display: flex;
  justify-content: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #333;
  transform: scale(1.2);
}

/* 其他样式保持不变 */
</style> 