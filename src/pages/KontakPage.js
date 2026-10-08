import { renderContactSection } from '../components/ContactSection.js';
import { getBasePath } from '../js/utils.js';

export function renderKontakPage() {
  const base = getBasePath();

  return `
    <div class="kontak-page">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Kontak & PPDB</h1>
          <div class="breadcrumb">
            <a href="${base}index.html">Beranda</a>
            <span class="breadcrumb-separator">/</span>
            <span>Kontak & PPDB</span>
          </div>
        </div>
      </div>

      ${renderContactSection()}
    </div>
  `;
}
