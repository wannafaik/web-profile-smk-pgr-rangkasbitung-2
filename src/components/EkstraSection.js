import { ekstrasData } from '../data/ekstras.js';

export function renderEkstraSection() {
  return `
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Pengembangan Diri</span>
          <h2 class="section-title">Ekstrakurikuler SKENSA</h2>
          <p class="section-description">
            Wadah pembentukan minat, bakat, karakter kepemimpinan, dan kecerdasan sosial peserta didik.
          </p>
        </div>

        <div class="grid-4">
          ${ekstrasData.map(item => `
            <div class="card" style="padding: 1.5rem; text-align: center;">
              <div style="font-size: 2.75rem; margin-bottom: 0.75rem;">${item.icon}</div>
              <h3 style="font-size: 1.1rem; color: var(--primary); margin-bottom: 0.25rem;">${item.name}</h3>
              <span class="badge badge-secondary mb-3">${item.category}</span>
              <p style="font-size: 0.875rem; color: var(--text-muted);">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
