import "./p5-load-test-client.js"; 
console.log("loading ugh"); 
window.addEventListener("load", () => { 
    console.log("loaded"); 
    const root = document.querySelector("#root"); 
    const loadTestClient = document.createElement("p5-load-test-client"); 
    loadTestClient.uiPath = "./user-interface"; 
    root.appendChild(loadTestClient); 
});  

/* 
const root = document.querySelector("#root"); 
const loadTestClient = document.createElement("p5-load-test-client"); 
root.appendChild(loadTestClient); 
*/ 