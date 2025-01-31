import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadproducts,loadProductsFetch } from '../data/products.js';
import { loadcart } from '../data/cart.js';

// import '../data/backend-practice.js';
// import '../data/cart-class.js';

Promise.all([
    loadProductsFetch(),
    new Promise ((resolve) =>{
        loadcart(() =>{
            resolve();
        });
    })

]).then(() =>{
    renderOrderSummary();
    renderPaymentSummary();
});

// new Promise((resolve) =>{
//     loadproducts(() =>{
//         resolve();
//     });
// }).then(() =>{
//     return new Promise ((resolve) =>{
//         loadcart(() =>{
//             resolve();
//         });
//     });
// }).then(() =>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });


// loadproducts(() =>{
//     renderOrderSummary();
//     renderPaymentSummary();
// })