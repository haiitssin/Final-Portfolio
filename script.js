
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



$(document).ready(function(){
  $('.dropdown-toggle').click(function(){
    $(this).parent().toggleClass('active'); // Toggle active class
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card2');

  const observerOptions = {
    root: null,
    threshold: 0.8
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card);
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
        
    });
    // apply to hero description
    ScrollReveal().reveal('#heroDescription', {
        delay: 500,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 1000,
        
    });

    // appy to .card
    ScrollReveal().reveal('.card', {
        delay: 300,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 1000,
       
    });
   // apply to main section
   ScrollReveal().reveal('.content > *', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    duration: 1000,
    
});
    //apply to .card-container 
ScrollReveal().reveal('.card-container > *', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    duration: 1000,
    
});

    // apply to accordion
    ScrollReveal().reveal('.accordion', {
        delay: 300,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 1000,
       
    });

     // apply to donairishere
     ScrollReveal().reveal('.donairishere', {
      delay: 300,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
      duration: 1000,
     
  });
    // apply to contact
    ScrollReveal().reveal('.contact-container', {
      delay: 300,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
      duration: 1000,
     
  });
    
 
});



// A Modal when u click a image or video to view it full size. 
function openModal(contentType, contentSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var modalVideo = document.getElementById("modalVideo");

  
  modalImg.style.display = "none";
  modalVideo.style.display = "none";

  //if image....if video....i love if else statements reminds me of highschool//
  if (contentType === "image") {
      modalImg.style.display = "block";
      modalImg.src = contentSrc;
  } else if (contentType === "video") {
      modalVideo.style.display = "block";
      modalVideo.src = contentSrc;
  }

  
  modal.style.display = "block";
}

//lets you close it
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


//cat API
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


