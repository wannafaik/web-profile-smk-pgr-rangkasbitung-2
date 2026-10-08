import { getBasePath } from '../js/utils.js';

export function renderLayananDigitalPage(subView = 'all') {
  const base = getBasePath();

  return `
    <div class="layanan-digital-page">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Layanan Digital & Sistem Informasi</h1>
          <div class="breadcrumb">
            <a href="${base}index.html">Beranda</a>
            <span class="breadcrumb-separator">/</span>
            <a href="${base}layanan-digital/index.html" style="color:white; text-decoration:none;">Layanan Digital</a>
          </div>
        </div>
      </div>

      <div class="container section-padding">
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; margin-bottom: 4rem;">
          
          <!-- Card 1: MLS (Management Learning System) -->
          <div class="card" style="padding: 2.5rem; border-top: 5px solid var(--primary);" id="mls">
            <div style="font-size: 3rem; margin-bottom: 1rem;">💻</div>
            <h2 style="color: var(--primary); margin-bottom: 0.75rem;">Management Learning System (MLS / LMS)</h2>
            <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
              Portal E-Learning terpadu SMKN 1 Rangkasbitung untuk akses materi pelajaran digital, tugas interaktif, jadwal ujian daring, dan rekapitulasi presensi siswa berbasis cloud.
            </p>
            <ul style="padding-left:1.25rem; color:var(--text-muted); margin-bottom:1.75rem; display:flex; flex-direction:column; gap:0.5rem;">
              <li>Materi Modul Ajar Kurikulum Merdeka</li>
              <li>Tugas & Quiz Online Real-time</li>
              <li>Bank Soal & Simulasi Ujian Asesmen</li>
            </ul>
            <a href="${base}layanan-digital/management-learning-system/index.html" class="btn btn-primary" style="text-decoration:none;">
              Masuk ke Portal MLS →
            </a>
          </div>

          <!-- Card 2: SPMB / PPDB Digital -->
          <div class="card" style="padding: 2.5rem; border-top: 5px solid var(--secondary);" id="spmb">
            <div style="font-size: 3rem; margin-bottom: 1rem;">📝</div>
            <h2 style="color: var(--primary); margin-bottom: 0.75rem;">Sistem Penerimaan Murid Baru (SPMB / PPDB)</h2>
            <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
              Portal pendaftaran peserta didik baru resmi SMKN 1 Rangkasbitung. Pelayanan verifikasi berkas online, upload dokumen tes fisik, serta pengumuman hasil seleksi 7 Konsentrasi Keahlian.
            </p>
            <ul style="padding-left:1.25rem; color:var(--text-muted); margin-bottom:1.75rem; display:flex; flex-direction:column; gap:0.5rem;">
              <li>Pendaftaran Jalur Prestasi & Zonasi</li>
              <li>Cek Status Kelulusan Berkas</li>
              <li>Download Panduan Pendaftaran & Formulir</li>
            </ul>
            <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html" class="btn btn-secondary" style="text-decoration:none;">
              Daftar PPDB Online Sekarang →
            </a>
          </div>

        </div>

      </div>
    </div>
  `;
}
