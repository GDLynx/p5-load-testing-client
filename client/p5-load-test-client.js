console.log("CUSTOM ELEMENT"); 
class P5LoadTestClient extends HTMLElement {
  set userInterace(uiPath) {
    console.log(uiPath); 
    // this.innerHTML = `<iframe src=${uiPath}></iframe>`; 
   this.innerHTML = `<b>HI</b>`; 
  } 
} 

customElements.define("p5-load-test-client", P5LoadTestClient)