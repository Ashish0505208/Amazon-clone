// import {cart} from '../data/cart.js';
// import { getOrders } from '../data/orders.js';

// let orders={
//     id: 1,
//     products: cart,
    
// };

// async function renderOrders() {
//   try {
//     const orders = await getOrders();
//     let ordersHTML = '';

//     orders.forEach(order => {
//       ordersHTML += `
//         <div class="order-container">
//           <div class="order-header">
//             <div class="order-header-left-section">
//               <div class="order-date">
//                 <div class="order-header-label">Order Placed:</div>
//                 <div>${order.date}</div>
//               </div>
//               <div class="order-total">
//                 <div class="order-header-label">Total:</div>
//                 <div>$${order.total}</div>
//               </div>
//             </div>
//             <div class="order-header-right-section">
//               <div class="order-header-label">Order ID:</div>
//               <div>${order.id}</div>
//             </div>
//           </div>
//           <div class="order-details-grid">
//             ${order.items.map(item => `
//               <div class="product-image-container">
//                 <img src="${item.image}">
//               </div>
//               <div class="product-details">
//                 <div class="product-name">${item.name}</div>
//                 <div class="product-delivery-date">Arriving on: ${item.deliveryDate}</div>
//                 <div class="product-quantity">Quantity: ${item.quantity}</div>
//                 <button class="buy-again-button button-primary">
//                   <img class="buy-again-icon" src="images/icons/buy-again.png">
//                   <span class="buy-again-message">Buy it again</span>
//                 </button>
//               </div>
//               <div class="product-actions">
//                 <a href="tracking.html?orderId=${order.id}&productId=${item.id}">
//                   <button class="track-package-button button-secondary">Track package</button>
//                 </a>
//               </div>
//             `).join('')}
//           </div>
//         </div>
//       `;
//     });

//     document.querySelector('.orders-grid').innerHTML = ordersHTML;
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//   }
// }

// renderOrders();