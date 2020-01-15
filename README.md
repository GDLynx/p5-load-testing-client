# Simple P5.js Load Testing Client 

The load-tester (server.js) expects that the website being tested is running on a web server [for testing/development I used "http-server"] 

* Server.js 
    - this calls loadtest (you can run server.js locally or deploy it using something such as Now) 
* P5.js 
    - The UI is built with P5.js as a sketch, this sketch sits inside an Iframe, the Iframe sits inside a HTML5 web component (custom element0) which you can include in your HTML [perhaps overkill?]

For styling (positioning) the UI, use the id "simple-p5-load-test-client" which belongs to the HTML5 web component. 

Tooling 
* loadtest - https://www.npmjs.com/package/loadtest 
* P5.js (p5.js DOM library)
* NodeJS/ExpressJS (bodyParser) 
* http-server (I used this for serving the website which was to be load tested, you can use whichever server you like) - https://www.npmjs.com/package/http-server 
* HTML5 Web Components [Svelte/React etc ports welcome] https://developer.mozilla.org/en-US/docs/Web/Web_Components | https://www.youtube.com/watch?v=YBwgkr_Sbx0 

