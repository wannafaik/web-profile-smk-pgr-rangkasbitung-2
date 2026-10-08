import { schoolInfo } from '../data/school-info.js';

export function renderContactSection() {
  return `
    <section class="section-padding" id="kontak-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Hubungi Kami</span>
          <h2 class="section-title">Informasi Kontak & PPDB</h2>
          <p class="section-description">
            Punya pertanyaan mengenai pendaftaran siswa baru, kerjasama DUDI, atau kunjungan sekolah? Kami siap melayani Anda.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem;">
          <div class="contact-card-grid" style="display:flex; flex-direction:column; gap:1.5rem;">
            <div class="contact-info-item">
              <div class="contact-icon">📍</div>
              <div>
                <h4 style="color:var(--primary); margin-bottom:0.25rem;">Alamat Kampus</h4>
                <p style="color:var(--text-muted); font-size:0.95rem;">${schoolInfo.contact.address}</p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-icon">📞</div>
              <div>
                <h4 style="color:var(--primary); margin-bottom:0.25rem;">Telepon / Fax</h4>
                <p style="color:var(--text-muted); font-size:0.95rem;">${schoolInfo.contact.phone}</p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-icon">✉️</div>
              <div>
                <h4 style="color:var(--primary); margin-bottom:0.25rem;">Email Resmi</h4>
                <p style="color:var(--text-muted); font-size:0.95rem;">${schoolInfo.contact.email}</p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-icon">💬</div>
              <div>
                <h4 style="color:var(--primary); margin-bottom:0.25rem;">Helpdesk PPDB WhatsApp</h4>
                <p style="color:var(--text-muted); font-size:0.95rem;">${schoolInfo.contact.whatsapp}</p>
              </div>
            </div>
          </div>

          <div class="card" style="padding: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--primary);">Kirim Pesan</h3>
            <form id="contact-form" onsubmit="event.preventDefault(); alert('Terima kasih! Pesan Anda telah terkirim ke sekretariat SMKN 1 Rangkasbitung.');">
              <div style="margin-bottom: 1.25rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Nama Lengkap</label>
                <input type="text" required placeholder="Masukkan nama Anda" style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm);" />
              </div>

              <div style="margin-bottom: 1.25rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Email / WhatsApp</label>
                <input type="text" required placeholder="Alamat email atau nomor kontak" style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm);" />
              </div>

              <div style="margin-bottom: 1.25rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Subjek / Topik</label>
                <select style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
                  <option>Informasi PPDB (Pendaftaran Siswa Baru)</option>
                  <option>Kemitraan Perusahaan / Magang DUDI</option>
                  <option>Pertanyaan Umum</option>
                </select>
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Pesan Anda</label>
                <textarea rows="4" required placeholder="Tuliskan pesan Anda..." style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm);"></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%;">
                Kirim Pesan Kontak
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
