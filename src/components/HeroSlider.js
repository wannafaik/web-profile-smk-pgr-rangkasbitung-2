import { schoolInfo } from '../data/school-info.js';
import { jurusanData } from '../data/jurusan.js';

export function renderHeroSlider() {
  return `
    <section class="hero-skensa-banner">
      <div class="container hero-skensa-grid">
        
        <!-- Left Column: Swipable Photo Card Slider -->
        <div class="hero-slider-wrapper" id="hero-slider-wrapper">
          <!-- Previous Arrow -->
          <button class="slider-arrow-btn slider-arrow-prev" id="slider-prev-btn" aria-label="Foto Sebelumnya">❮</button>
          
          <div class="hero-card-container" id="hero-card-container">
            <div class="hero-card-dots"></div>
            <div class="sparkle-star sparkle-1">✦</div>
            <div class="sparkle-star sparkle-2">✦</div>

            <!-- Student Cutout Image -->
            <img src="${jurusanData[0].heroImage}" alt="${jurusanData[0].name}" class="hero-student-img" id="hero-student-img" />
          </div>

          <!-- Jurusan Badge Pill Button -->
          <div style="display:flex; justify-content:center;">
            <div class="hero-jurusan-pill" id="hero-jurusan-pill">
              ${jurusanData[0].name.toUpperCase()}
            </div>
          </div>

          <!-- Next Arrow -->
          <button class="slider-arrow-btn slider-arrow-next" id="slider-next-btn" aria-label="Foto Selanjutnya">❯</button>

          <!-- Navigation Dots -->
          <div class="slider-dots-wrapper" id="slider-dots-wrapper">
            ${jurusanData.map((_, index) => `
              <div class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
            `).join('')}
          </div>
        </div>

        <!-- Right Column: Welcome Headline Text -->
        <div class="hero-welcome-content">
          <h2 class="hero-welcome-sub">Selamat Datang di</h2>
          <h2 class="hero-welcome-sub">Portal Informasi</h2>
          <h1 class="hero-welcome-main">
            SM<span class="highlight-blue-box">K NE</span>GERI 1<br />
            RANGKASBITUNG
          </h1>

          <!-- Kurikulum Merdeka Logos -->
          <div class="curriculum-banner-logos">
            <img src="${schoolInfo.logoKurikulum}" alt="Kurikulum Merdeka" />
          </div>
        </div>

      </div>
    </section>

    <!-- Bottom Quick Navigation Bar -->
    <section class="quick-nav-bar">
      <div class="container">
        <div class="quick-nav-grid">
          <div class="quick-nav-item" onclick="window.location.hash='#profil'">
            <span class="quick-nav-icon">👥</span>
            <span class="quick-nav-label">Siswa & Alumni</span>
          </div>

          <div class="quick-nav-item" onclick="window.location.hash='#profil'">
            <span class="quick-nav-icon">👨‍🏫</span>
            <span class="quick-nav-label">Guru & Staf</span>
          </div>

          <div class="quick-nav-item" onclick="window.location.hash='#jurusan'">
            <span class="quick-nav-icon">🏢</span>
            <span class="quick-nav-label">7 Konsentrasi Keahlian</span>
          </div>

          <div class="quick-nav-item" onclick="window.location.hash='#kontak'">
            <span class="quick-nav-icon">⚙️</span>
            <span class="quick-nav-label">PPDB & SPMB Digital</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
