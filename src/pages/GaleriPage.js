import { renderGallerySection } from '../components/GallerySection.js';
import { getBasePath } from '../js/utils.js';

export function renderGaleriPage() {
  const base = getBasePath();

  return `
    <div class="galeri-page">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Galeri Sekolah</h1>
          <div class="breadcrumb">
            <a href="${base}index.html">Beranda</a>
            <span class="breadcrumb-separator">/</span>
            <span>Galeri</span>
          </div>
        </div>
      </div>

      ${renderGallerySection()}
    </div>
  `;
}
