// Function to open and close the menu
window.onload = function() {
    $('.button-container').click(function() {
      $('.button-container').toggleClass('active');
      $('.overlay').toggleClass('open');
    });
  }

// Margin top for .boxes on mobile
  if (window.innerWidth <= 768) {
    document.querySelector('.boxes').style.marginTop = '-50px';
  }

// Function to change the background color of the nav bar on scroll
window.addEventListener('scroll', function() {
  var nav = document.querySelector('.desk-nav ul');
  var scrollPosition = window.scrollY;
  var rgbaValue = Math.min(scrollPosition / 1000);

  nav.style.borderBottom = '2px solid rgba(242, 101, 37, ' + rgbaValue + ')';
  nav.style.borderLeft = '2px solid rgba(242, 101, 37, ' + rgbaValue + ')';
  nav.style.backgroundColor = 'rgba(0, 0, 0, ' + rgbaValue + ')';
});


const matBoxes = document.querySelectorAll('.mat-box');

// Add invisible class to mat boxes
for (let i = 0; i < matBoxes.length; i++) {
  matBoxes[i].classList.add('invisible');
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    matBoxes[0].classList.remove('invisible');
    matBoxes[0].classList.add('slide-in-right');
    for (let i = 1; i < matBoxes.length; i++) {
      matBoxes[i].classList.remove('invisible');
      matBoxes[i].classList.add('slide-in-left');
    }
  }
});

// Function for smooth scrolling
$(document).ready(function() {
  $('.desk-nav a').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 0
        },
        800
      );
    }
  });
});

