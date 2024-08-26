// script.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');


    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('hidden');
        content.classList.toggle('full-width');
        
    });

    if(window.screen.width <= 768){
        content.classList.toggle('full-width');
        sidebar.classList.toggle('hidden');
    }
});
