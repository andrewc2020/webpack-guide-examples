



function getComponent() {
   
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {

    // The reason we need default is that since webpack 4, when importing a CommonJS module, the import will no longer resolve to the value of module.exports, it will instead create an artificial namespace object for the CommonJS module. 
    // const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

  }).catch(error => 'An error occurred while loading the component');
  //with babel or another transpiler
  // const element = document.createElement('div');
  //  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //  return element;
  
 }
  
 getComponent().then(component => {
  document.body.appendChild(component);
})