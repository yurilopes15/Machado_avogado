const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
// Standard HTTPS submission keeps browser validation and provider confirmation.
contactForm.addEventListener('submit', () => {
  formStatus.textContent = 'Aguarde: abrindo a confirmação de envio.';
});
contactForm.addEventListener('input', () => { formStatus.textContent = ''; });
window.addEventListener('pageshow', () => { formStatus.textContent = ''; });
