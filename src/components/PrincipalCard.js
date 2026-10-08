import { schoolInfo } from '../data/school-info.js';
import { getBasePath, assetUrl } from '../js/utils.js';

export function renderPrincipalCard() {
  const base = getBasePath();
  const principalImg = assetUrl(schoolInfo.principal.image);
  const fallbackImg = assetUrl("src/assets/images/gedung-smk.jpg");

  return `
    <section class="sambutan-section-wrapper" id="sambutan-sekolah-section">
      <div class="container">
        
        <!-- Heading Sambutan Kepala Sekolah -->
        <h2 class="sambutan-title-main">Sambutan Kepala Sekolah</h2>
        <div class="green-dash-underline">
          <span class="green-dash"></span>
          <span class="green-dash"></span>
          <span class="green-dash"></span>
        </div>

        <!-- Principal Photo Green Banner Card with Circular Photo Zoom -->
        <div class="principal-banner-card" id="principal-banner-card">
          <div class="principal-circle-frame" id="principal-circle-frame" title="Klik / Hover untuk memperbesar foto & membaca sambutan">
            <img src="${principalImg}" alt="${schoolInfo.principal.name}" class="principal-circle-img" />
          </div>
          <div class="principal-name-badge">
            ${schoolInfo.principal.name}
          </div>
        </div>

        <!-- Button Selengkapnya (Redirect to profil/sambutan-kepala-sekolah/index.html path) -->
        <div style="display:flex; justify-content:center; margin-top:1.5rem;">
          <a href="${base}profil/sambutan-kepala-sekolah/index.html" class="btn-selengkapnya" id="btn-selengkapnya-sambutan">
            Selengkapnya ➔
          </a>
        </div>

      </div>
    </section>

    <!-- Profil Sekolah Section Below Sambutan -->
    <section class="profil-sekolah-section">
      <div class="container">
        <h2 class="profil-sekolah-title">Profil Sekolah</h2>
        <p class="profil-sekolah-sub">Mengenal lebih dekat dengan SMK Negeri 1 Rangkasbitung melalui video profil kami</p>

        <!-- Laptop Video Mockup -->
        <div class="laptop-container">
          <div class="laptop-wrapper">
            <a href="${schoolInfo.profileVideoUrl}" target="_blank" rel="noopener noreferrer" class="laptop-body" id="video-laptop-body" style="display:block; text-decoration:none;" title="Klik untuk memutar video profil resmi SMKN 1 Rangkasbitung">
              
              <!-- Video Cover Poster Card -->
              <div class="video-cover-card" id="video-cover-card">
                <img src="https://img.youtube.com/vi/tbjHme-qPNQ/maxresdefault.jpg" onerror="this.src='${fallbackImg}'" alt="Profil SMKN 1 Rangkasbitung 2025" class="video-cover-img" />
                <div class="video-cover-overlay-dark"></div>

                <!-- Top Title Bar -->
                <div class="video-top-bar">
                  <span class="video-title-text">PROFIL SMKN 1 RANGKASBITUNG 2025</span>
                </div>

                <!-- Big Red YouTube Play Button -->
                <div class="video-play-btn-pulse" id="btn-play-video-trigger">
                  <svg viewBox="0 0 68 48" class="youtube-play-svg">
                    <path class="youtube-play-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#FF0000"></path>
                    <path d="M 45,24 27,14 27,34" fill="#FFFFFF"></path>
                  </svg>
                </div>

                <!-- Bottom Controls Bar Overlay -->
                <div class="video-bottom-controls">
                  <div class="video-progress-bar"><div class="video-progress-fill"></div></div>
                  <div class="video-controls-row">
                    <span class="control-icon">▶</span>
                    <span class="control-time">0:00 / 3:45</span>
                    <span class="control-badge">Tonton di YouTube ↗</span>
                  </div>
                </div>

              </div>

            </a>
            <div class="laptop-base"></div>
          </div>

          <!-- Action Button Below Laptop Mockup -->
          <div style="margin-top:1.5rem; display:flex; justify-content:center;">
            <a href="${schoolInfo.profileVideoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="border-radius:25px; padding:0.65rem 1.75rem; font-size:1rem; text-decoration:none; display:inline-flex; align-items:center; gap:0.5rem; box-shadow:0 6px 18px rgba(68,181,83,0.35);">
              <span>▶ Putar Video Resmi SMKN 1 Rangkasbitung</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
