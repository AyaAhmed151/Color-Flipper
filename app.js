const colors=["red","green","rgba(133,122,200)","#f15025","white","black","yellow","purble"];
const btn = document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber= getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor= colors[randomNumber];
    color.textcontent= colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor(Math.random()* colors.length);
}