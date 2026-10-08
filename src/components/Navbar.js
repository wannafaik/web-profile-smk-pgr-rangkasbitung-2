import { schoolInfo } from '../data/school-info.js';
import { getBasePath, assetUrl } from '../js/utils.js';

export function renderNavbar(activeRoute = 'home') {
  const base = getBasePath();
  const logoSrc = assetUrl(schoolInfo.logo);

  return `
    <header class="skensa-header">
      <div class="container skensa-nav-container">
        <!-- Logo SKENSA BESTARI -->
        <a href="${base}index.html" class="skensa-logo-wrapper">
          <img src="${logoSrc}" alt="Logo SMKN 1 Rangkasbitung" class="skensa-logo-img" />
          <div class="skensa-logo-badge">
            <span class="skensa-tag-bestari">#SKENSA<span>BESTARI</span></span>
          </div>
        </a>

        <!-- Mobile Toggle Button -->
        <button class="mobile-toggle" id="mobile-toggle-btn" aria-label="Toggle Menu" style="color:white;">
          ☰
        </button>

        <!-- Navigation Bar Menu -->
        <nav>
          <ul class="skensa-nav-list nav-menu" id="nav-menu">
            <li class="skensa-nav-item">
              <a href="${base}index.html" class="skensa-nav-link ${activeRoute === 'home' ? 'active' : ''}">HOME</a>
            </li>

            <!-- Profil Sekolah Dropdown -->
            <li class="skensa-nav-item">
              <a href="${base}profil/index.html" class="skensa-nav-link ${['profil', 'sejarah-singkat', 'visi-misi', 'sambutan-kepala-sekolah', 'struktur-organisasi', 'profil-adiwiyata'].includes(activeRoute) ? 'active' : ''}">
                PROFIL SEKOLAH <span class="dropdown-arrow">▼</span>
              </a>
              <ul class="skensa-dropdown">
                <li class="skensa-dropdown-item"><a href="${base}profil/sejarah-singkat/index.html">Sejarah Singkat</a></li>
                <li class="skensa-dropdown-item"><a href="${base}profil/visi-misi/index.html">Visi & Misi</a></li>
                <li class="skensa-dropdown-item"><a href="${base}profil/sambutan-kepala-sekolah/index.html">Sambutan Kepala Sekolah</a></li>
                <li class="skensa-dropdown-item"><a href="${base}profil/struktur-organisasi/index.html">Struktur Organisasi</a></li>
                <li class="skensa-dropdown-item"><a href="${base}profil/profil-adiwiyata/index.html">Profil Adiwiyata</a></li>
              </ul>
            </li>

            <!-- Informasi Akademik Dropdown -->
            <li class="skensa-nav-item">
              <a href="${base}akademik/index.html" class="skensa-nav-link ${['akademik', 'prestasi-siswa', 'teaching-factory', 'ekstrakurikuler', 'kalender-pendidikan'].includes(activeRoute) ? 'active' : ''}">
                INFORMASI AKADEMIK <span class="dropdown-arrow">▼</span>
              </a>
              <ul class="skensa-dropdown">
                <li class="skensa-dropdown-item"><a href="${base}akademik/prestasi-siswa/index.html">Prestasi Siswa</a></li>
                <li class="skensa-dropdown-item"><a href="${base}akademik/teaching-factory/index.html">Teaching Factory</a></li>
                <li class="skensa-dropdown-item"><a href="${base}akademik/ekstrakurikuler/index.html">Ekstrakurikuler</a></li>
                <li class="skensa-dropdown-item"><a href="${base}akademik/kalender-pendidikan/index.html">Kalender Pendidikan</a></li>
              </ul>
            </li>

            <!-- Jurusan Dropdown -->
            <li class="skensa-nav-item">
              <a href="${base}jurusan/index.html" class="skensa-nav-link ${['jurusan', 'teknik-komputer-jaringan', 'kuliner-tata-boga', 'manajemen-perkantoran', 'akuntansi-keuangan-lembaga', 'bisnis-daring-pemasaran', 'desain-komunikasi-visual', 'broadcasting-perfilman'].includes(activeRoute) ? 'active' : ''}">
                JURUSAN <span class="dropdown-arrow">▼</span>
              </a>
              <ul class="skensa-dropdown">
                <li class="skensa-dropdown-item"><a href="${base}jurusan/teknik-komputer-jaringan/index.html">Teknik Komputer Jaringan</a></li>
                <li class="skensa-dropdown-item"><a href="${base}jurusan/kuliner-tata-boga/index.html">Kuliner / Tata Boga</a></li>
                <li class="skensa-dropdown-item"><a href="${base}jurusan/manajemen-perkantoran/index.html">Manajemen Perkantoran</a></li>
                <li class="skensa-dropdown-item"><a href="${base}jurusan/akuntansi-keuangan-lembaga/index.html">Akuntansi Keuangan Lembaga</a></li>
                <li class="skensa-dropdown-item"><a href="${base}jurusan/bisnis-daring-pemasaran/index.html">Bisnis Daring & Pemasaran</a></li>
                <li class="skensa-dropdown-item"><a href="${base}jurusan/desain-komunikasi-visual/index.html">Desain Komunikasi Visual</a></li>
                <li class="skensa-dropdown-item"><a href="${base}jurusan/broadcasting-perfilman/index.html">Broadcasting dan Perfilman</a></li>
              </ul>
            </li>

            <!-- Layanan Digital Dropdown -->
            <li class="skensa-nav-item">
              <a href="${base}layanan-digital/index.html" class="skensa-nav-link ${['layanan-digital', 'management-learning-system', 'sistem-penerimaan-murid-baru'].includes(activeRoute) ? 'active' : ''}">
                LAYANAN DIGITAL <span class="dropdown-arrow">▼</span>
              </a>
              <ul class="skensa-dropdown">
                <li class="skensa-dropdown-item"><a href="${base}layanan-digital/management-learning-system/index.html">Management Learning System (MLS)</a></li>
                <li class="skensa-dropdown-item"><a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html">Sistem Penerimaan Murid Baru (SPMB)</a></li>
              </ul>
            </li>

            <!-- BKK Dropdown -->
            <li class="skensa-nav-item">
              <a href="${base}bkk/index.html" class="skensa-nav-link ${['bkk', 'statistik-alumni', 'informasi-lowongan-pekerjaan', 'kerja-sama-industri', 'pendataan-alumni'].includes(activeRoute) ? 'active' : ''}">
                BKK <span class="dropdown-arrow">▼</span>
              </a>
              <ul class="skensa-dropdown">
                <li class="skensa-dropdown-item"><a href="${base}bkk/statistik-alumni/index.html">Statistik Alumni</a></li>
                <li class="skensa-dropdown-item"><a href="${base}bkk/informasi-lowongan-pekerjaan/index.html">Informasi Lowongan Pekerjaan</a></li>
                <li class="skensa-dropdown-item"><a href="${base}bkk/kerja-sama-industri/index.html">Kerja Sama Industri</a></li>
                <li class="skensa-dropdown-item"><a href="${base}bkk/pendataan-alumni/index.html">Pendataan Alumni</a></li>
              </ul>
            </li>

            <!-- Berita Link -->
            <li class="skensa-nav-item">
              <a href="${base}berita/index.html" class="skensa-nav-link ${activeRoute === 'berita' ? 'active' : ''}">BERITA</a>
            </li>

            <!-- Search Trigger -->
            <li class="skensa-nav-item">
              <button class="search-trigger-btn" id="search-trigger-btn" title="Cari Informasi">
                🔍
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

export function setupNavbarEvents() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const menu = document.getElementById('nav-menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
}
