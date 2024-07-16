var hero = document.getElementById('name');
var animate = document.getElementsByClassName('animate');
var body = document.getElementsByTagName('body')[0];

setTimeout(() => {
    hero.style.opacity = '1';
    hero.style.top = '40%';
    hero.style.transition = '0.5s';
}, 1000);

window.addEventListener('scroll', function (){

    function am (name, id){
        if(body.scrollTop >= name.getBoundingClientRect().top - (0.8 * window.innerHeight)){
            name.style.opacity = 1;
            name.style.marginTop = '0%';
            name.style.transition = '0.5s';
        }
    }

    Array.from(animate).forEach(am);

});