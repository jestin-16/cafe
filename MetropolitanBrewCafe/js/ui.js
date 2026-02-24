
// ui.js - DOM Manipulation

const FALLBACK_IMAGE = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3B2F2F"/>
      <stop offset="1" stop-color="#D4AF37"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Inter, Arial, sans-serif" font-size="40" fill="#F5F5DC">
    Metropolitan Brew Café
  </text>
</svg>
`)}`;

/**
 * Renders the menu items into the grid container.
 * @param {Array} items - The list of menu items to render.
 */
export function renderMenu(items) {
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-card" data-category="${item.category}">
            <div class="card-image">
                <img src="${item.image || FALLBACK_IMAGE}" alt="${item.name}" loading="lazy" referrerpolicy="no-referrer"
                    onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${item.name}</h3>
                    <span class="card-price">₹${item.price.toFixed(2)}</span>
                </div>
                <p class="card-description">${item.description}</p>
                <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

/**
 * Renders the cart items into the cart drawer.
 * @param {Array} cartItems - The list of items in the cart.
 */
export function renderCart(cartItems) {
    const cartContainer = document.getElementById('cart-items');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        return;
    }

    cartContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <img src="${item.image || FALLBACK_IMAGE}" alt="${item.name}" class="cart-item-img" referrerpolicy="no-referrer"
                onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
                    <button class="remove-btn" data-action="remove" data-id="${item.id}">&times;</button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Updates the total price display.
 * @param {string} total - The calculated total price.
 */
export function updateCartTotal(total) {
    document.getElementById('cart-total').textContent = `₹${total}`;
}

/**
 * Updates the cart item count badge.
 * @param {number} count - The number of items.
 */
export function updateCartCount(count) {
    const badge = document.getElementById('cart-count');
    badge.textContent = `(${count})`;
}

/**
 * Toggles the visibility of the cart drawer.
 */
export function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    drawer.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.toggle('cart-open');
    // Remove hidden class if present to allow transitions
    overlay.classList.remove('hidden');
}

/**
 * Shows a toast notification.
 * @param {string} message - The message to display.
 */
export function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    container.appendChild(toast);

    // Remove toast after animation (3s total: 0.3s in + 2.4s wait + 0.3s out)
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

/**
 * Shows the checkout success modal.
 */
export function showCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    const spinner = document.getElementById('loading-spinner');
    const success = document.getElementById('order-success');

    modal.classList.remove('hidden');
    spinner.classList.remove('hidden');
    success.classList.add('hidden');

    // Simulate API delay
    setTimeout(() => {
        spinner.classList.add('hidden');
        success.classList.remove('hidden');
    }, 2000);
}

/**
 * Updates the checkout success message with a dynamic summary.
 * @param {string} message - The message to display in the success modal.
 */
export function updateOrderMessage(message) {
    const messageEl = document.getElementById('order-message');
    if (messageEl && message) {
        messageEl.textContent = message;
    }
}

/**
 * Hides the checkout modal.
 */
export function hideCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.add('hidden');
}
