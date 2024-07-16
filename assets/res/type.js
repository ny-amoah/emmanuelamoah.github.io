var typing = document.querySelectorAll('#name span:nth-child(3)')[0];
var cursor = document.querySelectorAll('#name span:nth-child(4)')[0];
var words = Array("Petroleum Engineer", "Developer", "Freelancer", "Designer");
var counter = 0;

setInterval(() => {
    if(cursor.className == "on"){
        cursor.className = "off";
    }

    else{cursor.className = "on";}
}, 400);

function task(i, w) {
    setTimeout(function() {
        if(i < w.length){
            typing.textContent += w[i];
        }
        else{
            setTimeout(() => {
                w.pop();
                var s = w.toString();
                typing.textContent = s.replace(/,/g, '');
            }, 3000);
        }
        

    }, 100 * i);
}

function exec (){
    if(counter > words.length - 1){
        counter = 0;
    }
    wordArray = Array.from(words[counter]);
    num = wordArray.length;
    
    for (let i=0; i<num*2; i++) {
        task(i, wordArray);
    }

    setTimeout(() => {
        exec();
    }, 5500);

    counter++;
}

setTimeout(() => {
    exec();
}, 1500);





