
// cart.js - Cart State Management

let cart = [];

/**
 * Adds an item to the cart or increments its quantity if it already exists.
 * @param {Object} item - The menu item to add.
 */
export function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
}

/**
 * Removes an item from the cart by ID.
 * @param {number} id - The ID of the item to remove.
 */
export function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
}

/**
 * Updates the quantity of an item in the cart.
 * @param {number} id - The ID of the item.
 * @param {number} change - The amount to change quantity by (+1 or -1).
 */
export function updateQuantity(id, change) {
    const item = cart.find(cartItem => cartItem.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        }
    }
}

/**
 * Calculates the total cost of items in the cart.
 * @returns {string} - The total price formatted to 2 decimal places.
 */
export function getTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return total.toFixed(2);
}

/**
 * Returns the current cart items.
 * @returns {Array} - The array of cart items.
 */
export function getCart() {
    return cart;
}

/**
 * Clears the cart.
 */
export function clearCart() {
    cart = [];
}

/**
 * Returns the total count of items in the cart.
 * @returns {number} - Total count.
 */
export function getItemCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}
