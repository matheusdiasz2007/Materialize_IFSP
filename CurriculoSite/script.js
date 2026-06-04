// Inicialização do Materialize
document.addEventListener('DOMContentLoaded', function () {

    console.log("Currículo carregado com sucesso!");

    // MENU SIDENAV
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // SCROLLSPY
    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy, {
        scrollOffset: 80
    });

});