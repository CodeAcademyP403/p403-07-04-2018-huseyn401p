// var birinciInput=document.querySelector(".birinciInput");
// var ikinciInput=document.querySelector(".ikinciInput");
// var cavabInput=document.querySelector(".cavabInput");
// var cavabButton=document.querySelector(".addButton");
// var selectInput=document.querySelector(".selectInput");

// function ss(base,power){
//     var i=1;
//     var result=1;
//     while(i<=power){
//         result*=base;
//         i++;
//     }
//    return result;
// }

// ss(5,4);

// cavabButton.onclick=function(){
//     var birinciValue=birinciInput.value;
//     var ikinciValue=ikinciInput.value;
//     var selectValue=selectInput.value;
//     console.log(selectValue)
//      if(birinciValue && ikinciValue){
//         cavabInput.value=ss(birinciValue,ikinciValue);
//      }else{
//          alert("Zehmet olmasa butun inputlari doldurun!!!");
//      }
// }

// var reqem=Number(prompt("reqen daxil edin:"));
// var array = [];
// var reqemSayi = 4;

// for (i = 0; i < reqemSayi; i++) {
//     var reqem = Number(prompt("Reqem daxil edin:"));
//     if (reqem > 10) {
//         array.push(reqem); 
//     } else {
//         alert("Bu reqem 10-dan kicikdir");
//     }
// }
// console.log(array);


// Verilen arraydeki reqemlerin hasili// 

// function hasil(a, b, c) {
//     var x = [a, b, c];
//     var d = 1;
//     for (i = 0; i < x.length; i++) {
//         d*= x[i];
//     }
//     alert("Arraydaki reqemlerin hasili " + d + " -dir");
// }
// hasil(3,1,4);

// Verilən array-dəki cüt rəqəmlərin cəmi

// function cutReqemler(a, b, c, d, ) {
//     x = [a, b, c, d,];
//     var cem = 0;
//     for (i = 0; i < x.length; i++) {
//         if (x[i] % 2 == 0) {
//             console.log(x[i]+" Cut reqemdir!");
//             cem += x[i];
//         } else {
//             console.log(x[i] + " Cut reqem deyil!");
//         }

//     }
//     console.log(cem);
// }
// cutReqemler(2, 4, 3, 6); 

// Istifadəçinin inputun daxilinə yazdığı rəqəmin vurma cədvəli

// var reqemDaxil = document.querySelector(".reqem");
// var btn = document.querySelector(".btn");
// btn.onclick = function () {
//     var reqemValue = reqemDaxil.value;
//     function bb(reqemValue) {
//         var i = 1;
//         while (i <= 10) {
//             console.log(reqemValue + "*" + i + "=" + reqemValue * i);
//             i++;
//         }
//     }
//     bb(reqemValue);
// }

// Verilən array-dəki rəqəmlərin kvadratlarının cəmi
