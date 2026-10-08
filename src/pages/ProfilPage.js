import { schoolInfo } from '../data/school-info.js';
import { getBasePath, assetUrl } from '../js/utils.js';

export function renderProfilPage(subView = 'all') {
  const base = getBasePath();
  const principalImg = assetUrl(schoolInfo.principal.image);

  return `
    <div class="profil-page">
      <!-- Dedicated Page Header -->
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Profil Sekolah & Kelembagaan</h1>
          <div class="breadcrumb">
            <a href="${base}index.html">Beranda</a>
            <span class="breadcrumb-separator">/</span>
            <a href="${base}profil/index.html" style="color:white; text-decoration:none;">Profil Sekolah</a>
          </div>
        </div>
      </div>

      <div class="container section-padding">

        <!-- Quick Sub-Navigation Menu -->
        <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; margin-bottom:3.5rem;">
          <a href="${base}profil/sambutan-kepala-sekolah/index.html" class="btn ${subView === 'sambutan' ? 'btn-primary' : 'btn-outline'} btn-sm">Sambutan Kepala Sekolah</a>
          <a href="${base}profil/sejarah-singkat/index.html" class="btn ${subView === 'sejarah' ? 'btn-primary' : 'btn-outline'} btn-sm">Sejarah Singkat</a>
          <a href="${base}profil/visi-misi/index.html" class="btn ${subView === 'visi-misi' ? 'btn-primary' : 'btn-outline'} btn-sm">Visi & Misi</a>
          <a href="${base}profil/struktur-organisasi/index.html" class="btn ${subView === 'struktur' ? 'btn-primary' : 'btn-outline'} btn-sm">Struktur Organisasi</a>
          <a href="${base}profil/profil-adiwiyata/index.html" class="btn ${subView === 'adiwiyata' ? 'btn-primary' : 'btn-outline'} btn-sm">Profil Adiwiyata</a>
        </div>
        
        <!-- 1. Sambutan Kepala Sekolah -->
        <div id="sambutan-kepala-sekolah" class="card" style="padding: 3.5rem 2.5rem; border-top: 6px solid var(--primary); margin-bottom: 4rem; box-shadow: var(--shadow-xl);">
          <div style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 2rem;">
            <div style="width: 150px; height: 150px; border-radius: 50%; border: 4px solid var(--primary); overflow: hidden; margin-bottom: 1rem; box-shadow: var(--shadow-lg);">
              <img src="${principalImg}" alt="${schoolInfo.principal.name}" style="width:100%; height:100%; object-fit:cover; object-position:top;" />
            </div>
            <h2 style="color: var(--primary); font-size: 2rem; margin-bottom: 0.25rem;">${schoolInfo.principal.welcomeTitle}</h2>
            <h4 style="color: var(--secondary-hover); font-weight: 700;">${schoolInfo.principal.name} (${schoolInfo.principal.title})</h4>
          </div>

          <div style="font-size: 1.1rem; line-height: 1.8; color: var(--text-main); white-space: pre-line; background: var(--bg-alt); padding: 2rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary);">
            ${schoolInfo.principal.welcomeText}
          </div>
        </div>

        <!-- 2. Sejarah Singkat -->
        <div id="sejarah" class="card" style="padding: 3rem; margin-bottom: 4rem;">
          <h2 style="color: var(--primary); margin-bottom: 1rem;">📜 Sejarah Singkat SMKN 1 Rangkasbitung</h2>
          <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem;">
            SMK Negeri 1 Rangkasbitung didirikan untuk menjawab kebutuhan tenaga kerja terampil dan profesional di Kabupaten Lebak, Provinsi Banten. Berdiri sejak puluhan tahun lalu, sekolah ini terus berkembang pesat dari sekolah kejuruan daerah menjadi <strong>Sekolah Pusat Keunggulan (Center of Excellence)</strong> nasional.
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
            <div style="background:var(--primary-light); padding:1.25rem; border-radius:12px;">
              <h4 style="color:var(--primary-dark); margin-bottom:0.25rem;">Pendirian Sekolah</h4>
              <p style="font-size:0.9rem; color:var(--text-main);">Menjadi sekolah kejuruan negeri pertama di Rangkasbitung.</p>
            </div>
            <div style="background:var(--secondary-light); padding:1.25rem; border-radius:12px;">
              <h4 style="color:var(--secondary-hover); margin-bottom:0.25rem;">Status Akreditasi</h4>
              <p style="font-size:0.9rem; color:var(--text-main);">Meraih Akreditasi Unggul (A) dari BAN-S/M.</p>
            </div>
            <div style="background:var(--accent-light); padding:1.25rem; border-radius:12px;">
              <h4 style="color:var(--accent); margin-bottom:0.25rem;">Sekolah Penggerak</h4>
              <p style="font-size:0.9rem; color:var(--text-main);">Penerapan Kurikulum Merdeka & Project Based Learning.</p>
            </div>
          </div>
        </div>

        <!-- 3. Visi & Misi -->
        <div id="visi-misi" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; margin-bottom: 4rem;">
          <div class="card" style="padding: 2.5rem; border-top: 5px solid var(--primary);">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">🎯 Visi Sekolah</h3>
            <p style="font-size: 1.1rem; color: var(--text-main); font-weight: 500; line-height: 1.6;">
              "${schoolInfo.vision}"
            </p>
          </div>

          <div class="card" style="padding: 2.5rem; border-top: 5px solid var(--secondary);">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">🚀 Misi Sekolah</h3>
            <ul style="padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; color: var(--text-muted);">
              ${schoolInfo.mission.map(m => `<li>${m}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- 4. Struktur Organisasi -->
        <div id="struktur-organisasi" class="card" style="padding: 3rem; margin-bottom: 4rem;">
          <h2 style="color: var(--primary); margin-bottom: 1.5rem; text-align:center;">🏛️ Struktur Organisasi & Manajerial Sekolah</h2>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1.5rem;">
            <div style="border:1px solid #eee; padding:1.25rem; border-radius:12px; text-align:center; background:#f9fafb;">
              <div style="font-size:2rem; margin-bottom:0.5rem;">👨‍💼</div>
              <h4 style="color:var(--primary);">${schoolInfo.principal.name}</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">Kepala Sekolah</p>
            </div>
            <div style="border:1px solid #eee; padding:1.25rem; border-radius:12px; text-align:center; background:#f9fafb;">
              <div style="font-size:2rem; margin-bottom:0.5rem;">📘</div>
              <h4 style="color:var(--primary);">Wakasek Kurikulum</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">Pengembangan Akademik & Pembelajaran</p>
            </div>
            <div style="border:1px solid #eee; padding:1.25rem; border-radius:12px; text-align:center; background:#f9fafb;">
              <div style="font-size:2rem; margin-bottom:0.5rem;">🚩</div>
              <h4 style="color:var(--primary);">Wakasek Kesiswaan</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">Pembinaan Karakter & Ekstrakurikuler</p>
            </div>
            <div style="border:1px solid #eee; padding:1.25rem; border-radius:12px; text-align:center; background:#f9fafb;">
              <div style="font-size:2rem; margin-bottom:0.5rem;">🤝</div>
              <h4 style="color:var(--primary);">Wakasek Humas & DUDI</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">Kemitraan Industri & BKK</p>
            </div>
          </div>
        </div>

        <!-- 5. Profil Adiwiyata -->
        <div id="adiwiyata" class="card" style="padding: 3rem; background: linear-gradient(135deg, #e8f7e9 0%, #ffffff 100%); border:2px solid #81cf8c;">
          <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;">
            <div style="font-size:4rem;">🌱</div>
            <div>
              <h2 style="color: #2d7d37; margin-bottom: 0.5rem;">Program Sekolah Adiwiyata Mandiri</h2>
              <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;">
                SMKN 1 Rangkasbitung berkomitmen menciptakan lingkungan sekolah yang bersih, hijau, dan berwawasan lingkungan hidup. Melalui gerakan pemilahan sampah organik/anorganik, pembuatan biopori, serta penghijauan area praktik.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}
