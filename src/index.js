import _ from 'lodash';
import printMe from './print.js';




function component() {
    const element = document.createElement('div');
    
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    const btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(btn);

  
    return element;
  }
  
  document.body.appendChild(component());