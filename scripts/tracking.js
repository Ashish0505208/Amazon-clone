// import { getTrackingInfo } from '../data/tracking.js';

// // Utility function to format date
// const formatDate = (date) => {
//     const options = { weekday: 'long', month: 'long', day: 'numeric' };
//     return new Date(date).toLocaleDateString('en-US', options);
//   };
  
//   // Get order details from localStorage or database
//   const getOrderDetails = (orderId) => {
//     // In a real app, this would be an API call to your backend
//     const orders = JSON.parse(localStorage.getItem('orders')) || {};
//     return orders[orderId];
//   };
  
//   // Update tracking page based on order ID
//   const updateTrackingPage = () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const orderId = urlParams.get('orderId');
    
//     if (!orderId) {
//       window.location.href = '/orders.html';
//       return;
//     }
  
//     const orderDetails = getOrderDetails(orderId);
//     if (!orderDetails) {
//       window.location.href = '/orders.html';
//       return;
//     }
  
//     // Update delivery date
//     const deliveryDateElement = document.querySelector('.delivery-date');
//     deliveryDateElement.textContent = `Arriving on ${formatDate(orderDetails.estimatedDelivery)}`;
  
//     // Update product info
//     const productInfoElements = document.querySelectorAll('.product-info');
//     productInfoElements[0].textContent = orderDetails.productName;
//     productInfoElements[1].textContent = `Quantity: ${orderDetails.quantity}`;
  
//     // Update product image
//     const productImage = document.querySelector('.product-image');
//     productImage.src = orderDetails.imageUrl;
//     productImage.alt = orderDetails.productName;
  
//     // Update tracking status
//     const statusLabels = ['Preparing', 'Shipped', 'Delivered'];
//     const currentStatusIndex = statusLabels.indexOf(orderDetails.status);
    
//     const progressLabels = document.querySelectorAll('.progress-label');
//     progressLabels.forEach((label, index) => {
//       if (index <= currentStatusIndex) {
//         label.classList.add('current-status');
//       } else {
//         label.classList.remove('current-status');
//       }
//     });
  
//     // Update progress bar
//     const progressBar = document.querySelector('.progress-bar');
//     progressBar.style.width = `${((currentStatusIndex + 1) / statusLabels.length) * 100}%`;
//   };
  
//   // Save order when checking out
//   const saveOrder = (cartItems) => {
//     const orders = JSON.parse(localStorage.getItem('orders')) || {};
//     const orderId = Date.now().toString();
    
//     const order = {
//       id: orderId,
//       date: new Date(),
//       estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
//       status: 'Preparing',
//       items: cartItems.map(item => ({
//         productName: item.name,
//         quantity: item.quantity,
//         imageUrl: item.imageUrl,
//         price: item.price
//       }))
//     };
  
//     orders[orderId] = order;
//     localStorage.setItem('orders', JSON.stringify(orders));
//     return orderId;
//   };
  
//   // Initialize tracking page
//   document.addEventListener('DOMContentLoaded', updateTrackingPage);

// async function renderTrackingInfo(orderId, productId) {
//   try {
//     const trackingInfo = await getTrackingInfo(orderId, productId);
//     const trackingHTML = `
//       <div class="tracking-container">
//         <div class="tracking-header">
//           <div class="tracking-header-label">Tracking Information</div>
//           <div>Order ID: ${orderId}</div>
//           <div>Product ID: ${productId}</div>
//         </div>
//         <div class="tracking-details">
//           ${trackingInfo.map(info => `
//             <div class="tracking-step">
//               <div class="tracking-date">${info.date}</div>
//               <div class="tracking-status">${info.status}</div>
//             </div>
//           `).join('')}
//         </div>
//       </div>
//     `;

//     document.querySelector('.tracking-grid').innerHTML = trackingHTML;
//   } catch (error) {
//     console.error('Error fetching tracking information:', error);
//   }
// }

// const urlParams = new URLSearchParams(window.location.search);
// const orderId = urlParams.get('orderId');
// const productId = urlParams.get('productId');

// renderTrackingInfo(orderId, productId);