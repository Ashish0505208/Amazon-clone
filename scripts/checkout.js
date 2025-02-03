import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

async function loadPage() {
    try {
        // Load products and cart data
        await loadProductsFetch();
        await new Promise((resolve, reject) => {
            loadCart((err) => (err ? reject(err) : resolve()));
        });

        // Render the order and payment summaries
        renderOrderSummary();
        renderPaymentSummary();

        return 'Page loaded successfully';
    } catch (error) {
        console.error('Error loading page:', error);
        throw error; // Re-throw the error for further handling if needed
    }
}

// Execute the loadPage function and handle the result
loadPage()
    .then((result) => {
        console.log('Next step:', result);
    })
    .catch((error) => {
        console.error('Failed to load page:', error);
    });
