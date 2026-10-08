import { renderNavbar, setupNavbarEvents } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';
import { renderHomePage } from '../pages/HomePage.js';
import { renderProfilPage } from '../pages/ProfilPage.js';
import { renderAkademikPage } from '../pages/AkademikPage.js';
import { renderJurusanPage } from '../pages/JurusanPage.js';
import { renderLayananDigitalPage } from '../pages/LayananDigitalPage.js';
import { renderBkkPage } from '../pages/BkkPage.js';
import { renderBeritaPage } from '../pages/BeritaPage.js';
import { renderGaleriPage } from '../pages/GaleriPage.js';
import { renderKontakPage } from '../pages/KontakPage.js';
import { openModal, fixAssetPaths, getBasePath } from './utils.js';
import { schoolInfo } from '../data/school-info.js';
import { jurusanData } from '../data/jurusan.js';
import { newsData } from '../data/news.js';

// Comprehensive Router Mapping for every Navigation Bar & Dropdown Link
const routes = {
  // Home Page
  home: { title: 'Home - SMKN 1 RANGKASBITUNG', render: () => renderHomePage() },

  // Profil Sekolah & Sub-pages
  profil: { title: 'Profil Sekolah - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('all') },
  'sejarah-singkat': { title: 'Sejarah Singkat - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('sejarah') },
  sejarah: { title: 'Sejarah Singkat - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('sejarah') },
  'visi-misi': { title: 'Visi & Misi - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('visi-misi') },
  'sambutan-kepala-sekolah': { title: 'Sambutan Kepala Sekolah - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('sambutan') },
  'struktur-organisasi': { title: 'Struktur Organisasi - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('struktur') },
  'profil-adiwiyata': { title: 'Profil Adiwiyata - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('adiwiyata') },
  adiwiyata: { title: 'Profil Adiwiyata - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('adiwiyata') },

  // Informasi Akademik & Sub-pages
  akademik: { title: 'Informasi Akademik - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('all') },
  'prestasi-siswa': { title: 'Prestasi Siswa - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('prestasi') },
  prestasi: { title: 'Prestasi Siswa - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('prestasi') },
  'teaching-factory': { title: 'Teaching Factory - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('teaching-factory') },
  ekstrakurikuler: { title: 'Ekstrakurikuler - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('ekstrakurikuler') },
  'kalender-pendidikan': { title: 'Kalender Pendidikan - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('kalender-pendidikan') },

  // Konsentrasi Keahlian / Jurusan & Sub-pages
  jurusan: { title: 'Konsentrasi Keahlian - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage(null) },
  'teknik-komputer-jaringan': { title: 'Teknik Komputer Jaringan - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('tjkt') },
  'jurusan-tjkt': { title: 'Teknik Komputer Jaringan - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('tjkt') },
  'kuliner-tata-boga': { title: 'Kuliner / Tata Boga - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('kuliner') },
  'jurusan-kuliner': { title: 'Kuliner / Tata Boga - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('kuliner') },
  'manajemen-perkantoran': { title: 'Manajemen Perkantoran - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('mplb') },
  'jurusan-mplb': { title: 'Manajemen Perkantoran - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('mplb') },
  'akuntansi-keuangan-lembaga': { title: 'Akuntansi Keuangan Lembaga - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('akl') },
  'jurusan-akl': { title: 'Akuntansi Keuangan Lembaga - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('akl') },
  'bisnis-daring-pemasaran': { title: 'Bisnis Daring & Pemasaran - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('pemasaran') },
  'jurusan-pemasaran': { title: 'Bisnis Daring & Pemasaran - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('pemasaran') },
  'desain-komunikasi-visual': { title: 'Desain Komunikasi Visual - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('dkv') },
  'jurusan-dkv': { title: 'Desain Komunikasi Visual - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('dkv') },
  'broadcasting-perfilman': { title: 'Broadcasting & Perfilman - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('perfilman') },
  'jurusan-perfilman': { title: 'Broadcasting & Perfilman - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('perfilman') },

  // Layanan Digital
  'layanan-digital': { title: 'Layanan Digital - SMKN 1 RANGKASBITUNG', render: () => renderLayananDigitalPage('all') },
  'management-learning-system': { title: 'Management Learning System (MLS) - SMKN 1 RANGKASBITUNG', render: () => renderLayananDigitalPage('mls') },
  mls: { title: 'Management Learning System (MLS) - SMKN 1 RANGKASBITUNG', render: () => renderLayananDigitalPage('mls') },
  'sistem-penerimaan-murid-baru': { title: 'Sistem Penerimaan Murid Baru (SPMB) - SMKN 1 RANGKASBITUNG', render: () => renderLayananDigitalPage('spmb') },
  spmb: { title: 'Sistem Penerimaan Murid Baru (SPMB) - SMKN 1 RANGKASBITUNG', render: () => renderLayananDigitalPage('spmb') },

  // BKK & Karir
  bkk: { title: 'Bursa Kerja Khusus (BKK) - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('all') },
  'statistik-alumni': { title: 'Statistik Alumni - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-statistik') },
  'bkk-statistik': { title: 'Statistik Alumni - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-statistik') },
  'informasi-lowongan-pekerjaan': { title: 'Info Lowongan Kerja - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-loker') },
  'bkk-loker': { title: 'Info Lowongan Kerja - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-loker') },
  'kerja-sama-industri': { title: 'Kerja Sama Industri - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-dudi') },
  'bkk-dudi': { title: 'Kerja Sama Industri - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-dudi') },
  'pendataan-alumni': { title: 'Pendataan Alumni - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-alumni') },
  'bkk-alumni': { title: 'Pendataan Alumni - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-alumni') },

  // Berita, Galeri & Kontak
  berita: { title: 'Berita & Informasi - SMKN 1 RANGKASBITUNG', render: () => renderBeritaPage() },
  galeri: { title: 'Galeri Dokumentasi - SMKN 1 RANGKASBITUNG', render: () => renderGaleriPage() },
  kontak: { title: 'Kontak & PPDB - SMKN 1 RANGKASBITUNG', render: () => renderKontakPage() }
};

let autoSlideInterval = null;
let currentSlideIndex = 0;

export function initRouter() {
  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange();
}

function handleRouteChange() {
  const page = (document.body && document.body.getAttribute('data-page')) || 'home';
  const hash = window.location.hash.replace('#', '');
  
  let routeKey = page;
  if (hash && routes[hash]) {
    routeKey = hash;
  }
  if (!routes[routeKey]) {
    routeKey = 'home';
  }

  const targetRoute = routes[routeKey];
  document.title = targetRoute.title;

  const appContainer = document.getElementById('app');
  if (appContainer) {
    const rawHtml = `
      ${renderNavbar(page)}
      <main id="main-content">
        ${targetRoute.render()}
      </main>
      ${renderFooter()}
    `;

    appContainer.innerHTML = fixAssetPaths(rawHtml);

    setupNavbarEvents();
    attachDynamicListeners();
    if (page === 'home' || routeKey === 'home') {
      setupHeroSliderInteractions();
      setupStatsCounterAnimation();
    }

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }
}

function setupHeroSliderInteractions() {
  const prevBtn = document.getElementById('slider-prev-btn');
  const nextBtn = document.getElementById('slider-next-btn');
  const dots = document.querySelectorAll('.slider-dot');
  const sliderWrapper = document.getElementById('hero-slider-wrapper');

  if (autoSlideInterval) clearInterval(autoSlideInterval);

  function updateSlide(index) {
    currentSlideIndex = (index + jurusanData.length) % jurusanData.length;
    const img = document.getElementById('hero-student-img');
    const pill = document.getElementById('hero-jurusan-pill');

    if (img && pill) {
      img.style.opacity = '0';
      img.style.transform = 'scale(0.92)';
      setTimeout(() => {
        const base = getBasePath();
        const heroImg = jurusanData[currentSlideIndex].heroImage;
        img.src = heroImg.startsWith('http') ? heroImg : base + heroImg.replace(/^\.\//, '');
        img.alt = jurusanData[currentSlideIndex].name;
        pill.textContent = jurusanData[currentSlideIndex].name.toUpperCase();
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
      }, 150);
    }

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlideIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateSlide(currentSlideIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateSlide(currentSlideIndex + 1));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'));
      updateSlide(idx);
    });
  });

  if (sliderWrapper) {
    let touchStartX = 0;
    let touchEndX = 0;

    sliderWrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderWrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 40) {
        updateSlide(currentSlideIndex + 1);
      } else if (touchEndX - touchStartX > 40) {
        updateSlide(currentSlideIndex - 1);
      }
    }, { passive: true });
  }

  autoSlideInterval = setInterval(() => {
    updateSlide(currentSlideIndex + 1);
  }, 4000);
}

function setupStatsCounterAnimation() {
  const statCols = document.querySelectorAll('.skensa-stat-col');
  statCols.forEach(col => {
    col.addEventListener('mouseenter', () => {
      statCols.forEach(c => c.classList.remove('active'));
      col.classList.add('active');
    });
  });

  function animateCount(id, target, duration = 1500) {
    const el = document.getElementById(id);
    if (!el) return;
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += Math.ceil(target / 40);
      if (start >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = start;
      }
    }, stepTime);
  }

  setTimeout(() => {
    animateCount('stat-count-1', 1751);
    animateCount('stat-count-2', 90);
    animateCount('stat-count-3', 8);
  }, 300);
}

function attachDynamicListeners() {
  const base = getBasePath();
  const principalCircle = document.getElementById('principal-circle-frame');
  const principalCard = document.getElementById('principal-banner-card');
  
  if (principalCircle || principalCard) {
    const target = principalCircle || principalCard;
    target.addEventListener('click', () => {
      window.location.href = `${base}profil/sambutan-kepala-sekolah/index.html`;
    });
  }

  const searchBtn = document.getElementById('search-trigger-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      openModal(`
        <h3 style="color:var(--primary); margin-bottom:1rem;">🔍 Pencarian Portal SMKN 1 Rangkasbitung</h3>
        <input type="text" id="modal-search-input" placeholder="Ketik kata kunci (contoh: DKV, PPDB, Paskibra)..." style="width:100%; padding:0.85rem 1rem; border:2px solid var(--primary); border-radius:8px; font-size:1rem; margin-bottom:1rem;" />
        <div id="modal-search-results" style="max-height:300px; overflow-y:auto;">
          <p style="color:var(--text-muted);">Silakan ketik kata kunci untuk mencari jurusan, berita, atau informasi sekolah.</p>
        </div>
      `);

      setTimeout(() => {
        const input = document.getElementById('modal-search-input');
        const results = document.getElementById('modal-search-results');
        if (input && results) {
          input.focus();
          input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
              results.innerHTML = '<p style="color:var(--text-muted);">Silakan ketik kata kunci untuk mencari.</p>';
              return;
            }

            const matchedJurusan = jurusanData.filter(j => j.name.toLowerCase().includes(query) || j.code.toLowerCase().includes(query) || j.shortDesc.toLowerCase().includes(query));
            const matchedNews = newsData.filter(n => n.title.toLowerCase().includes(query) || n.content.toLowerCase().includes(query));

            let html = '';
            if (matchedJurusan.length > 0) {
              const jurusanFolderMap = {
                tjkt: 'teknik-komputer-jaringan',
                kuliner: 'kuliner-tata-boga',
                mplb: 'manajemen-perkantoran',
                akl: 'akuntansi-keuangan-lembaga',
                pemasaran: 'bisnis-daring-pemasaran',
                dkv: 'desain-komunikasi-visual',
                perfilman: 'broadcasting-perfilman'
              };
              html += `<h4 style="color:var(--primary); margin-top:0.5rem;">Jurusan (${matchedJurusan.length}):</h4>`;
              matchedJurusan.forEach(j => {
                const folder = jurusanFolderMap[j.id] || 'index.html';
                html += `<div style="padding:0.5rem 0; border-bottom:1px solid #eee;"><a href="${base}jurusan/${folder}/index.html" style="color:var(--primary); font-weight:bold; text-decoration:none;">${j.code} - ${j.name}</a></div>`;
              });
            }

            if (matchedNews.length > 0) {
              html += `<h4 style="color:var(--primary); margin-top:1rem;">Berita (${matchedNews.length}):</h4>`;
              matchedNews.forEach(n => {
                html += `<div style="padding:0.5rem 0; border-bottom:1px solid #eee;"><a href="${base}berita/index.html" style="color:var(--primary); font-weight:bold; text-decoration:none;">${n.title}</a> (${n.date})</div>`;
              });
            }

            if (matchedJurusan.length === 0 && matchedNews.length === 0) {
              html = '<p style="color:var(--text-muted);">Tidak ditemukan hasil yang cocok.</p>';
            }

            results.innerHTML = html;
          });
        }
      }, 100);
    });
  }

  document.querySelectorAll('.btn-jurusan-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      const item = jurusanData.find(j => j.id === id);
      if (item) {
        const itemHeroImg = item.heroImage.startsWith('http') ? item.heroImage : base + item.heroImage.replace(/^\.\//, '');
        openModal(`
          <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
            <span class="badge badge-primary" style="font-size:1rem; padding:0.4rem 1rem;">${item.code}</span>
            <h2 style="color:var(--primary); margin:0;">${item.name}</h2>
          </div>
          <img src="${itemHeroImg}" alt="${item.name}" style="width:100%; height:250px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem;" />
          <p style="font-size:1.05rem; color:var(--text-main); line-height:1.7; margin-bottom:1.5rem;">${item.fullDesc}</p>
          
          <h4 style="color:var(--primary); margin-bottom:0.75rem;">💼 Prospek Karir Lulusan:</h4>
          <ul style="padding-left:1.25rem; margin-bottom:1.5rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.5rem;">
            ${item.prospects.map(p => `<li>${p}</li>`).join('')}
          </ul>

          <h4 style="color:var(--primary); margin-bottom:0.75rem;">🛠️ Fasilitas Praktik & Laboratorium:</h4>
          <ul style="padding-left:1.25rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.5rem;">
            ${item.facilities.map(f => `<li>${f}</li>`).join('')}
          </ul>
        `);
      }
    });
  });

  document.querySelectorAll('.btn-news-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.getAttribute('data-id'));
      const item = newsData.find(n => n.id === id);
      if (item) {
        const newsImg = item.image.startsWith('http') ? item.image : base + item.image.replace(/^\.\//, '');
        openModal(`
          <span class="badge badge-primary" style="margin-bottom:0.75rem;">${item.category}</span>
          <h2 style="color:var(--primary); margin-bottom:0.5rem;">${item.title}</h2>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.25rem;">📅 ${item.date} | ✍️ ${item.author}</p>
          <img src="${newsImg}" alt="${item.title}" style="width:100%; height:280px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem;" />
          <div style="line-height:1.8; color:var(--text-main); font-size:1.05rem;">${item.content}</div>
        `);
      }
    });
  });

  // Why Us Section Column Click Modals
  document.querySelectorAll('.why-us-col').forEach(col => {
    col.addEventListener('click', (e) => {
      const type = e.currentTarget.getAttribute('data-type');
      if (type === 'status') {
        openModal(`
          <div style="text-align:center; margin-bottom:1rem;">
            <span class="badge badge-primary" style="font-size:1.1rem; padding:0.5rem 1.25rem;">🏅 Terakreditasi A & SMK Pusat Keunggulan</span>
          </div>
          <h2 style="color:var(--primary); text-align:center; margin-bottom:1rem;">Status Sekolah & 8 Program Keahlian</h2>
          <p style="color:var(--text-main); font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
            SMK Negeri 1 Rangkasbitung merupakan sekolah vokasi unggulan di Kabupaten Lebak yang telah meraih <strong>Akreditasi A (Unggul)</strong> dari BAN-S/M serta ditetapkan sebagai <strong>SMK Pusat Keunggulan (Center of Excellence)</strong> oleh Kemendikbudristek RI.
          </p>
          <h4 style="color:var(--primary); margin-bottom:0.75rem;">📚 8 Konsentrasi Keahlian Unggulan:</h4>
          <ul style="padding-left:1.25rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.5rem; margin-bottom:1.5rem;">
            <li><strong>TJKT</strong> - Teknik Komputer & Jaringan</li>
            <li><strong>Kuliner</strong> - Tata Boga & Bakery</li>
            <li><strong>MPLB</strong> - Manajemen Perkantoran & Layanan Bisnis</li>
            <li><strong>AKL</strong> - Akuntansi & Keuangan Lembaga</li>
            <li><strong>Pemasaran</strong> - Bisnis Daring & Retail</li>
            <li><strong>DKV</strong> - Desain Komunikasi Visual</li>
            <li><strong>Perfilman</strong> - Broadcasting & Produksi Film</li>
          </ul>
          <div style="text-align:center;">
            <a href="${base}jurusan/index.html" class="btn btn-primary" onclick="closeModal()">Eksplor Halaman Jurusan →</a>
          </div>
        `);
      } else if (type === 'guru') {
        openModal(`
          <div style="text-align:center; margin-bottom:1rem;">
            <span class="badge badge-secondary" style="font-size:1.1rem; padding:0.5rem 1.25rem;">👨‍🏫 90+ Tenaga Pendidik Sertifikasi</span>
          </div>
          <h2 style="color:var(--primary); text-align:center; margin-bottom:1rem;">Kompetensi Guru & Mutu Pembelajaran</h2>
          <p style="color:var(--text-main); font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
            Proses pembelajaran di SMKN 1 Rangkasbitung mengutamakan kualitas, kedisiplinan, dan pendekatan berbasis industri (<em>Project-Based Learning</em>).
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
            <div style="background:var(--bg-alt); padding:1rem; border-radius:10px;">
              <h5 style="color:var(--primary); margin-bottom:0.25rem;">Asesor Kompetensi</h5>
              <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">Guru teruji sebagai penguji lisensi LSP industri.</p>
            </div>
            <div style="background:var(--bg-alt); padding:1rem; border-radius:10px;">
              <h5 style="color:var(--primary); margin-bottom:0.25rem;">Magang Industri Guru</h5>
              <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">Pengembangan berkala di perusahaan nasional.</p>
            </div>
          </div>
          <div style="text-align:center;">
            <a href="${base}profil/index.html" class="btn btn-secondary" onclick="closeModal()">Lihat Profil Manajerial →</a>
          </div>
        `);
      } else if (type === 'industri') {
        openModal(`
          <div style="text-align:center; margin-bottom:1rem;">
            <span class="badge badge-primary" style="font-size:1.1rem; padding:0.5rem 1.25rem;">🏭 50+ DUDI Kemitraan Industri</span>
          </div>
          <h2 style="color:var(--primary); text-align:center; margin-bottom:1rem;">Prestasi & Konektivitas Industri (DUDI)</h2>
          <p style="color:var(--text-main); font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
            SKENSA Rangkasbitung memiliki jaringan kemitraan erat bersama Dunia Usaha & Dunia Industri (DUDI) untuk magang (PKL), unit produksi Teaching Factory, serta rekrutmen kerja lulusan.
          </p>
          <h4 style="color:var(--primary); margin-bottom:0.75rem;">🤝 Mitra Industri Strategis:</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.5rem;">
            <span class="badge badge-secondary">PT Astra Honda Motor</span>
            <span class="badge badge-secondary">Indomaret Group</span>
            <span class="badge badge-secondary">Telkom Indonesia</span>
            <span class="badge badge-secondary">Studio Multimedia Banten</span>
            <span class="badge badge-secondary">Bank Banten</span>
          </div>
          <div style="text-align:center;">
            <a href="${base}bkk/index.html" class="btn btn-primary" onclick="closeModal()">Buka Portal Bursa Kerja BKK →</a>
          </div>
        `);
      }
    });
  });
}
