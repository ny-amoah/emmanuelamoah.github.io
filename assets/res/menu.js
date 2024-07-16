var body = document.querySelectorAll('body')[0];
var menu = document.getElementById('menu');
var burger = document.getElementById('menu-open');
var body = document.querySelectorAll('body')[0];
var content = document.getElementById('content');
var spans = document.querySelectorAll('#menu-open span');
var home = document.getElementById('hero');
var about = document.getElementById('about');
var skills = document.getElementById('skills');
var resume = document.getElementById('resume');
var services = document.getElementById('services');
var contact = document.getElementById('contact');
var arr = Array(home, about, skills, resume, services, contact);
var menuLinks = Array.from(document.querySelectorAll('#menu-links a'));

burger.addEventListener('click', function (e){
    if(menu.className == 'slide-out'){
        menu.className = 'slide-in';
        body.style.overflowY = "visible";
        spans[0].className = "down-reverse";
        spans[1].className = "fade-out-reverse";
        spans[2].className = "up-reverse"; 
    }

    else{
        menu.className = 'slide-out';
        body.style.overflowY = "hidden";
        spans[0].className = "down";
        spans[1].className = "fade-out";
        spans[2].className = "up";
    }
});

content.addEventListener('click', function(e){
    if(menu.className == 'slide-out'){
        menu.className = 'slide-in';
        body.style.overflowY = "visible";
        spans[0].className = "down-reverse";
        spans[1].className = "fade-out-reverse";
        spans[2].className = "up-reverse";
    }
});

window.addEventListener('scroll', function (){

    var scroll = body.scrollTop;

    function each (name, id){
        var num = id+1;
        if(scroll >= name.getBoundingClientRect().top-100 && scroll <= name.getBoundingClientRect().top + name.getBoundingClientRect().height - 100){
            menuLinks[id].style.backgroundImage = 'url(./assets/boxicons/menu-current-'+num+'.png)';
            menuLinks[id].style.color = 'white';
        }

        else{
            menuLinks[id].style.backgroundImage = 'url(./assets/boxicons/menu-'+num+'.png)';
            menuLinks[id].style.color = 'rgb(204,204,204)';
        }
    }
    
    arr.forEach(each);
});


function applyImages (name, id){
    var nums = id+1;
    name.style.backgroundImage = 'url(./assets/boxicons/menu-'+nums+'.png)';

    name.addEventListener('click', function(e) {
        menu.className = 'slide-in';
        body.style.overflowY = "visible";
        spans[0].className = "down-reverse";
        spans[1].className = "fade-out-reverse";
        spans[2].className = "up-reverse";
    });
}

menuLinks.forEach(applyImages);

menuLinks[0].style.backgroundImage = 'url(./assets/boxicons/menu-current-1.png)';
menuLinks[0].style.color = 'white';
