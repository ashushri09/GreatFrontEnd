document.querySelector(".menuIcon").addEventListener("click",()=> {
const sidebar = document.querySelector(".sideBar")
sidebar.style.display = "flex";
})



document.querySelector(".closeButton").addEventListener("click",()=>{
   const sidebar = document.querySelector(".sideBar")
sidebar.style.display = "none";
})