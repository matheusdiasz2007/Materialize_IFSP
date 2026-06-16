// Inicialização do Materialize
document.addEventListener('DOMContentLoaded', function () {
    console.log("%c✅ Currículo Web carregado com sucesso!", "color: #26a69a; font-weight: bold");

    // Menu Mobile
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // ScrollSpy
    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy, {
        scrollOffset: 80
    });
});