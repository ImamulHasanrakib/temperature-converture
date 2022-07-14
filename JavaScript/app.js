
let cel = document.getElementById('cel');
let  fah = document.getElementById('fah');
let  kel = document.getElementById('kel');

cel.addEventListener('input' , function(){
    let c = +this.value;
    let f = (c * 9/5 + 32);
     let ke = (c + 273.15);
     kel.value = ke;
    fah.value = f;
   
})

fah.addEventListener('input' , function(){
   
});

kel.addEventListener('input' , function(){
   
}) 
