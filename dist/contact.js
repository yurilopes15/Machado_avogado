const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const whatsappLink = document.querySelector('#whatsapp-float');
const whatsappNote = document.querySelector('#whatsapp-note');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  formStatus.textContent = 'Teste concluído! O formulário foi validado. Nenhum e-mail foi enviado e os dados não foram salvos.';
  formStatus.focus();
});
contactForm.addEventListener('input', () => { formStatus.textContent = ''; });
function closeWhatsappNote() {
  whatsappNote.hidden = true;
  whatsappLink.setAttribute('aria-expanded', 'false');
}
whatsappLink.addEventListener('click', () => {
  const open = whatsappLink.getAttribute('aria-expanded') !== 'true';
  whatsappNote.hidden = !open;
  whatsappLink.setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', event => {
  if (!whatsappLink.contains(event.target) && !whatsappNote.contains(event.target)) closeWhatsappNote();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !whatsappNote.hidden) {
    closeWhatsappNote();
    whatsappLink.focus();
  }
});
