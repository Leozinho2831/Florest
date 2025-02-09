const menu = document.querySelector('#menu');
const navbar = document.querySelector('#navbar');
const navbarItens = document.querySelector('#navbar > *');

function openMenu(){
    navbar.classList.toggle('hidden');
    navbar.classList.toggle('flex');
}

menu.addEventListener('click', openMenu);

function closeMenu(event){
    const itemClick = event.target;
    
    // verifica se o clique foi fora
    if(itemClick == navbar){
        navbar.classList.add('hidden');
        navbar.classList.remove('flex');
    }
}

navbar.addEventListener('click', closeMenu);