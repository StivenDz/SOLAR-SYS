const arrow1 = document.querySelector('.degree--up-0');
const arrow2 = document.querySelector('.degree--up-1');
const arrow3 = document.querySelector('.degree--up-2');

const menu = document.querySelector('#menu__active');

const linksNames1 = document.querySelector('.planets1');
const linksNames2 = document.querySelector('.planets2');
const linksNames3 = document.querySelector('.planets3');

const contPlanets = document.querySelector('.planets-names');

const buttonInspect = document.querySelector('.buttonSeeAndCheck');
const buttonInspect2 = document.querySelector('.buttonSeeAndCheck2');
const buttonClose = document.querySelector('.close');
const planetContainer = document.querySelector('.earth-Animation');
const planet = document.querySelector('.webgl');

const backAppear = document.querySelector('.backAppearJs');
const listResponsive = document.querySelector('.list-general-none');

if(window.innerWidth <= 828){
    listResponsive.setAttribute('data-aos','fade-up');
}

const ShowMenu = (showMenu)=>{
    if(showMenu){
        contPlanets.classList.remove('novisible');
        contPlanets.classList.remove('animation_reverse');
        contPlanets.classList.add('animation');
    }else{
        contPlanets.classList.toggle('novisible');
        contPlanets.classList.toggle('animation');
        contPlanets.classList.toggle('animation_reverse');
    }
}

if(window.innerWidth <= 590){
    menu.setAttribute('ckeched',false);
    contPlanets.classList.toggle('animation');
    menu.addEventListener('click',(e) =>{
        contPlanets.classList.toggle('novisible');
        contPlanets.classList.toggle('animation');
        contPlanets.classList.toggle('animation_reverse');
    });
}else{
    menu.toggleAttribute('checked');
    ShowMenu(true);
    menu.addEventListener('click',(e) =>{
        contPlanets.classList.toggle('novisible');
        contPlanets.classList.toggle('animation');
        contPlanets.classList.toggle('animation_reverse');
    });
}


setTimeout(()=>{
    if(window.innerWidth > 590){
        menu.toggleAttribute('checked');
        ShowMenu(false);
    }
},5000)


arrow1.addEventListener('click',(e)=>{
    changeLinksNames('none','flex','none');
})
arrow2.addEventListener('click',(e)=>{
    changeLinksNames('flex','none','none');
})
arrow3.addEventListener('click',(e)=>{
    changeLinksNames('none','none','flex');
})

buttonInspect2.addEventListener('click', (e)=>{
    planetContainer.classList.add('maxZindex');
    planet.classList.add('pointer-event');
    buttonClose.style.display = 'block';
    buttonInspect2.style.opacity = '0';
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
buttonInspect.addEventListener('click', (e)=>{
    planetContainer.classList.add('maxZindex');
    planet.classList.add('pointer-event');
    buttonClose.style.display = 'block';
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

let reset = false;

buttonClose.addEventListener('click',()=>{
    buttonInspect2.style.opacity = '1'
    planetContainer.classList.toggle('maxZindex');
    planet.classList.toggle('pointer-event');
    buttonClose.style.display = 'none';
    backAppear.classList.toggle('backAppearReset');
    setTimeout(()=>{
        backAppear.classList.toggle('backAppearRefresh');
        reset = true;
    },1000);
    if(reset){
        resetAppears();
        reset = false;
    }
})

const resetAppears = ()=>{
    backAppear.classList.toggle('backAppearReset')
    backAppear.classList.toggle('backAppearRefresh');
}

const changeLinksNames = (none1,none2,none3) =>{
    linksNames3.style.display = none1;
    linksNames2.style.display = none2;
    linksNames1.style.display = none3;
}