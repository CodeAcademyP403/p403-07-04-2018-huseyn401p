// var numbers = [5, 7, 3, 10];
// var numbers2 = [45, 10, 25, 12];

// console.log(hesabla(numbers, "hasil"));


// function hesabla(inputArray, type){
//     var result = type == "cem" ? 0 : 1;

//     for(var i = 0; i < inputArray.length; i++){
//         if(type == "cem"){
//             result += inputArray[i];
//         }else{
//             result *= inputArray[i];
//         }
//     }

//     return result;
// }


// function sum(){
//     var cem = 0;
//     for(var i = 0; i < arguments.length; i++){
//         if(typeof arguments[i] == "number")
//             cem += arguments[i];    
//     }
//     return cem;
// }

// console.log(sum(5, 15, 15, "sad", "sada", 16, 10));


var submitBtn = document.querySelector('#submit');
var numberInput = document.querySelector('#inputNum');
var list = document.querySelector('ul.list-group');

numberInput.focus();    

submitBtn.addEventListener("click", addNumber);

numberInput.addEventListener("keydown", function(e){
    if(e.which == 13){
        addNumber();
    }
});


function addNumber(){
    var number = parseFloat(numberInput.value);

    if(number){
        var li = document.createElement("li");
        li.innerHTML  = number;

        var icon = document.createElement("i");
        icon.className = "far fa-trash-alt";
        icon.addEventListener("click", function(event){
            event.target.parentElement.empty();
            
        });

        li.classList.add("list-group-item");
        li.classList.add("active");

        list.appendChild(li);
        li.appendChild(icon);
        
        numberInput.value = "";
        numberInput.focus();
    }
    
}


document.addEventListener("click", function(e){
    console.log(e.pageX + " "+ e.pageY);
    
})