const scriptURL = 'https://script.google.com/macros/s/AKfycbxZhoR4jVcbx8NS4_s0x_L9p-m_BhMXtPdJoWbimfdm69hD4eLycrfetYXKeEvktRusOA/exec';

const form = document.forms['contact-form'];
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    modal.style.display = "block";
    setTimeout(() => {
      window.location.href = 'index.html'; // Redirect to index page after 10 seconds
    }, 10000); // 10000 milliseconds = 10 seconds
  })
  .catch(error => console.error('Error!', error.message))
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
