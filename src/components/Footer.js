import { schoolInfo } from '../data/school-info.js';
import { getBasePath, assetUrl } from '../js/utils.js';

export function renderFooter() {
  const base = getBasePath();

  return `
    <footer class="footer-skensa" id="footer-skensa">
      <!-- Main Green Footer Body -->
      <div class="footer-main-green">
        <div class="container footer-grid-3">
          
          <!-- Left Column: 3 Logos & Email -->
          <div class="footer-col-left">
            <div class="footer-logos-row">
              <img src="${assetUrl('src/assets/images/logo-banten.jpg')}" alt="Logo Provinsi Banten" class="footer-logo-img" />
              <img src="${assetUrl(schoolInfo.logo)}" alt="Logo SMKN 1 Rangkasbitung" class="footer-logo-img" />
              <img src="${assetUrl('src/assets/images/logo-smk-bisa.jpg')}" alt="Logo SMK Bisa Hebat" class="footer-logo-img" />
            </div>
            <div class="footer-email-text">
              <strong>Email:</strong> ${schoolInfo.contact.email}
            </div>
          </div>

          <!-- Middle Column: SPMB & News Links with Arrow Icons -->
          <div class="footer-col-center">
            <ul class="footer-announcement-list">
              <li>
                <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html">
                  <span class="arrow-icon">❯</span> PENGUMUMAN SPMB 2026 SMKN 1 RANGKASBITUNG
                </a>
              </li>
              <li>
                <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html">
                  <span class="arrow-icon">❯</span> Informasi Pengumpulan Berkas TKA
                </a>
              </li>
              <li>
                <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html">
                  <span class="arrow-icon">❯</span> PENGUMUMAN TES MINAT DAN BAKAT SISTEM PENERIMAAN MURID BARU (SPMB) SMK NEGERI 1 RANGKASBITUNG TAHUN PELAJARAN 2026/2027
                </a>
              </li>
              <li>
                <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html">
                  <span class="arrow-icon">❯</span> Sistem Penerimaan Murid Baru SMKN 1 Rangkasbitung Tahun Pelajaran 2026/2027
                </a>
              </li>
              <li>
                <a href="${base}berita/index.html">
                  <span class="arrow-icon">❯</span> PKK Mengajar 2026
                </a>
              </li>
            </ul>
          </div>

          <!-- Right Column: Humas SKENSA Badge & Staff Credit -->
          <div class="footer-col-right">
            <div class="humas-badge-wrapper">
              <img src="${assetUrl('src/assets/images/badge-humas-skensa.jpg')}" alt="HUMAS SMKN 1 Rangkasbitung" class="humas-badge-img" />
            </div>
            <div class="humas-credit-text">
              Dikelola Staff MSI & Murid 💚
            </div>
          </div>

        </div>
      </div>

      <!-- Dark Copyright Bar -->
      <div class="footer-bottom-dark">
        <div class="container footer-bottom-flex">
          <div class="footer-copyright-text">
            © 1966 - 2025 SMKN 1 Rangkasbitung All rights reserved.
          </div>
          <div class="footer-bottom-links">
            <a href="${base}kontak/index.html">Privacy</a>
            <span class="sep">|</span>
            <a href="${base}kontak/index.html">Terms</a>
            <span class="sep">|</span>
            <a href="${base}kontak/index.html">Disclaimer</a>
            <span class="sep">|</span>
            <a href="${base}kontak/index.html">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
