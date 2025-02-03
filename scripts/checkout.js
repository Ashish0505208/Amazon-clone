import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadproducts,loadProductsFetch } from '../data/products.js';
import { loadcart } from '../data/cart.js';

// import '../data/backend-practice.js';
// import '../data/cart-class.js';

async function loadPage(){
    try {
        await loadProductsFetch();
        await new Promise((resolve, reject) => {
            loadcart((err) => {
                if (err) reject(err);
                else resolve();
            });
        });

    } catch (error) {
        console.error('Error loading page:', error);
    }
    

    renderOrderSummary();
    renderPaymentSummary();

    return 'value2';
}

loadPage().then((value)=>{
    console.log('next step');
    console.log(value);
})


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
