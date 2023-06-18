// Exécute le code une fois que la page HTML est chargée
$(document).ready(function () {

    // Sélectionne tous les éléments HTML qui ont la classe "owl-carousel" et initialise le plugin Owl Carousel
    $(".owl-carousel").owlCarousel({
  
      // Le carrousel ne montrera qu'un élément à la fois
      items: 1,
  
      // Le carrousel bouclera lorsqu'il arrive au dernier élément
      loop: true,
  
      // Affiche les boutons de navigations gauche et droit
      nav: true,
  
      // Affiche les points de navigations en dessous
      dots: true,
  
      // Le carrousel défilera automatiquement.
      autoplay: true,
  
      // Définit la vitesse à laquelle les images défilent
      autoplaySpeed: 1000,
  
      // Définit la vitesse de transition entre les images
      smartSpeed: 500,
  
      // Arrête le défilement lorsque l'utilisateur passe sa souris sur un élément
      autoplayHoverPause: true,
  
    });
  });



  function navSlide() {//navSlide qui permet d'activer' un menu déroulant //
    const burger = document.querySelector('.burger');// querySelector pour sélectionner les éléments HTML associés à la classe .burger//
    const nav = document.querySelector('.nav-links');// Ces sélecteurs sont ensuite stockés dans des variables //
    const navLinks = document.querySelectorAll('.nav-links li');
  
  
    burger.addEventListener('click', () => {
      //declanche un événement de clic sur le bouton  //
  
      // toggle Nav
      nav.classList.toggle('nav-active');
      //permet de supprime ou ajoute la classe nav.active */
  
      //Animate Links
      navLinks.forEach((link, index) => {//qui permet de parcourir les éléments de la liste de nav link et d'appliquer une fonction à chacun de ces éléments.
        //verifie si une animation est deja en cours alors elle sera annulée sinon une nouvelle sera definie a l'aide la fonction nalinkfade//
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 }s`;
        }
        // définie pour que l'élément soit animé à l'aide de la fonction nav linkfade avec un decalage 0.5sec et un decalage pour chaque element de 7/10eme de seconde//
      });
      //Burger animation
    //ajoujte ou supprime la classe toggle
      burger.classList.toggle('toggle');
  
    });
  }
  
  
  
  navSlide();
  
  /* besoin de plus d'option
  
    const app = ()=>{
    navSlide();
    navSlide();
    navSlide();
  } */