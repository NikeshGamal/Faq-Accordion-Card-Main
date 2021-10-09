
let svg=document.querySelectorAll('.svg');
let ans=document.querySelectorAll('.answer');

for(let i=0; i<svg.length; i++){
    svg[i].addEventListener("click",(e)=>{

        if( ans[i].className ==="answer"){
            ans[i].classList.toggle('active');
            svg[i].classList.add("turn");
        }else{
            ans[i].classList.toggle('answer');
            svg[i].classList.remove("turn");
        }
        
        // console.log(e.target);
    });
}
 
 