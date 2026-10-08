export function renderWhyUsSection() {
  return `
    <section class="why-us-section" id="why-us-section">
      <div class="container">
        
        <!-- Section Header -->
        <div class="why-us-header">
          <h2 class="why-us-title">Kenapa harus sekolah di SMK Negeri 1 Rangkasbitung?</h2>
          <div class="why-us-stars">
            <span class="star-icon">★</span>
            <span class="star-icon">★</span>
            <span class="star-icon">★</span>
            <span class="star-icon">★</span>
            <span class="star-icon">★</span>
          </div>
        </div>

        <!-- Green Curved Container Card -->
        <div class="why-us-card-wrapper">
          <div class="why-us-card">
            <div class="why-us-grid">
              
              <!-- Column 1: Status & Program -->
              <div class="why-us-col" id="why-us-col-1" data-type="status" title="Status Sekolah & Program Keahlian">
                <div class="why-us-icon-frame">
                  <svg class="why-us-svg-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.69 2 6 4.69 6 8C6 11.31 8.69 14 12 14C15.31 14 18 11.31 18 8C18 4.69 15.31 2 12 2ZM12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12ZM10.5 15.5L4 22L5.5 20.5L9 21.5L12 18.5L15 21.5L18.5 20.5L20 22L13.5 15.5C13.04 15.82 12.53 16 12 16C11.47 16 10.96 15.82 10.5 15.5Z"/>
                  </svg>
                </div>
                <h3 class="why-us-col-title">Status Sekolah & Program Keahlian</h3>
                <div class="why-us-yellow-divider"></div>
                <p class="why-us-col-text">
                  SMKN 1 Rangkasbitung merupakan sekolah terakreditasi A dan telah ditetapkan sebagai SMK Pusat Keunggulan oleh Kemendikbudristek. Dengan delapan program keahlian yang relevan dengan kebutuhan dunia kerja.
                </p>
              </div>

              <!-- Column 2: Guru & Mutu -->
              <div class="why-us-col" id="why-us-col-2" data-type="guru" title="Kompetensi Guru dan Mutu Pembelajaran">
                <div class="why-us-icon-frame">
                  <svg class="why-us-svg-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
                  </svg>
                </div>
                <h3 class="why-us-col-title">Kompetensi Guru dan Mutu Pembelajaran</h3>
                <div class="why-us-yellow-divider"></div>
                <p class="why-us-col-text">
                  Proses pembelajaran didukung oleh tenaga pendidik yang kompeten, bersertifikasi nasional, dan berdedikasi tinggi. Setiap guru terus mengembangkan diri agar mampu menghadirkan pendidikan yang bermutu, berkarakter, dan adaptif terhadap perkembangan zaman.
                </p>
              </div>

              <!-- Column 3: Prestasi & Industri -->
              <div class="why-us-col" id="why-us-col-3" data-type="industri" title="Prestasi & Konektivitas Industri">
                <div class="why-us-icon-frame">
                  <svg class="why-us-svg-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 22H2V10L10 15V10L18 15V2H22V22ZM12 4.5L14 3.5V6.5L12 5.5V4.5ZM4 12V20H8V12H4ZM10 17V20H14V17H10ZM16 17V20H20V17H16Z"/>
                  </svg>
                </div>
                <h3 class="why-us-col-title">Prestasi & Konektivitas Industri</h3>
                <div class="why-us-yellow-divider"></div>
                <p class="why-us-col-text">
                  Siswa SMKN 1 Rangkasbitung secara konsisten meraih prestasi di berbagai ajang bergengsi seperti LKS, O2SN, FLS2N, dan lomba vokasi tingkat provinsi. Selain itu, sekolah ini memiliki kemitraan kuat dengan dunia usaha dan industri melalui program magang, teaching factory, dan penyaluran kerja bagi lulusan.
                </p>
              </div>

            </div>
          </div>

          <!-- Bottom Decorative Wave Shape -->
          <div class="why-us-wave-bottom">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="#ffffff"></path>
            </svg>
          </div>
        </div>

      </div>
    </section>
  `;
}
