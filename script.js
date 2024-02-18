var timer = 60;
var score = 0;


function runtimer(){
    var stinterval = setInterval(() => {
        if(timer>=0)
        {
            document.querySelector("#Timer1").textContent = timer--;
        }
        else
        {
            clearInterval(stinterval);
            document.querySelector("#panelbottom").innerHTML = `<div id = "result"><h1>Game over </h1><h1>Score ${score} </h1></div>`;
        }   
    }, 1000);
}

function makebubble(){
    var clutter = "" ;
    for(var i =1;i<=200;i++)
    {
    var random = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector("#panelbottom").innerHTML = clutter;
}

function newhit(){
    var rnhit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rnhit;
    return rnhit;
}


function bubblehit(){
    // event bubbleing concept
    var scr = document.querySelector("#score1");
    document.querySelector("#panelbottom").addEventListener("click",function(dets){
        if(Number(dets.target.textContent)==hitvalue)
        {
            score += 10;
            scr.innerHTML = score;
            hitvalue = newhit();
            makebubble();

        }
    })

}

makebubble();
runtimer();
var hitvalue = newhit();
bubblehit();







