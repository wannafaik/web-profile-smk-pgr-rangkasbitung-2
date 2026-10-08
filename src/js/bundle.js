/* ==========================================================================
   BUNDLE JS FOR LOCAL FILE PROTOCOL (FILE://) & FOLDER ROUTING COMPATIBILITY
   SMKN 1 RANGKASBITUNG WEB PORTAL (#SKENSABESTARI)
   ========================================================================== */

(function() {
  'use strict';

  // --- DATA LAYER ---
  const schoolInfo = {
    name: "SMK Negeri 1 Rangkasbitung",
    shortName: "SKENSA Rangkasbitung",
    npsn: "20601859",
    akreditasi: "A (Unggul)",
    tagline: "Unggul, Berkarakter, Berkarya, dan Berdaya Saing Global",
    logo: "src/assets/images/logo-smk.png",
    logoSkensa: "src/assets/images/logo-skensa.png",
    logoKurikulum: "src/assets/images/logo-kurikulum-merdeka.png",
    profileVideoUrl: "https://www.youtube.com/watch?v=tbjHme-qPNQ",
    profileVideoEmbedUrl: "https://www.youtube-nocookie.com/embed/tbjHme-qPNQ",
    principal: {
      name: "EDI RUSLANI, S.E., M.M.",
      title: "Kepala Sekolah SMKN 1 Rangkasbitung",
      image: "src/assets/images/kepala-sekolah.png",
      welcomeTitle: "Sambutan Kepala Sekolah",
      welcomeText: `Assalamu'alaikum Warahmatullahi Wabarakatuh,

Selamat datang di Portal Resmi SMK Negeri 1 Rangkasbitung. Sebagai institusi pendidikan kejuruan unggulan di Kabupaten Lebak, kami berkomitmen untuk melahirkan lulusan yang tidak hanya cerdas secara akademik, tetapi juga berkarakter mulia, memiliki keterampilan industri berstandar global, serta siap bersaing di dunia kerja maupun dunia usaha.

Melalui penerapan Kurikulum Merdeka dan dukungan fasilitas praktik yang modern, kami mengintegrasikan pembelajaran berbasis proyek (Project-Based Learning) serta kemitraan strategis bersama berbagai Dunia Usaha dan Dunia Industri (DUDI). 

Mari bersama mewujudkan masa depan generasi muda yang cemerlang, mandiri, dan berdaya saing tinggi.`,
    },
    stats: [
      { number: "1.850+", label: "Siswa Aktif", icon: "🎓" },
      { number: "95+", label: "Guru & Tenaga Pendidik", icon: "👨‍🏫" },
      { number: "7", label: "Konsentrasi Keahlian", icon: "💻" },
      { number: "50+", label: "Mitra Industri (DUDI)", icon: "🤝" },
    ],
    vision: "Menjadi Sekolah Menengah Kejuruan yang unggul, menghasilkan lulusan berakhlak mulia, kompeten, berjiwa wirausaha, serta berdaya saing di tingkat nasional dan internasional.",
    mission: [
      "Menyelenggarakan pendidikan kejuruan berlandaskan iman, takwa, dan budi pekerti luhur.",
      "Mengembangkan kurikulum yang responsif terhadap kebutuhan dunia kerja dan perkembangan teknologi.",
      "Meningkatkan kualitas SDM pendidik dan tenaga kependidikan secara berkelanjutan.",
      "Memperkuat kemitraan dengan Dunia Kerja (DUDI) dalam penyaluran lulusan & magang.",
      "Menyediakan sarana dan prasarana pembelajaran berbasis standar industri modern."
    ],
    contact: {
      address: "Jl. Dewi Sartika No. 61, Muara Ciujung Timur, Kec. Rangkasbitung, Kab. Lebak, Banten 42314",
      phone: "(0252) 201464",
      email: "info@smkn1rangkasbitung.sch.id",
      whatsapp: "+62 812-3456-7890",
      socials: {
        facebook: "https://facebook.com/smkn1rangkasbitung",
        instagram: "https://instagram.com/smkn1rangkasbitung",
        youtube: "https://youtube.com/@smkn1rangkasbitungofficial",
        tiktok: "https://tiktok.com/@smkn1rangkasbitung"
      }
    }
  };

  const jurusanData = [
    {
      id: "akl",
      code: "AKL",
      name: "Akuntansi Keuangan Lembaga",
      heroImage: "src/assets/images/jurusan-akl.webp",
      badgeColor: "#059669",
      shortDesc: "Mempelajari pencatatan transaksi keuangan, perpajakan, audit, serta sistem akuntansi komputer terpadu.",
      fullDesc: "Akuntansi dan Keuangan Lembaga (AKL) mendidik siswa memiliki keahlian dalam penyusunan laporan keuangan, perpajakan, pengelolaan kas perusahaan, serta pengoperasian software akuntansi komputer modern seperti MYOB dan Accurate.",
      prospects: [
        "Staff Akuntansi & Keuangan Perusahaan",
        "Tax Officer (Staff Perpajakan)",
        "Junior Auditor",
        "Teller & Customer Service Bank",
        "Wirausahawan Mandiri"
      ],
      facilities: ["Lab Bank Mini Sekolah", "Lab Komputer Akuntansi MYOB/Accurate", "Ruang Simulasi Finansial"]
    },
    {
      id: "dkv",
      code: "DKV",
      name: "Desain Komunikasi Visual",
      heroImage: "src/assets/images/jurusan-dkv.webp",
      badgeColor: "#8b5cf6",
      shortDesc: "Mempelajari desain grafis, ilustrasi, fotografi, videografi, serta komunikasi visual digital berstandar kreatif industri.",
      fullDesc: "Konsentrasi Keahlian Desain Komunikasi Visual (DKV) membekali siswa dengan kemampuan dalam bidang multimedia, desain grafis, animasi, UI/UX design, fotografi profesional, serta videografi dan editing. Didukung dengan laboratorium iMac dan PC spesifikasi tinggi.",
      prospects: [
        "Graphic Designer / Brand Specialist",
        "UI/UX & Web Designer",
        "Fotografer & Videografer Profesional",
        "Motion Graphic Animator",
        "Creative Content Creator & Social Media Specialist"
      ],
      facilities: ["Studio Fotografi & Podcast", "Lab Komputer Apple iMac", "Lab Desain & Tablet Grafis", "Printing & Merchandise Hub"]
    },
    {
      id: "tjkt",
      code: "TJKT",
      name: "Teknik Komputer & Jaringan",
      heroImage: "src/assets/images/jurusan-tjkt.webp",
      badgeColor: "#0284c7",
      shortDesc: "Mempelajari administrasi server, jaringan komputer (Cisco/MikroTik), kejahatan siber, serta teknologi fiber optic.",
      fullDesc: "Teknik Jaringan Komputer dan Telekomunikasi (TJKT / TKJ) mempersiapkan siswa menjadi ahli dalam merancang, mengonfigurasi, dan mengamankan jaringan komputer skala enterprise, cloud computing, serta perangkat telekomunikasi nirkabel dan serat optik.",
      prospects: [
        "Network Engineer / Network Administrator",
        "Cyber Security Specialist",
        "Cloud Infrastructure Engineer",
        "Fiber Optic Technician",
        "IT Support & System Administrator"
      ],
      facilities: ["Lab Jaringan Cisco & MikroTik", "Lab Fiber Optic & Server Cloud", "Lab Perakitan & Troubleshoot PC"]
    },
    {
      id: "mplb",
      code: "MPLB",
      name: "Manajemen Perkantoran",
      heroImage: "src/assets/images/jurusan-mplb.webp",
      badgeColor: "#d97706",
      shortDesc: "Mempelajari tata kelola administrasi digital, kehumasan, kearsipan elektronik, dan otomatisasi kantor modern.",
      fullDesc: "MPLB mempersiapkan tenaga kerja profesional di bidang tata kelola surat-menyurat elektronik, otomatisasi perkantoran digital, manajemen kearsipan, komunikasi publik, serta layanan pelanggan korporat.",
      prospects: [
        "Executive Administrative Assistant",
        "Public Relations (Humas) Staff",
        "Document Control & Archivist",
        "Customer Service Excellence Specialist"
      ],
      facilities: ["Lab Simulasi Office Automation", "Ruang Rapat Korporat", "Lab Kearsipan Digital"]
    },
    {
      id: "kuliner",
      code: "KL",
      name: "Kuliner / Tata Boga",
      heroImage: "src/assets/images/jurusan-kuliner.webp",
      badgeColor: "#f59e0b",
      shortDesc: "Mempelajari seni memasak (culinary arts), pembuatan pastry & bakery, manajemen katering, serta hygiene saniter.",
      fullDesc: "Konsentrasi Keahlian Kuliner mencakup teknik memasak masakan Nusantara dan Internasional, pembuatan roti dan kue (pastry & bakery), tata hidang (table service), serta kewirausahaan di industri makanan & minuman.",
      prospects: [
        "Chef / Commis Chef di Restoran & Hotel",
        "Pastry Chef & Baker",
        "Food Stylist & Culinary Creator",
        "Pemilik Usaha Catering & Restaurant"
      ],
      facilities: ["Kitchen Production Standard Hotel", "Pastry & Bakery Lab", "Restaurant Training Room"]
    },
    {
      id: "pemasaran",
      code: "PM",
      name: "Bisnis Daring & Pemasaran",
      heroImage: "src/assets/images/jurusan-pemasaran.webp",
      badgeColor: "#e11d48",
      shortDesc: "Mempelajari strategi pemasaran digital, e-commerce, live streaming sales, serta pengelolaan minimarket modern.",
      fullDesc: "Konsentrasi Pemasaran membekali peserta didik dengan strategi penjualan modern, digital marketing, pengoperasian toko ritel (Mini Market Sekolah), manajemen inventory, SEO, serta pemasaran marketplace digital.",
      prospects: [
        "Digital Marketer & E-Commerce Manager",
        "Store Manager & Retail Specialist",
        "Live Streaming Host & Sales Agent",
        "Business Development Officer"
      ],
      facilities: ["Business Center / Minimarket SKENSA", "Studio Live E-Commerce", "Lab Digital Marketing"]
    },
    {
      id: "perfilman",
      code: "PF",
      name: "Broadcasting & Perfilman",
      heroImage: "src/assets/images/jurusan-perfilman.webp",
      badgeColor: "#ec4899",
      shortDesc: "Mempelajari penulisan skenario, penyutradaraan, sinematografi, dan pascaproduksi film profesional.",
      fullDesc: "Produksi Perfilman merupakan program keahlian yang mencakup tahap pra-produksi (penulisan skrip & storyboard), produksi (penyutradaraan, penataan kamera, tata suara & lighting), hingga pasca-produksi (editing & coloring).",
      prospects: [
        "Sutradara & Assistant Director",
        "Sinematografer & Kameramen",
        "Video Editor & Colorist",
        "Penulis Skenario Film/TV"
      ],
      facilities: ["Studio Cinema & Soundproof Stage", "Ruang Editing & Suite Audio", "Kamera Cinema & Master Lighting"]
    }
  ];

  const newsData = [
    {
      id: 1,
      title: "Prestasi Gemilang: Tim Paskibraka SMKN 1 Rangkasbitung Berhasil Kibarkan Sang Saka di Tingkat Nasional 2025",
      date: "18 Agustus 2025",
      category: "Prestasi",
      author: "Humas SKENSA",
      image: "src/assets/images/banner-paskibraka.png",
      excerpt: "Tim Pasukan Pengibar Bendera Pusaka SMKN 1 Rangkasbitung kembali menorehkan kebanggaan luar biasa dengan berhasil terpilih menjadi pengibar bendera utama.",
      content: "Prestasi membanggakan kembali diukir oleh peserta didik SMKN 1 Rangkasbitung. Setelah melalui serangkaian seleksi ketat fisik dan mental, tim Paskibraka berhasil mewakili Banten dalam upacara pengibaran bendera nasional. Kepiawaian dan kedisiplinan yang ditunjukkan siswa menjadi bukti nyata efektivitas pembinaan karakter unggul di sekolah."
    },
    {
      id: 2,
      title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 Resmi Dibuka",
      date: "10 Mei 2026",
      category: "Pengumuman",
      author: "Panitia PPDB",
      image: "src/assets/images/gedung-smk.jpg",
      excerpt: "Informasi lengkap jadwal, tahapan seleksi, serta alur pendaftaran calon siswa baru 7 Konsentrasi Keahlian di SMKN 1 Rangkasbitung.",
      content: "SMK Negeri 1 Rangkasbitung membuka kesempatan bagi lulusan SMP/MTs sederajat untuk bergabung menjadi bagian dari keluarga besar SKENSA. Pendaftaran dibuka melalui 4 jalur utama: Prestasi, Afirmasi, Perpindahan Tugas, dan Reguler Zonasi."
    },
    {
      id: 3,
      title: "Implementasi Kurikulum Merdeka: Pameran Proyek Penguatan Profil Pelajar Pancasila (P5)",
      date: "02 Maret 2026",
      category: "Kegiatan",
      author: "Tim Kurikulum",
      image: "src/assets/images/logo-kurikulum-merdeka.png",
      excerpt: "Siswa-siswi menampilkan karya inovatif, produk kuliner kreasi lokal, hingga karya seni DKV dan film pendek.",
      content: "Sebagai Sekolah Penggerak Kurikulum Merdeka, SMKN 1 Rangkasbitung menggelar pameran karya P5 yang meriah. Berbagai inovasi dari 7 konsentrasi keahlian dipamerkan di hadapan perwakilan industri dan orang tua murid."
    }
  ];

  const galleryData = [
    {
      id: 1,
      title: "Gedung Utama & Lapangan Utama SKENSA",
      category: "Fasilitas",
      image: "src/assets/images/gedung-smk.jpg",
      caption: "Area lingkungan sekolah yang bersih, asri, dan representatif untuk kegiatan belajar mengajar."
    },
    {
      id: 2,
      title: "Upacara Bendera & Kegiatan Ekstrakurikuler Paskibra",
      category: "Kegiatan",
      image: "src/assets/images/banner-paskibraka.png",
      caption: "Latihan rutin dan pembinaan karakter kedisiplinan siswa Paskibraka."
    },
    {
      id: 3,
      title: "Praktik Studio Desain Komunikasi Visual",
      category: "Jurusan",
      image: "src/assets/images/jurusan-dkv.webp",
      caption: "Siswa DKV saat melakukan perancangan karya ilustrasi dan fotografi."
    },
    {
      id: 4,
      title: "Praktik Jaringan Fiber Optic TJKT",
      category: "Jurusan",
      image: "src/assets/images/jurusan-tjkt.webp",
      caption: "Konfigurasi perangkat router Cisco dan penyambungan serat optik."
    },
    {
      id: 5,
      title: "Simulasi Pelayanan Perbankan AKL",
      category: "Jurusan",
      image: "src/assets/images/jurusan-akl.webp",
      caption: "Praktik transaksi keuangan di Bank Mini SKENSA."
    },
    {
      id: 6,
      title: "Praktik Tata Boga & Bakery",
      category: "Jurusan",
      image: "src/assets/images/jurusan-kuliner.webp",
      caption: "Pembuatan aneka produk roti dan pastry berstandar resto."
    }
  ];

  const ekstrasData = [
    { id: 1, name: "Paskibraka SKENSA", category: "Wajib / Kedisiplinan", icon: "🚩", desc: "Pasukan Pengibar Bendera Pusaka dengan rekam jejak prestasi tingkat Kabupaten, Provinsi, hingga Nasional." },
    { id: 2, name: "Pramuka Ambalan", category: "Wajib", icon: "⛺", desc: "Pembentukan karakter kemandirian, kepemimpinan, dan kepramukaan." },
    { id: 3, name: "PMR (Palang Merah Remaja)", category: "Kemanusiaan", icon: "🏥", desc: "Pelatihan pertolongan pertama, donor darah, dan kesiapsiagaan tanggap bencana." },
    { id: 4, name: "Web & Coding Club", category: "Teknologi", icon: "💻", desc: "Klub pemrograman web, pengembangan aplikasi mobile, dan robotika sederhana." },
    { id: 5, name: "SKENSA Cinematography", category: "Seni & Seni Media", icon: "🎬", desc: "Klub pembuatan film pendek, dokumenter, dan produksi konten visual kreatif." },
    { id: 6, name: "Futsal & Basket SKENSA", category: "Olahraga", icon: "⚽", desc: "Wadah penyaluran bakat olahraga bola besar dengan partisipasi aktif turnamen regional." },
    { id: 7, name: "English Conversation Club", category: "Bahasa", icon: "🗣️", desc: "Pengembangan kemampuan berkomunikasi bahasa Inggris aktif dan public speaking." }
  ];

  // --- UTILS ---
  function getBasePath() {
    if (typeof document !== 'undefined' && document.body && document.body.hasAttribute('data-base')) {
      return document.body.getAttribute('data-base');
    }
    return './';
  }

  function assetUrl(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//') || path.startsWith('data:')) {
      return path;
    }
    const base = getBasePath();
    const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
    return `${base}${cleanPath}`;
  }

  function fixAssetPaths(html) {
    const base = getBasePath();
    if (base === './') return html;
    return html
      .replace(/src="src\//g, `src="${base}src/`)
      .replace(/src="\.\/src\//g, `src="${base}src/`);
  }

  function setupModalSystem() {
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

  function openModal(htmlContent) {
    const overlay = document.getElementById('global-modal-overlay');
    const body = document.getElementById('modal-body-content');
    if (overlay && body) {
      body.innerHTML = fixAssetPaths(htmlContent);
      overlay.style.display = 'flex';
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    const overlay = document.getElementById('global-modal-overlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --- COMPONENTS ---
  function renderNavbar(activeRoute = 'home') {
    const base = getBasePath();
    const logoSrc = assetUrl(schoolInfo.logo);

    return `
      <header class="skensa-header">
        <div class="container skensa-nav-container">
          <a href="${base}index.html" class="skensa-logo-wrapper">
            <img src="${logoSrc}" alt="Logo SMKN 1 Rangkasbitung" class="skensa-logo-img" />
            <div class="skensa-logo-badge">
              <span class="skensa-tag-bestari">#SKENSA<span>BESTARI</span></span>
            </div>
          </a>

          <button class="mobile-toggle" id="mobile-toggle-btn" aria-label="Toggle Menu" style="color:white;">
            ☰
          </button>

          <nav>
            <ul class="skensa-nav-list nav-menu" id="nav-menu">
              <li class="skensa-nav-item">
                <a href="${base}index.html" class="skensa-nav-link ${activeRoute === 'home' ? 'active' : ''}">HOME</a>
              </li>

              <li class="skensa-nav-item">
                <a href="${base}profil/index.html" class="skensa-nav-link ${['profil', 'sejarah-singkat', 'visi-misi', 'sambutan-kepala-sekolah', 'struktur-organisasi', 'profil-adiwiyata'].includes(activeRoute) ? 'active' : ''}">
                  PROFIL SEKOLAH <span class="dropdown-arrow">▼</span>
                </a>
                <ul class="skensa-dropdown">
                  <li class="skensa-dropdown-item"><a href="${base}profil/sejarah-singkat/index.html">Sejarah Singkat</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}profil/visi-misi/index.html">Visi & Misi</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}profil/sambutan-kepala-sekolah/index.html">Sambutan Kepala Sekolah</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}profil/struktur-organisasi/index.html">Struktur Organisasi</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}profil/profil-adiwiyata/index.html">Profil Adiwiyata</a></li>
                </ul>
              </li>

              <li class="skensa-nav-item">
                <a href="${base}akademik/index.html" class="skensa-nav-link ${['akademik', 'prestasi-siswa', 'teaching-factory', 'ekstrakurikuler', 'kalender-pendidikan'].includes(activeRoute) ? 'active' : ''}">
                  INFORMASI AKADEMIK <span class="dropdown-arrow">▼</span>
                </a>
                <ul class="skensa-dropdown">
                  <li class="skensa-dropdown-item"><a href="${base}akademik/prestasi-siswa/index.html">Prestasi Siswa</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}akademik/teaching-factory/index.html">Teaching Factory</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}akademik/ekstrakurikuler/index.html">Ekstrakurikuler</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}akademik/kalender-pendidikan/index.html">Kalender Pendidikan</a></li>
                </ul>
              </li>

              <li class="skensa-nav-item">
                <a href="${base}jurusan/index.html" class="skensa-nav-link ${['jurusan', 'teknik-komputer-jaringan', 'kuliner-tata-boga', 'manajemen-perkantoran', 'akuntansi-keuangan-lembaga', 'bisnis-daring-pemasaran', 'desain-komunikasi-visual', 'broadcasting-perfilman'].includes(activeRoute) ? 'active' : ''}">
                  JURUSAN <span class="dropdown-arrow">▼</span>
                </a>
                <ul class="skensa-dropdown">
                  <li class="skensa-dropdown-item"><a href="${base}jurusan/teknik-komputer-jaringan/index.html">Teknik Komputer Jaringan</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}jurusan/kuliner-tata-boga/index.html">Kuliner / Tata Boga</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}jurusan/manajemen-perkantoran/index.html">Manajemen Perkantoran</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}jurusan/akuntansi-keuangan-lembaga/index.html">Akuntansi Keuangan Lembaga</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}jurusan/bisnis-daring-pemasaran/index.html">Bisnis Daring & Pemasaran</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}jurusan/desain-komunikasi-visual/index.html">Desain Komunikasi Visual</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}jurusan/broadcasting-perfilman/index.html">Broadcasting dan Perfilman</a></li>
                </ul>
              </li>

              <li class="skensa-nav-item">
                <a href="${base}layanan-digital/index.html" class="skensa-nav-link ${['layanan-digital', 'management-learning-system', 'sistem-penerimaan-murid-baru'].includes(activeRoute) ? 'active' : ''}">
                  LAYANAN DIGITAL <span class="dropdown-arrow">▼</span>
                </a>
                <ul class="skensa-dropdown">
                  <li class="skensa-dropdown-item"><a href="${base}layanan-digital/management-learning-system/index.html">Management Learning System (MLS)</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html">Sistem Penerimaan Murid Baru (SPMB)</a></li>
                </ul>
              </li>

              <li class="skensa-nav-item">
                <a href="${base}bkk/index.html" class="skensa-nav-link ${['bkk', 'statistik-alumni', 'informasi-lowongan-pekerjaan', 'kerja-sama-industri', 'pendataan-alumni'].includes(activeRoute) ? 'active' : ''}">
                  BKK <span class="dropdown-arrow">▼</span>
                </a>
                <ul class="skensa-dropdown">
                  <li class="skensa-dropdown-item"><a href="${base}bkk/statistik-alumni/index.html">Statistik Alumni</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}bkk/informasi-lowongan-pekerjaan/index.html">Informasi Lowongan Pekerjaan</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}bkk/kerja-sama-industri/index.html">Kerja Sama Industri</a></li>
                  <li class="skensa-dropdown-item"><a href="${base}bkk/pendataan-alumni/index.html">Pendataan Alumni</a></li>
                </ul>
              </li>

              <li class="skensa-nav-item">
                <a href="${base}berita/index.html" class="skensa-nav-link ${activeRoute === 'berita' ? 'active' : ''}">BERITA</a>
              </li>

              <li class="skensa-nav-item">
                <button class="search-trigger-btn" id="search-trigger-btn" title="Cari Informasi">
                  🔍
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }

  function setupNavbarEvents() {
    const toggleBtn = document.getElementById('mobile-toggle-btn');
    const menu = document.getElementById('nav-menu');

    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
    }
  }

  function renderFooter() {
    const base = getBasePath();

    return `
      <footer class="footer-skensa" id="footer-skensa">
        <!-- Main Green Footer Body -->
        <div class="footer-main-green">
          <div class="container footer-grid-3">
            
            <!-- Left Column: 3 Logos & Email -->
            <div class="footer-col-left">
              <div class="footer-logos-row">
                <img src="${assetUrl('src/assets/images/logo-banten.jpg')}" alt="Logo Provinsi Banten" class="footer-logo-img" />
                <img src="${assetUrl(schoolInfo.logo)}" alt="Logo SMKN 1 Rangkasbitung" class="footer-logo-img" />
                <img src="${assetUrl('src/assets/images/logo-smk-bisa.jpg')}" alt="Logo SMK Bisa Hebat" class="footer-logo-img" />
              </div>
              <div class="footer-email-text">
                <strong>Email:</strong> ${schoolInfo.contact.email}
              </div>
            </div>

            <!-- Middle Column: SPMB & News Links with Arrow Icons -->
            <div class="footer-col-center">
              <ul class="footer-announcement-list">
                <li>
                  <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html">
                    <span class="arrow-icon">❯</span> PENGUMUMAN SPMB 2026 SMKN 1 RANGKASBITUNG
                  </a>
                </li>
                <li>
                  <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html">
                    <span class="arrow-icon">❯</span> Informasi Pengumpulan Berkas TKA
                  </a>
                </li>
                <li>
                  <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html">
                    <span class="arrow-icon">❯</span> PENGUMUMAN TES MINAT DAN BAKAT SISTEM PENERIMAAN MURID BARU (SPMB) SMK NEGERI 1 RANGKASBITUNG TAHUN PELAJARAN 2026/2027
                  </a>
                </li>
                <li>
                  <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html">
                    <span class="arrow-icon">❯</span> Sistem Penerimaan Murid Baru SMKN 1 Rangkasbitung Tahun Pelajaran 2026/2027
                  </a>
                </li>
                <li>
                  <a href="${base}berita/index.html">
                    <span class="arrow-icon">❯</span> PKK Mengajar 2026
                  </a>
                </li>
              </ul>
            </div>

            <!-- Right Column: Humas SKENSA Badge & Staff Credit -->
            <div class="footer-col-right">
              <div class="humas-badge-wrapper">
                <img src="${assetUrl('src/assets/images/badge-humas-skensa.jpg')}" alt="HUMAS SMKN 1 Rangkasbitung" class="humas-badge-img" />
              </div>
              <div class="humas-credit-text">
                Dikelola Staff MSI & Murid 💚
              </div>
            </div>

          </div>
        </div>

        <!-- Dark Copyright Bar -->
        <div class="footer-bottom-dark">
          <div class="container footer-bottom-flex">
            <div class="footer-copyright-text">
              © 1966 - 2025 SMKN 1 Rangkasbitung All rights reserved.
            </div>
            <div class="footer-bottom-links">
              <a href="${base}kontak/index.html">Privacy</a>
              <span class="sep">|</span>
              <a href="${base}kontak/index.html">Terms</a>
              <span class="sep">|</span>
              <a href="${base}kontak/index.html">Disclaimer</a>
              <span class="sep">|</span>
              <a href="${base}kontak/index.html">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // --- PAGE RENDERERS ---
  function renderHomePage() {
    const base = getBasePath();
    const principalImg = assetUrl(schoolInfo.principal.image);
    const fallbackImg = assetUrl("src/assets/images/gedung-smk.jpg");

    return `
      <div class="home-page">
        <!-- Hero Slider -->
        <section class="hero-skensa-banner">
          <div class="container hero-skensa-grid">
            <div class="hero-slider-wrapper" id="hero-slider-wrapper">
              <button class="slider-arrow-btn slider-arrow-prev" id="slider-prev-btn" aria-label="Sebelumnya">❮</button>
              
              <div class="hero-card-container" id="hero-card-container">
                <div class="hero-card-dots"></div>
                <div class="sparkle-star sparkle-1">✦</div>
                <div class="sparkle-star sparkle-2">✦</div>

                <img src="${assetUrl(jurusanData[0].heroImage)}" alt="${jurusanData[0].name}" class="hero-student-img" id="hero-student-img" />
              </div>

              <div style="display:flex; justify-content:center;">
                <div class="hero-jurusan-pill" id="hero-jurusan-pill">
                  ${jurusanData[0].name.toUpperCase()}
                </div>
              </div>

              <button class="slider-arrow-btn slider-arrow-next" id="slider-next-btn" aria-label="Selanjutnya">❯</button>

              <div class="slider-dots-wrapper" id="slider-dots-wrapper">
                ${jurusanData.map((_, index) => `
                  <div class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
                `).join('')}
              </div>
            </div>

            <div class="hero-welcome-content">
              <h2 class="hero-welcome-sub">Selamat Datang di</h2>
              <h2 class="hero-welcome-sub">Portal Informasi</h2>
              <h1 class="hero-welcome-main">
                SM<span class="highlight-blue-box">K NE</span>GERI 1<br />
                RANGKASBITUNG
              </h1>

              <div class="curriculum-banner-logos">
                <img src="${assetUrl(schoolInfo.logoKurikulum)}" alt="Kurikulum Merdeka" />
              </div>
            </div>
          </div>
        </section>

        <!-- Stats Counter -->
        <div class="skensa-stats-wrapper">
          <div class="skensa-stats-card">
            <div class="skensa-stat-col" data-target="1751">
              <div class="skensa-stat-icon">👥</div>
              <div class="skensa-stat-number" id="stat-count-1">1751</div>
              <div class="skensa-stat-label">Siswa Aktif</div>
            </div>
            <div class="skensa-stat-col active" data-target="90">
              <div class="skensa-stat-icon">👨‍💼</div>
              <div class="skensa-stat-number" id="stat-count-2">90</div>
              <div class="skensa-stat-label">Guru Profesional</div>
            </div>
            <div class="skensa-stat-col" data-target="8">
              <div class="skensa-stat-icon">🏭</div>
              <div class="skensa-stat-number" id="stat-count-3">8</div>
              <div class="skensa-stat-label">Konsentrasi Keahlian</div>
            </div>
            <div class="skensa-stat-col">
              <div class="skensa-stat-icon">🎖️</div>
              <div class="skensa-stat-number">A</div>
              <div class="skensa-stat-label">Akreditasi</div>
            </div>
          </div>
        </div>

        <!-- Sambutan & Video Profil -->
        <section class="sambutan-section-wrapper" id="sambutan-sekolah-section">
          <div class="container">
            <h2 class="sambutan-title-main">Sambutan Kepala Sekolah</h2>
            <div class="green-dash-underline">
              <span class="green-dash"></span>
              <span class="green-dash"></span>
              <span class="green-dash"></span>
            </div>

            <div class="principal-banner-card" id="principal-banner-card">
              <div class="principal-circle-frame" id="principal-circle-frame" title="Klik / Hover untuk memperbesar foto & membaca sambutan">
                <img src="${principalImg}" alt="${schoolInfo.principal.name}" class="principal-circle-img" />
              </div>
              <div class="principal-name-badge">
                ${schoolInfo.principal.name}
              </div>
            </div>

            <div style="display:flex; justify-content:center; margin-top:1.5rem;">
              <a href="${base}profil/sambutan-kepala-sekolah/index.html" class="btn-selengkapnya" id="btn-selengkapnya-sambutan">
                Selengkapnya ➔
              </a>
            </div>
          </div>
        </section>

        <!-- Profil Sekolah Video Section -->
        <section class="profil-sekolah-section">
          <div class="container">
            <h2 class="profil-sekolah-title">Profil Sekolah</h2>
            <p class="profil-sekolah-sub">Mengenal lebih dekat dengan SMK Negeri 1 Rangkasbitung melalui video profil kami</p>

            <div class="laptop-container">
              <div class="laptop-wrapper">
                <a href="${schoolInfo.profileVideoUrl}" target="_blank" rel="noopener noreferrer" class="laptop-body" id="video-laptop-body" style="display:block; text-decoration:none;" title="Klik untuk memutar video profil resmi SMKN 1 Rangkasbitung">
                  <div class="video-cover-card" id="video-cover-card">
                    <img src="https://img.youtube.com/vi/tbjHme-qPNQ/maxresdefault.jpg" onerror="this.src='${fallbackImg}'" alt="Profil SMKN 1 Rangkasbitung 2025" class="video-cover-img" />
                    <div class="video-cover-overlay-dark"></div>
                    <div class="video-top-bar"><span class="video-title-text">PROFIL SMKN 1 RANGKASBITUNG 2025</span></div>
                    <div class="video-play-btn-pulse" id="btn-play-video-trigger">
                      <svg viewBox="0 0 68 48" class="youtube-play-svg">
                        <path class="youtube-play-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#FF0000"></path>
                        <path d="M 45,24 27,14 27,34" fill="#FFFFFF"></path>
                      </svg>
                    </div>
                    <div class="video-bottom-controls">
                      <div class="video-progress-bar"><div class="video-progress-fill"></div></div>
                      <div class="video-controls-row">
                        <span class="control-icon">▶</span>
                        <span class="control-time">0:00 / 3:45</span>
                        <span class="control-badge">Tonton di YouTube ↗</span>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="laptop-base"></div>
              </div>

              <div style="margin-top:1.5rem; display:flex; justify-content:center;">
                <a href="${schoolInfo.profileVideoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="border-radius:25px; padding:0.65rem 1.75rem; font-size:1rem; text-decoration:none; display:inline-flex; align-items:center; gap:0.5rem; box-shadow:0 6px 18px rgba(68,181,83,0.35);">
                  <span>▶ Putar Video Resmi SMKN 1 Rangkasbitung</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Why Us Section -->
        <section class="why-us-section" id="why-us-section">
          <div class="container">
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

            <div class="why-us-card-wrapper">
              <div class="why-us-card">
                <div class="why-us-grid">
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

              <div class="why-us-wave-bottom">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="#ffffff"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <!-- Prestasi Terbaru Section -->
        <section class="prestasi-terbaru-section" id="prestasi-terbaru-section">
          <div class="container">
            <div class="prestasi-header">
              <h2 class="prestasi-title">Prestasi Terbaru</h2>
              <p class="prestasi-subtitle">Pencapaian Yang Membanggakan Dari SMKN 1 Rangkasbitung</p>
            </div>

            <div class="prestasi-grid">
              <div class="prestasi-card">
                <div class="prestasi-img-wrapper">
                  <img src="${assetUrl('src/assets/images/prestasi-silat.jpg')}" onerror="this.src='${assetUrl('src/assets/images/gedung-smk.jpg')}'" alt="Tim Pencak Silat SKENSA" class="prestasi-img" />
                </div>
                <div class="prestasi-body">
                  <h3 class="prestasi-card-title">Tim Pencak Silat Meraih Juara Multatuli Silat Open tingkat Provinsi</h3>
                  <p class="prestasi-card-desc">1 Medali Emas: Diraih oleh Cahaya Destriana 2 Medali Perak dan 6 Medali Perunggu</p>
                </div>
              </div>

              <div class="prestasi-card">
                <div class="prestasi-img-wrapper">
                  <img src="${assetUrl('src/assets/images/prestasi-november.jpg')}" onerror="this.src='${assetUrl('src/assets/images/gedung-smk.jpg')}'" alt="Prestasi November 2025" class="prestasi-img" />
                </div>
                <div class="prestasi-body">
                  <h3 class="prestasi-card-title">Prestasi November 2025</h3>
                  <p class="prestasi-card-desc">Raihan Prestasi di bulan November 2025</p>
                </div>
              </div>

              <div class="prestasi-card">
                <div class="prestasi-img-wrapper">
                  <img src="${assetUrl('src/assets/images/banner-paskibraka.png')}" onerror="this.src='${assetUrl('src/assets/images/gedung-smk.jpg')}'" alt="Lolos Seleksi Paskibraka 2025" class="prestasi-img" />
                </div>
                <div class="prestasi-body">
                  <h3 class="prestasi-card-title">LOLOS SELEKSI PASKIBRAKA KABUPATEN & PROVINSI TAHUN 2025</h3>
                  <p class="prestasi-card-desc">Sebanyak lima murid terpilih sebagai Paskibraka Kabupaten Lebak dan satu murid terpilih sebagai Paskibraka Provinsi Banten, tahun 2025.</p>
                </div>
              </div>
            </div>

            <div class="prestasi-btn-wrapper">
              <a href="${base}akademik/prestasi-siswa/index.html" class="btn-lihat-semua-prestasi">
                Lihat Semua Prestasi ➔
              </a>
            </div>
          </div>
        </section>

        <!-- Struktur Organisasi Banner -->
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

        <!-- Lokasi Sekolah Section -->
        <section class="lokasi-sekolah-section" id="lokasi-sekolah-section">
          <div class="container">
            <div class="lokasi-header">
              <h2 class="lokasi-title">Lokasi Sekolah</h2>
              <p class="lokasi-subtitle">Kunjungi Sekolah Kami Di Rangkasbitung, Banten</p>
            </div>

            <div class="lokasi-grid">
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
      </div>
    `;
  }

  function renderProfilPage(subView = 'all') {
    const base = getBasePath();
    const principalImg = assetUrl(schoolInfo.principal.image);

    return `
      <div class="profil-page">
        <div class="page-header">
          <div class="container">
            <h1 class="page-title">Profil Sekolah & Kelembagaan</h1>
            <div class="breadcrumb">
              <a href="${base}index.html">Beranda</a>
              <span class="breadcrumb-separator">/</span>
              <a href="${base}profil/index.html" style="color:white; text-decoration:none;">Profil Sekolah</a>
            </div>
          </div>
        </div>

        <div class="container section-padding">
          <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; margin-bottom:3.5rem;">
            <a href="${base}profil/sambutan-kepala-sekolah/index.html" class="btn ${subView === 'sambutan' ? 'btn-primary' : 'btn-outline'} btn-sm">Sambutan Kepala Sekolah</a>
            <a href="${base}profil/sejarah-singkat/index.html" class="btn ${subView === 'sejarah' ? 'btn-primary' : 'btn-outline'} btn-sm">Sejarah Singkat</a>
            <a href="${base}profil/visi-misi/index.html" class="btn ${subView === 'visi-misi' ? 'btn-primary' : 'btn-outline'} btn-sm">Visi & Misi</a>
            <a href="${base}profil/struktur-organisasi/index.html" class="btn ${subView === 'struktur' ? 'btn-primary' : 'btn-outline'} btn-sm">Struktur Organisasi</a>
            <a href="${base}profil/profil-adiwiyata/index.html" class="btn ${subView === 'adiwiyata' ? 'btn-primary' : 'btn-outline'} btn-sm">Profil Adiwiyata</a>
          </div>
          
          <div id="sambutan-kepala-sekolah" class="card" style="padding: 3.5rem 2.5rem; border-top: 6px solid var(--primary); margin-bottom: 4rem; box-shadow: var(--shadow-xl);">
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 2rem;">
              <div style="width: 150px; height: 150px; border-radius: 50%; border: 4px solid var(--primary); overflow: hidden; margin-bottom: 1rem; box-shadow: var(--shadow-lg);">
                <img src="${principalImg}" alt="${schoolInfo.principal.name}" style="width:100%; height:100%; object-fit:cover; object-position:top;" />
              </div>
              <h2 style="color: var(--primary); font-size: 2rem; margin-bottom: 0.25rem;">${schoolInfo.principal.welcomeTitle}</h2>
              <h4 style="color: var(--secondary-hover); font-weight: 700;">${schoolInfo.principal.name} (${schoolInfo.principal.title})</h4>
            </div>

            <div style="font-size: 1.1rem; line-height: 1.8; color: var(--text-main); white-space: pre-line; background: var(--bg-alt); padding: 2rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary);">
              ${schoolInfo.principal.welcomeText}
            </div>
          </div>

          <div id="sejarah" class="card" style="padding: 3rem; margin-bottom: 4rem;">
            <h2 style="color: var(--primary); margin-bottom: 1rem;">📜 Sejarah Singkat SMKN 1 Rangkasbitung</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem;">
              SMK Negeri 1 Rangkasbitung didirikan untuk menjawab kebutuhan tenaga kerja terampil dan profesional di Kabupaten Lebak, Provinsi Banten. Berdiri sejak puluhan tahun lalu, sekolah ini terus berkembang pesat dari sekolah kejuruan daerah menjadi <strong>Sekolah Pusat Keunggulan (Center of Excellence)</strong> nasional.
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
              <div style="background:var(--primary-light); padding:1.25rem; border-radius:12px;">
                <h4 style="color:var(--primary-dark); margin-bottom:0.25rem;">Pendirian Sekolah</h4>
                <p style="font-size:0.9rem; color:var(--text-main);">Menjadi sekolah kejuruan negeri pertama di Rangkasbitung.</p>
              </div>
              <div style="background:var(--secondary-light); padding:1.25rem; border-radius:12px;">
                <h4 style="color:var(--secondary-hover); margin-bottom:0.25rem;">Status Akreditasi</h4>
                <p style="font-size:0.9rem; color:var(--text-main);">Meraih Akreditasi Unggul (A) dari BAN-S/M.</p>
              </div>
              <div style="background:var(--accent-light); padding:1.25rem; border-radius:12px;">
                <h4 style="color:var(--accent); margin-bottom:0.25rem;">Sekolah Penggerak</h4>
                <p style="font-size:0.9rem; color:var(--text-main);">Penerapan Kurikulum Merdeka & Project Based Learning.</p>
              </div>
            </div>
          </div>

          <div id="visi-misi" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; margin-bottom: 4rem;">
            <div class="card" style="padding: 2.5rem; border-top: 5px solid var(--primary);">
              <h3 style="color: var(--primary); margin-bottom: 1rem;">🎯 Visi Sekolah</h3>
              <p style="font-size: 1.1rem; color: var(--text-main); font-weight: 500; line-height: 1.6;">
                "${schoolInfo.vision}"
              </p>
            </div>

            <div class="card" style="padding: 2.5rem; border-top: 5px solid var(--secondary);">
              <h3 style="color: var(--primary); margin-bottom: 1rem;">🚀 Misi Sekolah</h3>
              <ul style="padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; color: var(--text-muted);">
                ${schoolInfo.mission.map(m => `<li>${m}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div id="struktur-organisasi" class="card" style="padding: 3rem; margin-bottom: 4rem;">
            <h2 style="color: var(--primary); margin-bottom: 1.5rem; text-align:center;">🏛️ Struktur Organisasi & Manajerial Sekolah</h2>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1.5rem;">
              <div style="border:1px solid #eee; padding:1.25rem; border-radius:12px; text-align:center; background:#f9fafb;">
                <div style="font-size:2rem; margin-bottom:0.5rem;">👨‍💼</div>
                <h4 style="color:var(--primary);">${schoolInfo.principal.name}</h4>
                <p style="font-size:0.85rem; color:var(--text-muted);">Kepala Sekolah</p>
              </div>
              <div style="border:1px solid #eee; padding:1.25rem; border-radius:12px; text-align:center; background:#f9fafb;">
                <div style="font-size:2rem; margin-bottom:0.5rem;">📘</div>
                <h4 style="color:var(--primary);">Wakasek Kurikulum</h4>
                <p style="font-size:0.85rem; color:var(--text-muted);">Pengembangan Akademik & Pembelajaran</p>
              </div>
              <div style="border:1px solid #eee; padding:1.25rem; border-radius:12px; text-align:center; background:#f9fafb;">
                <div style="font-size:2rem; margin-bottom:0.5rem;">🚩</div>
                <h4 style="color:var(--primary);">Wakasek Kesiswaan</h4>
                <p style="font-size:0.85rem; color:var(--text-muted);">Pembinaan Karakter & Ekstrakurikuler</p>
              </div>
              <div style="border:1px solid #eee; padding:1.25rem; border-radius:12px; text-align:center; background:#f9fafb;">
                <div style="font-size:2rem; margin-bottom:0.5rem;">🤝</div>
                <h4 style="color:var(--primary);">Wakasek Humas & DUDI</h4>
                <p style="font-size:0.85rem; color:var(--text-muted);">Kemitraan Industri & BKK</p>
              </div>
            </div>
          </div>

          <div id="adiwiyata" class="card" style="padding: 3rem; background: linear-gradient(135deg, #e8f7e9 0%, #ffffff 100%); border:2px solid #81cf8c;">
            <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;">
              <div style="font-size:4rem;">🌱</div>
              <div>
                <h2 style="color: #2d7d37; margin-bottom: 0.5rem;">Program Sekolah Adiwiyata Mandiri</h2>
                <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;">
                  SMKN 1 Rangkasbitung berkomitmen menciptakan lingkungan sekolah yang bersih, hijau, dan berwawasan lingkungan hidup. Melalui gerakan pemilahan sampah organik/anorganik, pembuatan biopori, serta penghijauan area praktik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderAkademikPage(subView = 'all') {
    const base = getBasePath();

    return `
      <div class="akademik-page">
        <div class="page-header">
          <div class="container">
            <h1 class="page-title">Informasi Akademik & Kesiswaan</h1>
            <div class="breadcrumb">
              <a href="${base}index.html">Beranda</a>
              <span class="breadcrumb-separator">/</span>
              <a href="${base}akademik/index.html" style="color:white; text-decoration:none;">Informasi Akademik</a>
            </div>
          </div>
        </div>

        <div class="container section-padding">
          <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; margin-bottom:3rem;">
            <a href="${base}akademik/prestasi-siswa/index.html" class="btn ${subView === 'prestasi' ? 'btn-primary' : 'btn-outline'} btn-sm">Prestasi Siswa</a>
            <a href="${base}akademik/teaching-factory/index.html" class="btn ${subView === 'teaching-factory' ? 'btn-primary' : 'btn-outline'} btn-sm">Teaching Factory (TEFA)</a>
            <a href="${base}akademik/ekstrakurikuler/index.html" class="btn ${subView === 'ekstrakurikuler' ? 'btn-primary' : 'btn-outline'} btn-sm">Ekstrakurikuler</a>
            <a href="${base}akademik/kalender-pendidikan/index.html" class="btn ${subView === 'kalender-pendidikan' ? 'btn-primary' : 'btn-outline'} btn-sm">Kalender Pendidikan</a>
          </div>

          <div id="prestasi" style="margin-bottom: 4rem;">
            <div class="section-header">
              <span class="section-subtitle">Kebanggaan SKENSA</span>
              <h2 class="section-title">Prestasi Siswa Tingkat Provinsi & Nasional</h2>
            </div>
            <div class="grid-3">
              ${newsData.filter(n => n.category === 'Prestasi' || true).map(n => `
                <div class="card">
                  <img src="${assetUrl(n.image)}" alt="${n.title}" style="width:100%; height:200px; object-fit:cover;" />
                  <div style="padding:1.5rem;">
                    <span class="badge badge-primary mb-2">${n.category}</span>
                    <h3 style="font-size:1.1rem; color:var(--primary); margin-bottom:0.5rem;">${n.title}</h3>
                    <p style="font-size:0.9rem; color:var(--text-muted);">${n.excerpt}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div id="teaching-factory" class="card" style="padding: 3rem; margin-bottom: 4rem; border-top: 5px solid var(--primary);">
            <h2 style="color: var(--primary); margin-bottom: 1rem;">🏭 Teaching Factory (TEFA) SKENSA</h2>
            <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem;">
              Teaching Factory adalah model pembelajaran berbasis produksi/jasa yang mengacu pada standar dan prosedur yang berlaku di industri. Siswa SMKN 1 Rangkasbitung terlibat langsung dalam proyek produksi nyata seperti cetak digital DKV, pembuatan roti bakery Kuliner, hingga perakitan perangkat TJKT.
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
              <div style="background: var(--bg-alt); padding: 1.25rem; border-radius: 12px; text-align: center;">
                <span style="font-size: 2rem;">🖨️</span>
                <h4 style="margin-top:0.5rem; color:var(--primary);">DKV Creative Studio</h4>
                <p style="font-size:0.85rem; color:var(--text-muted);">Jasa desain grafis, spanduk, & produk cetak</p>
              </div>
              <div style="background: var(--bg-alt); padding: 1.25rem; border-radius: 12px; text-align: center;">
                <span style="font-size: 2rem;">🍞</span>
                <h4 style="margin-top:0.5rem; color:var(--primary);">SKENSA Bakery & Resto</h4>
                <p style="font-size:0.85rem; color:var(--text-muted);">Produksi kue, kue kering, & katering sekolah</p>
              </div>
              <div style="background: var(--bg-alt); padding: 1.25rem; border-radius: 12px; text-align: center;">
                <span style="font-size: 2rem;">💻</span>
                <h4 style="margin-top:0.5rem; color:var(--primary);">TJKT Network Hub</h4>
                <p style="font-size:0.85rem; color:var(--text-muted);">Jasa maintenance Komputer & Fiber Optic</p>
              </div>
            </div>
          </div>

          <div id="ekstrakurikuler" style="margin-bottom: 4rem;">
            <div class="section-header">
              <span class="section-subtitle">Pengembangan Bakat</span>
              <h2 class="section-title">Daftar Ekstrakurikuler Siswa</h2>
            </div>
            <div class="grid-4">
              ${ekstrasData.map(e => `
                <div class="card" style="padding:1.5rem; text-align:center;">
                  <div style="font-size:2.5rem; margin-bottom:0.5rem;">${e.icon}</div>
                  <h4 style="color:var(--primary); margin-bottom:0.25rem;">${e.name}</h4>
                  <span class="badge badge-secondary mb-2">${e.category}</span>
                  <p style="font-size:0.85rem; color:var(--text-muted);">${e.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <div id="kalender-pendidikan" class="card" style="padding: 2.5rem;">
            <h3 style="color:var(--primary); margin-bottom:1rem;">📅 Kalender Akademik Tahun Ajaran 2026/2027</h3>
            <ul style="display:flex; flex-direction:column; gap:1rem; list-style:none; padding:0;">
              <li style="display:flex; justify-content:space-between; padding:0.75rem 1rem; background:var(--bg-alt); border-radius:8px;">
                <strong>Penerimaan Peserta Didik Baru (PPDB)</strong>
                <span class="badge badge-primary">Mei - Juni 2026</span>
              </li>
              <li style="display:flex; justify-content:space-between; padding:0.75rem 1rem; background:var(--bg-alt); border-radius:8px;">
                <strong>Masa Pengenalan Lingkungan Sekolah (MPLS)</strong>
                <span class="badge badge-primary">15 - 18 Juli 2026</span>
              </li>
              <li style="display:flex; justify-content:space-between; padding:0.75rem 1rem; background:var(--bg-alt); border-radius:8px;">
                <strong>Ujian Tengah Semester (PTS) Ganjil</strong>
                <span class="badge badge-secondary">Oktober 2026</span>
              </li>
              <li style="display:flex; justify-content:space-between; padding:0.75rem 1rem; background:var(--bg-alt); border-radius:8px;">
                <strong>Pameran Proyek P5 Kurikulum Merdeka</strong>
                <span class="badge badge-primary">Desember 2026</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  function renderJurusanPage(selectedCode = null) {
    const base = getBasePath();

    const jurusanFolderMap = {
      tjkt: 'teknik-komputer-jaringan',
      kuliner: 'kuliner-tata-boga',
      mplb: 'manajemen-perkantoran',
      akl: 'akuntansi-keuangan-lembaga',
      pemasaran: 'bisnis-daring-pemasaran',
      dkv: 'desain-komunikasi-visual',
      perfilman: 'broadcasting-perfilman'
    };

    return `
      <div class="jurusan-page">
        <div class="page-header">
          <div class="container">
            <h1 class="page-title">Konsentrasi Keahlian / Program Studi</h1>
            <div class="breadcrumb">
              <a href="${base}index.html">Beranda</a>
              <span class="breadcrumb-separator">/</span>
              <a href="${base}jurusan/index.html" style="color:white; text-decoration:none;">Jurusan</a>
            </div>
          </div>
        </div>

        <div class="container section-padding">
          <div style="display:flex; justify-content:center; gap:0.5rem; flex-wrap:wrap; margin-bottom:3.5rem;">
            <a href="${base}jurusan/index.html" class="btn ${!selectedCode ? 'btn-primary' : 'btn-outline'} btn-sm">Semua Jurusan (7)</a>
            ${jurusanData.map(j => `
              <a href="${base}jurusan/${jurusanFolderMap[j.id]}/index.html" class="btn ${selectedCode === j.id ? 'btn-primary' : 'btn-outline'} btn-sm">${j.code}</a>
            `).join('')}
          </div>

          <div style="display:flex; flex-direction:column; gap:3rem;">
            ${jurusanData.filter(j => !selectedCode || j.id === selectedCode).map(j => `
              <div class="card" id="jurusan-${j.id}" style="padding: 2.5rem; border-left: 8px solid ${j.badgeColor};">
                <div style="display:grid; grid-template-columns: 320px 1fr; gap: 2.5rem; align-items: flex-start;">
                  <div>
                    <img src="${assetUrl(j.heroImage)}" alt="${j.name}" style="width:100%; height:220px; object-fit:cover; border-radius:16px; box-shadow:var(--shadow-md);" />
                    <div style="text-align:center; margin-top:1.25rem;">
                      <span class="badge badge-primary" style="font-size:1rem; padding:0.4rem 1.25rem;">Kode: ${j.code}</span>
                    </div>
                  </div>
                  <div>
                    <h2 style="color:var(--primary); font-size:1.8rem; margin-bottom:0.75rem;">${j.name}</h2>
                    <p style="color:var(--text-muted); font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
                      ${j.fullDesc}
                    </p>

                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                      <div style="background:var(--bg-alt); padding:1.25rem; border-radius:12px;">
                        <h4 style="color:var(--primary); margin-bottom:0.75rem;">💼 Prospek Karir & Lulusan:</h4>
                        <ul style="padding-left:1.25rem; font-size:0.9rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.4rem;">
                          ${j.prospects.map(p => `<li>${p}</li>`).join('')}
                        </ul>
                      </div>

                      <div style="background:var(--bg-alt); padding:1.25rem; border-radius:12px;">
                        <h4 style="color:var(--primary); margin-bottom:0.75rem;">🛠️ Fasilitas Lab & Praktik:</h4>
                        <ul style="padding-left:1.25rem; font-size:0.9rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.4rem;">
                          ${j.facilities.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                      </div>
                    </div>

                    <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html" class="btn btn-secondary btn-sm">Daftar Jurusan ${j.code} →</a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function renderLayananDigitalPage(subView = 'all') {
    const base = getBasePath();

    return `
      <div class="layanan-digital-page">
        <div class="page-header">
          <div class="container">
            <h1 class="page-title">Layanan Digital & Sistem Informasi</h1>
            <div class="breadcrumb">
              <a href="${base}index.html">Beranda</a>
              <span class="breadcrumb-separator">/</span>
              <a href="${base}layanan-digital/index.html" style="color:white; text-decoration:none;">Layanan Digital</a>
            </div>
          </div>
        </div>

        <div class="container section-padding">
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; margin-bottom: 4rem;">
            <div class="card" style="padding: 2.5rem; border-top: 5px solid var(--primary);" id="mls">
              <div style="font-size: 3rem; margin-bottom: 1rem;">💻</div>
              <h2 style="color: var(--primary); margin-bottom: 0.75rem;">Management Learning System (MLS / LMS)</h2>
              <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
                Portal E-Learning terpadu SMKN 1 Rangkasbitung untuk akses materi pelajaran digital, tugas interaktif, jadwal ujian daring, dan rekapitulasi presensi siswa berbasis cloud.
              </p>
              <ul style="padding-left:1.25rem; color:var(--text-muted); margin-bottom:1.75rem; display:flex; flex-direction:column; gap:0.5rem;">
                <li>Materi Modul Ajar Kurikulum Merdeka</li>
                <li>Tugas & Quiz Online Real-time</li>
                <li>Bank Soal & Simulasi Ujian Asesmen</li>
              </ul>
              <a href="${base}layanan-digital/management-learning-system/index.html" class="btn btn-primary" style="text-decoration:none;">
                Masuk ke Portal MLS →
              </a>
            </div>

            <div class="card" style="padding: 2.5rem; border-top: 5px solid var(--secondary);" id="spmb">
              <div style="font-size: 3rem; margin-bottom: 1rem;">📝</div>
              <h2 style="color: var(--primary); margin-bottom: 0.75rem;">Sistem Penerimaan Murid Baru (SPMB / PPDB)</h2>
              <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
                Portal pendaftaran peserta didik baru resmi SMKN 1 Rangkasbitung. Pelayanan verifikasi berkas online, upload dokumen tes fisik, serta pengumuman hasil seleksi 7 Konsentrasi Keahlian.
              </p>
              <ul style="padding-left:1.25rem; color:var(--text-muted); margin-bottom:1.75rem; display:flex; flex-direction:column; gap:0.5rem;">
                <li>Pendaftaran Jalur Prestasi & Zonasi</li>
                <li>Cek Status Kelulusan Berkas</li>
                <li>Download Panduan Pendaftaran & Formulir</li>
              </ul>
              <a href="${base}layanan-digital/sistem-penerimaan-murid-baru/index.html" class="btn btn-secondary" style="text-decoration:none;">
                Daftar PPDB Online Sekarang →
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderBkkPage(subView = 'all') {
    const base = getBasePath();

    return `
      <div class="bkk-page">
        <div class="page-header">
          <div class="container">
            <h1 class="page-title">Bursa Kerja Khusus (BKK) & Tracer Study</h1>
            <div class="breadcrumb">
              <a href="${base}index.html">Beranda</a>
              <span class="breadcrumb-separator">/</span>
              <a href="${base}bkk/index.html" style="color:white; text-decoration:none;">BKK & Karir</a>
            </div>
          </div>
        </div>

        <div class="container section-padding">
          <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; margin-bottom:3rem;">
            <a href="${base}bkk/statistik-alumni/index.html" class="btn ${subView === 'bkk-statistik' ? 'btn-primary' : 'btn-outline'} btn-sm">Statistik Alumni</a>
            <a href="${base}bkk/informasi-lowongan-pekerjaan/index.html" class="btn ${subView === 'bkk-loker' ? 'btn-primary' : 'btn-outline'} btn-sm">Info Lowongan Kerja</a>
            <a href="${base}bkk/kerja-sama-industri/index.html" class="btn ${subView === 'bkk-dudi' ? 'btn-primary' : 'btn-outline'} btn-sm">Kerja Sama Industri</a>
            <a href="${base}bkk/pendataan-alumni/index.html" class="btn ${subView === 'bkk-alumni' ? 'btn-primary' : 'btn-outline'} btn-sm">Pendataan Alumni</a>
          </div>

          <div id="bkk-statistik" class="card" style="padding:3rem; margin-bottom:4rem; border-top:5px solid var(--primary);">
            <h2 style="color:var(--primary); margin-bottom:1rem;">📊 Penyaluran Kerja & Tracer Study Alumni</h2>
            <p style="color:var(--text-muted); font-size:1.05rem; margin-bottom:2rem;">
              Bursa Kerja Khusus (BKK) SMKN 1 Rangkasbitung secara aktif memfasilitasi lulusan untuk langsung terserap di Dunia Usaha dan Dunia Industri (DUDI), melanjutkan pendidikan tinggi, atau berwirausaha.
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1.5rem; text-align:center;">
              <div style="background:var(--primary-light); padding:1.5rem; border-radius:12px;">
                <div style="font-size:2.5rem; font-weight:800; color:var(--primary-dark);">72%</div>
                <div style="font-weight:600; color:var(--text-main);">Bekerja di Industri / DUDI</div>
              </div>
              <div style="background:var(--secondary-light); padding:1.5rem; border-radius:12px;">
                <div style="font-size:2.5rem; font-weight:800; color:var(--secondary-hover);">18%</div>
                <div style="font-weight:600; color:var(--text-main);">Wirausaha Mandiri</div>
              </div>
              <div style="background:var(--accent-light); padding:1.5rem; border-radius:12px;">
                <div style="font-size:2.5rem; font-weight:800; color:var(--accent);">10%</div>
                <div style="font-weight:600; color:var(--text-main);">Lanjut Perguruan Tinggi</div>
              </div>
            </div>
          </div>

          <div id="bkk-loker" style="margin-bottom:4rem;">
            <div class="section-header">
              <span class="section-subtitle">Peluang Karir</span>
              <h2 class="section-title">Informasi Lowongan Pekerjaan Terbaru</h2>
            </div>
            <div class="grid-3">
              <div class="card" style="padding:1.75rem;">
                <span class="badge badge-primary mb-2">PT Astra Honda Motor</span>
                <h3 style="color:var(--primary); font-size:1.15rem; margin-bottom:0.5rem;">Operator Produksi & Maintenance</h3>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">Kualifikasi: Lulusan TJKT / Teknik Komputer / Otomotif. Usia maks 21 tahun.</p>
                <button class="btn btn-outline btn-sm" onclick="alert('Pendaftaran Loker dikirim via Helpdesk BKK SKENSA.');">Daftar Loker →</button>
              </div>

              <div class="card" style="padding:1.75rem;">
                <span class="badge badge-secondary mb-2">Indomaret Group</span>
                <h3 style="color:var(--primary); font-size:1.15rem; margin-bottom:0.5rem;">Store Crew & Merchandiser</h3>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">Kualifikasi: Lulusan Pemasaran / MPLB / AKL. Penempatan Jabodetabek & Banten.</p>
                <button class="btn btn-outline btn-sm" onclick="alert('Pendaftaran Loker dikirim via Helpdesk BKK SKENSA.');">Daftar Loker →</button>
              </div>

              <div class="card" style="padding:1.75rem;">
                <span class="badge badge-primary mb-2">Studio Creative Multimedia</span>
                <h3 style="color:var(--primary); font-size:1.15rem; margin-bottom:0.5rem;">Junior Graphic & Video Editor</h3>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">Kualifikasi: Lulusan DKV / Perfilman. Portofolio kreatif siap diuji.</p>
                <button class="btn btn-outline btn-sm" onclick="alert('Pendaftaran Loker dikirim via Helpdesk BKK SKENSA.');">Daftar Loker →</button>
              </div>
            </div>
          </div>

          <div id="bkk-alumni" class="card" style="padding:2.5rem; text-align:center;">
            <h3 style="color:var(--primary); margin-bottom:0.5rem;">🎓 Pengisian Tracer Study Alumni</h3>
            <p style="color:var(--text-muted); max-width:600px; margin:0 auto 1.5rem auto;">
              Bagi alumni SMKN 1 Rangkasbitung seluruh angkatan, mohon dapat mengisi formulir pendataan alumni untuk pemetaan kualitas lulusan.
            </p>
            <button class="btn btn-primary" onclick="alert('Mengarahkan ke Formulir Tracer Study Alumni SKENSA...');">
              Isi Formulir Pendataan Alumni →
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderBeritaPage() {
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

        <section class="section-padding" style="background-color: var(--bg-alt);" id="berita-section">
          <div class="container">
            <div class="grid-3">
              ${newsData.map(news => `
                <div class="card">
                  <div style="height: 200px; overflow: hidden; position: relative;">
                    <img src="${assetUrl(news.image)}" alt="${news.title}" style="width: 100%; height: 100%; object-fit: cover;" />
                    <span class="badge badge-primary" style="position: absolute; top: 1rem; left: 1rem;">${news.category}</span>
                  </div>
                  <div style="padding: 1.5rem;">
                    <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; display: flex; gap: 1rem;">
                      <span>📅 ${news.date}</span>
                      <span>✍️ ${news.author}</span>
                    </div>
                    <h3 style="font-size: 1.15rem; margin-bottom: 0.75rem; color: var(--primary); font-weight: 700; line-height: 1.3;">
                      ${news.title}
                    </h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">
                      ${news.excerpt}
                    </p>
                    <button class="btn btn-outline btn-sm btn-news-modal" data-id="${news.id}">
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      </div>
    `;
  }

  function renderGaleriPage() {
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

        <section class="section-padding" style="background-color: var(--bg-alt);" id="galeri-section">
          <div class="container">
            <div class="grid-3">
              ${galleryData.map(item => `
                <div class="card" style="overflow: hidden; cursor: pointer;">
                  <div style="height: 240px; overflow: hidden; position: relative;">
                    <img src="${assetUrl(item.image)}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;" />
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
      </div>
    `;
  }

  function renderKontakPage() {
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

        <section class="section-padding" id="kontak-section">
          <div class="container">
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
      </div>
    `;
  }

  // --- ROUTING MAP ---
  const routes = {
    home: { title: 'Home - SMKN 1 RANGKASBITUNG', render: () => renderHomePage() },

    profil: { title: 'Profil Sekolah - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('all') },
    'sejarah-singkat': { title: 'Sejarah Singkat - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('sejarah') },
    sejarah: { title: 'Sejarah Singkat - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('sejarah') },
    'visi-misi': { title: 'Visi & Misi - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('visi-misi') },
    'sambutan-kepala-sekolah': { title: 'Sambutan Kepala Sekolah - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('sambutan') },
    'struktur-organisasi': { title: 'Struktur Organisasi - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('struktur') },
    'profil-adiwiyata': { title: 'Profil Adiwiyata - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('adiwiyata') },
    adiwiyata: { title: 'Profil Adiwiyata - SMKN 1 RANGKASBITUNG', render: () => renderProfilPage('adiwiyata') },

    akademik: { title: 'Informasi Akademik - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('all') },
    'prestasi-siswa': { title: 'Prestasi Siswa - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('prestasi') },
    prestasi: { title: 'Prestasi Siswa - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('prestasi') },
    'teaching-factory': { title: 'Teaching Factory - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('teaching-factory') },
    ekstrakurikuler: { title: 'Ekstrakurikuler - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('ekstrakurikuler') },
    'kalender-pendidikan': { title: 'Kalender Pendidikan - SMKN 1 RANGKASBITUNG', render: () => renderAkademikPage('kalender-pendidikan') },

    jurusan: { title: 'Konsentrasi Keahlian - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage(null) },
    'teknik-komputer-jaringan': { title: 'Teknik Komputer Jaringan - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('tjkt') },
    'jurusan-tjkt': { title: 'Teknik Komputer Jaringan - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('tjkt') },
    'kuliner-tata-boga': { title: 'Kuliner / Tata Boga - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('kuliner') },
    'jurusan-kuliner': { title: 'Kuliner / Tata Boga - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('kuliner') },
    'manajemen-perkantoran': { title: 'Manajemen Perkantoran - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('mplb') },
    'jurusan-mplb': { title: 'Manajemen Perkantoran - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('mplb') },
    'akuntansi-keuangan-lembaga': { title: 'Akuntansi Keuangan Lembaga - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('akl') },
    'jurusan-akl': { title: 'Akuntansi Keuangan Lembaga - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('akl') },
    'bisnis-daring-pemasaran': { title: 'Bisnis Daring & Pemasaran - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('pemasaran') },
    'jurusan-pemasaran': { title: 'Bisnis Daring & Pemasaran - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('pemasaran') },
    'desain-komunikasi-visual': { title: 'Desain Komunikasi Visual - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('dkv') },
    'jurusan-dkv': { title: 'Desain Komunikasi Visual - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('dkv') },
    'broadcasting-perfilman': { title: 'Broadcasting & Perfilman - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('perfilman') },
    'jurusan-perfilman': { title: 'Broadcasting & Perfilman - SMKN 1 RANGKASBITUNG', render: () => renderJurusanPage('perfilman') },

    'layanan-digital': { title: 'Layanan Digital - SMKN 1 RANGKASBITUNG', render: () => renderLayananDigitalPage('all') },
    'management-learning-system': { title: 'Management Learning System (MLS) - SMKN 1 RANGKASBITUNG', render: () => renderLayananDigitalPage('mls') },
    mls: { title: 'Management Learning System (MLS) - SMKN 1 RANGKASBITUNG', render: () => renderLayananDigitalPage('mls') },
    'sistem-penerimaan-murid-baru': { title: 'Sistem Penerimaan Murid Baru (SPMB) - SMKN 1 RANGKASBITUNG', render: () => renderLayananDigitalPage('spmb') },
    spmb: { title: 'Sistem Penerimaan Murid Baru (SPMB) - SMKN 1 RANGKASBITUNG', render: () => renderLayananDigitalPage('spmb') },

    bkk: { title: 'Bursa Kerja Khusus (BKK) - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('all') },
    'statistik-alumni': { title: 'Statistik Alumni - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-statistik') },
    'bkk-statistik': { title: 'Statistik Alumni - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-statistik') },
    'informasi-lowongan-pekerjaan': { title: 'Info Lowongan Kerja - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-loker') },
    'bkk-loker': { title: 'Info Lowongan Kerja - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-loker') },
    'kerja-sama-industri': { title: 'Kerja Sama Industri - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-dudi') },
    'bkk-dudi': { title: 'Kerja Sama Industri - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-dudi') },
    'pendataan-alumni': { title: 'Pendataan Alumni - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-alumni') },
    'bkk-alumni': { title: 'Pendataan Alumni - SMKN 1 RANGKASBITUNG', render: () => renderBkkPage('bkk-alumni') },

    berita: { title: 'Berita & Informasi - SMKN 1 RANGKASBITUNG', render: () => renderBeritaPage() },
    galeri: { title: 'Galeri Dokumentasi - SMKN 1 RANGKASBITUNG', render: () => renderGaleriPage() },
    kontak: { title: 'Kontak & PPDB - SMKN 1 RANGKASBITUNG', render: () => renderKontakPage() }
  };

  let autoSlideInterval = null;
  let currentSlideIndex = 0;

  function handleRouteChange() {
    const page = (document.body && document.body.getAttribute('data-page')) || 'home';
    const hash = window.location.hash.replace('#', '');
    
    let routeKey = page;
    if (hash && routes[hash]) {
      routeKey = hash;
    }
    if (!routes[routeKey]) {
      routeKey = 'home';
    }

    const targetRoute = routes[routeKey];
    document.title = targetRoute.title;

    const appContainer = document.getElementById('app');
    if (appContainer) {
      const rawHtml = `
        ${renderNavbar(page)}
        <main id="main-content">
          ${targetRoute.render()}
        </main>
        ${renderFooter()}
      `;

      appContainer.innerHTML = fixAssetPaths(rawHtml);

      setupNavbarEvents();
      attachDynamicListeners();
      if (page === 'home' || routeKey === 'home') {
        setupHeroSliderInteractions();
        setupStatsCounterAnimation();
      }

      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  function setupHeroSliderInteractions() {
    const prevBtn = document.getElementById('slider-prev-btn');
    const nextBtn = document.getElementById('slider-next-btn');
    const dots = document.querySelectorAll('.slider-dot');
    const sliderWrapper = document.getElementById('hero-slider-wrapper');

    if (autoSlideInterval) clearInterval(autoSlideInterval);

    function updateSlide(index) {
      currentSlideIndex = (index + jurusanData.length) % jurusanData.length;
      const img = document.getElementById('hero-student-img');
      const pill = document.getElementById('hero-jurusan-pill');

      if (img && pill) {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.92)';
        setTimeout(() => {
          const base = getBasePath();
          const heroImg = jurusanData[currentSlideIndex].heroImage;
          img.src = heroImg.startsWith('http') ? heroImg : base + heroImg.replace(/^\.\//, '');
          img.alt = jurusanData[currentSlideIndex].name;
          pill.textContent = jurusanData[currentSlideIndex].name.toUpperCase();
          img.style.opacity = '1';
          img.style.transform = 'scale(1)';
        }, 150);
      }

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => updateSlide(currentSlideIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => updateSlide(currentSlideIndex + 1));
    }

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-index'));
        updateSlide(idx);
      });
    });

    if (sliderWrapper) {
      let touchStartX = 0;
      let touchEndX = 0;

      sliderWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      sliderWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 40) {
          updateSlide(currentSlideIndex + 1);
        } else if (touchEndX - touchStartX > 40) {
          updateSlide(currentSlideIndex - 1);
        }
      }, { passive: true });
    }

    autoSlideInterval = setInterval(() => {
      updateSlide(currentSlideIndex + 1);
    }, 4000);
  }

  function setupStatsCounterAnimation() {
    const statCols = document.querySelectorAll('.skensa-stat-col');
    statCols.forEach(col => {
      col.addEventListener('mouseenter', () => {
        statCols.forEach(c => c.classList.remove('active'));
        col.classList.add('active');
      });
    });

    function animateCount(id, target, duration = 1500) {
      const el = document.getElementById(id);
      if (!el) return;
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += Math.ceil(target / 40);
        if (start >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = start;
        }
      }, stepTime);
    }

    setTimeout(() => {
      animateCount('stat-count-1', 1751);
      animateCount('stat-count-2', 90);
      animateCount('stat-count-3', 8);
    }, 300);
  }

  function attachDynamicListeners() {
    const base = getBasePath();
    const principalCircle = document.getElementById('principal-circle-frame');
    const principalCard = document.getElementById('principal-banner-card');
    
    if (principalCircle || principalCard) {
      const target = principalCircle || principalCard;
      target.addEventListener('click', () => {
        window.location.href = `${base}profil/sambutan-kepala-sekolah/index.html`;
      });
    }

    const searchBtn = document.getElementById('search-trigger-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        openModal(`
          <h3 style="color:var(--primary); margin-bottom:1rem;">🔍 Pencarian Portal SMKN 1 Rangkasbitung</h3>
          <input type="text" id="modal-search-input" placeholder="Ketik kata kunci (contoh: DKV, PPDB, Paskibra)..." style="width:100%; padding:0.85rem 1rem; border:2px solid var(--primary); border-radius:8px; font-size:1rem; margin-bottom:1rem;" />
          <div id="modal-search-results" style="max-height:300px; overflow-y:auto;">
            <p style="color:var(--text-muted);">Silakan ketik kata kunci untuk mencari jurusan, berita, atau informasi sekolah.</p>
          </div>
        `);

        setTimeout(() => {
          const input = document.getElementById('modal-search-input');
          const results = document.getElementById('modal-search-results');
          if (input && results) {
            input.focus();
            input.addEventListener('input', (e) => {
              const query = e.target.value.toLowerCase().trim();
              if (!query) {
                results.innerHTML = '<p style="color:var(--text-muted);">Silakan ketik kata kunci untuk mencari.</p>';
                return;
              }

              const matchedJurusan = jurusanData.filter(j => j.name.toLowerCase().includes(query) || j.code.toLowerCase().includes(query) || j.shortDesc.toLowerCase().includes(query));
              const matchedNews = newsData.filter(n => n.title.toLowerCase().includes(query) || n.content.toLowerCase().includes(query));

              let html = '';
              if (matchedJurusan.length > 0) {
                const jurusanFolderMap = {
                  tjkt: 'teknik-komputer-jaringan',
                  kuliner: 'kuliner-tata-boga',
                  mplb: 'manajemen-perkantoran',
                  akl: 'akuntansi-keuangan-lembaga',
                  pemasaran: 'bisnis-daring-pemasaran',
                  dkv: 'desain-komunikasi-visual',
                  perfilman: 'broadcasting-perfilman'
                };
                html += `<h4 style="color:var(--primary); margin-top:0.5rem;">Jurusan (${matchedJurusan.length}):</h4>`;
                matchedJurusan.forEach(j => {
                  const folder = jurusanFolderMap[j.id] || 'index.html';
                  html += `<div style="padding:0.5rem 0; border-bottom:1px solid #eee;"><a href="${base}jurusan/${folder}/index.html" style="color:var(--primary); font-weight:bold; text-decoration:none;">${j.code} - ${j.name}</a></div>`;
                });
              }

              if (matchedNews.length > 0) {
                html += `<h4 style="color:var(--primary); margin-top:1rem;">Berita (${matchedNews.length}):</h4>`;
                matchedNews.forEach(n => {
                  html += `<div style="padding:0.5rem 0; border-bottom:1px solid #eee;"><a href="${base}berita/index.html" style="color:var(--primary); font-weight:bold; text-decoration:none;">${n.title}</a> (${n.date})</div>`;
                });
              }

              if (matchedJurusan.length === 0 && matchedNews.length === 0) {
                html = '<p style="color:var(--text-muted);">Tidak ditemukan hasil yang cocok.</p>';
              }

              results.innerHTML = html;
            });
          }
        }, 100);
      });
    }

    document.querySelectorAll('.btn-jurusan-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const item = jurusanData.find(j => j.id === id);
        if (item) {
          const itemHeroImg = item.heroImage.startsWith('http') ? item.heroImage : base + item.heroImage.replace(/^\.\//, '');
          openModal(`
            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
              <span class="badge badge-primary" style="font-size:1rem; padding:0.4rem 1rem;">${item.code}</span>
              <h2 style="color:var(--primary); margin:0;">${item.name}</h2>
            </div>
            <img src="${itemHeroImg}" alt="${item.name}" style="width:100%; height:250px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem;" />
            <p style="font-size:1.05rem; color:var(--text-main); line-height:1.7; margin-bottom:1.5rem;">${item.fullDesc}</p>
            
            <h4 style="color:var(--primary); margin-bottom:0.75rem;">💼 Prospek Karir Lulusan:</h4>
            <ul style="padding-left:1.25rem; margin-bottom:1.5rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.5rem;">
              ${item.prospects.map(p => `<li>${p}</li>`).join('')}
            </ul>

            <h4 style="color:var(--primary); margin-bottom:0.75rem;">🛠️ Fasilitas Praktik & Laboratorium:</h4>
            <ul style="padding-left:1.25rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.5rem;">
              ${item.facilities.map(f => `<li>${f}</li>`).join('')}
            </ul>
          `);
        }
      });
    });

    document.querySelectorAll('.btn-news-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-id'));
        const item = newsData.find(n => n.id === id);
        if (item) {
          const newsImg = item.image.startsWith('http') ? item.image : base + item.image.replace(/^\.\//, '');
          openModal(`
            <span class="badge badge-primary" style="margin-bottom:0.75rem;">${item.category}</span>
            <h2 style="color:var(--primary); margin-bottom:0.5rem;">${item.title}</h2>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.25rem;">📅 ${item.date} | ✍️ ${item.author}</p>
            <img src="${newsImg}" alt="${item.title}" style="width:100%; height:280px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem;" />
            <div style="line-height:1.8; color:var(--text-main); font-size:1.05rem;">${item.content}</div>
          `);
        }
      });
    });

    // Why Us Section Column Click Modals
    document.querySelectorAll('.why-us-col').forEach(col => {
      col.addEventListener('click', (e) => {
        const type = e.currentTarget.getAttribute('data-type');
        if (type === 'status') {
          openModal(`
            <div style="text-align:center; margin-bottom:1rem;">
              <span class="badge badge-primary" style="font-size:1.1rem; padding:0.5rem 1.25rem;">🏅 Terakreditasi A & SMK Pusat Keunggulan</span>
            </div>
            <h2 style="color:var(--primary); text-align:center; margin-bottom:1rem;">Status Sekolah & 8 Program Keahlian</h2>
            <p style="color:var(--text-main); font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
              SMK Negeri 1 Rangkasbitung merupakan sekolah vokasi unggulan di Kabupaten Lebak yang telah meraih <strong>Akreditasi A (Unggul)</strong> dari BAN-S/M serta ditetapkan sebagai <strong>SMK Pusat Keunggulan (Center of Excellence)</strong> oleh Kemendikbudristek RI.
            </p>
            <h4 style="color:var(--primary); margin-bottom:0.75rem;">📚 8 Konsentrasi Keahlian Unggulan:</h4>
            <ul style="padding-left:1.25rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.5rem; margin-bottom:1.5rem;">
              <li><strong>TJKT</strong> - Teknik Komputer & Jaringan</li>
              <li><strong>Kuliner</strong> - Tata Boga & Bakery</li>
              <li><strong>MPLB</strong> - Manajemen Perkantoran & Layanan Bisnis</li>
              <li><strong>AKL</strong> - Akuntansi & Keuangan Lembaga</li>
              <li><strong>Pemasaran</strong> - Bisnis Daring & Retail</li>
              <li><strong>DKV</strong> - Desain Komunikasi Visual</li>
              <li><strong>Perfilman</strong> - Broadcasting & Produksi Film</li>
            </ul>
            <div style="text-align:center;">
              <a href="${base}jurusan/index.html" class="btn btn-primary" onclick="closeModal()">Eksplor Halaman Jurusan →</a>
            </div>
          `);
        } else if (type === 'guru') {
          openModal(`
            <div style="text-align:center; margin-bottom:1rem;">
              <span class="badge badge-secondary" style="font-size:1.1rem; padding:0.5rem 1.25rem;">👨‍🏫 90+ Tenaga Pendidik Sertifikasi</span>
            </div>
            <h2 style="color:var(--primary); text-align:center; margin-bottom:1rem;">Kompetensi Guru & Mutu Pembelajaran</h2>
            <p style="color:var(--text-main); font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
              Proses pembelajaran di SMKN 1 Rangkasbitung mengutamakan kualitas, kedisiplinan, dan pendekatan berbasis industri (<em>Project-Based Learning</em>).
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
              <div style="background:var(--bg-alt); padding:1rem; border-radius:10px;">
                <h5 style="color:var(--primary); margin-bottom:0.25rem;">Asesor Kompetensi</h5>
                <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">Guru teruji sebagai penguji lisensi LSP industri.</p>
              </div>
              <div style="background:var(--bg-alt); padding:1rem; border-radius:10px;">
                <h5 style="color:var(--primary); margin-bottom:0.25rem;">Magang Industri Guru</h5>
                <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">Pengembangan berkala di perusahaan nasional.</p>
              </div>
            </div>
            <div style="text-align:center;">
              <a href="${base}profil/index.html" class="btn btn-secondary" onclick="closeModal()">Lihat Profil Manajerial →</a>
            </div>
          `);
        } else if (type === 'industri') {
          openModal(`
            <div style="text-align:center; margin-bottom:1rem;">
              <span class="badge badge-primary" style="font-size:1.1rem; padding:0.5rem 1.25rem;">🏭 50+ DUDI Kemitraan Industri</span>
            </div>
            <h2 style="color:var(--primary); text-align:center; margin-bottom:1rem;">Prestasi & Konektivitas Industri (DUDI)</h2>
            <p style="color:var(--text-main); font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
              SKENSA Rangkasbitung memiliki jaringan kemitraan erat bersama Dunia Usaha & Dunia Industri (DUDI) untuk magang (PKL), unit produksi Teaching Factory, serta rekrutmen kerja lulusan.
            </p>
            <h4 style="color:var(--primary); margin-bottom:0.75rem;">🤝 Mitra Industri Strategis:</h4>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.5rem;">
              <span class="badge badge-secondary">PT Astra Honda Motor</span>
              <span class="badge badge-secondary">Indomaret Group</span>
              <span class="badge badge-secondary">Telkom Indonesia</span>
              <span class="badge badge-secondary">Studio Multimedia Banten</span>
              <span class="badge badge-secondary">Bank Banten</span>
            </div>
            <div style="text-align:center;">
              <a href="${base}bkk/index.html" class="btn btn-primary" onclick="closeModal()">Buka Portal Bursa Kerja BKK →</a>
            </div>
          `);
        }
      });
    });
  }

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    setupModalSystem();
    window.addEventListener('hashchange', handleRouteChange);
    handleRouteChange();
    console.log('🚀 SMKN 1 Rangkasbitung Web Application Initialized with Complete Subfolder Routing (#SKENSABESTARI).');
  });
})();
