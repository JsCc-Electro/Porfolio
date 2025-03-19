document.addEventListener('DOMContentLoaded', function() {
     // Animación al hacer scroll
   const sections = document.querySelectorAll('section');

   function checkScroll() {
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
          const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

         if (scrollPosition > sectionTop - windowHeight + sectionHeight / 4) {
            section.classList.add('show');
         }
        });
     }
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Para que se ejecute al cargar la página.

     // Validacion del formulario de contacto
    const contactForm = document.getElementById('contact-form');

     if (contactForm) {
     contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
           const nameInput = document.getElementById('name');
           const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

             const nameValue = nameInput.value.trim();
           const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();

            if (nameValue === "") {
              alert("Por favor, ingresa tu nombre.");
                nameInput.focus();
                 return;
           }

          if (emailValue === "") {
                alert("Por favor, ingresa tu email.");
             emailInput.focus();
                return;
           } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
               alert("Por favor, ingresa un correo electrónico válido.");
               emailInput.focus();
              return;
          }

            if (messageValue === "") {
               alert("Por favor, ingresa un mensaje.");
                messageInput.focus();
               return;
            }
           alert("Formulario enviado.");
            contactForm.reset();

       });
     }

 });
