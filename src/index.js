import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';
import doit from '~/src/utilities/my_utility'


doit();


function component() {
    const element = document.createElement('div');
    // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;
   element.classList.add('bg_image');

   element.appendChild(myIcon);
    
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const sub_element = document.createElement('p');
    sub_element.classList.add('hello');

    sub_element.innerHTML = _.join(['my first webpack' , ' project'], ' ' );

    element.appendChild(sub_element);
    console.log(Data);
   

  
    return element;
  }
  
  document.body.appendChild(component());