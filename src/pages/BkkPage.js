import { getBasePath } from '../js/utils.js';

export function renderBkkPage(subView = 'all') {
  const base = getBasePath();

  return `
    <div class="bkk-page">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Bursa Kerja Khusus (BKK) & Tracer Study</h1>
          <div class="breadcrumb">
            <a href="${base}index.html">Beranda</a>
            <span class="breadcrumb-separator">/</span>
            <a href="${base}bkk/index.html" style="color:white; text-decoration:none;">BKK & Karir</a>
          </div>
        </div>
      </div>

      <div class="container section-padding">
        
        <!-- Sub-navigation Tabs -->
        <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; margin-bottom:3rem;">
          <a href="${base}bkk/statistik-alumni/index.html" class="btn ${subView === 'bkk-statistik' ? 'btn-primary' : 'btn-outline'} btn-sm">Statistik Alumni</a>
          <a href="${base}bkk/informasi-lowongan-pekerjaan/index.html" class="btn ${subView === 'bkk-loker' ? 'btn-primary' : 'btn-outline'} btn-sm">Info Lowongan Kerja</a>
          <a href="${base}bkk/kerja-sama-industri/index.html" class="btn ${subView === 'bkk-dudi' ? 'btn-primary' : 'btn-outline'} btn-sm">Kerja Sama Industri</a>
          <a href="${base}bkk/pendataan-alumni/index.html" class="btn ${subView === 'bkk-alumni' ? 'btn-primary' : 'btn-outline'} btn-sm">Pendataan Alumni</a>
        </div>

        <!-- Section 1: Statistik Alumni -->
        <div id="bkk-statistik" class="card" style="padding:3rem; margin-bottom:4rem; border-top:5px solid var(--primary);">
          <h2 style="color:var(--primary); margin-bottom:1rem;">📊 Penyaluran Kerja & Tracer Study Alumni</h2>
          <p style="color:var(--text-muted); font-size:1.05rem; margin-bottom:2rem;">
            Bursa Kerja Khusus (BKK) SMKN 1 Rangkasbitung secara aktif memfasilitasi lulusan untuk langsung terserap di Dunia Usaha dan Dunia Industri (DUDI), melanjutkan pendidikan tinggi, atau berwirausaha.
          </p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1.5rem; text-align:center;">
            <div style="background:var(--primary-light); padding:1.5rem; border-radius:12px;">
              <div style="font-size:2.5rem; font-weight:800; color:var(--primary-dark);">72%</div>
              <div style="font-weight:600; color:var(--text-main);">Bekerja di Industri / DUDI</div>
            </div>
            <div style="background:var(--secondary-light); padding:1.5rem; border-radius:12px;">
              <div style="font-size:2.5rem; font-weight:800; color:var(--secondary-hover);">18%</div>
              <div style="font-weight:600; color:var(--text-main);">Wirausaha Mandiri</div>
            </div>
            <div style="background:var(--accent-light); padding:1.5rem; border-radius:12px;">
              <div style="font-size:2.5rem; font-weight:800; color:var(--accent);">10%</div>
              <div style="font-weight:600; color:var(--text-main);">Lanjut Perguruan Tinggi</div>
            </div>
          </div>
        </div>

        <!-- Section 2: Info Lowongan Pekerjaan -->
        <div id="bkk-loker" style="margin-bottom:4rem;">
          <div class="section-header">
            <span class="section-subtitle">Peluang Karir</span>
            <h2 class="section-title">Informasi Lowongan Pekerjaan Terbaru</h2>
          </div>
          <div class="grid-3">
            <div class="card" style="padding:1.75rem;">
              <span class="badge badge-primary mb-2">PT Astra Honda Motor</span>
              <h3 style="color:var(--primary); font-size:1.15rem; margin-bottom:0.5rem;">Operator Produksi & Maintenance</h3>
              <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">Kualifikasi: Lulusan TJKT / Teknik Komputer / Otomotif. Usia maks 21 tahun.</p>
              <button class="btn btn-outline btn-sm" onclick="alert('Pendaftaran Loker dikirim via Helpdesk BKK SKENSA.');">Daftar Loker →</button>
            </div>

            <div class="card" style="padding:1.75rem;">
              <span class="badge badge-secondary mb-2">Indomaret Group</span>
              <h3 style="color:var(--primary); font-size:1.15rem; margin-bottom:0.5rem;">Store Crew & Merchandiser</h3>
              <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">Kualifikasi: Lulusan Pemasaran / MPLB / AKL. Penempatan Jabodetabek & Banten.</p>
              <button class="btn btn-outline btn-sm" onclick="alert('Pendaftaran Loker dikirim via Helpdesk BKK SKENSA.');">Daftar Loker →</button>
            </div>

            <div class="card" style="padding:1.75rem;">
              <span class="badge badge-primary mb-2">Studio Creative Multimedia</span>
              <h3 style="color:var(--primary); font-size:1.15rem; margin-bottom:0.5rem;">Junior Graphic & Video Editor</h3>
              <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">Kualifikasi: Lulusan DKV / Perfilman. Portofolio kreatif siap diuji.</p>
              <button class="btn btn-outline btn-sm" onclick="alert('Pendaftaran Loker dikirim via Helpdesk BKK SKENSA.');">Daftar Loker →</button>
            </div>
          </div>
        </div>

        <!-- Section 3: Pendataan Alumni -->
        <div id="bkk-alumni" class="card" style="padding:2.5rem; text-align:center;">
          <h3 style="color:var(--primary); margin-bottom:0.5rem;">🎓 Pengisian Tracer Study Alumni</h3>
          <p style="color:var(--text-muted); max-width:600px; margin:0 auto 1.5rem auto;">
            Bagi alumni SMKN 1 Rangkasbitung seluruh angkatan, mohon dapat mengisi formulir pendataan alumni untuk pemetaan kualitas lulusan.
          </p>
          <button class="btn btn-primary" onclick="alert('Mengarahkan ke Formulir Tracer Study Alumni SKENSA...');">
            Isi Formulir Pendataan Alumni →
          </button>
        </div>

      </div>
    </div>
  `;
}
