var hello;
function changeBg(){
    var bg=document.getElementById("bg");
    var rand=Math.round(Math.random()*1000000);
    bg.style.backgroundColor="#"+rand;
}
function startColor() {
    clearInterval(hello);
  hello = setInterval(changeBg, 500);
}
function stopColor() {
    clearInterval(hello);
    document.getElementById('bg').style.color='red'
};