const buttons = document.querySelectorAll('.buy-btn');
const butSorriso = document.querySelector('.buy-btn2');
const butAtencao  = document.querySelector('.buy-btn3');
const butDate  = document.querySelector('.buy-btn4');
let atencao = document.querySelector('#atencao')
let sorriso = document.querySelector('#sorriso')
let date = document.querySelector('#date')
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.parentElement.id;
        alert(`Você conquistou meu ${product}!`);
        animateProduct(e.target.parentElement);
    });
});
butSorriso.addEventListener('click',()=>{
    alert('Você conquistou o meu sorriso')
    animateProduct(sorriso);
})
butAtencao.addEventListener('click',()=>{
    alert('Você conquistou a minha atenção')
    animateProduct(atencao);
})
butDate.addEventListener('click',()=>{
    alert('Você conquistou um date comigo :)')
    animateProduct(date);
})

function animateProduct(productElement) {
    productElement.classList.add('animate');
    setTimeout(() => {
        productElement.classList.remove('animate');
    }, 500);
}




