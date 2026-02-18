
// ui.js - DOM Manipulation

/**
 * Renders the menu items into the grid container.
 * @param {Array} items - The list of menu items to render.
 */
export function renderMenu(items) {
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-card" data-category="${item.category}">
            <div class="card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${item.name}</h3>
                    <span class="card-price">$${item.price.toFixed(2)}</span>
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
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
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
    document.getElementById('cart-total').textContent = `$${total}`;
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
 * Hides the checkout modal.
 */
export function hideCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.add('hidden');
}
