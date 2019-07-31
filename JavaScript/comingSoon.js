var i = 0;
var txt = 'COMING SOON...';
var speed = 150;

function typeWriter(){
    if (i < txt.length) {
        document.getElementById('demo').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}