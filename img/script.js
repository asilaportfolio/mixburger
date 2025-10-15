// const BOT_TOKEN = "8168566877:AAH2__yRQS_fow7cCqbXxvjy-HW-mtup5-s";
//   const CHAT_ID = "474893071"

//   document.querySelectorAll(".add-btn").forEach(btn => {
//     btn.addEventListener("click", function() {
//       let card = this.closest(".card");
//       let title = card.querySelector(".card-title").innerText;
//       let price = card.querySelector(".card-text").innerText;

//       document.getElementById("productInfo").innerText = `${title} — ${price}`;

//       let modal = new bootstrap.Modal(document.getElementById("orderModal"));
//       modal.show();
//     });
//   });

//   document.getElementById("submitOrder").addEventListener("click", function() {
//     let name = document.getElementById("name").value;
//     let address = document.getElementById("address").value;
//     let phone = document.getElementById("phone").value;
//     let product = document.getElementById("productInfo").innerText;

//     let message = `
//      🛒 Yangi xaridor:
//  👤 Ism: ${name}
//  📍 Manzil: ${address}
//  📞 Telefon: ${phone}
//  🍔 Mahsulot: ${product}
//     `;

//     fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify({
//         chat_id: CHAT_ID,
//         text: message
//       })
//     }).then(res => {
//       let orderModalEl = document.getElementById("orderModal");
//       let orderModal = bootstrap.Modal.getInstance(orderModalEl);
//       orderModal.hide();
//       let successModal = new bootstrap.Modal(document.getElementById("successModal"));
//       successModal.show();

//       document.getElementById("orderForm").reset();
//     }).catch(err => {
//       alert("Xatolik yuz berdi!");
//       console.error(err);
//     });
//   });

// const heartBtns = document.querySelectorAll(".btn-heart");
// const favModalEl = document.getElementById("favModal");
// const favModal = new bootstrap.Modal(favModalEl);

// heartBtns.forEach((btn) => {
//   const heartIcon = btn.querySelector("i"); 
//   btn.addEventListener("click", () => {
//     heartIcon.classList.toggle("bi-heart");
//     heartIcon.classList.toggle("bi-heart-fill");

//     if (heartIcon.classList.contains("bi-heart-fill")) {
//       favModal.show();
//       setTimeout(() => {
//         favModal.hide();
//       }, 2000);
//     }
//   });
// });

// const toggleBtn = document.getElementById('themeToggle');
// const icon = document.getElementById('themeIcon');

// toggleBtn.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');

//   if (document.body.classList.contains('dark-mode')) {
//     icon.classList.remove('bi-moon');
//     icon.classList.add('bi-sun');
//   } else {
//     icon.classList.remove('bi-sun');
//     icon.classList.add('bi-moon');
//   }

//   const menuBtn = document.querySelector('.btn-lala');
//   const navLinks = document.querySelectorAll('.nav-link');

//   if (document.body.classList.contains('dark-mode')) {
//     menuBtn.style.color = 'white';
//     navLinks.forEach(link => {
//       link.style.color = 'white';
//     });
//   } else {
//     menuBtn.style.color = 'black';
//     navLinks.forEach(link => {
//       link.style.color = 'black';
//     });
//   }

//   const cardTitles = document.querySelectorAll('.card-title');
//   const cardTexts = document.querySelectorAll('.card-text');

//   if (document.body.classList.contains('dark-mode')) {
//     cardTitles.forEach(title => {
//       title.style.color = 'white';
//     });
//     cardTexts.forEach(text => {
//       text.style.color = 'white';
//     });
//   } else {
//     cardTitles.forEach(title => {
//       title.style.color = 'white';
//     });
//     cardTexts.forEach(text => {
//       text.style.color = 'black';
//     });
//   }
// });

//     <!-- <nav class="navbar navbara navbar-expand-lg  sticky-top px-4 py-3">
//   <div class="container-fluid d-flex justify-content-between align-items-center">

    
//     <div class="d-flex align-items-center gap-4">
//       <a class="navbar-brand d-flex align-items-center" href="#">
//         <img src="./img/logo.svg" alt="Logo" width="40" height="40" class="me-2">
//         <button class="btn-lala fw-bold fs-5">Menu</button>
//       </a>
//       <div class="navbar-nav d-flex flex-row gap-3">
//         <a class="nav-link fw-bold fs-5" href="index2.html" target="_blank" rel="noopener noreferrer" style="color: black;">Branches</a>
//         <a class="nav-link fw-bold fs-5" href="formpage.html" target="_blank" rel="noopener noreferrer" style="color: black;">Contact</a>
//       </div>
//       <nav class="navbar bg-light px-3">
//   <div class="container-fluid d-flex justify-content-between align-items-center">
//     <div class="d-flex align-items-center gap-3">
//       <span class="fw-bold">📞 +998 90 123 45 67</span>
//     </div>
//     <div>
// <button id="cartToggleBtn" class="btn btn-outline-dark rounded-circle">
//     <i class="bi bi-basket"></i>
//   </button>      
// </div>
//   </div>
// </nav>
//     </div>

    
//     <div class="d-flex align-items-end gap-4">
//   <button id="themeToggle" class="btn btn-outline-dark rounded-circle">
//     <i id="themeIcon" class="bi bi-moon"></i>
//   </button>
  
//     </nav> -->
//     <!-- <div class="col-md-9">
//       <div class="tab-content">

//         <div class="tab-pane fade show active" id="lavash">
//           <h2 class="mb-4 text-center">Lavash</h2>
//           <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//             <div class="col">
//               <div class="card h-100">
//              <img src="./img/lavash1.jpg" class=" card-img-top image-fluid" alt="Lavash">          

             
// <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title fw-bold fs-5">Lavash</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//          <div class="col">
//               <div class="card h-100">
//              <img src="./img/lavash1.jpg" class=" card-img-top image-fluid" alt="Lavash">          

             
// <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title fw-bold fs-5">Lavash</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

            
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/lavash3.jpg" class="card-img-top" alt="Lavash cheese">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>

//                 <div class="card-body">
//                   <h5 class="card-title fw-bold fs-5">Lavash Cheese</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>


//         <div class="tab-pane fade show" id="burger">
//           <h2 class="mb-4 text-center">Burger</h2>
//           <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/burger1.jpg" class="card-img-top" alt="Burger">
//                <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>

//                 <div class="card-body">
//                   <h5 class="card-title fw-bold fs-5">Burger</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>


//             <div class="col">
//   <div class="card h-100 position-relative">
//     <img src="./img/burger2.jpg" class="card-img-top" alt="Burger">
// <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>    

//     <div class="card-body">
//       <h5 class="card-title">Burger</h5>
//       <p class="card-text fw-bold fw-bold fs-5">27 000</p>
//       <button class="btn btn-outline-success add-btn">+ Add</button>
//     </div>
//   </div>
// </div>






//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/burger3.jpg" class="card-img-top" alt="Burger">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>

//                 <div class="card-body">
//                   <h5 class="card-title fw-bold fs-5">Burger</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/burger4.jpg" class="card-img-top" alt="Burger">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title fw-bold fs-5">Burger</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/burger5.jpg" class="card-img-top" alt="Burger">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title fw-bold fs-5">Burger</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/burger6.jpg" class="card-img-top" alt="Burger">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title fw-bold fs-5">Burger</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>


//         <div class="tab-pane fade show" id="pizza">
//           <h2 class="mb-4 text-center">Pizza</h2>
//           <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza1.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza2.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">27 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza3.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza4.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza5.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza6.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//                 <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza7.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza8.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza9.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza10.jpeg" class="card-img-top" alt="Pizza">\
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza11.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza12.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza13.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza14.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/pizza14.jpeg" class="card-img-top" alt="Pizza">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Pizza</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>



//           </div>
//         </div>


//         <div class="tab-pane fade show active" id="hotdog">
//           <h2 class="mb-4 text-center">Hotdog</h2>
//           <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/hotdog1.jpeg" class="card-img-top" alt="Hotdog">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Hotdog</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/hotdog2.jpeg" class="card-img-top" alt="Hotdog">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Hotdog</h5>
//                   <p class="card-text fw-bold">27 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/hotdog3.jpeg" class="card-img-top" alt="Hotdog">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Hotdog</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>


//         <div class="tab-pane fade show" id="sandwich">
//           <h2 class="mb-4 text-center">Sandwich</h2>
//           <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sandwich1.jpeg" class="card-img-top" alt="Sandwich">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sandwich</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sandwich2.jpeg" class="card-img-top" alt="Sandwich">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sandwich</h5>
//                   <p class="card-text fw-bold">27 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sandwich3.jpeg" class="card-img-top" alt="Sandwich">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sandwich</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sandwich4.jpeg" class="card-img-top" alt="Sandwich">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sandwich</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sandwich5.jpeg" class="card-img-top" alt="Sandwich">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sandwich</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sandwich6.jpeg" class="card-img-top" alt="Sandwich">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sandwich</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>


//         <div class="tab-pane fade show" id="chips">
//           <h2 class="mb-4 text-center">Chips</h2>
//           <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/chips1.jpeg" class="card-img-top" alt="Chips">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Chips</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/chips2.jpeg" class="card-img-top" alt="Chips">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Chips</h5>
//                   <p class="card-text fw-bold">27 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/chips3.jpeg" class="card-img-top" alt="Chips">
//                <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Chips</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>


//         <div class="tab-pane fade show" id="sous">
//           <h2 class="mb-4 text-center">Sous</h2>
//           <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sous1.jpeg" class="card-img-top" alt="Sous">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sous</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sous2.jpeg" class="card-img-top" alt="Sous">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sous</h5>
//                   <p class="card-text fw-bold">27 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sous3.jpeg" class="card-img-top" alt="Sous">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sous</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sous4.jpeg" class="card-img-top" alt="Sous">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sous</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sous5.jpeg" class="card-img-top" alt="Sous">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sous</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/sous6.jpeg" class="card-img-top" alt="Sous">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Sous</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>


//         <div class="tab-pane fade show" id="mix">
//           <h2 class="mb-4 text-center">Mix</h2>
//           <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/mix1.jpeg" class="card-img-top" alt="Mix">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Mix</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/mix4.jpeg" class="card-img-top" alt="Mix">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Mix</h5>
//                   <p class="card-text fw-bold">27 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/mix5.jpeg" class="card-img-top" alt="Mix">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Mix</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/mix6.jpeg" class="card-img-top" alt="Mix">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Mix</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/mix7.jpeg" class="card-img-top" alt="Mix">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Mix</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/mix8.jpeg" class="card-img-top" alt="Mix">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Mix</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

 
//         <div class="tab-pane fade show" id="cake">
//           <h2 class="mb-4 text-center">Cake</h2>
//           <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/cake1.jpeg" class="card-img-top" alt="Cake">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Cake</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/cake2.jpeg" class="card-img-top" alt="Cake">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Cake</h5>
//                   <p class="card-text fw-bold">27 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/cake3.jpeg" class="card-img-top" alt="Cake">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Cake</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/cake4.jpeg" class="card-img-top" alt="Cake">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Cake</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/cake5.jpeg" class="card-img-top" alt="Cake">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Cake</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//               <div class="col">
//               <div class="card h-100">
//                 <img src="./img/cake6.jpeg" class="card-img-top" alt="Cake">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Cake</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>


//         <div class="tab-pane fade show" id="drink">
//           <h2 class="mb-4 text-center">Drinks</h2>
//           <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik1.jpeg" class="card-img-top" alt="Drink">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart text-success position-absolute top-0 end-0 m-2 fs-5" viewBox="0 0 16 16">
//   <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
// </svg>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">32 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

// <div class="col">
//   <div class="card h-100">
//     <div class="position-relative">
//       <img src="./img/ichimlik2.jpeg" class="card-img-top" alt="Drink">
//       <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//     </div>
//     <div class="card-body">
//       <h5 class="card-title">Drink</h5>
//       <p class="card-text fw-bold">32 000</p>
//       <button class="btn btn-outline-success add-btn">+ Add</button>
//     </div>
//   </div>
// </div>


//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik2.jpeg" class="card-img-top" alt="Drink">
//                <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">27 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik4.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik5.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik6.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik7.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik8.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik9.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik10.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik11.jpeg" class="card-img-top" alt="Drink">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart text-success position-absolute top-0 end-0 m-2 fs-5" viewBox="0 0 16 16">
//   <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
// </svg>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik12.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik13.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik14.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>
            
//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik31.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik41.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik17.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik18.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik19.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik20.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik21.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik22.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik23.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik24.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik25.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik42.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik43.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik28.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik49.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik36.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik35.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik38.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//             <div class="col">
//               <div class="card h-100">
//                 <img src="./img/ichimlik50.jpeg" class="card-img-top" alt="Drink">
//                 <button id="heartBtn" class="btn-heart">
//   <i id="heart" class="bi bi-heart"></i>
// </button>
//                 <div class="card-body">
//                   <h5 class="card-title">Drink</h5>
//                   <p class="card-text fw-bold">35 000</p>
//                   <button class="btn btn-outline-success add-btn">+ Add</button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
        
   
      
//         </div>
//   </div> -->