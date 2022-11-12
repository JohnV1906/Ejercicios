let  mLeft = 20;
let carro= document.getElementById('carro');

async function Move (){
    setTimeout(()=>{
        guitarra.style.marginLeft=mLeft+'px';
        mLeft+=1;
        Move();
    },1)

}
Move();