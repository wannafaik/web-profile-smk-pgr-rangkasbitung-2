import { initRouter } from './router.js';
import { setupModalSystem } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  setupModalSystem();
  initRouter();
  console.log('🚀 SMKN 1 Rangkasbitung Web Application Initialized.');
});
