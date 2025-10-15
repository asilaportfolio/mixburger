// === Telegram sozlamalari ===
const TELEGRAM_TOKEN = "8168566877:AAH2__yRQS_fow7cCqbXxvjy-HW-mtup5-s";
const TELEGRAM_CHAT_ID = "474893071";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

// === DOM elementlari ===
const cartPanel = document.getElementById('cartPanel');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const orderForm = document.getElementById('orderForm');
const addToastEl = document.getElementById('addToast');
const orderToastEl = document.getElementById('orderToast');
const addToast = addToastEl ? new bootstrap.Toast(addToastEl) : null;
const orderToast = orderToastEl ? new bootstrap.Toast(orderToastEl) : null;
const clearCartBtn = document.getElementById('clearCartBtn');
const heartBtns = document.querySelectorAll('.btn-heart');
const favModalEl = document.getElementById('favModal');
const favModal = favModalEl ? new bootstrap.Modal(favModalEl) : null;
const toggleBtn = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const successModalEl = document.getElementById('successModal');
const successModal = successModalEl ? new bootstrap.Modal(successModalEl) : null;

const STORAGE_KEY = 'mixburger_cart_v1';
let cart = loadCart();

// === Savatcha ochish / yopish ===
if (cartToggleBtn && cartPanel) {
  cartToggleBtn.addEventListener('click', () => {
    cartPanel.classList.toggle('open');
    renderCart();
  });
}
if (closeCartBtn && cartPanel) {
  closeCartBtn.addEventListener('click', () => cartPanel.classList.remove('open'));
}

// === Savatchani tozalash ===
if (clearCartBtn) {
  clearCartBtn.addEventListener('click', () => {
    if (!cart.length) return;
    if (!confirm('Haqiqatan ham tozalamoqchimisiz?')) return;
    cart = [];
    saveCart();
    renderCart();
  });
}

// === Mahsulot qo‘shish ===
document.addEventListener('click', (e) => {
  const addBtn = e.target.closest('.add-btn');
  if (!addBtn) return;
  e.preventDefault();

  const card = addBtn.closest('.card');
  const name = card.querySelector('.card-title')?.textContent?.trim() || 'Mahsulot';
  const priceText = card.querySelector('.card-text')?.textContent?.replace(/[^\d]/g, '') || '0';
  const price = Number(priceText);

  addToCart(name, price);
});

function addToCart(name, price) {
  const idx = cart.findIndex(i => i.name === name);
  if (idx >= 0) cart[idx].qty++;
  else cart.push({ name, price, qty: 1 });

  saveCart();
  renderCart();

  if (addToastEl && addToast) {
    document.querySelector('#addToast .toast-body').textContent = `${name} savatchaga qo'shildi!`;
    addToast.show();
  }
}

// === Savatchani render qilish ===
function renderCart() {
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<li class="list-group-item">Savatcha bo‘sh</li>';
    cartTotalEl.textContent = '0';
    return;
  }

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <div>
        <strong>${escapeHtml(item.name)}</strong><br>
        <small>${Number(item.price).toLocaleString()} so'm</small>
      </div>
      <div class="d-flex align-items-center">
        <button class="qty-btn qty-minus btn btn-sm me-2" data-index="${index}">-</button>
        <span class="mx-2">${item.qty}</span>
        <button class="qty-btn qty-plus btn btn-sm ms-2" data-index="${index}">+</button>
        <button class="btn btn-sm btn-outline-secondary ms-2" data-remove="${index}">✖</button>
      </div>
    `;
    cartItemsEl.appendChild(li);
  });

  cartTotalEl.textContent = totalCart().toLocaleString();

  document.querySelectorAll('.qty-plus').forEach(b => b.onclick = () => {
    const i = +b.dataset.index;
    cart[i].qty++;
    saveCart();
    renderCart();
  });

  document.querySelectorAll('.qty-minus').forEach(b => b.onclick = () => {
    const i = +b.dataset.index;
    if (cart[i].qty > 1) cart[i].qty--;
    else cart.splice(i, 1);
    saveCart();
    renderCart();
  });

  document.querySelectorAll('[data-remove]').forEach(b => b.onclick = () => {
    const i = +b.dataset.remove;
    cart.splice(i, 1);
    saveCart();
    renderCart();
  });
}

// === Buyurtmani yuborish ===
orderForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert('Savatcha bo‘sh!');
    return;
  }

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const region = document.getElementById('region').value.trim();
  if (!name || !phone || !region) {
    alert('Iltimos, barcha maydonlarni to‘ldiring.');
    return;
  }

  let lines = [];
  lines.push('*Yangi buyurtma*', '', `Ism: ${name}`, `Telefon: ${phone}`, `Viloyat: ${region}`, '', 'Mahsulotlar:');
  cart.forEach(it => lines.push(`• ${it.name} — ${it.qty} dona (${it.price.toLocaleString()} so'm)`));
  lines.push('', `Jami: ${totalCart().toLocaleString()} so'm`);
  const messageText = lines.join('\n');

  if (orderToastEl && orderToast) {
    document.querySelector('#orderToast .toast-body').textContent = 'Buyurtma yuborilmoqda...';
    orderToast.show();
  }

  try {
    const res = await fetch(TELEGRAM_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: messageText, parse_mode: 'Markdown' })
    });
    const data = await res.json();
    if (data.ok) {
      if (orderToastEl) document.querySelector('#orderToast .toast-body').textContent = 'Buyurtma muvaffaqiyatli yuborildi';
      cart = [];
      saveCart();
      renderCart();
      orderForm.reset();
      if (orderToast) setTimeout(() => orderToast.hide(), 1400);
      cartPanel.classList.remove('open');
    } else {
      if (orderToastEl) document.querySelector('#orderToast .toast-body').textContent = 'Xatolik: buyurtma yuborilmadi';
    }
  } catch (err) {
    if (orderToastEl) document.querySelector('#orderToast .toast-body').textContent =
      'Tarmoq xatosi: yuborilmadi. Iltimos, internet aloqangizni tekshiring.';
  }
});

// === Yurakcha (favorit) modal ===
heartBtns.forEach(btn => {
  const heartIcon = btn.querySelector('i');
  btn.addEventListener('click', () => {
    heartIcon.classList.toggle('bi-heart');
    heartIcon.classList.toggle('bi-heart-fill');
    if (heartIcon.classList.contains('bi-heart-fill') && favModal) {
      favModal.show();
      setTimeout(() => favModal.hide(), 2000);
    }
  });
});

// === Dark mode ===
if (toggleBtn && icon) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    icon.classList.toggle('bi-sun');
    icon.classList.toggle('bi-moon');
  });
}

// === Scroll-based left menu sync ===
document.addEventListener('DOMContentLoaded', () => {
  const menuButtons = document.querySelectorAll('#menu-tab button[data-bs-target]');
  const panes = document.querySelectorAll('.tab-content .tab-pane');
  if (!menuButtons.length || !panes.length) return;

  const setActive = (id) => {
    menuButtons.forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`#menu-tab button[data-bs-target="${id}"]`);
    if (btn) btn.classList.add('active');
  };

  menuButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-bs-target');
      const pane = document.querySelector(id);
      if (pane) pane.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
    });
  });

  const order = Array.from(menuButtons).map(b => b.getAttribute('data-bs-target')).filter(Boolean);
  const visible = new Map();
  let rafId = null;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      visible.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
    });
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      let bestId = order[0];
      let bestR = -1;
      order.forEach(id => {
        const r = visible.get(id) || 0;
        if (r > bestR) { bestR = r; bestId = id; }
      });
      if (bestR >= 0) setActive(bestId);
    });
  }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

  panes.forEach(p => io.observe(p));
  setActive('#lavash');
});

// === Order type modal ===
document.addEventListener('DOMContentLoaded', () => {
  const orderBtn = document.getElementById('orderTypeBtn');
  const modalEl = document.getElementById('orderTypeModal');
  const deliveryBtn = document.getElementById('deliveryBtn');
  const dineinBtn = document.getElementById('dineinBtn');
  if (!orderBtn || !modalEl) return;
  const modal = new bootstrap.Modal(modalEl);
  orderBtn.addEventListener('click', () => modal.show());
  if (deliveryBtn) deliveryBtn.addEventListener('click', () => { window.location.href = 'index2.html'; });
  if (dineinBtn) dineinBtn.addEventListener('click', () => modal.hide());
});

// === Foydali funksiyalar ===
function totalCart() {
  return cart.reduce((s, it) => s + (Number(it.price) || 0) * (it.qty || 0), 0);
}
function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

// === Render savatcha birinchi yuklashda ===
renderCart();

// === Til tanlash ===
const langBtn = document.getElementById('langToggleBtn');
const langMenu = document.getElementById('languageMenu');
const langOptions = document.querySelectorAll('#languageMenu .dropdown-item');

if (langBtn && langMenu) {
  langBtn.addEventListener('click', () => {
    langMenu.style.display = langMenu.style.display === 'none' || langMenu.style.display === '' ? 'block' : 'none';
  });
}

const translations = {
  uz: { home: "Bosh sahifa", about: "Biz haqimizda", services: "Xizmatlar", contact: "Aloqa", footerText: "Barcha huquqlar himoyalangan." },
  ru: { home: "Главная", about: "О нас", services: "Услуги", contact: "Контакты", footerText: "Все права защищены." },
  en: { home: "Home", about: "About", services: "Services", contact: "Contact", footerText: "All rights reserved." }
};

function changeLanguage(lang) {
  document.querySelector('[data-text="lavash"]').textContent = translations[lang].home;
  document.querySelector('[data-text="about"]').textContent = translations[lang].about;
  document.querySelector('[data-text="services"]').textContent = translations[lang].services;
  document.querySelector('[data-text="contact"]').textContent = translations[lang].contact;
  document.querySelector('[data-text="footer"]').textContent = translations[lang].footerText;
  localStorage.setItem('lang', lang);
}

if (langOptions && langOptions.length) {
  langOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      changeLanguage(selectedLang);
      if (langMenu) langMenu.style.display = 'none';
    });
  });
}

const savedLang = localStorage.getItem('lang') || 'uz';
changeLanguage(savedLang);
