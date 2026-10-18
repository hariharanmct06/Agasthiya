/**
 * Agasthiya Healing Centre - Core Application Script
 * Practitioner: Hariharan M
 * Features: Responsive Navigation, Practice Tabs, Interactive Sujok Explorer,
 *           3D Tarot Card Experience, Mindful Breathing Widget, 
 *           Enquiry Generator with WhatsApp/Email/Copy/Download, and Accessible FAQs.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Site Configuration from js/config.js
  initSiteConfig();

  // 2. Navigation & Mobile Drawer
  initNavigation();

  // 3. Interactive Healing Practice Tabs
  initPracticeTabs();

  // 4. Sujok Hand Correspondence & Colour Explorer
  initSujokExplorer();

  // 5. Distinctive 3-Card Tarot Experience
  initTarotExperience();

  // 6. Mindful Pause (1-Minute Breathing Experience)
  initBreathingWidget();

  // 7. Functional Enquiry Flow (WhatsApp, Mailto, Copy & Download)
  initEnquiryFlow();

  // 8. Accessible FAQ Accordions
  initFaqAccordion();
});

/* ==========================================================================
   1. Site Configuration Initialization
   ========================================================================== */
function initSiteConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Populate dynamic phone/WhatsApp and email attributes
  document.querySelectorAll('[data-config="whatsapp-display"]').forEach(el => {
    el.textContent = SITE_CONFIG.contact.whatsappDisplay;
  });

  document.querySelectorAll('[data-config="email-display"]').forEach(el => {
    el.textContent = SITE_CONFIG.contact.email;
  });

  document.querySelectorAll('[data-config="hours-display"]').forEach(el => {
    el.textContent = SITE_CONFIG.contact.hours;
  });

  document.querySelectorAll('[data-config="location-display"]').forEach(el => {
    el.textContent = SITE_CONFIG.contact.locationNote;
  });

  document.querySelectorAll('[data-config="practitioner-name"]').forEach(el => {
    el.textContent = SITE_CONFIG.brand.practitioner;
  });

  document.querySelectorAll('[data-config="built-by"]').forEach(el => {
    el.textContent = SITE_CONFIG.brand.builtBy;
  });
}

/* ==========================================================================
   2. Navigation & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  // Sticky header background transition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Open mobile drawer
  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuToggle.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  };

  // Close mobile drawer
  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  };

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ESC key listener for drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   3. Interactive Healing Practice Tabs
   ========================================================================== */
function initPracticeTabs() {
  const tabBtns = document.querySelectorAll('.practice-tab-btn');
  const panels = document.querySelectorAll('.practice-panel');
  const enquirySelect = document.getElementById('enquiry-practice');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Update button active state & ARIA
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
        b.setAttribute('tabindex', '-1');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      btn.setAttribute('tabindex', '0');

      // Update panel visibility
      panels.forEach(p => {
        p.classList.remove('active');
        p.hidden = true;
      });

      const activePanel = document.getElementById(targetId);
      if (activePanel) {
        activePanel.classList.add('active');
        activePanel.hidden = false;
      }
    });

    // Keyboard navigation (Left / Right Arrow)
    btn.addEventListener('keydown', (e) => {
      let index = Array.from(tabBtns).indexOf(btn);
      if (e.key === 'ArrowRight') {
        const nextIndex = (index + 1) % tabBtns.length;
        tabBtns[nextIndex].focus();
        tabBtns[nextIndex].click();
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (index - 1 + tabBtns.length) % tabBtns.length;
        tabBtns[prevIndex].focus();
        tabBtns[prevIndex].click();
      }
    });
  });

  // "Enquire About This Practice" inside panels
  document.querySelectorAll('.btn-enquire-practice').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const practiceValue = btn.getAttribute('data-practice');
      selectPracticeAndScroll(practiceValue);
    });
  });
}

// Helper to select practice in enquiry form and scroll smoothly
function selectPracticeAndScroll(practiceValue) {
  const enquirySelect = document.getElementById('enquiry-practice');
  const enquirySection = document.getElementById('enquire');

  if (enquirySelect && practiceValue) {
    enquirySelect.value = practiceValue;
    // Highlight effect
    enquirySelect.style.borderColor = 'var(--color-saffron)';
    enquirySelect.style.boxShadow = '0 0 0 4px var(--color-saffron-glow)';
    setTimeout(() => {
      enquirySelect.style.borderColor = '';
      enquirySelect.style.boxShadow = '';
    }, 2000);
  }

  if (enquirySection) {
    enquirySection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   4. Sujok Hand Correspondence & Colour Explorer
   ========================================================================== */
function initSujokExplorer() {
  const colorBtns = document.querySelectorAll('.color-swatch-btn');
  const handPoints = document.querySelectorAll('.hand-point');
  const detailTitle = document.getElementById('color-detail-title');
  const detailDesc = document.getElementById('color-detail-desc');
  const zoneInfo = document.getElementById('correspondence-zone-info');

  const colorData = {
    green: {
      name: "Green — Wood & Renewal",
      desc: "Traditionally associated with the Wood element, liver and gallbladder meridians, renewal, growth, and releasing stagnation in energy pathways.",
      accent: "#2D8A4E",
      highlightZones: ["zone-liver", "zone-limbs"]
    },
    red: {
      name: "Red — Fire & Vitality",
      desc: "Traditionally connected to the Fire element, heart and small intestine correspondence, warming cold patterns, and stimulating active circulation.",
      accent: "#D63434",
      highlightZones: ["zone-heart", "zone-spine"]
    },
    yellow: {
      name: "Yellow — Earth & Harmony",
      desc: "Traditionally linked to the Earth element, spleen and stomach correspondence, harmonizing digestion, centering thoughts, and grounding vital energy.",
      accent: "#D4A017",
      highlightZones: ["zone-solar", "zone-pelvic"]
    },
    white: {
      name: "White / Silver — Metal & Clarity",
      desc: "Associated with the Metal element, lungs and respiration, encouraging crisp mental focus, breath regulation, and clear boundaries.",
      accent: "#9DAAA2",
      highlightZones: ["zone-head", "zone-throat"]
    },
    blue: {
      name: "Blue — Water & Restorative Calm",
      desc: "Associated with the Water element, kidney and bladder correspondence, cooling excessive heat, inviting deep peaceful sleep, and emotional stillness.",
      accent: "#2670B8",
      highlightZones: ["zone-pelvic", "zone-head"]
    },
    orange: {
      name: "Warm Saffron Orange — Uplifting Warmth",
      desc: "A warm resonant hue bringing comforting balance, gentle encouragement, and harmonizing the solar center.",
      accent: "#DC792E",
      highlightZones: ["zone-solar", "zone-heart"]
    }
  };

  const zoneData = {
    "zone-head": {
      name: "Thumb: Head & Cervical Correspondence",
      detail: "In Sujok, the thumb corresponds to the head and neck. The thumb pad reflects the brain and sensory organs, while the base corresponds to the throat and cervical spine."
    },
    "zone-throat": {
      name: "Base of Thumb: Throat & Vocal Axis",
      detail: "Corresponds to the thyroid, vocal cords, and upper respiratory passages. Commonly harmonized with cooling or grounding colors."
    },
    "zone-heart": {
      name: "Upper Palm (Thenar Area): Heart & Lungs",
      detail: "Represents the thoracic cavity, heart rhythm, and bronchial lungs. Traditional color balance focuses on calming Fire and supporting respiration."
    },
    "zone-solar": {
      name: "Central Palm: Solar Plexus & Digestion",
      detail: "The center of the palm represents the solar plexus, stomach, pancreas, and liver correspondence. Earth and Wood color frequencies are traditionally applied here."
    },
    "zone-pelvic": {
      name: "Lower Palm near Wrist: Pelvic & Elimination",
      detail: "Corresponds to the lower abdomen, kidneys, bladder, and lower spinal alignment. Water and Earth color vibrations are traditionally utilized."
    },
    "zone-limbs": {
      name: "Fingers: Arms & Legs Correspondence",
      detail: "In classical Sujok: Index and little fingers correspond to arms and shoulders; Middle and ring fingers correspond to legs, knees, and feet."
    },
    "zone-spine": {
      name: "Dorsal Hand / Thumb Ridge: Spine & Nervous Column",
      detail: "The dorsal (back) surface of the hand corresponds to the vertebral column, supporting posture, energetic flow, and nervous balance."
    }
  };

  // Color Swatch Clicks
  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const colorKey = btn.getAttribute('data-color');
      const data = colorData[colorKey];
      if (!data) return;

      colorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (detailTitle) detailTitle.textContent = data.name;
      if (detailDesc) detailDesc.textContent = data.desc;

      // Highlight points on hand
      handPoints.forEach(pt => {
        pt.classList.remove('active');
        pt.style.fill = 'var(--color-sage-dark)';
        pt.style.stroke = 'var(--color-emerald)';
      });

      data.highlightZones.forEach(zoneId => {
        const pt = document.getElementById(zoneId);
        if (pt) {
          pt.classList.add('active');
          pt.style.fill = data.accent;
          pt.style.stroke = '#FCFAF5';
        }
      });
    });
  });

  // Hand Point Clicks / Hovers
  handPoints.forEach(pt => {
    pt.addEventListener('click', () => {
      const zoneId = pt.id;
      const zone = zoneData[zoneId];
      if (zone && zoneInfo) {
        zoneInfo.innerHTML = `<strong>${zone.name}:</strong> ${zone.detail}`;
        zoneInfo.style.opacity = '0';
        setTimeout(() => {
          zoneInfo.style.opacity = '1';
        }, 50);
      }

      handPoints.forEach(p => p.classList.remove('active'));
      pt.classList.add('active');
    });
  });
}

/* ==========================================================================
   5. Distinctive 3-Card Tarot Experience
   ========================================================================== */
function initTarotExperience() {
  const cards = document.querySelectorAll('.tarot-card-wrapper');
  
  cards.forEach(card => {
    const toggleFlip = () => {
      card.classList.toggle('flipped');
    };

    card.addEventListener('click', toggleFlip);

    // Keyboard support (Enter or Space to flip)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFlip();
      }
    });
  });

  // Tarot CTA Button
  const tarotCta = document.querySelector('.btn-enquire-tarot');
  if (tarotCta) {
    tarotCta.addEventListener('click', (e) => {
      e.preventDefault();
      selectPracticeAndScroll('tarot');
    });
  }
}

/* ==========================================================================
   6. Mindful Pause (1-Minute Breathing Experience)
   ========================================================================== */
function initBreathingWidget() {
  const pulseRing = document.querySelector('.breathing-pulse-ring');
  const cueText = document.querySelector('.breathing-cue-text');
  const timerDisplay = document.querySelector('.breathing-timer-display');
  const startBtn = document.getElementById('btn-breathing-start');
  const pauseBtn = document.getElementById('btn-breathing-pause');
  const resetBtn = document.getElementById('btn-breathing-reset');
  const reducedMotionToggle = document.getElementById('btn-reduced-motion-toggle');
  const breathingCard = document.querySelector('.breathing-card');
  const progressFill = document.querySelector('.breathing-progress-fill');

  let durationSeconds = 60;
  let remainingSeconds = 60;
  let isRunning = false;
  let timerInterval = null;
  let cycleInterval = null;
  let cycleStep = 0; // 0: Inhale, 1: Hold, 2: Exhale, 3: Rest
  let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isReducedMotion && breathingCard) {
    breathingCard.classList.add('reduced-motion-active');
  }

  const cyclePhases = [
    { text: "Breathe in gently...", className: "inhale", duration: 4000 },
    { text: "Hold softly...", className: "hold", duration: 4000 },
    { text: "Release with ease...", className: "exhale", duration: 4000 },
    { text: "Rest quietly...", className: "rest", duration: 4000 }
  ];

  function updateTimerDisplay() {
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    if (timerDisplay) {
      timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    if (progressFill) {
      const pct = (remainingSeconds / durationSeconds) * 100;
      progressFill.style.width = `${pct}%`;
    }
  }

  function advanceBreathCycle() {
    const phase = cyclePhases[cycleStep];
    if (cueText) cueText.textContent = phase.text;

    if (pulseRing && !breathingCard.classList.contains('reduced-motion-active')) {
      pulseRing.className = `breathing-pulse-ring ${phase.className}`;
    }

    cycleStep = (cycleStep + 1) % cyclePhases.length;
  }

  function startBreathing() {
    if (isRunning) return;
    isRunning = true;
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-flex';
    resetBtn.style.display = 'inline-flex';

    advanceBreathCycle();

    // Breath phase change every 4 seconds
    cycleInterval = setInterval(advanceBreathCycle, 4000);

    // 1-second countdown timer
    timerInterval = setInterval(() => {
      remainingSeconds--;
      updateTimerDisplay();

      if (remainingSeconds <= 0) {
        completeBreathing();
      }
    }, 1000);
  }

  function pauseBreathing() {
    isRunning = false;
    clearInterval(timerInterval);
    clearInterval(cycleInterval);
    startBtn.textContent = "Resume";
    startBtn.style.display = 'inline-flex';
    pauseBtn.style.display = 'none';
    if (cueText) cueText.textContent = "Paused — Breathe naturally";
  }

  function completeBreathing() {
    pauseBreathing();
    remainingSeconds = 60;
    updateTimerDisplay();
    startBtn.textContent = "Begin Again";
    if (cueText) cueText.textContent = "Well done. Notice how you feel.";
    if (pulseRing) pulseRing.className = 'breathing-pulse-ring rest';
  }

  function resetBreathing() {
    isRunning = false;
    clearInterval(timerInterval);
    clearInterval(cycleInterval);
    remainingSeconds = 60;
    cycleStep = 0;
    updateTimerDisplay();
    startBtn.textContent = "Begin 1-Min Pause";
    startBtn.style.display = 'inline-flex';
    pauseBtn.style.display = 'none';
    resetBtn.style.display = 'none';
    if (cueText) cueText.textContent = "Ready when you are";
    if (pulseRing) pulseRing.className = 'breathing-pulse-ring rest';
  }

  if (startBtn) startBtn.addEventListener('click', startBreathing);
  if (pauseBtn) pauseBtn.addEventListener('click', pauseBreathing);
  if (resetBtn) resetBtn.addEventListener('click', resetBreathing);

  // Reduced motion toggle button
  if (reducedMotionToggle) {
    reducedMotionToggle.addEventListener('click', () => {
      breathingCard.classList.toggle('reduced-motion-active');
      const active = breathingCard.classList.contains('reduced-motion-active');
      reducedMotionToggle.textContent = active 
        ? "Enable visual pulse animation" 
        : "Switch to gentle reduced-motion mode";
    });
  }
}

/* ==========================================================================
   7. Functional Enquiry Flow (WhatsApp, Mailto, Copy & Download)
   ========================================================================== */
function initEnquiryFlow() {
  const form = document.getElementById('enquiry-form');
  const btnWhatsApp = document.getElementById('btn-send-whatsapp');
  const btnEmail = document.getElementById('btn-send-email');
  const btnPreview = document.getElementById('btn-preview-enquiry');

  // Modal elements
  const modal = document.getElementById('enquiry-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalOverlay = document.querySelector('.modal-overlay');
  const previewBox = document.getElementById('modal-preview-text');
  const btnCopy = document.getElementById('btn-copy-enquiry');
  const btnDownload = document.getElementById('btn-download-enquiry');

  function getFormData() {
    const name = document.getElementById('enquiry-name')?.value.trim() || "Visitor";
    const method = document.getElementById('enquiry-method')?.value || "WhatsApp";
    const contact = document.getElementById('enquiry-contact')?.value.trim() || "Not provided";
    const practiceSelect = document.getElementById('enquiry-practice');
    const practiceText = practiceSelect ? practiceSelect.options[practiceSelect.selectedIndex].text : "General Enquiry";
    const date = document.getElementById('enquiry-date')?.value || "Flexible / First available";
    const message = document.getElementById('enquiry-message')?.value.trim() || "I would like to explore your practices and learn more about scheduling a session.";

    return { name, method, contact, practice: practiceText, date, message };
  }

  function generateEnquiryText(data) {
    return [
      `==================================================`,
      `AGASTHIYA HEALING CENTRE — SESSION ENQUIRY`,
      `Practitioner: Hariharan M`,
      `==================================================`,
      `Name: ${data.name}`,
      `Preferred Contact Method: ${data.method}`,
      `Contact Detail: ${data.contact}`,
      `Practice of Interest: ${data.practice}`,
      `Preferred Timing: ${data.date}`,
      `--------------------------------------------------`,
      `Personal Note / Questions:`,
      `${data.message}`,
      `--------------------------------------------------`,
      `Note: Complementary wellbeing practices do not replace medical treatment.`,
      `Sent via Agasthiya Healing Centre Website`
    ].join('\n');
  }

  function validateForm() {
    const nameInput = document.getElementById('enquiry-name');
    const contactInput = document.getElementById('enquiry-contact');

    if (!nameInput.value.trim()) {
      alert("Please enter your name so Hariharan knows how to address you.");
      nameInput.focus();
      return false;
    }

    if (!contactInput.value.trim()) {
      alert("Please enter your contact details (phone, WhatsApp, or email).");
      contactInput.focus();
      return false;
    }

    return true;
  }

  // 1. WhatsApp Button
  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const data = getFormData();
      const rawText = generateEnquiryText(data);
      const phone = SITE_CONFIG.contact.whatsappNumber || "919876543210";
      const encodedMsg = encodeURIComponent(rawText);
      const url = `https://wa.me/${phone}?text=${encodedMsg}`;
      window.open(url, '_blank');
    });
  }

  // 2. Email Button
  if (btnEmail) {
    btnEmail.addEventListener('click', (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const data = getFormData();
      const recipient = SITE_CONFIG.contact.email || "enquiry@agasthiyahealing.com";
      const subject = encodeURIComponent(`Session Enquiry from ${data.name} — ${data.practice}`);
      const body = encodeURIComponent(generateEnquiryText(data));
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }

  // 3. Preview Modal
  if (btnPreview) {
    btnPreview.addEventListener('click', (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const data = getFormData();
      const text = generateEnquiryText(data);
      if (previewBox) previewBox.textContent = text;

      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // 4. Copy to Clipboard
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const textToCopy = previewBox ? previewBox.textContent : "";
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btnCopy.textContent;
        btnCopy.textContent = "✓ Copied to Clipboard!";
        btnCopy.style.backgroundColor = "var(--color-emerald)";
        btnCopy.style.color = "#FFFFFF";
        setTimeout(() => {
          btnCopy.textContent = originalText;
          btnCopy.style.backgroundColor = "";
          btnCopy.style.color = "";
        }, 2500);
      }).catch(err => {
        alert("Could not automatically copy. You can highlight the text and copy manually.");
      });
    });
  }

  // 5. Download Enquiry Summary (.txt file)
  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      const textToSave = previewBox ? previewBox.textContent : "";
      const blob = new Blob([textToSave], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Agasthiya-Healing-Enquiry-${new Date().toISOString().slice(0, 10)}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }
}

/* ==========================================================================
   8. Accessible FAQ Accordions
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Optional: Close others for accordion behavior
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherTrigger = other.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
