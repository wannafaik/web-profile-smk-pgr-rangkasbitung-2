import { getBasePath } from '../js/utils.js';

export function renderStrukturBanner() {
  const base = getBasePath();

  return `
    <section class="struktur-banner-section" id="struktur-banner-section">
      <div class="container" style="text-align: center;">
        <h2 class="struktur-banner-title">Struktur Organisasi</h2>
        <div style="margin-top: 1.25rem;">
          <a href="${base}profil/struktur-organisasi/index.html" class="btn-lihat-struktur">
            Lihat Selengkapnya Disini
          </a>
        </div>
      </div>
    </section>
  `;
}
