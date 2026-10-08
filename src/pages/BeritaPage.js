import { renderNewsSection } from '../components/NewsSection.js';
import { getBasePath } from '../js/utils.js';

export function renderBeritaPage() {
  const base = getBasePath();

  return `
    <div class="berita-page">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Berita & Informasi</h1>
          <div class="breadcrumb">
            <a href="${base}index.html">Beranda</a>
            <span class="breadcrumb-separator">/</span>
            <span>Berita & Informasi</span>
          </div>
        </div>
      </div>

      ${renderNewsSection()}
    </div>
  `;
}
