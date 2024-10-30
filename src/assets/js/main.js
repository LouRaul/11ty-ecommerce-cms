// Import Alpine.js
import Alpine from 'alpinejs';

// Initialize Alpine
window.Alpine = Alpine;
Alpine.start();

// Handle mobile menu
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Handle product image gallery
  const productImages = document.querySelectorAll('[data-product-image]');
  const mainImage = document.querySelector('[data-main-product-image]');

  if (productImages && mainImage) {
    productImages.forEach(img => {
      img.addEventListener('click', () => {
        // Update main image
        mainImage.src = img.src;
        // Update active state
        productImages.forEach(i => i.classList.remove('border-blue-600'));
        img.classList.add('border-blue-600');
      });
    });
  }
});