window.sr = ScrollReveal();

/*Scroll Reveal de la página Nosotros */
    sr.reveal('.header__navbar',{
        duration:  1500,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('#main__servicios',{
        duration:  2700,
        origin: 'left',
        distance: '700px'
    })

    sr.reveal('#main__nosotros',{
        duration:  2000,
        origin: 'bottom',
        distance: '-100px'
    });

/*Scroll Reveal aplicado a cada div contenedor de los comentarios en la página Experiencias*/
    sr.reveal('.main__experiencias__modifier',{
        duration:  1500,
        origin: 'top',
        distance: '-100px'
    });