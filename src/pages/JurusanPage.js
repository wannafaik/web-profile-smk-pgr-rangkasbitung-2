import { jurusanData } from '../data/jurusan.js';
import { getBasePath, assetUrl } from '../js/utils.js';

export function renderJurusanPage(selectedCode = null) {
  const base = getBasePath();

  const jurusanFolderMap = {
    tjkt: 'teknik-komputer-jaringan',
    kuliner: 'kuliner-tata-boga',
    mplb: 'manajemen-perkantoran',
    akl: 'akuntansi-keuangan-lembaga',
    pemasaran: 'bisnis-daring-pemasaran',
    dkv: 'desain-komunikasi-visual',
    perfilman: 'broadcasting-perfilman'
  };

  return `
    <div class="jurusan-page">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Konsentrasi Keahlian / Program Studi</h1>
          <div class="breadcrumb">
            <a href="${base}index.html">Beranda</a>
            <span class="breadcrumb-separator">/</span>
            <a href="${base}jurusan/index.html" style="color:white; text-decoration:none;">Jurusan</a>
          </div>
        </div>
      </div>

      <div class="container section-padding">
        
        <!-- Jurusan Selection Filter Pills -->
        <div style="display:flex; justify-content:center; gap:0.5rem; flex-wrap:wrap; margin-bottom:3.5rem;">
          <a href="${base}jurusan/index.html" class="btn ${!selectedCode ? 'btn-primary' : 'btn-outline'} btn-sm">Semua Jurusan (7)</a>
          ${jurusanData.map(j => `
            <a href="${base}jurusan/${jurusanFolderMap[j.id]}/index.html" class="btn ${selectedCode === j.id ? 'btn-primary' : 'btn-outline'} btn-sm">${j.code}</a>
          `).join('')}
        </div>

        <!-- Major Cards List -->
        <div style="display:flex; flex-direction:column; gap:3rem;">
          ${jurusanData.filter(j => !selectedCode || j.id === selectedCode).map(j => `
            <div class="card" id="jurusan-${j.id}" style="padding: 2.5rem; border-left: 8px solid ${j.badgeColor};">
              <div style="display:grid; grid-template-columns: 320px 1fr; gap: 2.5rem; align-items: flex-start;">
                <div>
                  <img src="${assetUrl(j.heroImage)}" alt="${j.name}" style="width:100%; height:220px; object-fit:cover; border-radius:16px; box-shadow:var(--shadow-md);" />
                  <div style="text-align:center; margin-top:1.25rem;">
                    <span class="badge badge-primary" style="font-size:1rem; padding:0.4rem 1.25rem;">Kode: ${j.code}</span>
                  </div>
                </div>
                <div>
                  <h2 style="color:var(--primary); font-size:1.8rem; margin-bottom:0.75rem;">${j.name}</h2>
                  <p style="color:var(--text-muted); font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
                    ${j.fullDesc}
                  </p>

                  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div style="background:var(--bg-alt); padding:1.25rem; border-radius:12px;">
                      <h4 style="color:var(--primary); margin-bottom:0.75rem;">💼 Prospek Karir & Lulusan:</h4>
                      <ul style="padding-left:1.25rem; font-size:0.9rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.4rem;">
                        ${j.prospects.map(p => `<li>${p}</li>`).join('')}
                      </ul>
                    </div>

                    <div style="background:var(--bg-alt); padding:1.25rem; border-radius:12px;">
                      <h4 style="color:var(--primary); margin-bottom:0.75rem;">🛠️ Fasilitas Lab & Praktik:</h4>
                      <ul style="padding-left:1.25rem; font-size:0.9rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.4rem;">
                        ${j.facilities.map(f => `<li>${f}</li>`).join('')}
                      </ul>
                    </div>
                  </div>

                  <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html" class="btn btn-secondary btn-sm">Daftar Jurusan ${j.code} →</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </div>
  `;
}
