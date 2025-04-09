<template>
  <div class="home">
    <!-- 第一部分：漫画轮播 -->
    <section class="comic-slider" >
      <div class="slider-container">
        <div class="slider-track" :style="{ transform: `translateX(-${currentSlideIndex * 100}%)` }">
          <div class="slide" v-for="(slide, index) in comicSlides" :key="index"
               :class="{ 'current': index === currentSlideIndex }">
            <div class="slide-content">
              <img :src="slide.image" :alt="slide.alt" class="slide-image">
              <!-- <div class="slide-text">
                <p class="emotion-text">{{ slide.text }}</p>
              </div> -->
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
      {
        image: require('@/assets/img/11.jpg'),
        // alt: '图片描述1',
        // text: '显示文字1'
      },
      {
        image: require('@/assets/img/12.jpg'),
        // alt: '图片描述2',
        // text: '显示文字2'
      },
      {
        image: require('@/assets/img/13.jpg'),
        // alt: '图片描述3',
        // text: '显示文字3'
      },
      {
        image: require('@/assets/img/14.jpg'),
        // alt: '图片描述4',
        // text: '显示文字4'
      }
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
      
      setTimeout(() => {
        isAnimating.value = false;
      }, 3000);
    };
    
    const nextSlide = () => {
      goToSlide((currentSlideIndex.value + 1) % comicSlides.value.length);
    };
    
    const prevSlide = () => {
      goToSlide((currentSlideIndex.value - 1 + comicSlides.value.length) % comicSlides.value.length);
    };
    
    // 初始化自动轮播
    onMounted(() => {
      const autoSlideInterval = setInterval(nextSlide, 5000);
      intervals.value.push(autoSlideInterval);
    });
    
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
/* 全局风格变量 - Leonardo.ai 风格精确匹配 */
:root {
  /* Leonardo.ai 精确匹配的配色系统 */
  --primary-bg: #070A19; /* 更新：深色背景色匹配Leonardo.ai */
  --secondary-bg: #0C1128; /* 更新：次级背景色 */
  --tertiary-bg: #111A40; /* 更新：三级背景色 */
  
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
}

.home {
  padding-top: 0; /* 移除容器顶部的内边距 */
  margin-top: 0;
  background-color: var(--primary-bg);
  color: var(--text-color);
  overflow-x: hidden;
  background-image: 
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%232C5AFF' fill-opacity='0.05'/%3E%3C/svg%3E"),
    linear-gradient(to bottom, var(--primary-bg), var(--secondary-bg));
}

/* 全局背景效果 */
.home::before {
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

/* 全局内容容器 */
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
}

/* 漫画轮播图样式 - 修复与导航栏的距离 */
.comic-slider {
  width: 100%;
  margin: 0 auto;
  padding: 0 0 50px;
  position: relative;
  overflow: hidden;
}

.slider-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: var(--nav-height);
  overflow: hidden;
  border-radius: 16px;
  background: var(--tertiary-bg);
  border: 1px solid var(--border-light);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.slider-track {
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  /* 移除固定高度，让它自适应内容 */
  height: auto;
}

.slide {
  flex: 0 0 100%;
  width: 100%;
  position: relative;
}

.slide-content {
  position: relative;
  width: 100%;
  /* 使用 padding-top 来保持 16:9 的比例 */
  padding-top: 56.25%; /* 16:9 = 9/16 = 0.5625 = 56.25% */
  height: 0; /* 重置高度 */
}

.slide-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.slide-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px 50px; /* 增加左右内边距 */
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)); /* 渐变背景 */
  backdrop-filter: blur(10px);
  text-align: left; /* 文字左对齐 */
}

.emotion-text {
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  text-align: left; /* 文字左对齐 */
  max-width: 600px; /* 限制文字宽度 */
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateX(-20px); /* 改为水平方向的动画 */
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
}

.slider-controls {
  position: absolute;
  bottom: 16px; /* 调整底部距离 */
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.slider-dots {
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
  transform: scale(1.2);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .slide-text {
    padding: 20px 30px; /* 移动端减少内边距 */
  }
  
  .emotion-text {
    font-size: 24px;
  }
}

/* 移除连接线，因为现在直接紧贴导航栏 */
.comic-slider::before {
  display: none; /* 移除连接线元素 */
}

/* 为了确保第一个轮播图不被导航栏遮挡，添加一些样式 */
.slider-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: var(--nav-height); /* 在内容容器上添加顶部外边距 */
  overflow: hidden;
  border-radius: 16px;
  background: var(--tertiary-bg);
  border: 1px solid var(--border-light);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  /* 添加轻微的顶部光晕效果，视觉上连接导航栏和内容 */
  background-image: radial-gradient(ellipse at top, rgba(44, 90, 255, 0.1), transparent 70%);
}

.slider-track {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  height: 350px;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateX(100%);
  z-index: 1;
}

.slide.prev {
  opacity: 0.5;
  transform: translateX(-100%);
  z-index: 1;
}

.slide.current {
  opacity: 1;
  transform: translateX(0);
  z-index: 2;
}

.slide.next {
  opacity: 0.5;
  transform: translateX(100%);
  z-index: 1;
}

.slide-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(18, 24, 51, 0.8), rgba(10, 14, 33, 0.9));
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.slide-content::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(44, 90, 255, 0.08), transparent 70%);
  opacity: 0.8;
  z-index: -1;
}

.slide-image {
  width: 100%;
  height: 400px; /* 设置轮播图高度 */
  object-fit: cover; /* 确保图片填充整个容器 */
}

.slide-text {
  text-align: center;
  padding: 30px;
  z-index: 2;
}

.emotion-text {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
}

.slide.current .emotion-text {
  opacity: 1;
  transform: translateY(0);
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 15px;
}

.slider-dots {
  display: flex;
  justify-content: center;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 6px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.dot::after {
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

.dot:hover::after {
  opacity: 0.5;
}

.dot.active {
  transform: scale(1.2);
}

.dot.active::after {
  opacity: 1;
}

/* 问题陈述部分 - Leonardo.ai风格 */
.problem-statement {
  padding: 40px 0 80px; /* 减少顶部内边距 */
  background: linear-gradient(180deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
  position: relative;
  overflow: hidden;
  margin-top: 0;
}

.problem-statement::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: radial-gradient(circle at right top, rgba(122, 43, 246, 0.1), transparent 70%);
  z-index: 0;
}

.empathy-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 40px;
  text-align: center;
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.empathy-title::after {
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

.problem-text {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.narrative-text {
  font-size: 24px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: var(--text-muted);
}

.highlight-word {
  font-weight: 700;
  color: var(--text-color);
  position: relative;
  display: inline-block;
}

.highlight-word::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: var(--accent-purple);
  opacity: 0.3;
  border-radius: 4px;
  z-index: -1;
}

.despair-text {
  font-size: 28px;
  font-weight: 700;
  margin-top: 30px;
}

.glow-text {
  position: relative;
  color: var(--accent-pink);
  font-weight: 700;
  text-shadow: 0 0 15px rgba(218, 33, 194, 0.5);
}

/* 数据统计部分 - Leonardo.ai风格 */
.statistics {
  padding: 100px 0;
  background: var(--tertiary-bg);
  position: relative;
  overflow: hidden;
}

.statistics::before {
  content: '';
  position: absolute;
  top: -100px;
  left: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(44, 90, 255, 0.1), transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.statistics::after {
  content: '';
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(122, 43, 246, 0.1), transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.stat-story {
  position: relative;
  z-index: 1;
}

.stat-narrative {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.trend-text {
  font-size: 26px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.stat-highlight {
  display: inline-block;
  padding: 0 10px;
  position: relative;
}

.stat-highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-blue-light);
}

.animate-number {
  font-weight: 700;
  color: var(--accent-blue-light);
  font-size: 110%;
}

.industry-text {
  font-size: 22px;
  color: var(--text-muted);
  margin-bottom: 30px;
}

.stat-emphasis {
  font-weight: 600;
  color: var(--text-color);
}

/* 关键问题样式 */
.key-question {
  font-size: 30px;
  font-weight: 700;
  margin-top: 40px;
  padding: 20px;
  background: rgba(10, 14, 33, 0.5);
  border-radius: 12px;
  border: 1px solid var(--border-light);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.key-question::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(44, 90, 255, 0.1), transparent);
  z-index: -1;
}

/* 数据统计部分 - 具体数字展示 */
.stat-reality {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 60px 0;
  gap: 20px;
}

.reality-item {
  flex: 1;
  min-width: 250px;
  padding: 30px;
  background: linear-gradient(135deg, rgba(12, 19, 39, 0.8), rgba(5, 7, 17, 0.9));
  border-radius: 16px;
  border: 1px solid var(--border-light);
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}

.reality-item::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(55, 185, 241, 0.05), transparent 70%);
  opacity: 0.5;
  z-index: -1;
  transform: scale(0.9);
  transition: transform 0.6s;
}

.reality-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.reality-item:hover::before {
  transform: scale(1);
}

.reality-item.highlight::before {
  background: radial-gradient(circle at center, rgba(122, 43, 246, 0.05), transparent 70%);
}

.reality-item.warning::before {
  background: radial-gradient(circle at center, rgba(218, 33, 194, 0.05), transparent 70%);
}

.stat-number {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
}

.reality-item.highlight .stat-number {
  color: var(--accent-purple);
  text-shadow: 0 0 15px rgba(122, 43, 246, 0.4);
}

.reality-item.warning .stat-number {
  color: var(--accent-pink);
  text-shadow: 0 0 15px rgba(218, 33, 194, 0.4);
}

.stat-label {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-color);
}

.stat-year, .stat-detail {
  font-size: 14px;
  color: var(--text-muted);
}

.stat-conclusion {
  max-width: 800px;
  margin: 40px auto 0;
  padding: 25px;
  background: rgba(10, 14, 33, 0.6);
  border-radius: 12px;
  border: 1px solid var(--border-light);
  font-size: 22px;
  line-height: 1.6;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

.stat-conclusion::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--primary-gradient);
}

.emphasis {
  font-weight: 700;
  color: var(--accent-blue-light);
  position: relative;
}

/* 电竞新星部分 - Leonardo.ai风格 */
.esports-stars {
  padding: 100px 0;
  background: linear-gradient(180deg, var(--tertiary-bg) 0%, var(--secondary-bg) 100%);
  position: relative;
  overflow: hidden;
}

.esports-stars::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 30%, rgba(44, 90, 255, 0.08), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(218, 33, 194, 0.08), transparent 40%);
  z-index: 0;
}

.contrast-title {
  font-size: 46px;
  font-weight: 800;
  margin-bottom: 15px;
  text-align: center;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.subtitle {
  font-size: 24px;
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 60px;
}

.emphasis-text {
  color: var(--accent-pink);
  font-weight: 700;
}

.stars-contrast {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 60px;
}

.contrast-panel {
  flex: 1;
  min-width: 300px;
  background: rgba(10, 14, 33, 0.6);
  border-radius: 16px;
  border: 1px solid var(--border-light);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 30px;
  position: relative;
}

.contrast-panel.rise::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--accent-blue), var(--accent-blue-light));
}

.contrast-panel.fall::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--accent-purple), var(--accent-pink));
}

.panel-header {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
}

.panel-header h3 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  display: inline-block;
}

.contrast-panel.rise .panel-header h3 {
  color: var(--accent-blue-light);
}

.contrast-panel.fall .panel-header h3 {
  color: var(--accent-pink);
}

.header-decoration {
  width: 80px;
  height: 3px;
  margin: 0 auto;
  background: var(--primary-gradient);
  border-radius: 3px;
}

.contrast-panel.fall .header-decoration {
  background: var(--secondary-gradient);
}

.stars-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.star-card {
  background: rgba(18, 24, 51, 0.5);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--border-light);
  transition: transform 0.3s, box-shadow 0.3s;
}

.star-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.star-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.star-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  margin-right: 15px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.star-avatar.grayscale {
  filter: grayscale(100%);
  opacity: 0.7;
  background: linear-gradient(135deg, #555, #333);
}

.star-identity h4 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 5px;
}

.star-title {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0;
}

.star-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.star-income {
  text-align: center;
  padding: 10px;
  background: rgba(5, 7, 17, 0.3);
  border-radius: 8px;
}

.income-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--accent-blue-light);
}

.star-card.fallen .star-current {
  display: flex;
  align-items: center;
  padding: 10px;
  background: rgba(5, 7, 17, 0.3);
  border-radius: 8px;
}

.current-label {
  font-size: 16px;
  color: var(--text-muted);
  margin-right: 10px;
}

.current-value {
  font-size: 18px;
  font-weight: 600;
  color: var(--accent-pink);
}

.star-quote {
  font-style: italic;
  color: var(--text-muted);
  padding: 10px;
  border-left: 3px solid var(--accent-pink);
  margin-left: 10px;
}

.star-abilities {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.star-abilities span {
  padding: 6px 12px;
  background: rgba(44, 90, 255, 0.1);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--accent-blue-light);
}

.stars-conclusion {
  margin-top: 80px;
}

.conclusion-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.conclusion-lead {
  font-size: 24px;
  margin-bottom: 30px;
}

.conclusion-emphasis {
  font-weight: 700;
  color: var(--accent-purple);
}

.key-factor {
  display: inline-block;
  position: relative;
  margin: 20px 0 30px;
}

.key-word {
  font-size: 64px;
  font-weight: 900;
  background: linear-gradient(90deg, var(--accent-purple), var(--accent-pink));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
}

.key-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(122, 43, 246, 0.4), transparent 70%);
  z-index: 0;
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.9; }
  100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
}

.conclusion-note {
  font-size: 18px;
  color: var(--text-muted);
}

.stat-text {
  font-weight: 700;
  color: var(--accent-pink);
}

/* 路径选择部分 - Leonardo.ai风格 */
.final-choice {
  padding: 100px 0;
  background: var(--primary-bg);
  position: relative;
  overflow: hidden;
}

.final-choice::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 30% 20%, rgba(44, 90, 255, 0.1), transparent 40%),
    radial-gradient(circle at 70% 80%, rgba(122, 43, 246, 0.1), transparent 40%);
  z-index: 0;
}

.path-title {
  font-size: 46px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.path-contrast {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.path-branch {
  flex: 1;
  min-width: 300px;
  background: rgba(10, 14, 33, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid var(--border-light);
  padding: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.path-branch.gaokao::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--accent-blue), var(--accent-blue-light));
}

.path-branch.esports::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--accent-purple), var(--accent-pink));
}

.branch-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
}

.path-branch.gaokao .branch-title {
  color: var(--accent-blue-light);
}

.path-branch.esports .branch-title {
  color: var(--accent-pink);
}

.branch-metaphor {
  text-align: center;
  font-size: 18px;
  color: var(--text-muted);
  margin-bottom: 30px;
}

/* 轮播图样式 */
.branch-carousel {
  margin-bottom: 30px;
}

.carousel-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.carousel-track {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(5, 7, 17, 0.5);
}

.carousel-slide {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(10, 14, 33, 0.8), rgba(5, 7, 17, 0.9));
  position: relative;
}

.slide-caption {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  background: rgba(5, 7, 17, 0.5);
  border: 1px solid var(--border-light);
  backdrop-filter: blur(5px);
}

.path-branch.gaokao .slide-caption {
  color: var(--accent-blue-light);
  box-shadow: 0 0 15px rgba(55, 185, 241, 0.2);
}

.path-branch.esports .slide-caption {
  color: var(--accent-pink);
  box-shadow: 0 0 15px rgba(218, 33, 194, 0.2);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.carousel-dot.active {
  transform: scale(1.2);
}

.path-branch.gaokao .carousel-dot.active {
  background: var(--accent-blue);
  box-shadow: 0 0 10px rgba(55, 185, 241, 0.5);
}

.path-branch.esports .carousel-dot.active {
  background: var(--accent-pink);
  box-shadow: 0 0 10px rgba(218, 33, 194, 0.5);
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(5, 7, 17, 0.7);
  border: 1px solid var(--border-light);
  color: var(--text-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
}

.carousel-arrow.prev {
  left: 10px;
}

.carousel-arrow.next {
  right: 10px;
}

.carousel-arrow:hover {
  background: rgba(10, 14, 33, 0.9);
  color: var(--accent-blue-light);
}

/* 最终决策部分 */
.final-conclusion {
  max-width: 800px;
  margin: 80px auto 0;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 30px;
  background: rgba(10, 14, 33, 0.7);
  border-radius: 16px;
  border: 1px solid var(--border-light);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.conclusion-text {
  font-size: 28px;
  margin-bottom: 30px;
}

.pulse-text {
  color: var(--accent-pink);
  font-weight: 700;
  animation: textPulse 2s infinite;
  position: relative;
  display: inline-block;
}

@keyframes textPulse {
  0% { text-shadow: 0 0 5px rgba(218, 33, 194, 0.5); }
  50% { text-shadow: 0 0 15px rgba(218, 33, 194, 0.8); }
  100% { text-shadow: 0 0 5px rgba(218, 33, 194, 0.5); }
}

.conclusion-highlights {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.highlight-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: rgba(5, 7, 17, 0.5);
  border-radius: 8px;
  border: 1px solid var(--border-light);
}

.highlight-icon {
  color: var(--accent-blue-light);
  font-size: 20px;
  margin-right: 10px;
}

.highlight-point {
  font-size: 18px;
  margin: 0;
}

.text-glow {
  color: var(--accent-blue-light);
  text-shadow: 0 0 10px rgba(55, 185, 241, 0.5);
  font-weight: 600;
}

.decision-prompt {
  margin-top: 40px;
}

.prompt-question-wrapper {
  display: inline-block;
  padding: 20px 30px;
  background: rgba(5, 7, 17, 0.7);
  border-radius: 30px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.prompt-question-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(44, 90, 255, 0.1), rgba(122, 43, 246, 0.1), rgba(218, 33, 194, 0.1));
  z-index: -1;
  animation: gradientSlide 3s infinite linear;
}

@keyframes gradientSlide {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
}

.prompt-question {
  font-size: 26px;
  font-weight: 700;
  margin: 0;
}

.decision-choice {
  position: relative;
  display: inline-block;
  padding: 0 5px;
}

.decision-choice:first-of-type {
  color: var(--accent-blue-light);
}

.decision-choice:last-of-type {
  color: var(--accent-pink);
}

.prompt-answer {
  font-size: 22px;
  margin-bottom: 30px;
}

.decision-word {
  font-weight: 700;
  position: relative;
  padding: 3px 8px;
  border-radius: 4px;
  background: var(--primary-gradient);
  color: white;
}

.cta-button {
  display: inline-block;
  padding: 15px 40px;
  background: var(--primary-gradient);
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-color);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 5px 20px rgba(44, 90, 255, 0.4);
  border: none;
  cursor: pointer;
  z-index: 1;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(44, 90, 255, 0.6);
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  z-index: -1;
  transform: translateX(-100%);
  animation: buttonGlow 3s infinite;
}

@keyframes buttonGlow {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}

.button-arrow {
  display: inline-block;
  margin-left: 10px;
  transition: transform 0.3s;
}

.cta-button:hover .button-arrow {
  transform: translateX(5px);
}

/* 媒体查询 - 响应式布局优化 */
@media (max-width: 768px) {
  .emotion-text {
    font-size: 24px;
  }
  
  .empathy-title, .contrast-title, .path-title {
    font-size: 36px;
  }
  
  .narrative-text, .trend-text {
    font-size: 20px;
  }
  
  .stat-number {
    font-size: 36px;
  }
  
  .key-word {
    font-size: 48px;
  }
  
  .reality-item {
    min-width: 100%;
  }
  
  .stars-contrast, .path-contrast {
    flex-direction: column;
  }
  
  .prompt-question {
    font-size: 22px;
  }
}

@media (max-width: 480px) {
  .emotion-text {
    font-size: 20px;
  }
  
  .empathy-title, .contrast-title, .path-title {
    font-size: 30px;
  }
  
  .narrative-text, .trend-text {
    font-size: 18px;
  }
  
  .key-word {
    font-size: 40px;
  }
  
  .conclusion-text, .prompt-answer {
    font-size: 18px;
  }
  
  .highlight-item {
    width: 100%;
  }
  
  .cta-button {
    padding: 12px 30px;
    font-size: 18px;
  }
}

/* 添加悬停效果 */
.slide-content:hover .slide-image {
  transform: scale(1.02); /* 轻微放大效果 */
}

/* 确保容器也有圆角，防止图片溢出 */
.slide-content {
  border-radius: 20px;
  overflow: hidden;
}

.slider-container {
  border-radius: 20px; /* 匹配图片圆角 */
  overflow: hidden;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .slide-image {
    border-radius: 16px; /* 移动端稍微减小圆角 */
  }
}
</style> 