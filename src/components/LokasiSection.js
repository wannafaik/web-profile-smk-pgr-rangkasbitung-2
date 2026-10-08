import { schoolInfo } from '../data/school-info.js';

export function renderLokasiSection() {
  return `
    <section class="lokasi-sekolah-section" id="lokasi-sekolah-section">
      <div class="container">
        
        <!-- Section Header -->
        <div class="lokasi-header">
          <h2 class="lokasi-title">Lokasi Sekolah</h2>
          <p class="lokasi-subtitle">Kunjungi Sekolah Kami Di Rangkasbitung, Banten</p>
        </div>

        <!-- 2 Column Layout (Contact Info + Interactive Google Map) -->
        <div class="lokasi-grid">
          
          <!-- Left Column: Informasi Kontak Card -->
          <div class="lokasi-info-card">
            <h3 class="lokasi-info-title">informasi Kontak</h3>
            <div class="lokasi-title-divider"></div>

            <div class="lokasi-info-group">
              <h4 class="lokasi-label">Alamat</h4>
              <p class="lokasi-text">${schoolInfo.contact.address}</p>
            </div>

            <div class="lokasi-info-group">
              <h4 class="lokasi-label">Telepon</h4>
              <p class="lokasi-text">${schoolInfo.contact.phone}</p>
            </div>

            <div class="lokasi-info-group">
              <h4 class="lokasi-label">Email</h4>
              <p class="lokasi-text">${schoolInfo.contact.email}</p>
            </div>

            <div class="lokasi-info-group">
              <h4 class="lokasi-label">Jam Operasional</h4>
              <div class="lokasi-jam-row">
                <span class="lokasi-text" style="margin:0;">Senin – Jumat</span>
                <span class="lokasi-jam-badge">07:00 – 15:30 WIB</span>
              </div>
            </div>

            <!-- Petunjuk Arah Button (Opens Interactive Google Maps Directions) -->
            <div class="lokasi-btn-container">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=SMK+Negeri+1+Rangkasbitung,+Jl.+Dewi+Sartika+No.61,+Rangkasbitung" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-petunjuk-arah"
              >
                <span>🚀 Petunjuk Arah</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Interactive Google Map Embed Frame -->
          <div class="lokasi-map-wrapper">
            <iframe 
              class="lokasi-map-iframe"
              src="https://maps.google.com/maps?q=SMK+Negeri+1+Rangkasbitung,+Jl.+Dewi+Sartika+No.61,+Muara+Ciujung+Timur,+Rangkasbitung,+Lebak,+Banten&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              title="Peta Lokasi SMKN 1 Rangkasbitung" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>

      </div>
    </section>
  `;
}
