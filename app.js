/**
 * MBA HAIR SALON & GROOMING CO.
 * Startup Operations Engine & Booking Logic
 */

// ==========================================
// 1. DATA DEFINITIONS
// ==========================================

const SERVICES_DATA = [
  {
    id: "ceo-combo",
    category: "combos",
    name: "The CEO Package (Cut + Beard + Spa)",
    price: 599,
    duration: "45 mins",
    popular: true,
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    description: "Our signature combo: Precision scissor cut, beard styling with hot towel foam, eucalyptus head massage, and hair wash.",
    tags: ["Bestseller", "All-in-One", "Free Chai Included"]
  },
  {
    id: "appraisal-day",
    category: "combos",
    name: "The Appraisal Ready D-Tan & Cleanup",
    price: 499,
    duration: "35 mins",
    popular: true,
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    description: "Charcoal detox scrub to remove sun tan and pollution grime, fruit hydration pack, and cool eye cucumber compress.",
    tags: ["Instant Glow", "Sun Tan Removal"]
  },
  {
    id: "precision-cut",
    category: "haircut",
    name: "Corporate Fade & Texture Cut",
    price: 249,
    duration: "30 mins",
    popular: false,
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80",
    description: "Custom low/mid taper fade or scissor taper designed for corporate dressing. Includes hot towel back of neck shave.",
    tags: ["Quick 30m", "Hot Towel Shave"]
  },
  {
    id: "student-hustle",
    category: "combos",
    name: "Campus Hustle Special (With Student ID)",
    price: 199,
    duration: "25 mins",
    popular: false,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    description: "Special discounted rate for college students. Full haircut, neck cleanup, and matte styling paste.",
    tags: ["Student Friendly", "Pocket Friendly"]
  },
  {
    id: "balayage-pro",
    category: "color",
    name: "Startup Founder Balayage & Gloss Melt",
    price: 2499,
    duration: "2 hrs 30 mins",
    popular: true,
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    description: "Hand-painted natural caramel or honey highlights with zero-ammonia toner and bond rebuilding mask.",
    tags: ["Zero Ammonia", "High Shine"]
  },
  {
    id: "keratin-shield",
    category: "color",
    name: "Liquid Keratin Anti-Frizz Therapy",
    price: 2999,
    duration: "2 hrs 15 mins",
    popular: false,
    img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
    description: "Formaldehyde-free keratin treatment that controls Pune/Bengaluru humidity frizz for up to 4 months.",
    tags: ["4 Months Shield", "Formaldehyde-Free"]
  },
  {
    id: "head-spa-meridian",
    category: "spa",
    name: "Stress Relief Ayurvedic Head Spa",
    price: 399,
    duration: "35 mins",
    popular: false,
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80",
    description: "Warm bhringraj and almond oil waterfall massage, meridian pressure points to relieve screen fatigue, and steam infusion.",
    tags: ["Relieves Headache", "Sleep Quality"]
  },
  {
    id: "royal-shave",
    category: "grooming",
    name: "The Royal Hot Foam Razor Shave",
    price: 199,
    duration: "20 mins",
    popular: false,
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    description: "Dual hot towel wrap, badger brush lather, fresh surgical blade shave, and alum block aloe vera aftershave.",
    tags: ["Clean Shave", "Alum Block"]
  },
  {
    id: "beard-sculpt",
    category: "grooming",
    name: "Beard Architecture & Razor Edge",
    price: 180,
    duration: "20 mins",
    popular: false,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    description: "Machine fading, cheek and neck razor line-up, and nourishing argan oil grooming.",
    tags: ["Sharp Lineup", "Argan Oil"]
  },
  {
    id: "pitch-day-groom",
    category: "combos",
    name: "The Pitch Day / Groom's Full Suite",
    price: 1499,
    duration: "1 hr 30 mins",
    popular: false,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    description: "Haircut + Beard Styling + Ayurvedic Head Spa + Deep D-Tan Cleanup + Mani Care + Styling.",
    tags: ["Total Makeover", "Wedding & Events"]
  }
];

const STYLISTS_DATA = [
  {
    id: "any",
    name: "First Available Master Barber",
    role: "Zero Wait (Fastest Seat)",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "sameer",
    name: "Sameer Khan",
    role: "Lead Barber & Fade Specialist",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "pooja",
    name: "Pooja Kulkarni",
    role: "Senior Colorist & Balayage Lead",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "vikram",
    name: "Vikram Rao",
    role: "Head Spa & Scalp Therapist",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "ananya",
    name: "Ananya Sen",
    role: "Texture & Curl Expert",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];

const TRANSFORMATIONS_DATA = {
  balayage: {
    title: "The CEO High Fade & Precision Beard Lineup",
    desc: "Removed bulk around jawline, structured low skin taper, and added eucalyptus beard oil steam treatment.",
    duration: "45 Mins",
    price: 599,
    serviceName: "The CEO Package (Cut + Beard + Spa)",
    beforeImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    afterImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80"
  },
  bob: {
    title: "Textured French Crop & Low Taper",
    desc: "Cleaned messy overgrown fringe into a sharp, low-maintenance forward crop for easy morning styling.",
    duration: "30 Mins",
    price: 249,
    serviceName: "Corporate Fade & Texture Cut",
    beforeImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    afterImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
  },
  keratin: {
    title: "Keratin Anti-Frizz Seal & Straightening",
    desc: "Tamed humidity frizz and thermal distress with zero chemical smell. Restored mirror bounce for 4 months.",
    duration: "2.25 Hours",
    price: 2999,
    serviceName: "Liquid Keratin Anti-Frizz Therapy",
    beforeImg: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    afterImg: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80"
  },
  brunette: {
    title: "Rich Warm Caramel Balayage Melt",
    desc: "Seamless sunkissed dimensional ribbons crafted with gentle ammonia-free lightener and botanical bond mask.",
    duration: "2.5 Hours",
    price: 2499,
    serviceName: "Startup Founder Balayage & Gloss Melt",
    beforeImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    afterImg: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=1200&q=80"
  }
};

const QUIZ_QUESTIONS = [
  {
    step: 1,
    title: "What is your typical grooming routine?",
    desc: "We analyze time-efficiency to recommend the optimum package.",
    options: [
      { label: "Quick Cut & Out in 30 Mins", icon: "fa-bolt", val: "quick" },
      { label: "Complete Head + Beard Reset", icon: "fa-scissors", val: "ceo" },
      { label: "De-Tan & Skin Rejuvenation", icon: "fa-sun", val: "tan" },
      { label: "Major Color / Keratin Makeover", icon: "fa-wand-magic-sparkles", val: "color" }
    ]
  },
  {
    step: 2,
    title: "What is your main pain point at ordinary salons?",
    desc: "MBA Salon solves the unorganized sector's biggest friction points.",
    options: [
      { label: "Waiting 45 mins despite having an appointment", icon: "fa-hourglass-half", val: "wait" },
      { label: "Questionable towel hygiene & dirty blades", icon: "fa-shield-virus", val: "hygiene" },
      { label: "Barber constantly upselling overpriced items", icon: "fa-tag", val: "upsell" },
      { label: "Awkward forced small-talk when exhausted", icon: "fa-ear-deaf", val: "silent" }
    ]
  },
  {
    step: 3,
    title: "Are you eligible for corporate/student perks?",
    desc: "Show company badge (IT/Startup/Finance) or College ID at billing desk.",
    options: [
      { label: "Yes, Tech/Corporate Employee (Infosys, TCS, Wipro, Startups)", icon: "fa-building", val: "corp" },
      { label: "Yes, College Student (Undergrad/MBA/Engineering)", icon: "fa-graduation-cap", val: "student" },
      { label: "No, Regular Smart Shopper", icon: "fa-user", val: "regular" }
    ]
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================

let bookingState = {
  selectedService: SERVICES_DATA[0],
  selectedStylist: STYLISTS_DATA[0],
  selectedDate: "Today",
  selectedTime: "2:30 PM",
  currentStep: 1
};

let userAppointments = [];

// ==========================================
// 3. INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  loadSavedAppointments();
  renderServicesGrid("all");
  initHeaderScroll();
  initBeforeAfterSlider();
  initAnnouncementBar();
  initBookingModal();
  initHairQuiz();
  initAppointmentsModal();
  initContactForm();
  initHeroQuickBar();
  initFloatingDock();
  initFranchiseModal();
});

// ==========================================
// 4. HEADER & NAVIGATION
// ==========================================

function initHeaderScroll() {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const drawerClose = document.getElementById("drawerClose");
  const drawerLinks = document.querySelectorAll(".drawer-link");
  const drawerBookBtn = document.getElementById("drawerBookBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  function openDrawer() {
    mobileDrawer.classList.add("open");
    drawerBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (menuToggle) menuToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  if (drawerBookBtn) {
    drawerBookBtn.addEventListener("click", () => {
      closeDrawer();
      openBookingModal();
    });
  }
}

function initAnnouncementBar() {
  const bar = document.getElementById("announcementBar");
  const closeBtn = document.getElementById("closeAnnouncement");
  if (closeBtn && bar) {
    closeBtn.addEventListener("click", () => {
      bar.classList.add("hidden");
    });
  }
}

// ==========================================
// 5. SERVICES RENDERING & RATE CARD
// ==========================================

function renderServicesGrid(filterCategory = "all") {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  const filtered = filterCategory === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === filterCategory);

  grid.innerHTML = filtered.map(svc => `
    <div class="service-card" data-service-id="${svc.id}">
      <div class="service-thumb-wrapper">
        <img src="${svc.img}" alt="${svc.name}" class="service-thumb-img">
        ${svc.popular ? '<div class="popular-badge">High Demand</div>' : ''}
        <span class="service-duration-badge"><i class="fa-regular fa-clock"></i> ${svc.duration}</span>
      </div>
      <div class="service-body">
        <div class="service-header">
          <h3 class="service-name">${svc.name}</h3>
          <span class="service-price">₹${svc.price}</span>
        </div>
        <p class="service-desc">${svc.description}</p>
        <div class="service-tags">
          ${svc.tags.map(t => `<span class="tag-item">${t}</span>`).join('')}
        </div>
      </div>
      <div class="service-footer">
        <button class="btn-book-service" onclick="preselectAndOpenBooking('${svc.id}')">
          <i class="fa-solid fa-bolt"></i>
          <span>Book Slot (₹${svc.price})</span>
        </button>
      </div>
    </div>
  `).join('');

  const filterPills = document.querySelectorAll("#serviceFilters .filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderServicesGrid(pill.getAttribute("data-category"));
    });
  });
}

// ==========================================
// 6. HERO QUICK RESERVATION BAR
// ==========================================

function initHeroQuickBar() {
  const findBtn = document.getElementById("heroQuickFindBtn");
  if (!findBtn) return;

  findBtn.addEventListener("click", () => {
    const serviceVal = document.getElementById("heroQuickService").value;
    const stylistVal = document.getElementById("heroQuickStylist").value;

    const matchedService = SERVICES_DATA.find(s => s.id === serviceVal) || SERVICES_DATA[0];
    const matchedStylist = STYLISTS_DATA.find(s => s.id === stylistVal) || STYLISTS_DATA[0];

    bookingState.selectedService = matchedService;
    bookingState.selectedStylist = matchedStylist;

    openBookingModal(3); // Fast-track to Time selection!
    showToast(`Locked in: ${matchedService.name} (₹${matchedService.price})`, "info");
  });
}

// ==========================================
// 7. BEFORE & AFTER COMPARISON SLIDER
// ==========================================

function initBeforeAfterSlider() {
  const container = document.getElementById("comparisonSlider");
  const beforeWrapper = document.getElementById("beforeWrapper");
  const sliderHandle = document.getElementById("sliderHandle");
  const transformTabs = document.querySelectorAll(".transform-tab");

  if (!container || !beforeWrapper || !sliderHandle) return;

  let isDragging = false;

  function updateSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let pos = (x - rect.left) / rect.width;
    if (pos < 0.05) pos = 0.05;
    if (pos > 0.95) pos = 0.95;

    const percentage = pos * 100;
    beforeWrapper.style.width = `${percentage}%`;
    sliderHandle.style.left = `${percentage}%`;
  }

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  transformTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      transformTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const key = tab.getAttribute("data-transform");
      const data = TRANSFORMATIONS_DATA[key];
      if (!data) return;

      const beforeImg = document.getElementById("beforeImage");
      const afterImg = document.getElementById("afterImage");
      const title = document.getElementById("transTitle");
      const desc = document.getElementById("transDesc");
      const bookBtn = document.getElementById("bookTransServiceBtn");

      if (beforeImg) beforeImg.src = data.beforeImg;
      if (afterImg) afterImg.src = data.afterImg;
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.desc;
      if (bookBtn) {
        bookBtn.textContent = `Book This Cut (₹${data.price})`;
        bookBtn.setAttribute("data-service", data.serviceName);
      }

      beforeWrapper.style.width = "50%";
      sliderHandle.style.left = "50%";
    });
  });

  const bookTransBtn = document.getElementById("bookTransServiceBtn");
  if (bookTransBtn) {
    bookTransBtn.addEventListener("click", () => {
      const svcName = bookTransBtn.getAttribute("data-service");
      const matched = SERVICES_DATA.find(s => s.name === svcName) || SERVICES_DATA[0];
      preselectAndOpenBooking(matched.id);
    });
  }
}

// ==========================================
// 8. ONLINE BOOKING SYSTEM
// ==========================================

function initBookingModal() {
  const backdrop = document.getElementById("bookingModalBackdrop");
  const openBtns = [
    document.getElementById("openBookingModalBtn"),
    document.getElementById("heroBookBtn"),
    document.getElementById("footerBookBtn"),
    document.getElementById("freeConsultBtn")
  ];
  const closeBtn = document.getElementById("closeBookingModal");

  openBtns.forEach(btn => {
    if (btn) btn.addEventListener("click", () => openBookingModal());
  });

  if (closeBtn) closeBtn.addEventListener("click", closeBookingModal);
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeBookingModal();
    });
  }

  document.querySelectorAll(".book-stylist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const stylistName = btn.getAttribute("data-stylist");
      const stylistObj = STYLISTS_DATA.find(s => s.name === stylistName) || STYLISTS_DATA[0];
      bookingState.selectedStylist = stylistObj;
      openBookingModal(1);
      showToast(`Selected artist: ${stylistObj.name}`, "info");
    });
  });

  renderModalServices("all");

  const filterBtns = document.querySelectorAll("#modalCategoryFilter button");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderModalServices(btn.getAttribute("data-filter"));
    });
  });

  const step1NextBtn = document.getElementById("step1NextBtn");
  if (step1NextBtn) {
    step1NextBtn.addEventListener("click", () => goToBookingStep(2));
  }

  renderModalStylists();
  const step2BackBtn = document.getElementById("step2BackBtn");
  const step2NextBtn = document.getElementById("step2NextBtn");
  if (step2BackBtn) step2BackBtn.addEventListener("click", () => goToBookingStep(1));
  if (step2NextBtn) step2NextBtn.addEventListener("click", () => goToBookingStep(3));

  initDatePicker();
  const step3BackBtn = document.getElementById("step3BackBtn");
  const step3NextBtn = document.getElementById("step3NextBtn");
  if (step3BackBtn) step3BackBtn.addEventListener("click", () => goToBookingStep(2));
  if (step3NextBtn) step3NextBtn.addEventListener("click", () => {
    updateSummaryBanner();
    goToBookingStep(4);
  });

  const step4BackBtn = document.getElementById("step4BackBtn");
  if (step4BackBtn) step4BackBtn.addEventListener("click", () => goToBookingStep(3));

  const finalForm = document.getElementById("bookingFinalForm");
  if (finalForm) {
    finalForm.addEventListener("submit", handleBookingSubmission);
  }

  const doneBtn = document.getElementById("doneBookingBtn");
  if (doneBtn) {
    doneBtn.addEventListener("click", () => {
      closeBookingModal();
      resetBookingState();
    });
  }

  const addToCalBtn = document.getElementById("addToCalBtn");
  if (addToCalBtn) {
    addToCalBtn.addEventListener("click", generateCalendarDownload);
  }
}

function openBookingModal(step = 1) {
  const backdrop = document.getElementById("bookingModalBackdrop");
  if (backdrop) {
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    goToBookingStep(step);
  }
}

function closeBookingModal() {
  const backdrop = document.getElementById("bookingModalBackdrop");
  if (backdrop) {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function resetBookingState() {
  bookingState = {
    selectedService: SERVICES_DATA[0],
    selectedStylist: STYLISTS_DATA[0],
    selectedDate: "Today",
    selectedTime: "2:30 PM",
    currentStep: 1
  };
  goToBookingStep(1);
}

function goToBookingStep(step) {
  bookingState.currentStep = step;

  const stepNodes = document.querySelectorAll(".booking-stepper .step-node");
  stepNodes.forEach(node => {
    const nodeStep = parseInt(node.getAttribute("data-step"));
    node.classList.remove("active", "completed");
    if (nodeStep === step) {
      node.classList.add("active");
    } else if (nodeStep < step) {
      node.classList.add("completed");
    }
  });

  for (let i = 1; i <= 5; i++) {
    const pane = document.getElementById(`step${i}Pane`) || document.getElementById(`step5SuccessPane`);
    if (pane) {
      if (i === step || (step === 5 && pane.id === "step5SuccessPane")) {
        pane.classList.add("active");
      } else {
        pane.classList.remove("active");
      }
    }
  }

  const stepper = document.querySelector(".booking-stepper");
  if (stepper) {
    stepper.style.display = step === 5 ? "none" : "flex";
  }
}

function preselectAndOpenBooking(serviceId) {
  const svc = SERVICES_DATA.find(s => s.id === serviceId);
  if (!svc) return;

  bookingState.selectedService = svc;
  openBookingModal(2);
  showToast(`Selected: ${svc.name}`, "info");

  document.querySelectorAll(".modal-service-option").forEach(opt => {
    if (opt.getAttribute("data-id") === serviceId) {
      opt.classList.add("selected");
    } else {
      opt.classList.remove("selected");
    }
  });

  const step1Next = document.getElementById("step1NextBtn");
  if (step1Next) step1Next.disabled = false;
}

function renderModalServices(category = "all") {
  const list = document.getElementById("modalServicesList");
  if (!list) return;

  const filtered = category === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === category);

  list.innerHTML = filtered.map(svc => `
    <div class="modal-service-option ${bookingState.selectedService?.id === svc.id ? 'selected' : ''}" 
         data-id="${svc.id}" onclick="selectModalService('${svc.id}')">
      <div class="m-svc-info">
        <h5>${svc.name}</h5>
        <span><i class="fa-regular fa-clock"></i> ${svc.duration} • UV Sanitized</span>
      </div>
      <div class="m-svc-price">₹${svc.price}</div>
    </div>
  `).join('');
}

window.selectModalService = function(serviceId) {
  const svc = SERVICES_DATA.find(s => s.id === serviceId);
  if (!svc) return;

  bookingState.selectedService = svc;

  document.querySelectorAll(".modal-service-option").forEach(opt => {
    opt.classList.toggle("selected", opt.getAttribute("data-id") === serviceId);
  });

  const nextBtn = document.getElementById("step1NextBtn");
  if (nextBtn) nextBtn.disabled = false;
};

function renderModalStylists() {
  const grid = document.getElementById("modalStylistGrid");
  if (!grid) return;

  grid.innerHTML = STYLISTS_DATA.map(st => `
    <div class="stylist-opt-card ${bookingState.selectedStylist?.id === st.id ? 'selected' : ''}" 
         data-id="${st.id}" onclick="selectModalStylist('${st.id}')">
      <img src="${st.img}" alt="${st.name}">
      <div class="stylist-opt-info">
        <h5>${st.name}</h5>
        <span>${st.role}</span>
      </div>
    </div>
  `).join('');
}

window.selectModalStylist = function(stylistId) {
  const st = STYLISTS_DATA.find(s => s.id === stylistId);
  if (!st) return;

  bookingState.selectedStylist = st;

  document.querySelectorAll(".stylist-opt-card").forEach(c => {
    c.classList.toggle("selected", c.getAttribute("data-id") === stylistId);
  });
};

function initDatePicker() {
  const dateStrip = document.getElementById("dateStrip");
  const slotsGrid = document.getElementById("slotsGrid");
  const currentMonthYearDisplay = document.getElementById("currentMonthYearDisplay");
  if (!dateStrip || !slotsGrid) return;

  const today = new Date();
  const days = [];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  currentMonthYearDisplay.textContent = `Today: ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;

  for (let i = 0; i <= 7; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);
    days.push({
      dateObj: d,
      dayName: i === 0 ? "Today" : (i === 1 ? "Tmrw" : dayNames[d.getDay()]),
      dayNum: d.getDate(),
      month: monthNames[d.getMonth()]
    });
  }

  dateStrip.innerHTML = days.map((day, idx) => `
    <div class="date-box ${idx === 0 ? 'selected' : ''}" onclick="selectBookingDate('${day.dayName}, ${day.dayNum} ${day.month}', this)">
      <span class="date-day-name">${day.dayName}</span>
      <span class="date-num">${day.dayNum}</span>
    </div>
  `).join('');

  bookingState.selectedDate = `Today, ${today.getDate()} ${monthNames[today.getMonth()]}`;
  renderTimeSlots();
}

window.selectBookingDate = function(dateStr, el) {
  bookingState.selectedDate = dateStr;
  document.querySelectorAll(".date-box").forEach(b => b.classList.remove("selected"));
  el.classList.add("selected");
  renderTimeSlots();
};

function renderTimeSlots() {
  const slotsGrid = document.getElementById("slotsGrid");
  if (!slotsGrid) return;

  const times = [
    "9:00 AM", "10:00 AM", "11:15 AM", "12:30 PM",
    "2:00 PM", "3:15 PM", "4:30 PM", "5:45 PM",
    "7:00 PM", "8:15 PM"
  ];

  slotsGrid.innerHTML = times.map((t, idx) => `
    <button type="button" class="time-slot-btn ${idx === 2 ? 'selected' : ''}" onclick="selectTimeSlot('${t}', this)">
      ${t}
    </button>
  `).join('');

  bookingState.selectedTime = "11:15 AM";
  const step3Next = document.getElementById("step3NextBtn");
  if (step3Next) step3Next.disabled = false;
}

window.selectTimeSlot = function(timeStr, el) {
  bookingState.selectedTime = timeStr;
  document.querySelectorAll(".time-slot-btn").forEach(btn => btn.classList.remove("selected"));
  el.classList.add("selected");

  const step3Next = document.getElementById("step3NextBtn");
  if (step3Next) step3Next.disabled = false;
};

function updateSummaryBanner() {
  const svcTitle = document.getElementById("summaryServiceTitle");
  const stylist = document.getElementById("summaryStylist");
  const date = document.getElementById("summaryDate");
  const price = document.getElementById("summaryPrice");

  if (svcTitle && bookingState.selectedService) {
    svcTitle.textContent = bookingState.selectedService.name;
  }
  if (stylist && bookingState.selectedStylist) {
    stylist.textContent = bookingState.selectedStylist.name;
  }
  if (date) {
    date.textContent = `${bookingState.selectedDate} at ${bookingState.selectedTime}`;
  }
  if (price && bookingState.selectedService) {
    price.textContent = `₹${bookingState.selectedService.price}`;
  }
}

function handleBookingSubmission(e) {
  e.preventDefault();

  const name = document.getElementById("clientName").value.trim();
  const phone = document.getElementById("clientPhone").value.trim();
  const centre = document.getElementById("clientHairType").value;
  const notes = document.getElementById("clientNotes").value.trim();
  const silentCut = document.getElementById("silentAppointmentCheck").checked;

  if (!name || !phone) {
    showToast("Please provide your name & WhatsApp number.", "info");
    return;
  }

  const bookingRef = "MBA-" + Math.floor(1000 + Math.random() * 9000);

  const newAppointment = {
    id: bookingRef,
    service: bookingState.selectedService || SERVICES_DATA[0],
    stylist: bookingState.selectedStylist || STYLISTS_DATA[0],
    date: bookingState.selectedDate,
    time: bookingState.selectedTime,
    client: { name, phone, centre, notes, silentCut },
    createdAt: new Date().toISOString()
  };

  userAppointments.push(newAppointment);
  saveAppointments();

  const ticket = document.getElementById("confirmedTicketCard");
  if (ticket) {
    ticket.innerHTML = `
      <div class="ticket-header">
        <div>
          <span style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: #92400E;">Priority Token #</span>
          <div class="ticket-booking-id">${bookingRef}</div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.7rem; color: #92400E;">Store Location</span>
          <div style="font-weight: 800; font-size: 0.85rem;">${centre.toUpperCase()} CENTRE</div>
        </div>
      </div>
      <div class="ticket-grid">
        <div class="ticket-item">
          <strong>Service Package</strong>
          <span>${newAppointment.service.name} (₹${newAppointment.service.price})</span>
        </div>
        <div class="ticket-item">
          <strong>Stylist / Barber</strong>
          <span>${newAppointment.stylist.name}</span>
        </div>
        <div class="ticket-item">
          <strong>Date & Slot</strong>
          <span>${newAppointment.date} at ${newAppointment.time}</span>
        </div>
        <div class="ticket-item">
          <strong>Customer Name</strong>
          <span>${name} (+91 ${phone})</span>
        </div>
      </div>
      ${silentCut ? `
        <div style="margin-top: 10px; padding: 6px 10px; background: #FFFBEB; border-radius: 4px; font-size: 0.78rem; color: #B45309;">
          <i class="fa-solid fa-volume-xmark"></i> <strong>Silent Cut Mode:</strong> Relax peacefully without forced conversation.
        </div>
      ` : ''}
    `;
  }

  goToBookingStep(5);
  showToast("Priority Slot Confirmed! WhatsApp message triggered.", "success");
}

function generateCalendarDownload() {
  const latest = userAppointments[userAppointments.length - 1];
  if (!latest) return;

  const calData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//MBA Hair Salon//Booking System//EN
BEGIN:VEVENT
SUMMARY:${latest.service.name} at MBA Hair Salon
DESCRIPTION:Barber: ${latest.stylist.name}. Token ID: ${latest.id}.
LOCATION:MBA Hair Salon Centre
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([calData], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `mba-salon-pass-${latest.id}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast("Calendar pass downloaded (.ics)", "success");
}

// ==========================================
// 9. HAIR ROI DIAGNOSTIC
// ==========================================

function initHairQuiz() {
  const quizBackdrop = document.getElementById("quizModalBackdrop");
  const openQuizBtns = [
    document.getElementById("openQuizBtn"),
    document.getElementById("bannerQuizBtn")
  ];
  const closeQuizBtn = document.getElementById("closeQuizModal");

  let quizAnswers = {};

  openQuizBtns.forEach(btn => {
    if (btn) btn.addEventListener("click", () => {
      quizAnswers = {};
      quizBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
      renderQuizQuestion(0);
    });
  });

  if (closeQuizBtn) {
    closeQuizBtn.addEventListener("click", () => {
      quizBackdrop.classList.remove("open");
      document.body.style.overflow = "";
    });
  }

  if (quizBackdrop) {
    quizBackdrop.addEventListener("click", (e) => {
      if (e.target === quizBackdrop) {
        quizBackdrop.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  function renderQuizQuestion(idx) {
    const container = document.getElementById("quizQuestionContainer");
    const resultContainer = document.getElementById("quizResultContainer");
    const progressFill = document.getElementById("quizProgressFill");

    if (!container || !resultContainer) return;

    resultContainer.style.display = "none";
    container.style.display = "block";

    const q = QUIZ_QUESTIONS[idx];
    if (!q) {
      showQuizResult();
      return;
    }

    const percent = ((idx + 1) / QUIZ_QUESTIONS.length) * 100;
    if (progressFill) progressFill.style.width = `${percent}%`;

    container.innerHTML = `
      <h3 class="quiz-question-title">${q.title}</h3>
      <p class="quiz-question-desc">${q.desc}</p>
      <div class="quiz-options-grid">
        ${q.options.map(opt => `
          <button type="button" class="quiz-opt-btn" onclick="answerQuiz(${idx}, '${opt.val}')">
            <i class="fa-solid ${opt.icon}"></i>
            <div>
              <strong>${opt.label}</strong>
            </div>
          </button>
        `).join('')}
      </div>
    `;
  }

  window.answerQuiz = function(qIndex, answerValue) {
    quizAnswers[`q${qIndex + 1}`] = answerValue;
    if (qIndex + 1 < QUIZ_QUESTIONS.length) {
      renderQuizQuestion(qIndex + 1);
    } else {
      showQuizResult();
    }
  };

  function showQuizResult() {
    const container = document.getElementById("quizQuestionContainer");
    const resultContainer = document.getElementById("quizResultContainer");
    const progressFill = document.getElementById("quizProgressFill");

    if (progressFill) progressFill.style.width = "100%";
    container.style.display = "none";
    resultContainer.style.display = "block";

    let recommendedSvc = SERVICES_DATA[0]; // The CEO package
    let reason = "The CEO Package delivers the highest ROI on your time: in 45 minutes you get a scissor cut, razor beard trim, and Ayurvedic head massage for just ₹599.";

    if (quizAnswers.q1 === "quick") {
      recommendedSvc = SERVICES_DATA.find(s => s.id === "precision-cut");
      reason = "For fast corporate routine maintenance: our 30-minute Corporate Fade gets you boardroom-sharp without eating up your lunch break.";
    } else if (quizAnswers.q1 === "tan") {
      recommendedSvc = SERVICES_DATA.find(s => s.id === "appraisal-day");
      reason = "The Appraisal Ready D-Tan cleanses urban dust and UV sun tan in 35 mins with organic charcoal scrub.";
    }

    resultContainer.innerHTML = `
      <div class="quiz-recommendation-card">
        <span class="rec-badge"><i class="fa-solid fa-chart-line"></i> Highest Value Match</span>
        <h3 class="rec-title">${recommendedSvc.name}</h3>
        <p class="rec-reason">${reason}</p>
        <div style="font-size: 1.5rem; font-family: var(--font-display); font-weight: 900; color: #B45309; margin-bottom: 16px;">
          ₹${recommendedSvc.price} • ${recommendedSvc.duration}
        </div>
        <button class="btn-primary" onclick="bookFromQuiz('${recommendedSvc.id}')">
          <span>Book This Recommendation</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;
  }

  window.bookFromQuiz = function(serviceId) {
    quizBackdrop.classList.remove("open");
    document.body.style.overflow = "";
    preselectAndOpenBooking(serviceId);
  };
}

// ==========================================
// 10. SAVED APPOINTMENTS DRAWER
// ==========================================

function initAppointmentsModal() {
  const backdrop = document.getElementById("myAppointmentsBackdrop");
  const openBtn = document.getElementById("openMyAppointmentsBtn");
  const closeBtn = document.getElementById("closeMyAppointmentsModal");
  const bookAnotherBtn = document.getElementById("bookAnotherBtn");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      renderAppointmentsList();
      backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  if (bookAnotherBtn) {
    bookAnotherBtn.addEventListener("click", () => {
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
      openBookingModal();
    });
  }
}

function renderAppointmentsList() {
  const list = document.getElementById("myAppointmentsList");
  if (!list) return;

  if (userAppointments.length === 0) {
    list.innerHTML = `
      <div class="empty-appts">
        <i class="fa-solid fa-ticket"></i>
        <h4>No Active Tokens</h4>
        <p>You have not booked any grooming slots yet. Select a package from our rate card to lock in your priority time.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = userAppointments.map(appt => `
    <div class="appointment-item-card">
      <div class="appt-info">
        <h5>${appt.service.name}</h5>
        <div class="appt-meta">
          <span><i class="fa-solid fa-scissors"></i> ${appt.stylist.name}</span>
          <span><i class="fa-regular fa-clock"></i> ${appt.date} (${appt.time})</span>
          <span><i class="fa-solid fa-indian-rupee-sign"></i> ₹${appt.service.price}</span>
        </div>
        <div style="font-size: 0.72rem; font-family: monospace; color: #B45309; font-weight: 800; margin-top: 4px;">
          Token: ${appt.id}
        </div>
      </div>
      <div>
        <button class="btn-cancel-appt" onclick="cancelAppointment('${appt.id}')">
          Cancel
        </button>
      </div>
    </div>
  `).join('');
}

window.cancelAppointment = function(id) {
  if (confirm("Cancel this priority slot reservation?")) {
    userAppointments = userAppointments.filter(a => a.id !== id);
    saveAppointments();
    renderAppointmentsList();
    showToast("Slot cancelled.", "info");
  }
};

function saveAppointments() {
  try {
    localStorage.setItem("mba_salon_appointments", JSON.stringify(userAppointments));
  } catch (e) {}
  updateBookingCountBadge();
}

function loadSavedAppointments() {
  try {
    const raw = localStorage.getItem("mba_salon_appointments");
    if (raw) {
      userAppointments = JSON.parse(raw);
    }
  } catch (e) {
    userAppointments = [];
  }
  updateBookingCountBadge();
}

function updateBookingCountBadge() {
  const badge = document.getElementById("bookingCountBadge");
  if (!badge) return;
  if (userAppointments.length > 0) {
    badge.textContent = userAppointments.length;
    badge.style.display = "inline-block";
  } else {
    badge.style.display = "none";
  }
}

// ==========================================
// 11. FRANCHISE INQUIRY & FLOATING DOCK
// ==========================================

function initFranchiseModal() {
  const btn = document.getElementById("openFranchiseBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      document.getElementById("contactService").value = "franchise";
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      showToast("Redirected to Franchise Inquiries", "info");
    });
  }
}

function initFloatingDock() {
  const topBtn = document.getElementById("dockTopBtn");
  const bookBtn = document.getElementById("dockBookBtn");

  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (bookBtn) {
    bookBtn.addEventListener("click", () => {
      openBookingModal();
    });
  }
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    showToast(`Thank you ${name}! WhatsApp details dispatched.`, "success");
    form.reset();
  });
}

// ==========================================
// 12. TOAST HELPER
// ==========================================

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
