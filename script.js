
// let svg=document.querySelectorAll('.svg');
// let ans=document.querySelectorAll('.answer');

// for(let i=0; i<svg.length; i++){
//     svg[i].addEventListener("click",(e)=>{

//         if( ans[i].className ==="answer"){
//             ans[i].classList.toggle('active');
//             svg[i].classList.toggle("turn");
//         }else{
//             ans[i].classList.toggle('answer');
//             svg[i].classList.toggle("turn");
//         }
        
//         // console.log(e.target);
//     });
// }
 
 


let faqs= document.querySelectorAll('.container');

for(let i=0; i<faqs.length; i++){
    faqs[i].addEventListener("click",(e)=>{
       faqs[i].classList.toggle("active");
       faqs[i].classList.toggle("container");
    });
}
 
 