document.addEventListener('click', (e) => {
    if(e.target.matches('.menuIcon')){
        document.querySelector('.menu-content').classList.toggle('show');
    }
});