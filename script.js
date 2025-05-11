
let hour=document.querySelector(".hour")
let minite=document.querySelector(".minite")
let second=document.querySelector(".second")










let timejs=()=>{
  
 
let date=new Date()
let bdhour=date.getHours()
bdhour=bdhour % 12||12;
hour.innerHTML=date.getHours().toString().padStart(2,"0")
minite.innerHTML=date.getMinutes().toString().padStart(2,"0")
second.innerHTML=date.getSeconds().toString().padStart(2,"0")

  
  

}



setInterval((value)=>{
  
    timejs()
 
  
},1000)