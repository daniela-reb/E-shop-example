const btn = document.querySelectorAll('button');
const cartItem = document.getElementById('cart');

let val = 0;
btn.forEach((element) => {
    element.addEventListener("click", () => {
      cartItem.style.display= 'flex';
        val+=1;
       cartItem.innerHTML= val;
   
        })
});

