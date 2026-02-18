
// app.js - Main Application Logic

import menuItems from './menu.js';
import * as Cart from './cart.js';
import * as UI from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    try {
        console.log("Rendering menu items:", menuItems);
        UI.renderMenu(menuItems);
    } catch (error) {
        console.error("Error rendering menu:", error);
        UI.showToast("Error loading menu items.");
    }

    // --- Event Listeners ---

    // 1. Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Filter logic
            const category = e.target.dataset.category;
            const filteredItems = category === 'all'
                ? menuItems
                : menuItems.filter(item => item.category === category);

            UI.renderMenu(filteredItems);
        });
    });

    // 2. Add to Cart (Event Delegation)
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const id = parseInt(e.target.dataset.id);
            const item = menuItems.find(i => i.id === id);

            if (item) {
                Cart.addToCart(item);
                updateCartUI();
                UI.showToast(`Added ${item.name} to cart`);
            }
        }
    });

    // 3. Cart Toggle
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');

    cartBtn.addEventListener('click', UI.toggleCart);
    closeCartBtn.addEventListener('click', UI.toggleCart);
    cartOverlay.addEventListener('click', UI.toggleCart);

    // 4. Cart Items Interaction (Delegation)
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        const action = e.target.dataset.action;

        if (!id) return;

        if (action === 'increase') {
            Cart.updateQuantity(id, 1);
        } else if (action === 'decrease') {
            Cart.updateQuantity(id, -1);
        } else if (action === 'remove') {
            Cart.removeFromCart(id);
        }

        updateCartUI();
    });

    // 5. Checkout Process
    const checkoutBtn = document.getElementById('checkout-btn');
    const closeModalBtn = document.getElementById('close-modal');

    checkoutBtn.addEventListener('click', () => {
        if (Cart.getCart().length === 0) {
            UI.showToast("Your cart is empty!");
            return;
        }
        UI.toggleCart(); // Close drawer
        UI.showCheckoutModal();
    });

    closeModalBtn.addEventListener('click', () => {
        Cart.clearCart();
        updateCartUI();
        UI.hideCheckoutModal();
    });

    // Helper to sync state with UI
    function updateCartUI() {
        const cart = Cart.getCart();
        UI.renderCart(cart);
        UI.updateCartTotal(Cart.getTotal());
        UI.updateCartCount(Cart.getItemCount());
    }
});
