/**
 * Agasthiya Healing Centre - Central Configuration
 * ==================================================
 * Easily update practitioner information, contact channels,
 * location, hours, and service metadata in one place.
 */

const SITE_CONFIG = {
  brand: {
    name: "Agasthiya Healing Centre",
    tagline: "A space to pause. A path back to yourself.",
    subtitle: "Complementary wellbeing and spiritual practices with Hariharan M",
    practitioner: "Hariharan M",
    title: "Practitioner of Complementary Wellbeing & Spiritual Practices",
    specialty: "Sujok Colour Therapy & Energy Harmonization",
    foundedYear: "2026",
    builtBy: "Hari bot & Business Solutions"
  },

  // Contact Channels (Update with verified business details)
  contact: {
    // Verified WhatsApp number (international format without '+' or spaces for wa.me links, e.g. "919876543210")
    whatsappNumber: "919876543210", 
    whatsappDisplay: "+91 98765 43210",
    
    // Primary enquiry email
    email: "enquiry@agasthiyahealing.com",
    
    // Direct phone
    phone: "+91 98765 43210",
    
    // Centre Location & Consultation Mode
    locationNote: "In-Person Sessions in Chennai & Distant / Online Sessions Worldwide",
    addressLine1: "Agasthiya Healing Centre",
    addressLine2: "Chennai, Tamil Nadu, India",
    addressConfirmed: false, // Set to true when physical address is published
    
    // Operating Hours
    hours: "Monday – Saturday: 9:00 AM – 7:00 PM (By Prior Appointment)",
    sessionFormat: "In-Person (Chennai) · Remote / Distant Healing Available",
    
    // Social / Web (Optional)
    socials: {
      whatsapp: "https://wa.me/919876543210",
      email: "mailto:enquiry@agasthiyahealing.com",
      instagram: "#",
      facebook: "#"
    }
  },

  // Practices & Services Data
  practices: [
    {
      id: "sujok-colour",
      name: "Sujok Colour Therapy",
      tag: "Practitioner's Particular Strength",
      shortSummary: "A gentle, non-invasive method applying pure therapeutic color frequencies to correspondence points on the hands and feet.",
      tradition: "Rooted in the Sujok correspondence system developed by South Korean scientist Prof. Park Jae Woo, harmonizing the Five Elements and Yin/Yang energies.",
      whatToAsk: "Ask how hand correspondence relates to your current wellness goals, which colors align with your constitutional balance, and how simple home color stimulation can be practiced.",
      comfortConsent: "100% non-invasive. You remain fully clothed, seated comfortably. Natural non-toxic color markers or seeds are applied gently to specific points on hands.",
      format: "In-Person & Remote Consultation Available"
    },
    {
      id: "sujok",
      name: "Sujok Healing",
      tag: "Hand & Foot Correspondence",
      shortSummary: "A profound correspondence system viewing the hands and feet as complete holographic reflections of the entire human body.",
      tradition: "Formulated by Prof. Park Jae Woo; 'Su' signifies hand and 'Jok' signifies foot in Korean. Utilizes micro-meridians and correspondence zones.",
      whatToAsk: "Ask how specific areas on the hands map to your body's areas of tension, and what self-care correspondence points you can gently stimulate between visits.",
      comfortConsent: "Gentle diagnostic palpation using smooth probes or finger pressure on the hands/feet. Always conducted with clear communication and comfort checks.",
      format: "In-Person & Remote Guidance"
    },
    {
      id: "reiki",
      name: "Usui Reiki",
      tag: "Universal Life Energy",
      shortSummary: "A deeply calming Japanese spiritual practice channelling universal life force energy to encourage emotional quietude and physical ease.",
      tradition: "Founded in Japan by Mikao Usui in the early 20th century as a system for spiritual cultivation and natural healing.",
      whatToAsk: "Ask about the difference between hands-on and light-touch/hands-hovering sessions, sensations of warmth or tingles you might feel, and how to relax during the session.",
      comfortConsent: "Conducted fully clothed on a treatment couch or comfortable chair. Can be performed with gentle non-invasive touch or entirely hands-off (hands hovering 2-4 inches above).",
      format: "In-Person & Distant Reiki Available"
    },
    {
      id: "lama-fera",
      name: "Lama Fera",
      tag: "Sacred Buddhist Healing Tradition",
      shortSummary: "A powerful, traditional Buddhist energy technique utilized for clearing heavy energetic blockages and fostering deep spiritual equilibrium.",
      tradition: "Originating within Tibetan Buddhist monk traditions and adapted into a structured practice by Sadguru Satyanandaji, calling upon Lord Buddha's compassionate vibration.",
      whatToAsk: "Ask about the sacred symbols used, the rhythmic nature of the session, and what to expect during energetic clearing and grounding afterwards.",
      comfortConsent: "Non-touch session. The practitioner utilizes traditional sacred instruments and mantras around the energy field while the client relaxes comfortably.",
      format: "In-Person & Distant Energy Sessions"
    },
    {
      id: "kwan-yin",
      name: "Kwan Yin Compassion Healing",
      tag: "Mercy, Grace & Forgiveness",
      shortSummary: "A tender, heart-centered healing practice invoking the compassionate presence of Bodhisattva Kwan Yin to heal emotional distress and nurture self-kindness.",
      tradition: "Inspired by the veneration of Kwan Yin (Guanyin), the Bodhisattva of Infinite Compassion who hears the cries of all beings in Eastern spiritual traditions.",
      whatToAsk: "Ask how compassion-centered healing can support emotional processing, releasing old burdens, and opening space for inner forgiveness and peace.",
      comfortConsent: "Gentle aura-level energy harmonization accompanied by mindful meditation. Fully respectful, non-invasive, and tailored to emotional ease.",
      format: "In-Person & Remote Meditation Sessions"
    },
    {
      id: "ama-deus",
      name: "Ama Deus Shamanic Healing",
      tag: "Amazonian Heart Energy",
      shortSummary: "A sacred shamanic energy healing tradition connecting the human heart with the loving vitality of nature and universal divine love.",
      tradition: "Preserved for thousands of years by the Guaraní people of the Amazon rainforest and brought to the world through Brazilian healer Alberto Aguas.",
      whatToAsk: "Ask about the connection between nature, breath, and the spiritual heart, and how specific sacred symbols can support physical and spiritual balance.",
      comfortConsent: "Subtle breath and intention-based energy practice with optional light hand placement over the heart or solar plexus with prior explicit consent.",
      format: "In-Person & Distant Sessions"
    },
    {
      id: "tarot",
      name: "Reflective Tarot Reading",
      tag: "Clarity, Perspective & Self-Discovery",
      shortSummary: "A thoughtful, grounded dialogue using the archetypal imagery of Tarot to reflect on life's questions, uncover unseen possibilities, and gain clarity.",
      tradition: "An introspective dialogue using symbolic archetypes. Grounded in self-agency and personal reflection rather than fatalistic prediction.",
      whatToAsk: "Ask about framing your question with clarity (e.g., career transitions, relationships, personal growth), and how to translate card insights into practical next steps.",
      comfortConsent: "A collaborative conversation where you hold complete personal choice and authority. We explore perspectives together in an open, judgment-free space.",
      format: "In-Person & Video / Voice Call"
    }
  ],

  // Ethical & Medical Disclaimer
  disclaimer: {
    notice: "Agasthiya Healing Centre offers complementary wellbeing and spiritual practices. These services are intended to support overall harmony, relaxation, and personal reflection. They do not diagnose, prescribe, treat, or cure any medical or mental health condition and are not a substitute for professional medical care, diagnosis, or prescribed medical treatment. Always consult a qualified medical professional for health concerns."
  }
};

// Export for module systems or attach to window
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
