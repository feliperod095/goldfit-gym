
// ===== FOOTER YEAR =====
// Automatically updates the copyright year in the footer to the current year
document.getElementById('year').textContent = new Date().getFullYear();

// ===== FILTER SERVICES FUNCTION =====
// Filters service cards based on selected category (e.g., all, training, nutrition)
function filterServices(category) {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}


// ===== CONTACT FORM VALIDATION =====
// Validates contact form on submission: checks if fields are filled
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('formResponse');

    // Checks if all fields are filled
    if (!name || !email || !message) {
      response.textContent = "Please fill out all required fields.";
      response.style.color = "red";
    } else {
      response.textContent = "Thanks for contacting us! We'll get back to you soon.";
      response.style.color = "green";
      this.reset(); // Clears the form after success
    }
  });
}

// ===== TRANSLATIONS OBJECT =====
// Contains translation strings for English, Portuguese, Spanish, and German
// Used by the translatePage() function to dynamically switch languages
const translations = {
    en: { // english
      pageTitle: "GoldFit Gym",
      navHome: "Home",
      navServices: "Services",
      navContact: "Contact",
      servicesTitle: "Our Services",
      service1: "Personal Training",
      service2: "Group Classes",
      service3: "Nutrition Plans",
      service4: "Online Coaching",
      sendButton: "Send",
      homeWelcomeTitle: "Welcome to GoldFit Gym",
      homeWelcomeParagraph: "Your journey to health and strength begins here. We offer personalized training plans, nutritional guidance, and a supportive community.",
      contactPageTitle: "Get in Touch",
      contactPageParagraph: "We’d love to hear from you. Whether you have a question or need assistance, our team is here to help.",
      contactName: "Name",
      contactEmail: "Email",
      contactMessage: "Message",
  
      // SERVICES PAGE
      ourServices: "Our Services",
      all: "All",
      training: "Training",
      nutrition: "Nutrition",
      personalTraining: "Personal Training",
      personalTrainingDesc: "Custom workouts designed for your goals and level, guided by professionals.",
      nutritionCoaching: "Nutrition Coaching",
      nutritionCoachingDesc: "Meal plans and tips to support your training and boost recovery.",
      coaching: "1-on-1 Coaching",
      coachingDesc: "Work closely with a certified coach to achieve real, lasting results."
    },
    pt: { // portuguese
      pageTitle: "Academia GoldFit",
      navHome: "Início",
      navServices: "Serviços",
      navContact: "Contato",
      servicesTitle: "Nossos Serviços",
      service1: "Treinamento Pessoal",
      service2: "Aulas em Grupo",
      service3: "Planos Nutricionais",
      service4: "Treinamento Online",
      sendButton: "Enviar",
      homeWelcomeTitle: "Bem-vindo à GoldFit Gym",
      homeWelcomeParagraph: "Sua jornada para saúde e força começa aqui. Oferecemos planos de treino personalizados, orientação nutricional e uma comunidade acolhedora.",
      contactPageTitle: "Entre em Contato",
      contactPageParagraph: "Adoraríamos ouvir você. Seja uma dúvida ou necessidade de ajuda, nossa equipe está à disposição.",
      contactName: "Nome",
      contactEmail: "Email",
      contactMessage: "Mensagem",
  
      // SERVICES PAGE
      ourServices: "Nossos Serviços",
      all: "Todos",
      training: "Treino",
      nutrition: "Nutrição",
      personalTraining: "Treinamento Pessoal",
      personalTrainingDesc: "Treinos personalizados para seus objetivos e nível, guiados por profissionais.",
      nutritionCoaching: "Orientação Nutricional",
      nutritionCoachingDesc: "Planos de refeição e dicas para apoiar seu treino e acelerar a recuperação.",
      coaching: "Coaching Individual",
      coachingDesc: "Trabalhe com um coach certificado para alcançar resultados reais e duradouros."
    },
    es: { //spanish
      pageTitle: "GoldFit Gym",
      navHome: "Inicio",
      navServices: "Servicios",
      navContact: "Contacto",
      servicesTitle: "Nuestros Servicios",
      service1: "Entrenamiento Personal",
      service2: "Clases Grupales",
      service3: "Planes Nutricionales",
      service4: "Entrenamiento Online",
      sendButton: "Enviar",
      homeWelcomeTitle: "Bienvenido a GoldFit Gym",
      homeWelcomeParagraph: "Tu camino hacia la salud y la fuerza comienza aquí. Ofrecemos planes de entrenamiento personalizados, orientación nutricional y una comunidad solidaria.",
      contactPageTitle: "Contáctanos",
      contactPageParagraph: "Nos encantaría saber de ti. Ya sea una pregunta o ayuda, nuestro equipo está aquí para apoyarte.",
      contactName: "Nombre",
      contactEmail: "Correo electrónico",
      contactMessage: "Mensaje",
  
      // SERVICES PAGE
      ourServices: "Nuestros Servicios",
      all: "Todos",
      training: "Entrenamiento",
      nutrition: "Nutrición",
      personalTraining: "Entrenamiento Personal",
      personalTrainingDesc: "Rutinas personalizadas para tus objetivos y nivel, guiadas por profesionales.",
      nutritionCoaching: "Coaching Nutricional",
      nutritionCoachingDesc: "Planes de comidas y consejos para apoyar tu entrenamiento y recuperación.",
      coaching: "Entrenamiento 1 a 1",
      coachingDesc: "Trabaja con un entrenador certificado para lograr resultados reales y duraderos."
    },
    de: { // german
      pageTitle: "GoldFit Fitnessstudio",
      navHome: "Startseite",
      navServices: "Dienstleistungen",
      navContact: "Kontakt",
      servicesTitle: "Unsere Dienstleistungen",
      service1: "Personal Training",
      service2: "Gruppenkurse",
      service3: "Ernährungspläne",
      service4: "Online Coaching",
      sendButton: "Senden",
      homeWelcomeTitle: "Willkommen im GoldFit Gym",
      homeWelcomeParagraph: "Deine Reise zu Gesundheit und Stärke beginnt hier. Wir bieten personalisierte Trainingspläne, Ernährungsberatung und eine unterstützende Gemeinschaft.",
      contactPageTitle: "Kontaktieren Sie uns",
      contactPageParagraph: "Wir freuen uns auf Ihre Nachricht. Ob Frage oder Anliegen – unser Team hilft Ihnen gerne weiter.",
      contactName: "Name",
      contactEmail: "E-Mail",
      contactMessage: "Nachricht",
  
      // SERVICES PAGE
      ourServices: "Unsere Dienstleistungen",
      all: "Alle",
      training: "Training",
      nutrition: "Ernährung",
      personalTraining: "Personal Training",
      personalTrainingDesc: "Individuelle Workouts für deine Ziele, begleitet von Profis.",
      nutritionCoaching: "Ernährungsberatung",
      nutritionCoachingDesc: "Ernährungspläne und Tipps zur Unterstützung deines Trainings und der Regeneration.",
      coaching: "1-zu-1 Coaching",
      coachingDesc: "Arbeite mit einem zertifizierten Coach für echte, nachhaltige Ergebnisse."
    }
  };
  

// ===== PAGE TRANSLATION FUNCTION =====
// Updates all elements with the data-translate attribute to the selected language
  function translatePage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
      const key = element.getAttribute("data-translate");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }

  // ===== CONTACT FORM SUBMIT + POPUP FUNCTION =====
// Used by the contact form "Send" button when not using form tag
// Displays success popup if all fields are valid
  function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill out all fields."); 
      return;
    }
  
    // Show the popup
    document.getElementById("successPopup").style.display = "flex";
  
    // Clear form fields
    document.getElementById("contactForm").reset();
  }
  
// ===== CLOSE POPUP FUNCTION =====
// Closes the contact form success popup
  function closePopup() {
    document.getElementById("successPopup").style.display = "none";
  }
 