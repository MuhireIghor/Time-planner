
function settime(){

let timene= new Date();
let h= timene.getHours();
let m=timene.getMinutes();
let s=timene.getSeconds();
h= checkTime(h);
m = checkTime(m);
s = checkTime(s);
document.getElementById('demo').innerHTML =  h;
document.getElementById('demo2').innerHTML =  m;
document.getElementById('demo3').innerHTML =  s;

setTimeout(settime, 1000);
}

function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;



}
function updater(){


    
    
   
    let activities=['Maths','physics','Coding'];
    let i=Math.floor(Math.random()*activities.length-1);
    let y;
    y=activities[i];
    document.getElementById("worker").innerHTML=y;
    return y;  






}