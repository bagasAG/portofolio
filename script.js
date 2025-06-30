let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

var typed = new Typed('.multiple-text', {
      strings: ['Mahasiswa', 'Teknik Informatika'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

  (function(){
    emailjs.init("49xF_Gt_eAyjUOEW7"); // Ganti dengan public key dari EmailJS
  })();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah reload halaman

    emailjs.sendForm("service_2eq8b8e", "template_tl966rq", this)
      .then(function(response) {
        alert("Pesan berhasil dikirim!");
      }, function(error) {
        alert("Gagal mengirim pesan. Silakan coba lagi.");
        console.error(error);
      });

    this.reset(); // Reset form setelah kirim
  });

