import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="#" target="_blank">
      <img src="/gamz.svg" class="logo" alt="Gamz!" />
    </a>


    <!-- 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    
   
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
    
    </p>
  </div>
  -->
`;

// setupCounter(document.querySelector('#counter'));
window.location.href = 'https://jordanbourbonnais.com';
