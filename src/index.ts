




  async function getComponent() {
   
  // return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  //   const element = document.createElement('div');

  //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //   return element;

  // }).catch(error => 'An error occurred while loading the component');
  // As import() returns a promise, it can be used with async functions. 
            //However, this requires using a pre-processor like Babel and the Syntax Dynamic Import Babel Plugin or Typescript
            // add .babelrc (see file in src) and install the plugin @babel/plugin-syntax-dynamic-import plus @babel/core, @babel/cli and @babel/preset-env
            //Here's how it        would simplify the code:

  const element = document.createElement('div');
   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
  }
 
  
 getComponent().then(component => {
  document.body.appendChild(component);
})