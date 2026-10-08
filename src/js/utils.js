export function getBasePath() {
  if (typeof document !== 'undefined' && document.body && document.body.hasAttribute('data-base')) {
    return document.body.getAttribute('data-base');
  }
  return './';
}

export function assetUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//') || path.startsWith('data:')) {
    return path;
  }
  const base = getBasePath();
  const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
  return `${base}${cleanPath}`;
}

export function fixAssetPaths(html) {
  const base = getBasePath();
  if (base === './') return html;
  return html
    .replace(/src="src\//g, `src="${base}src/`)
    .replace(/src="\.\/src\//g, `src="${base}src/`);
}

export function setupModalSystem() {
  let modalOverlay = document.getElementById('global-modal-overlay');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'global-modal-overlay';
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.display = 'none';
    modalOverlay.innerHTML = `
      <div class="modal-container">
        <button class="modal-close" id="modal-close-btn">&times;</button>
        <div id="modal-body-content"></div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
  }

  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Inject Floating Back-to-Top Button
  let scrollTopBtn = document.getElementById('scroll-top-btn');
  if (!scrollTopBtn) {
    scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scroll-top-btn';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '▲';
    scrollTopBtn.title = 'Kembali ke atas';
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
  }
}

export function openModal(htmlContent) {
  const overlay = document.getElementById('global-modal-overlay');
  const body = document.getElementById('modal-body-content');
  if (overlay && body) {
    body.innerHTML = fixAssetPaths(htmlContent);
    overlay.style.display = 'flex';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

export function closeModal() {
  const overlay = document.getElementById('global-modal-overlay');
  if (overlay) {
    overlay.style.display = 'none';
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
