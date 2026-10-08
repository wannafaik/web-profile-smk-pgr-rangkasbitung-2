import { getBasePath, assetUrl } from '../js/utils.js';

export function renderPrestasiSection() {
  const base = getBasePath();

  return `
    <section class="prestasi-terbaru-section" id="prestasi-terbaru-section">
      <div class="container">
        
        <!-- Section Header Title & Subtitle -->
        <div class="prestasi-header">
          <h2 class="prestasi-title">Prestasi Terbaru</h2>
          <p class="prestasi-subtitle">Pencapaian Yang Membanggakan Dari SMKN 1 Rangkasbitung</p>
        </div>

        <!-- 3 Cards Grid -->
        <div class="prestasi-grid">
          
          <!-- Card 1: Pencak Silat -->
          <div class="prestasi-card">
            <div class="prestasi-img-wrapper">
              <img src="${assetUrl('src/assets/images/prestasi-silat.jpg')}" onerror="this.src='${assetUrl('src/assets/images/gedung-smk.jpg')}'" alt="Tim Pencak Silat SKENSA" class="prestasi-img" />
            </div>
            <div class="prestasi-body">
              <h3 class="prestasi-card-title">Tim Pencak Silat Meraih Juara Multatuli Silat Open tingkat Provinsi</h3>
              <p class="prestasi-card-desc">1 Medali Emas: Diraih oleh Cahaya Destriana 2 Medali Perak dan 6 Medali Perunggu</p>
            </div>
          </div>

          <!-- Card 2: Prestasi November -->
          <div class="prestasi-card">
            <div class="prestasi-img-wrapper">
              <img src="${assetUrl('src/assets/images/prestasi-november.jpg')}" onerror="this.src='${assetUrl('src/assets/images/gedung-smk.jpg')}'" alt="Prestasi November 2025" class="prestasi-img" />
            </div>
            <div class="prestasi-body">
              <h3 class="prestasi-card-title">Prestasi November 2025</h3>
              <p class="prestasi-card-desc">Raihan Prestasi di bulan November 2025</p>
            </div>
          </div>

          <!-- Card 3: Paskibraka -->
          <div class="prestasi-card">
            <div class="prestasi-img-wrapper">
              <img src="${assetUrl('src/assets/images/banner-paskibraka.png')}" onerror="this.src='${assetUrl('src/assets/images/gedung-smk.jpg')}'" alt="Lolos Seleksi Paskibraka 2025" class="prestasi-img" />
            </div>
            <div class="prestasi-body">
              <h3 class="prestasi-card-title">LOLOS SELEKSI PASKIBRAKA KABUPATEN & PROVINSI TAHUN 2025</h3>
              <p class="prestasi-card-desc">Sebanyak lima murid terpilih sebagai Paskibraka Kabupaten Lebak dan satu murid terpilih sebagai Paskibraka Provinsi Banten, tahun 2025.</p>
            </div>
          </div>

        </div>

        <!-- Bottom Pill Button -> Links directly to akademik/prestasi-siswa/index.html -->
        <div class="prestasi-btn-wrapper">
          <a href="${base}akademik/prestasi-siswa/index.html" class="btn-lihat-semua-prestasi">
            Lihat Semua Prestasi ➔
          </a>
        </div>

      </div>
    </section>
  `;
}
