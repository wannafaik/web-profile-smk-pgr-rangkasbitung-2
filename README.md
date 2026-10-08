# 🏫 Website Resmi SMKN 1 Rangkasbitung

Selamat datang di repositori web portal resmi **SMK Negeri 1 Rangkasbitung**. Project ini dibangun dengan arsitektur **Modular ES Modules & Component-Based Clean Architecture** yang sangat mudah dikembangkan (scalable, clean, dan maintainable).

---

## 📁 Struktur Folder Project (Architecture Guide)

```
newest/
├── index.html                   # Document HTML Utama (Entry Point)
├── README.md                    # Panduan Struktur Folder & Dokumentasi
│
├── src/                         # Seluruh Kode Sumber Aplikasi (Source Code)
│   ├── assets/                  # Media & Aset Statis
│   │   └── images/              # Gambar hero, logo sekolah, foto kepala sekolah, banner
│   │
│   ├── styles/                  # Sistem CSS Modular (Design System & Styling)
│   │   ├── variables.css        # Design tokens: Warna, Font, Shadow, Radius
│   │   ├── main.css             # Style global, reset, container & typo
│   │   ├── components.css       # Style komponen: Navbar, Card, Hero, Footer, Modal
│   │   ├── utilities.css        # Kelas utilitas & animasi CSS
│   │   └── pages.css            # Custom style khusus halaman tertentu
│   │
│   ├── data/                    # Layer Data JS (Mudah Diedit Tanpa Menyentuh UI!)
│   │   ├── school-info.js       # Info sekolah, sambutan kepala sekolah, visi-misi, kontak
│   │   ├── jurusan.js           # Data 7 Konsentrasi Keahlian (AKL, DKV, TJKT, dll)
│   │   ├── news.js              # Berita & pengumuman terbaru
│   │   ├── gallery.js           # Foto galeri & fasilitas
│   │   └── ekstras.js           # Daftar ekstrakurikuler
│   │
│   ├── components/              # Komponen UI Reusable (ES Modules)
│   │   ├── Navbar.js            # Header & navigasi responsif
│   │   ├── HeroSlider.js        # Hero banner utama & badge Kurikulum Merdeka
│   │   ├── PrincipalCard.js     # Card sambutan kepala sekolah
│   │   ├── StatsCounter.js      # Counter statistik siswa & guru
│   │   ├── JurusanCard.js       # Card jurusan & modal detail
│   │   ├── NewsSection.js       # Grid berita & modal artikel
│   │   ├── EkstraSection.js     # Showcase ekstrakurikuler
│   │   ├── GallerySection.js    # Grid galeri foto
│   │   ├── ContactSection.js    # Form kontak & informasi alamat
│   │   └── Footer.js            # Footer sekolah lengkap
│   │
│   ├── pages/                   # Tampilan Halaman (Page Views)
│   │   ├── HomePage.js          # Halaman Utama (Beranda)
│   │   ├── ProfilPage.js        # Halaman Profil & Visi Misi
│   │   ├── JurusanPage.js       # Halaman Katalog 7 Jurusan
│   │   ├── BeritaPage.js        # Halaman Berita & Info
│   │   ├── GaleriPage.js        # Halaman Galeri Foto
│   │   └── KontakPage.js        # Halaman Kontak & PPDB
│   │
│   └── js/                      # Logika Inti Aplikasi
│       ├── app.js               # Entry point Javascript
│       ├── router.js            # Router SPA (Single Page Application)
│       └── utils.js             # Utility modal popup & helper DOM
```

---

## 🛠️ Cara Mengembangkan Project (Developer Guide)

### 1. Mengubah / Menambah Data Berita atau Jurusan
Cukup buka folder `src/data/`:
- Edit **`src/data/news.js`** untuk menambah artikel berita.
- Edit **`src/data/jurusan.js`** untuk mengubah prospek / fasilitas jurusan.
- Edit **`src/data/school-info.js`** untuk mengubah nomor telepon, email, atau sambutan kepala sekolah.

### 2. Menambah Komponen Baru
1. Buat file baru di `src/components/NamaKomponen.js`.
2. Eksport fungsi `renderNamaKomponen()`.
3. Import dan gunakan komponen di `src/pages/HomePage.js` atau halaman lain yang diinginkan.

### 3. Menambah Halaman Baru
1. Buat file baru di `src/pages/HalamanBaruPage.js`.
2. Tambahkan rute baru pada rute pembantu di `src/js/router.js`.
3. Tambahkan link navigasi pada `src/components/Navbar.js`.

---

## 🌐 Menjalankan Aplikasi Web
Buka file `index.html` secara langsung di peramban web (Chrome, Edge, Firefox, atau Safari) atau gunakan extension **Live Server** di IDE.

---

### ✨ Fitur Utama
- 📱 **100% Responsif**: Tampilan optimal di PC, Tablet, dan Smartphone.
- 🎨 **Modern Design**: Palet warna profesional, glassmorphism, dan animasi halus.
- 🚀 **SPA Routing**: Perpindahan halaman cepat tanpa reload berlebihan.
- 💬 **Interactive Modals**: Detail jurusan, sambutan kepala sekolah, dan berita lengkap.
- 🔍 **SEO & Accessibility Ready**: Tag HTML5 semantik dan struktur teratur.
