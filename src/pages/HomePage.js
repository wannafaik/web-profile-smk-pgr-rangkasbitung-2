import { renderHeroSlider } from '../components/HeroSlider.js';
import { renderPrincipalCard } from '../components/PrincipalCard.js';
import { renderWhyUsSection } from '../components/WhyUsSection.js';
import { renderPrestasiSection } from '../components/PrestasiSection.js';
import { renderStrukturBanner } from '../components/StrukturBanner.js';
import { renderLokasiSection } from '../components/LokasiSection.js';
import { renderStatsCounter } from '../components/StatsCounter.js';

export function renderHomePage() {
  return `
    <div class="home-page">
      ${renderHeroSlider()}
      ${renderStatsCounter()}
      ${renderPrincipalCard()}
      ${renderWhyUsSection()}
      ${renderPrestasiSection()}
      ${renderStrukturBanner()}
      ${renderLokasiSection()}
    </div>
  `;
}
