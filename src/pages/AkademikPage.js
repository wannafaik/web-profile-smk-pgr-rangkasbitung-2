import { newsData } from '../data/news.js';
import { ekstrasData } from '../data/ekstras.js';
import { getBasePath, assetUrl } from '../js/utils.js';

export function renderAkademikPage(subView = 'all') {
  const base = getBasePath();

  return `
    <div class="akademik-page">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Informasi Akademik & Kesiswaan</h1>
          <div class="breadcrumb">
            <a href="${base}index.html">Beranda</a>
            <span class="breadcrumb-separator">/</span>
            <a href="${base}akademik/index.html" style="color:white; text-decoration:none;">Informasi Akademik</a>
          </div>
        </div>
      </div>

      <div class="container section-padding">
        
        <!-- Sub-navigation Tabs -->
        <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; margin-bottom:3rem;">
          <a href="${base}akademik/prestasi-siswa/index.html" class="btn ${subView === 'prestasi' ? 'btn-primary' : 'btn-outline'} btn-sm">Prestasi Siswa</a>
          <a href="${base}akademik/teaching-factory/index.html" class="btn ${subView === 'teaching-factory' ? 'btn-primary' : 'btn-outline'} btn-sm">Teaching Factory (TEFA)</a>
          <a href="${base}akademik/ekstrakurikuler/index.html" class="btn ${subView === 'ekstrakurikuler' ? 'btn-primary' : 'btn-outline'} btn-sm">Ekstrakurikuler</a>
          <a href="${base}akademik/kalender-pendidikan/index.html" class="btn ${subView === 'kalender-pendidikan' ? 'btn-primary' : 'btn-outline'} btn-sm">Kalender Pendidikan</a>
        </div>

        <!-- Section 1: Prestasi Siswa -->
        <div id="prestasi" style="margin-bottom: 4rem;">
          <div class="section-header">
            <span class="section-subtitle">Kebanggaan SKENSA</span>
            <h2 class="section-title">Prestasi Siswa Tingkat Provinsi & Nasional</h2>
          </div>
          <div class="grid-3">
            ${newsData.filter(n => n.category === 'Prestasi' || true).map(n => `
              <div class="card">
                <img src="${assetUrl(n.image)}" alt="${n.title}" style="width:100%; height:200px; object-fit:cover;" />
                <div style="padding:1.5rem;">
                  <span class="badge badge-primary mb-2">${n.category}</span>
                  <h3 style="font-size:1.1rem; color:var(--primary); margin-bottom:0.5rem;">${n.title}</h3>
                  <p style="font-size:0.9rem; color:var(--text-muted);">${n.excerpt}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section 2: Teaching Factory (TEFA) -->
        <div id="teaching-factory" class="card" style="padding: 3rem; margin-bottom: 4rem; border-top: 5px solid var(--primary);">
          <h2 style="color: var(--primary); margin-bottom: 1rem;">🏭 Teaching Factory (TEFA) SKENSA</h2>
          <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem;">
            Teaching Factory adalah model pembelajaran berbasis produksi/jasa yang mengacu pada standar dan prosedur yang berlaku di industri. Siswa SMKN 1 Rangkasbitung terlibat langsung dalam proyek produksi nyata seperti cetak digital DKV, pembuatan roti bakery Kuliner, hingga perakitan perangkat TJKT.
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
            <div style="background: var(--bg-alt); padding: 1.25rem; border-radius: 12px; text-align: center;">
              <span style="font-size: 2rem;">🖨️</span>
              <h4 style="margin-top:0.5rem; color:var(--primary);">DKV Creative Studio</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">Jasa desain grafis, spanduk, & produk cetak</p>
            </div>
            <div style="background: var(--bg-alt); padding: 1.25rem; border-radius: 12px; text-align: center;">
              <span style="font-size: 2rem;">🍞</span>
              <h4 style="margin-top:0.5rem; color:var(--primary);">SKENSA Bakery & Resto</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">Produksi kue, kue kering, & katering sekolah</p>
            </div>
            <div style="background: var(--bg-alt); padding: 1.25rem; border-radius: 12px; text-align: center;">
              <span style="font-size: 2rem;">💻</span>
              <h4 style="margin-top:0.5rem; color:var(--primary);">TJKT Network Hub</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">Jasa maintenance Komputer & Fiber Optic</p>
            </div>
          </div>
        </div>

        <!-- Section 3: Ekstrakurikuler -->
        <div id="ekstrakurikuler" style="margin-bottom: 4rem;">
          <div class="section-header">
            <span class="section-subtitle">Pengembangan Bakat</span>
            <h2 class="section-title">Daftar Ekstrakurikuler Siswa</h2>
          </div>
          <div class="grid-4">
            ${ekstrasData.map(e => `
              <div class="card" style="padding:1.5rem; text-align:center;">
                <div style="font-size:2.5rem; margin-bottom:0.5rem;">${e.icon}</div>
                <h4 style="color:var(--primary); margin-bottom:0.25rem;">${e.name}</h4>
                <span class="badge badge-secondary mb-2">${e.category}</span>
                <p style="font-size:0.85rem; color:var(--text-muted);">${e.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section 4: Kalender Pendidikan -->
        <div id="kalender-pendidikan" class="card" style="padding: 2.5rem;">
          <h3 style="color:var(--primary); margin-bottom:1rem;">📅 Kalender Akademik Tahun Ajaran 2026/2027</h3>
          <ul style="display:flex; flex-direction:column; gap:1rem; list-style:none; padding:0;">
            <li style="display:flex; justify-content:space-between; padding:0.75rem 1rem; background:var(--bg-alt); border-radius:8px;">
              <strong>Penerimaan Peserta Didik Baru (PPDB)</strong>
              <span class="badge badge-primary">Mei - Juni 2026</span>
            </li>
            <li style="display:flex; justify-content:space-between; padding:0.75rem 1rem; background:var(--bg-alt); border-radius:8px;">
              <strong>Masa Pengenalan Lingkungan Sekolah (MPLS)</strong>
              <span class="badge badge-primary">15 - 18 Juli 2026</span>
            </li>
            <li style="display:flex; justify-content:space-between; padding:0.75rem 1rem; background:var(--bg-alt); border-radius:8px;">
              <strong>Ujian Tengah Semester (PTS) Ganjil</strong>
              <span class="badge badge-secondary">Oktober 2026</span>
            </li>
            <li style="display:flex; justify-content:space-between; padding:0.75rem 1rem; background:var(--bg-alt); border-radius:8px;">
              <strong>Pameran Proyek P5 Kurikulum Merdeka</strong>
              <span class="badge badge-primary">Desember 2026</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  `;
}
