import { newsData } from '../data/news.js';

export function renderNewsSection(limit = null) {
  const items = limit ? newsData.slice(0, limit) : newsData;

  return `
    <section class="section-padding" style="background-color: var(--bg-alt);" id="berita-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Kabar SKENSA</span>
          <h2 class="section-title">Berita & Pengumuman Terbaru</h2>
          <p class="section-description">
            Ikuti perkembangan kegiatan, pengumuman penting, serta pencapaian prestasi akademik dan non-akademik.
          </p>
        </div>

        <div class="grid-3">
          ${items.map(news => `
            <div class="card">
              <div style="height: 200px; overflow: hidden; position: relative;">
                <img src="${news.image}" alt="${news.title}" style="width: 100%; height: 100%; object-fit: cover;" />
                <span class="badge badge-primary" style="position: absolute; top: 1rem; left: 1rem;">${news.category}</span>
              </div>
              <div style="padding: 1.5rem;">
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; display: flex; gap: 1rem;">
                  <span>📅 ${news.date}</span>
                  <span>✍️ ${news.author}</span>
                </div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.75rem; color: var(--primary); font-weight: 700; line-height: 1.3;">
                  ${news.title}
                </h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">
                  ${news.excerpt}
                </p>
                <button class="btn btn-outline btn-sm btn-news-modal" data-id="${news.id}">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
