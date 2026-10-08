import { schoolInfo } from '../data/school-info.js';

export function renderStatsCounter() {
  return `
    <div class="skensa-stats-wrapper">
      <div class="skensa-stats-card">
        
        <!-- Item 1: Siswa Aktif -->
        <div class="skensa-stat-col" data-target="1751">
          <div class="skensa-stat-icon">👥</div>
          <div class="skensa-stat-number" id="stat-count-1">1751</div>
          <div class="skensa-stat-label">Siswa Aktif</div>
        </div>

        <!-- Item 2: Guru Profesional -->
        <div class="skensa-stat-col active" data-target="90">
          <div class="skensa-stat-icon">👨‍💼</div>
          <div class="skensa-stat-number" id="stat-count-2">90</div>
          <div class="skensa-stat-label">Guru Profesional</div>
        </div>

        <!-- Item 3: Konsentrasi Keahlian -->
        <div class="skensa-stat-col" data-target="8">
          <div class="skensa-stat-icon">🏭</div>
          <div class="skensa-stat-number" id="stat-count-3">8</div>
          <div class="skensa-stat-label">Konsentrasi Keahlian</div>
        </div>

        <!-- Item 4: Akreditasi -->
        <div class="skensa-stat-col">
          <div class="skensa-stat-icon">🎖️</div>
          <div class="skensa-stat-number">A</div>
          <div class="skensa-stat-label">Akreditasi</div>
        </div>

      </div>
    </div>
  `;
}
