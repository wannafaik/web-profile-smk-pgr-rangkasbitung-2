import { jurusanData } from '../data/jurusan.js';

export function renderJurusanSection(limit = null) {
  const items = limit ? jurusanData.slice(0, limit) : jurusanData;

  return `
    <section class="section-padding" id="jurusan-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Program Keahlian</span>
          <h2 class="section-title">7 Konsentrasi Keahlian Unggulan</h2>
          <p class="section-description">
            Kurikulum berbasis industri yang dirancang untuk membekali peserta didik dengan keahlian teknis dan karakter siap kerja.
          </p>
        </div>

        <div class="grid-3">
          ${items.map(jurusan => `
            <div class="card jurusan-card">
              <div class="jurusan-img-wrapper">
                <img src="${jurusan.heroImage}" alt="${jurusan.name}" class="jurusan-img" />
                <span class="jurusan-badge">${jurusan.code}</span>
              </div>
              <div class="jurusan-body">
                <h3 class="jurusan-title">${jurusan.name}</h3>
                <p class="jurusan-desc">${jurusan.shortDesc}</p>
                
                <div style="margin-bottom:1.25rem;">
                  <strong style="font-size:0.85rem; color:var(--text-muted); display:block; margin-bottom:0.5rem;">Prospek Karir:</strong>
                  <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
                    ${jurusan.prospects.slice(0, 3).map(p => `<span class="badge badge-secondary">${p}</span>`).join('')}
                  </div>
                </div>

                <button class="btn btn-outline btn-sm btn-jurusan-detail" data-id="${jurusan.id}">
                  Detail & Fasilitas →
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        ${limit ? `
          <div class="text-center mt-5">
            <a href="#jurusan" class="btn btn-primary">Lihat Seluruh 7 Jurusan</a>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}
