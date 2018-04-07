// document.addEventListener("click", function(e){
    
//     var element = document.createElement("span");
//     var size = 30;

//     element.style.position = "absolute";
//     element.style.width = size + "px";
//     element.style.height = size + "px";
//     element.style.top = (e.pageY - size/2) + "px";
//     element.style.left = (e.pageX - size/2) + "px";
//     element.style.backgroundColor = "#555";
//     element.style.borderRadius = "100%";

//     document.body.appendChild(element);
    
// });


setInterval(function(){

    var size = Math.random()*299 + 1 ;

    var el = document.createElement('div');
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.borderRadius = "100%";
    el.style.backgroundColor  = colorGenerate();

    var x = Math.random()*(window.innerWidth-size);
    var y = Math.random()*(5000);
    
    el.style.position = "absolute";
    el.style.top = y + "px";
    el.style.left = x + "px";
    el.style.boxShadow = "0px 0px 15px rgba(0,0,0,0.5)";

    document.body.appendChild(el);
}, 1000)

function colorGenerate(){
    var letters = "0123456789abcdef";

    var color = "#";
    for(var i = 0; i < 8; i++){
        color += letters[Math.ceil(Math.random()*16)];
    }

    return color;
}