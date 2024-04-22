
//accordio
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach((accordion) => {
      accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  });

  
  
// scroll reveal and what it applies to
  window.addEventListener('DOMContentLoaded', function() {
    // apply to hero title
    ScrollReveal().reveal('#heroTitle', {
        delay: 300,  
        distance: '50px', 
        origin: 'top', 
        easing: 'ease-in-out', 
        duration: 1000, 
        reset: true 
    });
    // apply to hero description
    ScrollReveal().reveal('#heroDescription', {
        delay: 500,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 1000,
        reset: true
    });

    // appy to .card
    ScrollReveal().reveal('.card', {
        delay: 300,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 1000,
        reset: true
    });
   // apply to main section
   ScrollReveal().reveal('.content > *', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    duration: 1000,
    reset: true
});
    //apply to .card-container 
ScrollReveal().reveal('.card-container > *', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    duration: 1000,
    reset: true
});

    // apply to accordion
    ScrollReveal().reveal('.accordion', {
        delay: 300,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 1000,
        reset: true,
        once: true // Trigger the animation only once but its not working?
    });
    
});



// changes the year to current
var currentYear = new Date().getFullYear();
// Sets the year
document.getElementById("currentYear").textContent = currentYear;



function getCatPhoto() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      const catImageUrl = data[0].url;
      document.getElementById('catImageContainer').innerHTML = `<img src="${catImageUrl}" alt="Random Cat">`;
    })
    .catch(error => {
      console.error('Error fetching cat photo:', error);
      document.getElementById('catImageContainer').innerHTML = '<p>Error fetching cat photo</p>';
    });
}

document.getElementById('getCatPhotoBtn').addEventListener('click', getCatPhoto);