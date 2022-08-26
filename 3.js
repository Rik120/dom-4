var h1 = document.getElementsByTagName('h1')[0];

var stop = document.getElementById('stop');

var ww = document.getElementById("sss")

var w = document.getElementById("ss")

var sec = 0;

var t;

ww.onclick = () => {

    function tick(){

        sec++;

    }

    function add() {

        tick();

        h1.textContent = (sec > 9 ? sec : "" + sec);

        timer();

    }

    function timer() {

        t = setTimeout(add, 300);

    }

    timer();

}

w.onclick = () => {
    
    function tick(){
        
        sec--;

    }
    
    function add() {
        
        tick();
        
        h1.textContent = (sec > 9 ? sec : "" + sec);
        
        timer();
        
    }
    
    function timer() {
        
        t = setTimeout(add, 300);
        
    }
    
    timer();

    
}


stop.onclick = function() {

    clearTimeout(t);

}