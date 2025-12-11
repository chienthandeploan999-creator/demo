// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });
}

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navMenu?.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Tabs: Adults vs Kids
const tabAdultsBtn = document.getElementById('tab-adults-btn');
const tabKidsBtn = document.getElementById('tab-kids-btn');
const tabAdults = document.getElementById('tab-adults');
const tabKids = document.getElementById('tab-kids');

function setActiveTab(type) {
  const isAdults = type === 'adults';
  tabAdultsBtn?.classList.toggle('active', isAdults);
  tabKidsBtn?.classList.toggle('active', !isAdults);
  tabAdults?.classList.toggle('active', isAdults);
  tabKids?.classList.toggle('active', !isAdults);
  tabAdultsBtn?.setAttribute('aria-selected', String(isAdults));
  tabKidsBtn?.setAttribute('aria-selected', String(!isAdults));
}

tabAdultsBtn?.addEventListener('click', () => setActiveTab('adults'));
tabKidsBtn?.addEventListener('click', () => setActiveTab('kids'));

// Booking form handling
const bookingForm = document.querySelector('.booking-form');
const formMsg = document.querySelector('.form-msg');
bookingForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(bookingForm);
  const name = String(data.get('name') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const audience = data.get('audience');
  const service = data.get('service');
  const datetime = data.get('datetime');
  if (!name || !phone || !audience || !service || !datetime) {
    if (formMsg) formMsg.textContent = 'Vui lòng điền đủ các trường bắt buộc.';
    if (formMsg) formMsg.style.color = '#ffb3b3';
    return;
  }
  if (formMsg) formMsg.textContent = 'Đặt lịch thành công! Chúng tôi sẽ liên hệ xác nhận.';
  if (formMsg) formMsg.style.color = '#d4af37';
  bookingForm.reset();
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());





