import { galleryData } from '../data/gallery.js';

export function renderGallerySection() {
  return `
    <section class="section-padding" style="background-color: var(--bg-alt);" id="galeri-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Dokumentasi</span>
          <h2 class="section-title">Galeri Kegiatan & Fasilitas</h2>
          <p class="section-description">
            Potret kehidupan kampus, fasilitas lab modern, dan momen berkesan di SMKN 1 Rangkasbitung.
          </p>
        </div>

        <div class="grid-3">
          ${galleryData.map(item => `
            <div class="card" style="overflow: hidden; cursor: pointer;">
              <div style="height: 240px; overflow: hidden; position: relative;">
                <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; transition: var(--transition-slow);" />
                <span class="badge badge-primary" style="position: absolute; top: 1rem; left: 1rem;">${item.category}</span>
              </div>
              <div style="padding: 1.25rem;">
                <h4 style="font-size: 1rem; color: var(--primary); margin-bottom: 0.25rem;">${item.title}</h4>
                <p style="font-size: 0.85rem; color: var(--text-muted);">${item.caption}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
