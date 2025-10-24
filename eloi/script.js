const btn = document.getElementById('btn1');
const reponse = document.getElementById('reponse');
btn.addEventListener('click',() => {
    console.log("test")
    reponse.textContent = 'Un BigMac Rond';
});

const btn2 = document.getElementById('btn2');
const reponse2 = document.getElementById('reponse2');
btn2.addEventListener('click',() => {
    console.log("test")
    reponse2.textContent = 'Les végétariens.';
});